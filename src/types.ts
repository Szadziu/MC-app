import { defineComponent } from "vue";

export type IconComponents = Record<string, ReturnType<typeof defineComponent>>;
 
export interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}
export interface ProductItem {
    id: number;
    name: string;
    price: number;
    discountPrice?: number;
    currency: string;
    image?: string;
}