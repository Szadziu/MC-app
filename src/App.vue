<template>
    <div id="app">
        <DefaultLayout title="Muscode App">
            <TodoList :list="todos" :onAddTodo="addTodo" />
            <ProductsList :products="products" />
            <ProductTile @click="() => editProduct(product)" v-for="product in products" :product="product" :key="product.id" />
        </DefaultLayout>
        <ModalDialog :show="showModal" @close="closeModal">
            <template v-slot:header> Edycja produktu: {{ originalName }} </template>
            <ProductForm :product="currentProduct" />
            <template v-slot:footer>
                <button @click="() => updateProduct(currentProduct)" class="modal__button modal__button--save">Zapisz</button>
                <button @click="closeModal" class="modal__button modal__button--cancel">Anuluj</button>
            </template>
        </ModalDialog>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import DefaultLayout from './layouts/DefaultLayout.vue';
import ModalDialog from './components/ModalDialog.vue';
import ProductForm from './components/ProductForm.vue';
import ProductsList from './components/ProductsList.vue';
import ProductTile from './components/ProductTile.vue';
import TodoList from './components/TodoList.vue';
import {TODOS, PRODUCTS} from './dummy_data';
import {TodoItemType, ProductItemType} from './types';

const todos = ref<TodoItemType[]>(TODOS);
const products = ref<ProductItemType[]>(PRODUCTS);
const currentProduct = ref<ProductItemType>(products.value[0]);
const originalName = ref(currentProduct.value.name);
const showModal = ref(false);

const addTodo = (item: TodoItemType) => {
    todos.value.push(item);
};

const closeModal = () => {
    showModal.value = false;
};

const editProduct = (product: ProductItemType) => {
    currentProduct.value = {...product};
    showModal.value = true;
};

const updateProduct = (product: ProductItemType) => {
    if (!validateProduct(product)) return;
    const index = products.value.findIndex((item) => item.id === product.id);
    products.value[index] = product;
    originalName.value = product.name;
    closeModal();
};

const validateProduct = (product: ProductItemType) => {
    if (product.name === '') {
        alert('Nazwa produktu nie może być pusta!');
        return false;
    }
    if (product.price <= 0) {
        alert('Cena produktu musi być większa od 0!');
        return false;
    }
    if (product.discountPrice && product.discountPrice > 0 && product.discountPrice >= product.price) {
        alert('Cena promocyjna musi być mniejsza od ceny podstawowej!');
        return false;
    }
    return true;
};
</script>
