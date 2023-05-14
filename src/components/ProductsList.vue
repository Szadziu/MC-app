<template>
    <div class="products-list">
        <Card>
            <h2 class="products-list__title">Lista Produktów</h2>
            <table class="products-list__table">
                <thead>
                    <tr class="products-list__table-header">
                        <th>#</th>
                        <th>NAZWA</th>
                        <th>PROMOCYJNA CENA</th>
                        <th>CENA</th>
                        <th>WALUTA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>iPhone 6s Plus 16GB</td>
                        <td>649</td>
                        <td>1000</td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>iPad Pro 32GB</td>
                        <td>600</td>
                        <td>800</td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>MacBook Pro</td>
                        <td></td>
                        <td>8000</td>
                        <td>PLN</td>
                    </tr>
                </tbody>
            </table>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
</script>
