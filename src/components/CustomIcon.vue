<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size"
        :height="size"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        :aria-labelledby="iconComponent"
        role="presentation"
        class="custom-icon">
        <g :fill="color">
            <component :is="iconComponent" />
        </g>
    </svg>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import CheckIcon from './icons/CheckIcon.vue';
import PlusIcon from './icons/PlusIcon.vue';
import { IconComponents } from '../types';


const iconComponents: IconComponents = {
    plus: PlusIcon,
    check: CheckIcon,
};

interface CustomIconProps {
    name: string;
    size?: number;
    color?: string;
}

const {color, size, name} = withDefaults(defineProps<CustomIconProps>(), {
    size: 24,
    color: '#000',
});

const iconComponent = computed(() => {
    const iconName = name.replace(/-./g, ([_, firstLetterDoubleName]) => firstLetterDoubleName.toUpperCase());
    return iconComponents[iconName];
});
</script>
