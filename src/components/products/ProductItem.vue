<template>
	<li class="product">
		<div class="product__data">
			<div class="product__image">
				<img :src="image" :alt="title" />
			</div>
			<div class="product__text">
				<h3>{{ title }}</h3>
				<base-badge mode="highlight" :no-margin-left="true">
					<h4>${{ price }}</h4>
				</base-badge>
				<p>{{ description }}</p>
			</div>
		</div>
		<div class="product__actions">
			<button @click="addToCart">Add to Cart</button>
		</div>
	</li>
</template>

<script>
export default {
	inject: ['addProductToCart'],
	props: ['id', 'image', 'title', 'price', 'description'],
	methods: {
		addToCart() {
			this.addProductToCart({
				id: this.id,
				image: this.image,
				title: this.title,
				price: this.price,
			});
		},
	},
};
</script>

<style scoped>
li {
	margin: 1.5rem auto;
	border-radius: 0.5em;
	box-shadow: -8px -8px 8px 0 rgba(255, 255, 255, 1),
		8px 8px 8px 0 rgba(0, 0, 0, 0.05);
	padding: 1rem;
}

.product__data {
	display: flex;
}

.product__image {
	margin-right: 1rem;
}

.product__image img {
	height: 10rem;
	width: 10rem;
	object-fit: cover;
	border-radius: 5px;
	/* box-shadow: 8px 8px 8px 0.1px rgba(0, 0, 0, 0.2); */
}

.product__text h3 {
	margin: 0 0 0.5rem 0;
}

.product__text h4 {
	margin: 0;
}

.product__actions {
	text-align: center;
}

button {
	outline: none;
	font: inherit;
	cursor: pointer;
	background-color: #0278ff;
	color: white;
	border: 1px solid #0278ff;
	padding: 0.5rem 1.5rem;
	border-radius: 30px;
}

button:hover,
button:active {
	background-color: #0a46b4;
	border-color: #0a46b4;
}
</style>