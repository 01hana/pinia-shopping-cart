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
					<!-- <button class="icon" @click.prevent="product.qty--" :disabled="product.qty===1">
						<fa icon="minus" />
					</button> -->
					<button class="icon" @click.prevent="cartStore.minus(product)" :disabled="product.qty===1">
						<fa icon="minus" />
					</button>
					<input type="text" v-model="product.qty">
					<button class="icon" @click.prevent="cartStore.plus(product)">
						<fa icon="plus" />
					</button>
					<!-- <button class="icon" @click.prevent="product.qty++">
						<fa icon="plus" />
					</button> -->
				</div>
			</div>
			<button @click.prevent="cartStore.addToCart(product)">Add</button>
			<button>Clear</button>
		</form>
	</div>
</template>