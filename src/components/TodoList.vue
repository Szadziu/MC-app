<template>
    <Card>
        <div class="todo-list" ref="todo-list-ref">
            <h2 class="todo-list__title">
                <p>Lista todo</p>
                <p>Wykonane: {{ completedTodosAmount }}</p>
            </h2>
            <ul class="todo-list__list">
                <TodoItem v-for="item in list" :key="item.id" :item="item" />
            </ul>
            <div class="todo-list__add-item" :class="{'todo-list__add-item--error': errorInputState}">
                <button @click="addTodo" class="todo-list__add-item-button">
                    <CustomIcon name="plus" :size="10" color="#bbb" />
                </button>
                <input
                    @change="handleNewTodo"
                    @keyup.enter="addTodo"
                    :value="newTodoText"
                    type="text"
                    placeholder="Dodaj nowy element checklisty"
                    class="todo-list__add-item-input"
                    :class="{'todo-list__add-item-input--error': errorInputState}" />
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
import Card from './Card.vue';
import CustomIcon from './CustomIcon.vue';
import TodoItem from './TodoItem.vue';
import {TodoItem as TodoItemType} from '../types';

interface TodoListProps {
    list: TodoItemType[];
    onAddTodo: (item: TodoItemType) => void;
}

const {list, onAddTodo} = defineProps<TodoListProps>();

const newTodoText = ref<string>('');
const todoListRef = ref<HTMLElement | null>(null);
const errorInputState = ref(false);

const addTodo = () => {
    if (!newTodoText.value.trim()) {
        newTodoText.value = '';
        errorInputState.value = true;
        setTimeout(() => {
            errorInputState.value = false;
        }, 1000);
        return;
    }
    const todo: TodoItemType = {
        id: Math.random(),
        text: newTodoText.value,
        completed: false,
    };
    onAddTodo(todo);
    resetInput();
};

const handleNewTodo = (e: Event) => {
    const target = e.target as HTMLInputElement;
    newTodoText.value = target.value;
};

const resetInput = () => {
    newTodoText.value = '';
    todoListRef.value?.scrollTo(0, todoListRef.value.scrollHeight);
};

const completedTodosAmount = computed(() => list.filter((todo) => todo.completed).length);
</script>
