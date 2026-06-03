<script>
  import data from "$lib/Swim_data/Swim.json";
  import Chart from "chart.js/auto";

  let chartCanvas;
  let chart;
  let selectedSwimmerId = data.swimmers[0]?.id;
  let selectedEventId = null;
  let selectedCourse = null;
  let sameDayMode = "best";
  let detailsSection;


  $: selectedSwimmer = data.swimmers.find(
    (s) => s.id === selectedSwimmerId
  );

  $: swimmerResults = data.results.filter(
    (r) => r.swimmerId === selectedSwimmerId
  );

  $: bestResults = Object.values(
    swimmerResults.reduce((acc, result) => {
      const key = `${result.eventId}-${result.course}`;

      if (!acc[key] || result.time < acc[key].time) {
        acc[key] = result;
      }

      return acc;
    }, {})
  ).sort((a, b) => a.time - b.time);

 $: eventResults = data.results
  .filter(
    (r) =>
      r.swimmerId === selectedSwimmerId &&
      r.eventId === selectedEventId &&
      r.course === selectedCourse
  );

$: chartResults = [...eventResults]
  .sort((a, b) => new Date(a.date) - new Date(b.date));

$: tableResults = [...eventResults]
  .sort((a, b) => a.time - b.time);

$: processedResults = processResults(chartResults);

  $: if (chartCanvas && processedResults.length > 0) {
    updateChart();
  }

  function getEvent(eventId) {
    return data.events.find((e) => e.id === eventId);
  }

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = (seconds % 60).toFixed(2);
    const paddedSec = sec < 10 ? "0" + sec : sec;

    return `${min}:${paddedSec}`;
  }

  function getBaseTime(eventId, course) {
    return data.aquaBaseTimesMale.find(
      (b) =>
        b.eventId === eventId &&
        b.course === course
    )?.baseTime;
  }

  function calculateAquaPoints(swimTime, baseTime) {
    if (!baseTime) return null;

    return Math.round(
      1000 * Math.pow(baseTime / swimTime, 3)
    );
  }

  function selectEvent(eventId, course) {
    selectedEventId = eventId;
    selectedCourse = course;

      setTimeout(() => {
    detailsSection?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 50);
  }

  function processResults(results) {
    const sorted = [...results].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    if (sameDayMode === "all") {
      return sorted;
    }

    const grouped = {};

    for (const result of sorted) {
      const date = result.date;

      if (!grouped[date]) {
        grouped[date] = result;
      } else if (
        result.time < grouped[date].time
      ) {
        grouped[date] = result;
      }
    }

    return Object.values(grouped);
  }

  function updateChart() {
    const labels = processedResults.map(
      (r) => r.date
    );

    const times = processedResults.map(
      (r) => r.time
    );

    if (chart) {
      chart.destroy();
    }

    chart = new Chart(chartCanvas, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Tid (sekunder)",
            data: times
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            reverse: true
          }
        }
      }
    });
  }
</script>

<main>
  <h1>Swim Search</h1>

  <select bind:value={selectedSwimmerId}>
    {#each data.swimmers as swimmer}
      <option value={swimmer.id}>
        {swimmer.name}
      </option>
    {/each}
  </select>

  <h2>
    Resultat för {selectedSwimmer?.name}
  </h2>

  <ul>
    {#each bestResults as result}
      {#if getEvent(result.eventId)}
        <li>
          <button
            on:click={() =>
              selectEvent(
                result.eventId,
                result.course
              )}
            class:selected={
              selectedEventId === result.eventId &&
              selectedCourse === result.course
            }
          >
            {getEvent(result.eventId).distance}m
            {getEvent(result.eventId).stroke}
            ({result.course}m)

            – {formatTime(result.time)}

            {#if getBaseTime(
              result.eventId,
              result.course
            )}
              –
              {calculateAquaPoints(
                result.time,
                getBaseTime(
                  result.eventId,
                  result.course
                )
              )}
              Aqua Poäng
            {/if}
          </button>
        </li>
      {/if}
    {/each}
  </ul>


  {#if selectedEventId}
    <section class="details" 
    bind:this={detailsSection}>
      <h3>
        Alla resultat –
        {getEvent(selectedEventId).distance}m
        {getEvent(selectedEventId).stroke}
        ({selectedCourse}m)
      </h3>

      <button
        class="close"
        on:click={() => {
          selectedEventId = null;
          selectedCourse = null;
        }}
      >
        Stäng
      </button>

      <canvas bind:this={chartCanvas}></canvas>

      <ul>
        {#each tableResults as r}
          <li>
            {r.date}
            – {formatTime(r.time)}
          </li>
        {/each}
      </ul>
    </section>
  {/if}
</main>

<style>
:global(body) {
  margin: 0;
  background: rgb(150, 255, 255);
  font-family: Arial;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;


}

h1 {
  color: #0f172a;
  margin-bottom: 1rem;
}

h2 {
  color: #334155;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

h3 {
  color: #334155;
}

select {
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  background: white;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.75rem;
}

button {
  all: unset;
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 1rem;

  background: white;

  border-radius: 12px;

  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.08);

  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

button:hover {
  transform: translateY(-2px);

  box-shadow:
    0 6px 16px rgba(0, 0, 0, 0.12);
}

.selected {
  background: #e0f2fe;
  border: 2px solid #0ea5e9;
}

.details {
  margin-top: 2rem;

  padding: 1.5rem;

  background: white;

  border-radius: 16px;

  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.08);
  
  scroll-margin-top: 20px;
}

.close {
  width: auto;

  display: inline-block;

  padding: 0.75rem 1.25rem;

  margin-bottom: 1rem;

  background: #ef4444;

  color: white;

  border-radius: 8px;
}

.close:hover {
  background: #dc2626;
}

canvas {
  width: 100% !important;
  max-width: 1000px;
  height: 450px !important;

  margin-top: 1rem;
  margin-bottom: 1rem;
}

.details ul {
  margin-top: 1rem;
}

.details li {
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid #e2e8f0;
}

.details li:hover {
  background: #f8fafc;
}
</style>