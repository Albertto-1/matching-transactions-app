export const exactMatch = (
    orders: Order[],
    transactions: OrderTransaction[],
) => {
    // Group transactions by orderId
    const transactionsPerOrderId = transactions.reduce(
        (acc, curr) => {
            if (!acc[curr.orderId]) acc[curr.orderId] = [];
            acc[curr.orderId].push(curr);
            return acc;
        },
        {} as Record<string, OrderTransaction[]>,
    );

    orders.forEach((order) => {
        order.transactions = transactionsPerOrderId[order.orderId];
    });

    return orders;
};
