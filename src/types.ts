export interface TodoItemType {
    id: number;
    text: string;
    completed: boolean;
}
export interface ProductItemType {
    id: number;
    name: string;
    price: number;
    discountPrice?: number;
    currency: string;
    image?: string;
}