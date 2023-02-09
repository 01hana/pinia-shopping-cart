<script setup>
import { useCartStore } from '../stores/CartStore'

const cartStore = useCartStore()

defineProps({
	product: {
		type: Object,
	}
})



</script>

<template>
	<div class="card">
		<div class="test-outer">
			<img :src="product.image" alt="img" class="test">
		</div>
		<form>
			<div class="form-outer">
				<label for="">How many {{ product.name }}s do you want to buy?</label>
				<div class="count-wrapper">
					<button class="icon" @click.prevent="cartStore.minus(product)" :disabled="product.qty===0">
						<fa icon="minus" />
					</button>
					<input type="text" v-model="product.qty">
					<button class="icon" @click.prevent="cartStore.plus(product)">
						<fa icon="plus" />
					</button>
				</div>
				<div class="price">
					<span>Price</span>
					<span>${{ product.price }}</span>
				</div>
			</div>
			<button @click.prevent="cartStore.addToCart(product)" :disabled="product.qty===0">Add</button>
		</form>
	</div>
</template>