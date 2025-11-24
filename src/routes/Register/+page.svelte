<div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};"></div>
<script>
let color = "black"
function handleSubmit(event) {
    alert("Välkommen")
  }
</script>
<main>
<div class="container">
<div class="flex-container">
<h1>
Register
</h1>  
<form on:submit|preventDefault={handleSubmit} >
<label for="name">Namn:</label>
<input type="text" id="name" >
<label for="e-postadress">E-postadress:</label>
<input type="email" id="e-postadress" >
<label for="password">Lösenord:</label>
<input type="text" id="Lösenord" >
<label for="favoritfärg">Favorit Färg:</label>
<select bind:value={color} type="text" id="name"><option value="blue">Blå</option><option value="red">Röd</option><option value="Green">Grön</option><option value="Yellow">Gul</option><option value="none">Annan</option></select>
</form>
<input type="submit" value="Registrera">                
</div>
</div>
</main>

<style>
 main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
    }

    
.container{
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35%;
        height: 80%;
        background-color: #3a2e3b;
        margin: auto;
}     
.flex-container{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly;
}
</style>
