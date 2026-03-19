<h1 class=header> Memory </h1>
<script>

  let flippedCards = [];

  let blueTurn =$state(false);

  let bluePoints = $state(0);

  let redPoints = $state(0);

  let flipCount = 0

  let isChecking = false;



  const images =[
    "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/493940366_1224147203049640_865249277717674532_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=t8KN0iJ9m7oQ7kNvwETZYJ2&_nc_oc=AdkOUsDJ-dFeXE_a6OzSJcjIKNUkSOl3o1wA_6VewCzJSxFQdTpwYFIueEaQiinHOG0&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=LdH431On3exa78DdPSMwvA&_nc_ss=8&oh=00_Afy2Yz5f1aV_jOBYzUTYvpTtKm11hYccfQRHgVFdaUdf8w&oe=69BEC9C8",
    "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/494099562_1223955269735500_7961290295272325247_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=5VpyR2ujzYAQ7kNvwEW7jId&_nc_oc=AdmpsD4qWfT7UVfgFrStcT0f-rMCqF4y1qZEhl1lHi8QIK7G94LNweJS5YruouCmKWM&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=i9BfDkxmH4iDBEJs0rPKBg&_nc_ss=8&oh=00_AfwtZg2hGsm7Qy76xKt6CjeRStfwrdF4MAFulnY1yJEBmg&oe=69BEF271",
    "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/493909449_1223959779735049_6978215766727247211_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=pnDsyW7MOtAQ7kNvwHwC8Wa&_nc_oc=Admz698GetE9awg5ausXaH4gMHQo3fFrJ4HPIaBYXeLDLJzrwtBvpDC-IWvrFGGLQxc&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=6--DPlyIO7JQr5goyqaKwg&_nc_ss=8&oh=00_AfyzOl2Cyu19EtQiieKqAanYLX3wMtYpiIOWjSBIL63Zpw&oe=69BEE4B0",
    "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/490833460_1211257364338624_8101210443073108535_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8s96oHGaPLkQ7kNvwFW6YJU&_nc_oc=AdmaGti0oMhKTzqlA-l1m4axdlAZ4HRa6E4ap1eTKxx7kPrX4a7u8JdqnNvDltcALBY&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=i-TirYXGfVM1BpkU_H6DHQ&_nc_ss=8&oh=00_AfxVSY24LZfRAJMX3_NJipC0GDyW8jpfsYvimYZi_BQgMg&oe=69BEDFE1",
    "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/493849622_1224147223049638_1713777329772821530_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=KOlzAQS811QQ7kNvwFNkjig&_nc_oc=AdlBwMTnAY7_nm0oWcLjeQ1GUguBeGf_05y7j3j909ytQ7ZuSwKeFDyFLgX1IdwlxYY&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=PzBhA7FnZiHQSt1ajwwhdw&_nc_ss=8&oh=00_AfwjnBnr96Jn-a9kJbkjK7xwbbQUMdPyzcvf4Jb1RcuV1Q&oe=69BED655",
    "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/559575741_1376185277845831_7999463354715866962_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=YU8OjAh3EGwQ7kNvwFS96XG&_nc_oc=AdmqDktTz6oKBrNzG-ST76ztu_JC6TwGHfMG62YcfC1GdMY6apLw2awruZZ0ahTG11o&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=-NtOGcRYdZVF2RQqTqK6fw&_nc_ss=8&oh=00_AfzSWerfqWnocsEIxbFWtiueJ0LCBVFwUCXwYmx4YNo1Ag&oe=69BECF71"
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
