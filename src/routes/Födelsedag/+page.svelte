<script>
const månader = [
	"Januari", "Februari", "Mars", "April", "Maj", "Juni",
	"Juli", "Augusti", "September", "Oktober", "November", "December"
];

let gissning = (0);

let minDatum = new Date(1400, 0, 1);
let maxDatum = new Date(2400, 11, 32);
let aktuelltDatum = slumpaMellan(minDatum, maxDatum);

function slumpaMellan(min, max) {
	const minTid = min.getTime();
	const maxTid = max.getTime();
	const slumpTid = Math.floor(Math.random() * (maxTid - minTid)) + minTid;
	return new Date(slumpTid);
}

function tidigare() {
	if (aktuelltDatum > minDatum) {
		maxDatum = aktuelltDatum;
		aktuelltDatum = slumpaMellan(minDatum, maxDatum);
	}
	gissning++
}

function senare() {
	if (aktuelltDatum < maxDatum) {
		minDatum = aktuelltDatum;
		aktuelltDatum = slumpaMellan(minDatum, maxDatum);
	}
	gissning++
}
</script>

<main>
<h1> När är din födelsedag?</h1>


<div class=knappar>
<button class=tidigare on:click={tidigare}>
Tidigare
</button>
<h2>{aktuelltDatum.getDate()}
	{månader[aktuelltDatum.getMonth()]}
	{aktuelltDatum.getFullYear()}</h2>
<button class=senare on:click={senare}>
Senare
</button>
</div>
<h3> Gissning:{gissning}</h3>
</main>




<style>
main{
height: 85%;
width: 85%;
padding: 50px;
}
h1,h2{
justify-self: center;
}
h3{
	justify-self: center;
	margin-top: 5px;
}
.knappar {
		display: flex;
		gap: 40px;
		justify-content: center;
	}
button{
    width: 100px;
    height: 100px;
	cursor: pointer;
	border: 0px;
}
.tidigare{
    background-color: rgb(205, 205, 205);
}
.senare{
    background-color: rgb(205, 205, 205);
}
</style>
