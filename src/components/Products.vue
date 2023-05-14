<template>
    <div class="products">
        <ProductTile v-for="n in 3" :key="n">
            <ProductTile />
        </ProductTile>
    </div>
</template>

<script setup lang="ts">
import ProductTile from './ProductTile.vue';
</script>
