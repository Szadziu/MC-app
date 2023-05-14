<template>
    <div id="app">
        <DefaultLayout title="Muscode App">
            <TodoList />
            <ProductsList />
            <Products />
        </DefaultLayout>
        <ModalDialog />
    </div>
</template>

<script setup lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue';
import Products from './components/Products.vue';
import ProductsList from './components/ProductsList.vue';
import TodoList from './components/TodoList.vue';
import ModalDialog from './components/ModalDialog.vue';
</script>
