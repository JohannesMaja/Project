<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	import { base } from '$app/paths';
</script>

<nav>
	<a href="{base}/">hem</a>

	<a href="{base}/Photoapp">photoapp</a>

	<a href="{base}/Register">register</a>
	
	<a href="{base}/Shoppinglist">shoppinglist</a>
</nav>


<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
<style> 

:global(body), :global(html){
  margin: 0%;
  padding: 0%;
  height: 100vh;
  width: 100vw;
}    

</style>
