import { indexOfMin } from "@/app/utils";
import Fuse from "fuse.js";

// To configure Fuse
const fuseOptions = {
    includeScore: true, // To take the highest
    includeMatches: true, // Just to see where the match was
    findAllMatches: true, // To consider all attrs
    ignoreLocation: true, // Because we don't care about the patter position
    threshold: 0.68,
    keys: [
        // attrs to fuzzy compare and average weight to get the score
        {
            name: "customerName",
            weight: 0.1,
        },
        {
            name: "orderId",
            weight: 0.5, // Considered the most important attr
        },
        {
            name: "product",
            weight: 0.4,
        },
    ],
};

export const fuzzyMatch = (
    orders: Order[],
    transactions: OrderTransaction[],
) => {
    const fuse = new Fuse(transactions, fuseOptions); // init Fuse
    // To store, for every transaction, the matching orders and scores
    const fuzzyMatches: Record<number, Record<number, number>> = {};

    orders.forEach((order, oIndex) => {
        const matches = fuse.search({
            $and: [
                { orderId: order.orderId },
                { customerName: order.customerName },
                { product: order.product },
            ],
        });
        // Code above searches in every transaction for every order.
        // This is not optimal but is required since we can't
        // trust the info attrs and we can have duplicates.

        // Transactions could have no matches
        matches.forEach((match) => {
            const tIndex = match.refIndex;
            if (!fuzzyMatches[tIndex]) fuzzyMatches[tIndex] = {};
            fuzzyMatches[tIndex][oIndex] = match.score ?? Number.MAX_VALUE;
        });
    });

    Object.keys(fuzzyMatches).forEach((transactionIndex) => {
        const tIndex = +transactionIndex;
        const oIndexes: string[] = Object.keys(fuzzyMatches[tIndex]);
        const oScores: number[] = Object.values(fuzzyMatches[tIndex]);
        const minScoreIndex = indexOfMin(oScores); // min score is better

        // Assign the transaction to the best order match
        const order = orders[+oIndexes[minScoreIndex]];
        if (!order.transactions) order.transactions = [];
        order.transactions.push(transactions[tIndex]);
    });

    return orders;
};
