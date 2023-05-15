<template>
    <div class="default-layout">
        <h1 class="default-layout__title">{{ title }}</h1>
        <div class="default-layout__container">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

interface DefaultLayoutProps {
    title: string;
}

defineProps<DefaultLayoutProps>();
</script>
