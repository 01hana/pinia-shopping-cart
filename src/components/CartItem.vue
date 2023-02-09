<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '../stores/CartStore'

const cartStore = useCartStore()
const { cartItems } = storeToRefs(cartStore)

</script>

<template>
	<main>
		<div class="cart-item">
			<h1>Cart Items</h1>
		</div>
		<div class="cart-total" v-if="cartItems.length">
			<h2>All Total: ${{ cartStore.cartTotal }}</h2>
		</div>
		<div class="card-outer">
			<div v-if="!cartItems.length" class="no-items">No items in cart</div>
			<div class="card" v-for="item in cartItems" :key="item.id">
				<div class="test-outer">
					<img :src="item.image" alt="img" class="test">
				</div>
				<div>
					I want to buy <span>{{ item.qty }}</span> {{ item.name }}!
				</div>
				<div class="price">
					<span>Total</span>
					<span>$ {{ item.price * item.qty }}</span>
				</div>
				<button @click.prevent="cartStore.remove(item)">Remove</button>
			</div>
		</div>
	</main>
</template>