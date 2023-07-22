<script lang="ts">
	import { base } from '$app/paths';
  import { addToCart } from "c:/FrontProject/front-project/src/lib/firebase";
</script>

<div class="products">
	<div class="container">
		<div class="info-wrapper">
			<h1 class="title">New Our <br />Products</h1>
			<p class="products-info">
				Have time to buy the most harmonious drinks <br />in the new Starbucks coffee and don't
				forget <br />about the discount! Starbucks coffee and <br />don't forget about the discount!
			</p>
		</div>
		<div class="list">
			<ul class="items">
				<li class="item item1" id="item1">
					<img src="{base}/img/brown.png" alt="Coffee" />
					<h3 id="item1-name">Americano</h3>
					<p>An invigorating <br />hot Americano</p>
					<div class="wrapper">
						<h4 id="item1-price">3,5$</h4>
						<p id="item1-volume">330 ml</p>
					</div>
					<button class="add-cart">
            Add to cart
          </button>
				</li>
				<li class="item item2" id="item2">
					<img src="{base}/img/yellow.png" alt="Coffee" />
					<h3 id="item2-name">Latte</h3>
					<p>Twice as much foam as in Cappuccino</p>
					<div class="wrapper">
						<h4 id="item2-price">4$</h4>
						<p id="item2-volume">330 ml</p>
					</div>
					<button class="add-cart">Add to cart</button>
				</li>
				<li class="item item3" id="item3">
					<img src="{base}/img/green.png" alt="Coffee" />
					<h3 id="item3-name">Cappuccino</h3>
					<p>Airy foam, espresso and hot milk - that's our Cappuccino</p>
					<div class="wrapper">
						<h4 id="item3-price">5,5$</h4>
						<p id="item3-volume">330 ml</p>
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
