<script>
  /** @type {import('./$types').PageData} */
  export let data;

  import { recentSearches } from '$lib/stores/recentSearches';


  $: pokemon = data.response;

  // uppdatera recent searches varje gång pokemon ändras
  $: if (pokemon) {
    recentSearches.update(list => {
      const entry = {
        name: pokemon.name,
        types: pokemon.types.map(t => t.type.name)
      };

      const filtered = list.filter(p => p.name !== entry.name);
      return [entry, ...filtered].slice(0, 5);
    });
  }
</script>

<article>
  {#each Object.entries(pokemon.sprites) as sprites}
    {#if typeof sprites[1] === "string"}
      <img src={sprites[1]} alt={pokemon.name} />
    {/if}
  {/each}
</article>

<h1>{pokemon.name}</h1>

<h2>Type:</h2>
<ul>
  {#each pokemon.types as t}
    <li>{t.type.name}</li>
  {/each}
</ul>

<style>
  article {
    display: flex;
    flex-wrap: wrap;
    width: 40%;
    gap: 1em;
    align-items: center;
  }
</style>