<template>
    <teleport to="body">
        <transition name="fade">
            <div v-if="showModal" @click="closeModal" class="modal-backdrop" ref="modal-backdrop"></div>
        </transition>
        <transition name="slide">
            <div v-show="showModal" class="modal" role="dialog" ref="modal" aria-modal="true" aria-labelledby="modal-headline">
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
import {ref, watch} from 'vue';

interface ModalDialogProps {
    show?: boolean;
}

const props = withDefaults(defineProps<ModalDialogProps>(), {
    show: false,
});

const showModal = ref(false);
const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
};

watch(
    () => props.show,
    (show) => {
        showModal.value = show;
    }
);

</script>
