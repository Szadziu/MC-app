<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="computedSize"
        :height="computedSize"
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
import {ComputedRef, computed, defineComponent} from 'vue';
import CheckIcon from './icons/CheckIcon.vue';
import PlusIcon from './icons/PlusIcon.vue';

type IconComponents = {
    [key: string]: ReturnType<typeof defineComponent>;
};

const iconComponents: IconComponents = {
    plus: PlusIcon,
    check: CheckIcon,
};

interface CustomIconProps {
    name: string;
    size?: number | string;
    color?: string;
}

const {color, size, name} = withDefaults(defineProps<CustomIconProps>(), {
    size: 24,
    color: '#000',
});

const computedSize: ComputedRef<number> = computed(() => {
    return parseInt(String(size));
});

const iconComponent = computed(() => {
    const iconName = name.replace(/-./g, (x) => x[1].toUpperCase());
    return iconComponents[iconName];
});
</script>
