import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [{
			path: "/",
			name: "home",
			component: () => import('../views/HomeView.vue')
		},
		{
			path:'/cart',
			name: "cart",
			component: () => import('../views/CartView.vue')
		}
	]
});

export default router;