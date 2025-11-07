<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	import { base } from '$app/paths';
</script>

<nav>
		<a href="{base}/">hem</a>

	<a href="{base}/Photoapp">photoapp</a>
</nav>


<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

