<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	import { base } from '$app/paths';
</script>

<nav>
	<a href="{base}/">Hem</a>

	<a href="{base}/Photoapp">Photoapp</a>

	<a href="{base}/Register">Register</a>
	
	<a href="{base}/Shoppinglist">Shoppinglist</a>
	
	<a href="{base}/Memory">Memory</a>

	<a href="{base}/Prov">Prov</a>

	<a href="{base}/Chat">Chat</a>

	<a href="{base}/search">Search</a>
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
