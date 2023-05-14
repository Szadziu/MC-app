<template>
    <Card>
        <div class="todo-list" ref="todo-list-ref">
            <h2 class="todo-list__title">
                <p>Lista todo</p>
                <p>Wykonane: {{ completedTodos }}</p>
            </h2>
            <ul class="todo-list__list">
                <TodoItem v-for="item in todos" :key="item.id" :item="item" />
            </ul>
            <div class="todo-list__add-item">
                <button @click="addTodo" class="todo-list__add-item-button">
                    <CustomIcon name="plus" size="10" color="#bbb" />
                </button>
                <input
                    @change="handleNewTodo"
                    @keyup.enter="addTodo"
                    :value="newTodoText"
                    type="text"
                    placeholder="Dodaj nowy element checklisty"
                    class="todo-list__add-item-input" />
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
import Card from './Card.vue';
import CustomIcon from './CustomIcon.vue';
import TodoItem from './TodoItem.vue';
import {TODOS} from '../dummy_data';
import {TodoItemType} from '../types';

const todos = ref<TodoItemType[]>(TODOS);
const newTodoText = ref<string>('');
const todoListRef = ref<HTMLElement | null>(null);

const handleNewTodo = (e: Event) => {
    const target = e.target as HTMLInputElement;
    newTodoText.value = target.value;
};

const addTodo = () => {
    if (!newTodoText.value.trim()) {
        newTodoText.value = '';
        return;
    }
    const todo: TodoItemType = {
        id: Math.random(),
        text: newTodoText.value,
        completed: false,
    };
    todos.value.push(todo);
    newTodoText.value = '';
    todoListRef.value?.scrollTo(0, todoListRef.value.scrollHeight);
};

const completedTodos = computed(() => todos.value.filter((todo) => todo.completed).length);
</script>
