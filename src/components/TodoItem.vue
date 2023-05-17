<template>
    <li class="todo-item">
        <input
            @change="updateTodo"
            type="checkbox"
            class="todo-item__checkbox"
            :checked="isChecked" />
        <CustomIcon v-if="isChecked" @click="updateTodo" name="check" color="#862583" />
        <span class="todo-item__text" :class="{'todo-item__text--completed': isChecked}">{{ item.text }}</span>
    </li>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {TodoItem} from '../types';
import CustomIcon from './CustomIcon.vue';

interface TodoItemProps {
    item: TodoItem;
}

const {item} = defineProps<TodoItemProps>();

const isChecked = ref<boolean>(item.completed);

const updateTodo = () => {
    isChecked.value = !isChecked.value;
    item.completed = isChecked.value;
};
</script>
