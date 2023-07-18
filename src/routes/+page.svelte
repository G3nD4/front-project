<script>
	import Benefits from '../lib/Benefits.svelte';
	import Contacts from '../lib/Contacts.svelte';
	import Events from '../lib/Events.svelte';
	import Products from '../lib/Products.svelte';
	import Welcome from '../lib/Welcome.svelte';
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