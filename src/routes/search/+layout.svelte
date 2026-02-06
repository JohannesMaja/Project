<script> 
  import { recentSearches } from '$lib/stores/recentSearches';
  // Importera goto-funktionen för att navigera mellan sidor
  import { goto } from '$app/navigation';
  // Funktion som hanterar formulärets submit-händelse
  function handleSubmit(e) {
    // Förhindra att sidan laddas om (standardbeteende för formulär)
    e.preventDefault();
    
    // Skapa ett FormData-objekt från formuläret
    const formData = new FormData(e.target);

    
    // Hämta värdet från input-fältet med name="search"
    const search = formData
      .get('search')
      .trim()
      .toLocaleLowerCase('sv-SE');
    
    if (!search) return;

    // Navigera till den dynamiska routen /search/[pokemon]
    goto('/search/' + search);
  }

</script>

<main>
<slot></slot>

<form on:submit={handleSubmit}>
  <input 
  type="text"
  name="search"
  placeholder="Sök upp en pokemon"/>
</form>
</main>
<footer>
  {#each $recentSearches as p}
<button
  on:click={() => goto(base +`/search/${p.name}`)}
  class="pokemon-link {p.types[0]}"
>
  {p.name}
</button>
  {/each}
</footer>
<div class="backdrop"></div>


<style>

main{
    width: 80vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.8);
    margin: 5vh auto;
    border: solid 5px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.backdrop{
    width: 100vw;
    height: 100vh;
    background-image: url(https://imageio.forbes.com/specials-images/imageserve/604202ff091b6539cb90fcbc/The-backs-of-a-number-of-Pok-mon-cards-/960x0.jpg?format=jpg&width=960);
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(5px);
}
footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem;
    justify-content: center;
    background: #111;
    z-index: 10;
}
.pokemon-link {
    padding: 0.4em 0.7em;
    border-radius: 6px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    text-transform: capitalize;
  }
  /* Typ-färger */
  .electric { background: #f7d02c; color: #000; }
  .fire { background: #ee8130; }
  .water { background: #6390f0; }
  .grass { background: #7ac74c; }
  .psychic { background: #f95587; }
  .ice { background: #96d9d6; color: #000; }
  .dragon { background: #6f35fc; }
  .dark { background: #705746; }
  .fairy { background: #d685ad; }
</style>