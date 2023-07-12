<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="welcome">
	<div class="container">
		<div class="info">
			<h1>New Cafe <br />by <span>StarBucks</span></h1>
			<p class="info-p">
				Have time to buy the most harmonious drinks in the <br />new Starbucks coffee and don't
				forget about the discount!
			</p>
			<button class="btn select">Select a coffee</button>
			<button class="btn more">More</button>

			<div class="achievments">
				<div class="users">
					<h2>9k+</h2>
					<p>Premium <br />Users</p>
				</div>
				<div class="customer">
					<h2>2k+</h2>
					<p>Happy <br />Customer</p>
				</div>
				<div class="awards">
					<h2>28+</h2>
					<p>Awards <br />Winning</p>
				</div>
			</div>
		</div>

		<img src="{base}/img/main-coffee.png" alt="Coffee" />
	</div>
</div>

<style>
	@import '/styles/_welcome.scss';
</style>
