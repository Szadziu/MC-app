<template>
    <div class="product-tile">
        <Card>
            <div class="product-tile__wrapper">
                <div class="product-tile__title" :class="{'product-tile__title--discount': product.discountPrice}">{{ product.name }}</div>
                <img class="product-tile__image" :src="product.image" :alt="product.name" />
                <div class="product-tile__prices">
                    <div class="product-tile__regular-price">
                        {{ (product.discountPrice ? product.discountPrice : product.price) + ' ' + product.currency }}
                    </div>
                    <div v-if="product.discountPrice" class="product-tile__regular-price--discount">{{ product.price }} {{ product.currency }}</div>
                </div>
                <div v-if="product.discountPrice" class="product-tile__discount-badge">
                    {{ -calculateDiscountPercentage(product.price, product.discountPrice) }}%
                </div>
            </div>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import {calculateDiscountPercentage} from '../helpers/calculateDiscountPercentage';
import {ProductItemType} from '../types';

const {product} = defineProps<{product: ProductItemType}>();
</script>
