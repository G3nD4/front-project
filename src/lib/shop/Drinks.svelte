<script lang="ts">
	import Cards from '$lib/shop/Cards.svelte';
	import { base } from '$app/paths';

	const items: Items[] = [
		{
			id: '1',
			name: 'Cappuccino',
			img: '../img/brown.png',
			cost: 5
		},
		{
			id: '2',
			name: 'Latte',
			img: '../img/yellow.png',
			cost: 3.5
		},
		{
			id: '3',
			name: 'Americano',
			img: '../img/green.png',
			cost: 7
		},
		{
			id: '4',
			name: 'Espresso',
			img: '../img/green.png',
			cost: 10
		}
	];
</script>

<div class="drinks">
	<div class="container">
		<div class="title">
			<h2>Drinks</h2>

			<hr />

			<div class="items">
				{#each items as item}
					<Cards {item} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	@import '/styles/shopStyles/_drinks.scss';
</style>
