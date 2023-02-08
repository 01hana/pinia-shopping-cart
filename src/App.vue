<script setup>
import { useCartStore } from './stores/CartStore'

const cartStore = useCartStore()

</script>

<template>
	<main>
		<header>
			<div class="header">
				<img src="./assets/pinia-logo.svg" alt="logo" class="logo">
				<h1>Pinia Shopping Cart</h1>
			</div>
			<nav>
				<ul>
					<li><router-link to="/">Home</router-link>
					</li>
					<li><router-link to="/cart">Cart({{ cartStore.countCartItems }})</router-link></li>
				</ul>
			</nav>
		</header>
		<router-view></router-view>
	</main>
</template>

<style scoped>

</style>
