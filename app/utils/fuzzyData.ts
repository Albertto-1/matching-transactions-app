export const transcribedOrders = [
    {
        type: "order",
        customerName: "Bryan",
        orderId: "12OB-1",
        date: "2023-07-11",
        product: "Product ABC-1",
        price: 1.23,
    },
    {
        type: "order",
        customerName: "Bryann",
        orderId: "12OB-I",
        date: "2023-07-11",
        product: "Product ABC-1",
        price: 1.23,
    },
    {
        type: "order",
        customerName: "Michael",
        orderId: "L2OB-I",
        date: "2023-07-11",
        product: "Product ABC-1",
        price: 1.23,
    },
];
export const transcribedTransactions = [
    {
        type: "txn",
        customerName: "Brian",
        orderId: "I208-L",
        date: "2023-07-11",
        product: "ABC Product v1",
        price: 1.23,
        transactionType: "paymentReceived",
        transactionDate: "2023-07-12",
        transactionAmount: 1.23,
    },
];

export const fuzzyDataString = `const transcribedOrders = [
    {
        type: "order",
        customerName: "Bryan",
        orderId: "12OB-1",
        date: "2023-07-11",
        product: "Product ABC-1",
        price: 1.23,
    },
    {
        type: "order",
        customerName: "Bryan",
        orderId: "12OB-I",
        date: "2023-07-11",
        product: "Product ABC-1",
        price: 1.23,
    },
    {
        type: "order",
        customerName: "Michael",
        orderId: "L2OB-I",
        date: "2023-07-11",
        product: "Product ABC-1",
        price: 1.23,
    },
];
const transcribedTransactions = [
    {
        type: "txn",
        customerName: "Brian",
        orderId: "I208-L",
        date: "2023-07-11",
        product: "ABC Product v1",
        price: 1.23,
        transactionType: "paymentReceived",
        transactionDate: "2023-07-12",
        transactionAmount: 1.23,
    },
];`;
