<template>
    <teleport to="body">
        <div class="modal-backdrop" ref="modal-backdrop">
            <div class="modal" role="dialog" ref="modal" aria-modal="true" aria-labelledby="modal-headline">
                <div class="modal__header">Edycja produktu: iPhone 6s Plus 16GB</div>
                <div class="modal__content">
                    <img class="modal__image" src="https://picsum.photos/200/300" alt="iPhone 6s Plus 16GB" />
                </div>
                <div class="modal__footer">
                    <button class="modal__button modal__button--save">Zapisz</button>
                    <button class="modal__button modal__button--cancel">Anuluj</button>
                </div>
            </div>
        </div>
    </teleport>
</template>
