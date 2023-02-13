import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
	id: 'cart',
	state: () => ({
		products: [
			{
				id: 1,
				name: 'apple',
				price: 20,
				qty: 0,
				image: 'src/images/apple.png'
			},
			{
				id: 2,
				name: 'pinapple',
				price: 30,
				qty: 0,
				image: 'src/images/pineapple.png'
			},
			{
				id: 3,
				name: 'lemon',
				price: 40,
				qty: 0,
				image: 'src/images/lemon.png'
			}
		],
		cartItems:[]
	}),
	getters: {
		countCartItems() {
			return this.cartItems.length
		},
		cartTotal() {
			return this.cartItems.reduce((acc,item) => acc += item.price * item.qty, 0)
		}
	},
	actions: {
		addToCart(item) {
			let tempStore = {
				id: 0,
				name: '',
				price: 0,
				qty: 0,
				image: ''
			}

			tempStore.id = item.id
			tempStore.name = item.name
			tempStore.price = item.price
			tempStore.qty = item.qty
			tempStore.image = item.image

			let index = this.cartItems.findIndex(product => product.id === tempStore.id)
			if(index == -1){
				this.cartItems.push(tempStore)
			}else{
				this.cartItems[index].qty += tempStore.qty
			}

			let index2 = this.products.findIndex( p => p.id === item.id)
			this.products[index2].qty = 0
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
		},
		plusCart(item) {
			let index = this.cartItems.findIndex( i => i.id === item.id)
			if(index !== -1){
				console.log("I clicked cart plus")
				this.cartItems[index].qty++
			}
		},
		minusCart(item) {
			let index = this.cartItems.findIndex( i => i.id === item.id)
			if(index !== -1){
				console.log("I clicked cart minus")
				this.cartItems[index].qty--
			}
		}
	}
})