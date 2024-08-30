export interface OrderTransaction {
    type: string;
    customerName: string;
    orderId: string;
    date: string;
    product: string;
    price: number;
    transactionType: string;
    transactionDate: string;
    transactionAmount: number;
}
export interface Order {
    type: string;
    customerName: string;
    orderId: string;
    date: string;
    product: string;
    price: number;
    transactions?: OrderTransaction[];
}

export const typesString = `interface OrderTransaction {
    customerName: string;
    orderId: string;
    date: string;
    product: string;
    price: number;
    transactionType: string;
    transactionDate: string;
    transactionAmount: number;
}
interface Order {
    customerName: string;
    orderId: string;
    date: string;
    product: string;
    price: number;
    transactions?: OrderTransaction[];
}`;
