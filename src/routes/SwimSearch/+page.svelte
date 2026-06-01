<script>
  import data from "$lib/Swim_data/Swim.json";
  import Chart from "chart.js/auto";

  let chartCanvas;
  let chart;

  let selectedSwimmerId = data.swimmers[0]?.id;

  let selectedEventId = null;
  let selectedCourse = null;

  let sameDayMode = "best";


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
    )
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  $: processedResults = processResults(eventResults);

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
              Aqua Points
            {/if}
          </button>
        </li>
      {/if}
    {/each}
  </ul>


  {#if selectedEventId}
    <section class="details">
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
        {#each processedResults as r}
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
  main {
    padding-left: 15px;
    width: 100%;
    height: 225%;
    background-color: aqua;
  }

  button:hover {
    color: #0077cc;

  }

  button {
  all: unset;
  cursor: pointer;
  display: block;
  width: 40%;
  }
  .selected{
    font-weight: bold;
  }
  canvas {
  width: 1000px;
  height: 400px; 
  }
  section{
    background-color: aqua;
  }
</style>