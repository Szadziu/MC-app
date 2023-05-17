import {ProductItem, TodoItem} from './types';

export const TODOS: TodoItem[] = [
    {
        id: 1,
        text: 'Learn React',
        completed: true,
    },
    {
        id: 2,
        text: 'Learn Redux',
        completed: false,
    },
    {
        id: 3,
        text: 'Learn React Router',
        completed: false,
    },
    {
        id: 4,
        text: 'Learn Vue',
        completed: false,
    },
];

export const PRODUCTS: ProductItem[] = [
    {
        id: 0,
        name: 'iPhone 6s Plus 16GB',
        price: 649,
        discountPrice: 450,
        currency: '$',
        image: './src/assets/imgs/img1.png',
    },
    {
        id: 1,
        name: 'iPad Pro 32GB 9.7 inch WiFi + Cellular Space Gray',
        price: 600,
        currency: '$',
        discountPrice: 300,
        image: './src/assets/imgs/img2.png',
    },
    {
        id: 2,
        name: 'Macbook Pro 13 inch 256GB 3.1GHz Space Gray 2017',
        price: 8000,
        currency: 'PLN',
        image: './src/assets/imgs/img3.png',
    },
];
