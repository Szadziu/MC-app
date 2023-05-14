<template>
    <div id="app">
        <DefaultLayout title="Muscode App">
            <TodoList :list="todos" :onAddTodo="addTodo"/>
            <ProductsList />
            <Products />
            <button
                type="button"
                @click="showModal = !showModal"
                class="mx-auto w-full flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                Open Modal
            </button>
        </DefaultLayout>
        <ModalDialog :show="showModal" @close="showModal = false" />
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import DefaultLayout from './layouts/DefaultLayout.vue';
import Products from './components/Products.vue';
import ProductsList from './components/ProductsList.vue';
import TodoList from './components/TodoList.vue';
import ModalDialog from './components/ModalDialog.vue';
import { TODOS } from './dummy_data';
import { TodoItemType } from './types';

const todos = ref<TodoItemType[]>(TODOS);

const addTodo = (item: TodoItemType) => {
    todos.value.push(item);
}

const showModal = ref(false);
</script>
