<script>
let items = [];
	let newItem = "";

	function addItem() {
		const name = newItem.trim();

		if (name === "") {
			alert("Skriv in en vara");
			return;
		}

		items = [
			...items,
			{
				id: Date.now(),
				name,
				bought: false
			}
		];

		newItem = "";
	}

	function removeItem(id) {
		items = items.filter(item => item.id !== id);
	}

	function toggleBought(id) {
		items = items.map(item =>
			item.id === id
				? { ...item, bought: !item.bought }
				: item
		);
	}
</script>

<main class=container>
<h1 class=header>Shoppinglist</h1>

<div class=categories_container>

<section>
<input
		type="text"
		bind:value={newItem}
		placeholder="Skriv in en vara..."
	/>

	<button on:click={addItem}>Lägg till i shoppinglistan</button>

	<h2 class=second_header>Varor att köpa</h2>
	<ul>
		{#each items.filter(i => !i.bought) as item}
			<li>
				{item.name}
				<div>
					<button on:click={() => toggleBought(item.id)}>Köp</button>
					<button on:click={() => removeItem(item.id)}>Ta bort</button>
				</div>
			</li>
		{/each}
	</ul>

</section>
<section>
<h2 class= third_header>Köpta varor</h2>
	<ul>
		{#each items.filter(i => i.bought) as item}
			<li>
				{item.name}
				<div>
					<button on:click={() => toggleBought(item.id)}>Ångra köp</button>
					<button on:click={() => removeItem(item.id)}>Ta bort</button>
				</div>
			</li>
		{/each}
	</ul>
</section>
</div>


</main>
<style>
.container{
    background-color: rgb(103, 4, 103);
    width: 100%;
    height: 100%;
    border-radius: 20px;   
    display: grid;
    grid-template-rows: 1fr 9fr 1fr;
    
}
.categories_container{
    background-color: purple;
    display: grid;
    grid-template-columns: repeat(2,1fr) ;
    height: 100%;
    width: 100%;        
    
}
.header{
    background-color: rgb(71, 1, 71);
    border-radius: 10px;
}
.container h1{
    justify-self: center;
    align-self: center;
}

.second_header{
    background-color: rgb(75, 0, 75);
    margin: 0px;
    padding:20px;
}

.third_header{
    background-color: rgb(75, 0, 75);
    margin: 0px;
    padding:20px;
    margin-block-start: 0.89em;
}

 .categories_container section:first-child{  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.1) /* svart bakgrund med 10% opacitet */
  }
 
  .categories_container section:last-child{  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.3) /* svart bakgrund med 30% opacitet */
  }



</style>        