<script>
  let position = 50;  
  let direction = 1;
  let frame;

  const center = 50;
  const speed = 0.8;

  let shotsLeft = 5;
  let träffar = 0;
  let lastShot = null;
  let message = "Tryck SPACE när siktet är i mitten";

function animate() {
  position += direction * speed;

  if (position > 100 || position < 0) {
    direction *= -1;
  }

}
animate();
function handleShot(e) {
  if (e.code === "Space") {
    shoot();
  }
}

function shoot() {
  const distance = Math.abs(50 - position);
  shotsLeft --
  träffar ++
}
position = 50 + Math.sin(Date.now() / 200) * 20;
</script>


<main>
<div class="range">
<h2> Skidskytte</h2>

  <div class="tavla">
    <div class="sikte"></div>
    <div class="måltavla" style="left:{position}%"></div>
  </div>
  


<h3> Skott kvar: {shotsLeft} </h3>
<h4> Du har träffat: {träffar}</h4>
</div>

</main>

<style>
.tavla{
    position: relative;
    width: 300px;
    height: 40px;
    background: #ddd;
    border-radius: 20px;
    margin: 20px auto;
  }
.range {
    width: 320px;
    margin: 40px auto;
    text-align: center;
    font-family: sans-serif;
  }
.måltavla{
    position: absolute;
    top: 50%;
    width: 14px;
    height: 14px;
    background: black;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}
.sikte{
  position: absolute;
  width: 4px;
  height: 100%;
  background: red;
  transform: translateX(-50%);
  justify-self: center;
}


</style>



<svelte:window on:keydown={handleShot} />