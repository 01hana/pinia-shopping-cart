<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '../stores/CartStore'
import CardItem from './CardItem.vue';

const cartStore = useCartStore()
const { products } = storeToRefs(cartStore)

</script>

<template>
	<div class="card-outer">
		<CardItem v-for="product in products" :key="product.id" :product="product"/>
	</div>
</template>