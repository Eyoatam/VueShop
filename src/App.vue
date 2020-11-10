<template>
	<the-header></the-header>
	<router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
	components: {
		TheHeader,
	},
	data() {
		return {
			isLoggedIn: false,
		};
	},
	computed: {
		products() {
			return this.$store.getters['product/products'];
		},
	},
	methods: {
		login() {
			this.isLoggedIn = true;
		},
		logout() {
			this.isLoggedIn = false;
		},
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
* {
	box-sizing: border-box;
}

html {
	background: #eee;
	font-family: 'Montserrat', sans-serif;
}

body {
	margin: 0;
}
</style>