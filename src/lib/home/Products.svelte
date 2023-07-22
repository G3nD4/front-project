<script lang="ts">
	import { base } from '$app/paths';

	import scrollToElement from '../home/Welcome.svelte';
</script>

<div class="products">
	<div class="container">
		<div class="info-wrapper" id="product">
			<h1 class="title">New Our <br /><span class="products">Products</span></h1>
			<p class="products-info">
				Have time to buy the most harmonious drinks <br />in the new Starbucks coffee and don't
				forget <br />about the discount! Starbucks coffee and <br />don't forget about the discount!
			</p>
		</div>
		<div class="list">
			<ul class="items">
				<li class="item item1">
					<img src="{base}/img/brown.png" alt="Coffee" />
					<h3>Americano</h3>
					<p>An invigorating <br />hot Americano</p>
					<div class="wrapper">
						<h4>3,5$</h4>
						<p>330 ml</p>
					</div>
					<button class="add-cart">Add to cart</button>
				</li>
				<li class="item item2">
					<img src="{base}/img/yellow.png" alt="Coffee" />
					<h3>Latte</h3>
					<p>Twice as much foam as in Cappuccino</p>
					<div class="wrapper">
						<h4>4$</h4>
						<p>330 ml</p>
					</div>
					<button class="add-cart">Add to cart</button>
				</li>
				<li class="item item3">
					<img src="{base}/img/green.png" alt="Coffee" />
					<h3>Cappuccino</h3>
					<p>Airy foam, espresso and hot milk - that's our Cappuccino</p>
					<div class="wrapper">
						<h4>5,5$</h4>
						<p>330 ml</p>
					</div>
					<button class="add-cart">Add to cart</button>
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	@import '/styles/_products.scss';
</style>
