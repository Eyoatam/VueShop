<template>
	<header>
		<h1>
			<router-link to="/">VueShop</router-link>
		</h1>
		<nav>
			<ul>
				<li>
					<router-link to="/products">Products</router-link>
				</li>
				<li>
					<router-link to="/cart">Cart</router-link>
					<base-badge mode="elegant">{{ cart }}</base-badge>
				</li>
				<li v-if="isLoggedIn">
					<router-link to="/admin">Admin</router-link>
				</li>
			</ul>
		</nav>
		<div>
			<button v-if="!isLoggedIn" @click="login">Login</button>
			<button v-if="isLoggedIn" @click="logout">Logout</button>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		cart() {
			return this.$store.getters['cart/quantity'];
		},
	},
};
</script>

<style scoped>
header {
	height: 5rem;
	background-color: #eee;
	margin: 0 10%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	justify-self: center;
	align-items: center;
}

li {
	margin: 0 1rem;
}

a {
	text-decoration: none;
	color: #333;
	font-weight: bold;
	border-bottom: 2px solid transparent;
	padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
	color: #0278ff;
	border-color: #0278ff;
}

button {
	outline: none;
	font: inherit;
	cursor: pointer;
	padding: 0.5rem 1.5rem;
	border: 1px solid #0278ff;
	background-color: transparent;
	color: #0278ff;
	border-radius: 30px;
}

button:hover,
button:active {
	background-color: #c9dcf8;
}
</style>