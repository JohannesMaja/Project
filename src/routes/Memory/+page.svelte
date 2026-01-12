<h1 class=header> Memory </h1>
<script>

  let flippedCards = [];

  let blueTurn =$state(false);

  let bluePoints = $state(0);

  let redPoints = $state(0);

  let flipCount = 0

  let isChecking = false;



  const images =[
    "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/494881543_1228324472631913_458857408084322746_n.jpg?stp=c0.169.1536.1536a_cp6_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=20nwRllps5AQ7kNvwHAYZ10&_nc_oc=Adm2y-AaWmdsiQD5KliQd77UOyfXJHKDtQk_l8VVKnLVuoj4WqvuzcEY2AJDP-MSuG4&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=-gMXAMaAxraDBWn68DdlVw&oh=00_AfoHHCJzfh5znffdfZHYqhUPN06cbIMautkIuWaYoW1A3A&oe=69653AB2",
    "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/489572287_1206064274857933_8285372752561243652_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=B9hLvBliZO4Q7kNvwHq1w_G&_nc_oc=Adn7NKAoZGEILznKUQ5FuoCU8R-2hFPjRbuWbQXdb4IfspPUDGGhqsKlSPA7KjzvLuo&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=tGwSaTTRltCWKH2tfVHfww&oh=00_AfoEMnx-r8UIr0xqBHMPswQ7p7GsSMzNrLFfAkeJs5ohkg&oe=696547E5",
    "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/494099562_1223955269735500_7961290295272325247_n.jpg?stp=c0.169.1536.1536a_cp6_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=1m6ghVb4D3AQ7kNvwH_8oh9&_nc_oc=AdldZ_lsTwacKOECukiSYwgN9pSq8ieXOREdbQ592XDQwWuoUFEpQDX4p5WsyJ7OQnA&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=OxXe8syJ3Wpri2eCQfOV9Q&oh=00_AfoJ0FzYiSl-diM61OOKDO2V_FZtBMyPF6RSuKYAGJFVqg&oe=69654C71",
    "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/489138664_1206069614857399_935239676001928057_n.jpg?stp=c0.79.720.720a_dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=50ad20&_nc_ohc=79e57DvAFSQQ7kNvwGW7vtB&_nc_oc=Adl0IIbxMy4On2N5g41MgUBGpgru9YZVG7n9EZ8aNNZHXjZQ5OWVLXcEKQBJA5k54Xo&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=iF6epykywYqM72ow_06eug&oh=00_Afph6ICfZB2zR7d2gpWs4z68dcbC-JoBWM45t7OPNHXMkg&oe=69653B9D",
    "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/486295840_1193133946150966_2710865908104208908_n.jpg?stp=c0.79.720.720a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=Fb8rRf3LUdkQ7kNvwHosQsf&_nc_oc=Adl7FraUN4AjDQuxR8RTwaYni6lK8ijzRQpS6GIlvrZUAcfZZOQk1tHlNcqwqc8YVzA&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=VdiyoLUodMtOGAtHsxUgqQ&oh=00_AfpFQ4aN-vyjMBZQheXTDmAhJtQYgGou6nqhce77ee0IOg&oe=696562BF",
    "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/493939350_1224147433049617_7743679893905328008_n.jpg?stp=c0.169.1536.1536a_cp6_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=DNfAztS1cEwQ7kNvwF5Kt8A&_nc_oc=AdlgxTxCdyI4RwrPz9tXn_SU9s6Jwb3NAHluzZOyGdABHp2vQU1oHabNDcDjgbeyQkI&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=gb0utCrea1xTt9F6wk2tKw&oh=00_AfoQhdVxDACIToSDwyevaAM-L-j2oczwANpEbuKq5dkuZw&oe=69656390"
  ]



  
function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	  let cards = $state([]);

	const doubledImages = [...images, ...images];

	shuffle(doubledImages);

	cards = doubledImages.map((img, index) => ({
		id: index,
		image: img,
		flipped: false,
		matched: false
	}));
   

function flipCard() {
	flip
	};
function flip(card) {
  if (card.flipped || card.matched) return;
  if (isChecking) return;

  card.flipped = true;
  flippedCards = [...flippedCards, card];

  if (flippedCards.length === 2) {
    const [first, second] = flippedCards;

    if (first.image === second.image) {
      first.matched = true;
      second.matched = true;
      if (blueTurn) {
        bluePoints++;
      } else {
        redPoints++;
      }
      flippedCards = [];
      isChecking = false;
      

    } else {
      setTimeout(() => {
        first.flipped = false;
        second.flipped = false;
        blueTurn = !blueTurn;
        flippedCards = [];
        isChecking = false;
        cards = cards;
      }, 1000);
    }
  }
}



</script>
<main>
    {#each cards as card}
    <div class="card">
		<button class="card-inner {card.flipped ? 'flipped' : ''}"onclick={() => flip(card)}>
      <div class="card-face card-front">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Card_back_01.svg/1406px-Card_back_01.svg.png" alt="framsida" />
		</div>
		  <div class="card-face card-back">
			<img
				src= {card.image}
				alt="backsida"
			/>
		</div>
    </button>
    </div>
    {/each}

</main>
<aside class=blue>
<p> {bluePoints}</p>
</aside>
<aside>
<p> {redPoints}</p>
</aside>
<aside class = turn class:blue={blueTurn}> </aside>
<style>
.header{
    text-align: center;
}
main{
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(3, 100px);
    justify-content: center;
    gap: 10px;
}
.card{
    width: 100px;
    height: 100px;
    perspective: 1000px;
    border: 1px solid black;
   } 
.card-inner{
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.6s;
  transform-style: preserve-3d;
  border: none;
	background: none;
	padding: 0;
	cursor: pointer;
  display: flex;
	align-items: center;
	justify-content: center;
}
.card-inner.flipped{
  transform: rotateY(180deg);
}
.card-front,
.card-face{
  position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
  display: flex;
	align-items: center;
	justify-content: center;
}
.card-face img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.card-front {
	transform: rotateY(0deg);
}
.card-back{
  transform: rotateY(180deg);
}



aside{
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p{
    font-size: 30px;
  }
aside.blue{
    background-color: blue;
    left: 10px;
}
aside.turn{
    box-shadow: 0 0 10px 10px yellowgreen;
    z-index: -1;
}


</style>
