import { CartProduct, Product } from '../../src/app/models';

export const mockProducts: Product[] = [
    {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description: 'test1',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: { rate: 3.9, count: 120 },
    },
    {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description: 'test',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rating: { rate: 4.1, count: 259 },
    },
    {
        id: 3,
        title: 'Mens Cotton Jacket',
        price: 55.99,
        description: 'test2',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        rating: { rate: 4.7, count: 500 },
    },
];

export const mockCartProducts: CartProduct[] = [
    {
        id: 1,
        count: 2,
        price: 2,
        description: 'test1',
        category: "men's clothing",
        rating: { rate: 3.9, count: 120 },
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
        id: 2,
        count: 1,
        price: 22,
        description: 'test',
        category: "men's clothing",
        rating: { rate: 4.1, count: 259 },
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
];
