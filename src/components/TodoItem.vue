<template>
    <li class="todo-item">
        <input @change="updateTodo" type="checkbox" class="todo-item__checkbox" :checked="isChecked" />
        <span class="todo-item__text">{{ item.text }}</span>
    </li>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import { TodoItemType } from '../types';

const {item} = defineProps<TodoItemProops>();
const isChecked = ref<boolean>(item.completed);

interface TodoItemProops {
    item: TodoItemType;
}

const updateTodo = () => {
    isChecked.value = !isChecked.value;
    item.completed = isChecked.value;
};

</script>
