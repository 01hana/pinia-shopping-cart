import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
	id: 'cart',
	state: () => ({
		products: [
			{
				id: 1,
				name: 'apple',
				qty: 1,
				image: 'src/images/apple.png'
			},
			{
				id: 2,
				name: 'pinapple',
				qty: 1,
				image: 'src/images/pineapple.png'
			},
			{
				id: 3,
				name: 'lemon',
				qty: 1,
				image: 'src/images/lemon.png'
			}
		],
		cartItems:[]
	}),
	getters: {
		countCartItems() {
			return this.cartItems.length
		}
	},
	actions: {
		addToCart(item) {
			let index = this.cartItems.findIndex(product => product.id === item.id)
			if(index == -1){
				this.cartItems.push(item)
			}else{
				console.log("clicked again!")
				this.cartItems[index].qty = this.cartItems[index].qty + this.products[index].qty
			}
		},
		remove(item) {
			// this.cartItems = this.cartItems.filter(p => p.id !== item.id) //filter會回傳新陣列
			let i = this.cartItems.lastIndexOf(item)
			if(i !== -1){
				this.cartItems.splice(i, 1)
			}
		},
		plus(product) {
			let index = this.products.findIndex( i => i.id === product.id)
			if(index !== -1){
				console.log("I clicked plus!")
				this.products[index].qty++
			}
		},
		minus(product){
			let index = this.products.findIndex( i => i.id === product.id)
			if(index !== -1){
				console.log("I clicked minus!")
				this.products[index].qty--
			}
		}
	}
})