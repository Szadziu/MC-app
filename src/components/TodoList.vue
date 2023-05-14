<template>
    <Card>
        <div class="todo-list">
            <h2 class="todo-list__title">
                <p>Lista todo</p>
                <p>Wykonane: 0</p>
            </h2>
            <ul class="todo-list__list">
                <TodoItem v-for="n in 5" :key="n" />
            </ul>
            <div class="todo-list__add-item">
                <button class="todo-list__add-item-button">
                    <CustomIcon name="plus" size="10" color="#bbb" />
                </button>
                <input type="text" placeholder="Dodaj nowy element checklisty" class="todo-list__add-item-input" />
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import CustomIcon from './CustomIcon.vue';
import TodoItem from './TodoItem.vue';
</script>
