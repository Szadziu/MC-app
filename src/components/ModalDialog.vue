<template>
    <teleport to="body">
        <div v-if="showModal" @click="closeModal" class="modal-backdrop" ref="modal-backdrop"></div>
        <div v-show="showModal" class="modal" role="dialog" ref="modal" aria-modal="true" aria-labelledby="modal-headline">
            <div class="modal__header">Edycja produktu: iPhone 6s Plus 16GB</div>
            <div class="modal__content">
                <div class="modal__image">
                    <img src="https://picsum.photos/200/300" alt="iPhone 6s Plus 16GB" />
                </div>
                <ProductForm />
            </div>
            <div class="modal__footer">
                <button @click="closeModal" class="modal__button modal__button--save">Zapisz</button>
                <button @click="closeModal" class="modal__button modal__button--cancel">Anuluj</button>
            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import ProductForm from './ProductForm.vue';

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

interface ModalDialogProps {
    show?: boolean;
}

const props = withDefaults(defineProps<ModalDialogProps>(), {
    show: false,
});
</script>
