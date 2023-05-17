<template>
    <teleport to="body">
        <transition name="fade">
            <div v-if="isVisible" @click="closeModal" class="modal-backdrop" ref="modal-backdrop"></div>
        </transition>
        <transition name="slide">
            <div v-show="isVisible" class="modal" role="dialog" ref="modal" aria-modal="true" aria-labelledby="modal-headline">
                <div class="modal__header">
                    <slot name="header" />
                </div>
                <div class="modal__content">
                    <slot />
                </div>
                <div class="modal__footer">
                    <slot name="footer" />
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script setup lang="ts">
interface ModalDialogProps {
    isVisible?: boolean;
}

withDefaults(defineProps<ModalDialogProps>(), {
    isVisible: false,
});

const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
};
</script>
