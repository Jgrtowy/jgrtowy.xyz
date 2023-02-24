<script lang="ts">
	import './root.scss';
</script>

<body>
	<main>
		<div id="mainDiv" class="mx-2">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="/pfp.gif" id="pfp">
			<h1>Hello!</h1>
			<h3>I'm Jgrtowy, irl known as Dawid</h3>
			<h3>I'm 16yo Polish student who's currently in 2nd grade in middle school at programmer course</h3>
		</div>
	</main>
	<footer class="position-absolute bottom-0 d-flex justify-content-center w-100 gap-3">
		<button class="btns" on:click={() => open("https://github.com/Jgrtowy")}><img src="/github-mark-white.svg" alt=""></button>
		<button class="btns" on:click={() => open("https://twitter.com/Jgrtowy")}><img src="/twitter-white.svg" alt=""></button>
		<button class="btns" on:click={() => open("https://discord.com/users/304961013202288651")}><img src="/discord-mark-white.svg" alt=""></button>
		<button class="btns" on:click={() => open("https://api.jgrtowy.xyz/")}><img src="/braces.svg" alt=""></button>
	</footer>
</body>
