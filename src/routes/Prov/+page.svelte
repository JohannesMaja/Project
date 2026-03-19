<script>
  let query = $state("");
  let results = $state([]);
  let timer;

  function searchCompany() {
    clearTimeout(timer);
    timer = setTimeout(fetchSearch, 300);
  }

  async function fetchSearch() {
    if (query.length < 2) {
      results = [];
      return;
    }

    const res = await fetch(`/api/search?q=${query}`);
    results = await res.json();
  }
</script>

<h1>Stock Search</h1>

<input
  id="company-search"
  name="company-search"
  type="text"
  placeholder="Search company..."
  bind:value={query}
  oninput={searchCompany}
/>

{#if results.length > 0}
<ul>
  {#each results as company}
    <li>
      {company.shortname || company.longname} — {company.symbol} ({company.exchange})
    </li>
  {/each}
</ul>
{/if}

<style>
  input {
    padding: 10px;
    font-size: 16px;
    width: 300px;
  }

  ul {
    list-style: none;
    padding: 0;
    width: 300px;
  }

  li {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
</style>