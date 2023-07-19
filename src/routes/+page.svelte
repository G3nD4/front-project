<script>
	import Benefits from '../lib/home/Benefits.svelte';
	import Contacts from '../lib/home/Contacts.svelte';
	import Events from '../lib/home/Events.svelte';
	import Products from '../lib/home/Products.svelte';
	import Welcome from '../lib/home/Welcome.svelte';
</script>

<main>
	<Welcome />

	<Benefits />

	<Products />

	<Events />

	<Contacts />
</main>

<style>
	@import '/styles/index.scss';
</style>
