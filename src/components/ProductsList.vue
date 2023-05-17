<template>
    <div class="products-list">
        <Card>
            <h2 class="products-list__title">Lista Produktów</h2>
            <table class="products-list__table">
                <thead>
                    <tr class="products-list__table-header">
                        <th>#</th>
                        <th>NAZWA</th>
                        <th>PROMOCYJNA CENA</th>
                        <th>CENA</th>
                        <th>WALUTA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products">
                        <td>{{ product.id }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.discountPrice }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.currency }}</td>
                    </tr>
                </tbody>
            </table>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import {ProductItem} from '../types';

interface ProductsListProps {
    products: ProductItem[];
}

const {products} = defineProps<ProductsListProps>();
</script>   
