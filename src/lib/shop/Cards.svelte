<script lang="ts">
	export let item: Items = { id: '', name: '', img: '', cost: 0 };
</script>

<div class="card">
	<img src={item.img} alt="coffee" />
	<h3>{item.name}</h3>
	<p>{item.cost}</p>
</div>

<style>
	@import '/static/styles/shopStyles/_cards.scss';
</style>
