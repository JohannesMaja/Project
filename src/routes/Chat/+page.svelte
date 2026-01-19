<h1> Chat</h1>
<script>
	import ElizaBot from 'elizabot';

	import { enhance } from '$app/forms';

	const eliza = new ElizaBot();

	let chat = $state([
		{ user: 'Eliza', message: eliza.getInitial() }
	]);
	async function write(message) {
		if (!message) return;

		chat = [...chat, { user: 'User', message }];

		await new Promise((r) =>
			setTimeout(r, 1000 + Math.random() * 1000)
		);

		const reply = eliza.transform(message);
		chat = [...chat, { user: 'Eliza', message: reply }];
        
        //Hämta HTML-elementet med id:et visible
        var element = document.getElementById("visible");
        //Ändrar elementets CSS-egenskap display till default
        element.style.display = "none"; // Visa elementet
            
	}

</script>

<main>
<section>
  
    {#each chat as msg}
    <article class="message {msg.user}" >
        <p>{msg.message}</p>

    </article> 
    {/each}

    <article id="visible">
    <div class="circle-animation">
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle"></span>
    </div>
    </article>


</section>
<form method="post"
		use:enhance={({ formElement, formData, cancel }) => {
			cancel();

			const text = formData.get("text");
            
            //Hämta HTML-elementet med id:et visible
            var element = document.getElementById("visible");
            //Ändrar elementets CSS-egenskap display till default
            element.style.display = "flex"; // Visa elementet
            
			write(text);
			formElement.reset();
            
      }}>
<input 
    type= "text"
    name= "text"
	placeholder="Skriv ett meddelande...">
</form>
</main>


<style>
h1{
    justify-self: center;
    font-size: 36px;
}
main{
    display: grid;
    height: 70vh;
    width: 60vw;
    margin: auto;
    padding: 10px;
    border: 1px solid black;
    background-color: rgb(0, 175, 175);
    border-radius: 10px;
    grid-template-rows: 90%;
}

form{
    display: flex;
    border-radius: 10px;
    background-color: rgb(23, 103, 103);
}
.message{
    width: 65%;
    padding: 8px;
    font-size: 1rem;
    border-radius: 10px;

    line-height: 1.4;
}
.User{
    color: rgb(11, 71, 71);
    margin-left: auto;
    text-align: right;
}
.Elize{
    background-color: rgb(19, 130, 130);
    margin-right: auto;
    text-align: left;
}
input{
    width: 100%;
    padding: 8px;
    font-size: 1rem;
    border-radius: 10px;
    background-color: rgb(23, 103, 103);
}
section{
    border-radius: 10px;
    background-color: rgb(40, 165, 165);
    overflow-y: scroll;
    
}

.circle{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgb(0, 0, 0);
    animation: typing 1s ease-in-out infinite;
}
article{
    border-radius: 10px;
    resize: none;
    background-color: rgb(35, 111, 111);
    height: 10%;
    width: 100%;
    padding-left: 10px;
    font-size: 17px;
    
}

#visible{
    width: 100px;
    height: 60px;
    display: none;
    justify-content: center;
    align-items: center;
}
section p{
    color: lightblue;
}
form input{
    color: lightblue;
}
section::-webkit-scrollbar {
	display: none;
}

/* CSS-stilar för .circle med index 1 (den första cirkeln) */
.circle:nth-child(1) {
animation-delay: 0ms; /* Ingen fördröjning */
}
/* CSS-stilar för .circle med index 2 (den andra cirkeln) */
.circle:nth-child(2) {
animation-delay: 333ms; /* Starta animationen efter 333 millisekunder (ms) */
}
/* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
.circle:nth-child(3) {
animation-delay: 666ms; /* Starta animationen efter 666 ms */
}
            

@keyframes typing{
    0% {transform: scale(1);}
    50%{transform: scale(1.4);}
    100%{transform: scale(1);}
}
.circle-animation {
    animation-name: typing;
    animation-duration: 1000ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    display: flex;
    gap: 6px;
}               
</style>