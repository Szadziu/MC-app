<template>
    <li class="todo-item">
        <input @change="updateTodo" type="checkbox" class="todo-item__checkbox" :checked="isChecked" />
        <span class="todo-item__text" :class="{'todo-item__text--completed': isChecked}">{{ item.text }}</span>
    </li>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {TodoItemType} from '../types';

interface TodoItemProops {
    item: TodoItemType;
}

const {item} = defineProps<TodoItemProops>();

const isChecked = ref<boolean>(item.completed);

const updateTodo = () => {
    isChecked.value = !isChecked.value;
    item.completed = isChecked.value;
};
</script>
