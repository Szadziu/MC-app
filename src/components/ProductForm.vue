<template>
    <div class="product-form">
        <div class="product-form__item">
            <label class="product-form__label" for="name">Nazwa produktu</label>
            <input class="product-form__input" type="text" id="name" name="name" />
        </div>
        <div class="product-form__item">
            <label class="product-form__label" for="name">Cena</label>
            <input class="product-form__input" type="number" id="price" name="price" />
        </div>
        <div class="product-form__item">
            <label class="product-form__label" for="name">Promocyjna cena</label>
            <input class="product-form__input" type="number" id="promo-price" name="promo-price" />
        </div>
        <div class="product-form__item">
            <label class="product-form__label" for="name">Waluta</label>
            <select class="product-form__input--select" id="currency" name="currency">
                <option value="PLN">PLN</option>
                <option value="USD">$</option>
            </select>
        </div>
    </div>
</template>
