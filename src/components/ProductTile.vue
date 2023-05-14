<template>
    <div class="product-tile">
        <Card>
            <div class="product-tile__title">iPhone 6s Plus 16GB</div>
            <img class="product-tile__image" src="../assets/imgs/img1.png" alt="iPhone 6s Plus 16GB" />
            <div class="product-tile__prices">
                <div class="product-tile__regular-price">649 $</div>
                <div class="product-tile__regular-price--discount">1000 $</div>
            </div>
            <div class="product-tile__discount-badge">-35%</div>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
</script>
