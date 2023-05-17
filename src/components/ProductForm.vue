<template>
    <div class="product-form">
        <div class="product-form__image">
            <img :src="product.image" :alt="product.name" />
        </div>
        <div class="product-form__item">
            <label class="product-form__label" for="name">Nazwa produktu</label>
            <input v-model="product.name" class="product-form__input" type="text" id="name" name="name" />
        </div>
        <div class="product-form__item">
            <label class="product-form__label" for="name">Cena</label>
            <input v-model="product.price" class="product-form__input" type="number" id="price" name="price" />
        </div>
        <div class="product-form__item">
            <label class="product-form__label" for="name">Promocyjna cena</label>
            <input v-model="product.discountPrice" class="product-form__input" type="number" id="promo-price" name="promo-price" />
        </div>
        <div class="product-form__item">
            <label class="product-form__label" for="name">Waluta</label>
            <select v-model="product.currency" class="product-form__input--select" id="currency" name="currency">
                <option value="PLN">PLN</option>
                <option value="$">USD</option>
                <option value="EUR">EUR</option>
            </select>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ProductItem} from '../types';

interface ProductFormProps {
    product: ProductItem;
}

const {product} = defineProps<ProductFormProps>();
</script>
