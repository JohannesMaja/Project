<h1>
    Photoapp
    
</h1>
<script>
let image = "https://picsum.photos/id/70/367/267"
let photo = "https://picsum.photos/id/88/367/267"
let picture = "https://picsum.photos/id/93/367/267"
</script>
<div class="photos">
    <div class='image-wrapper'>
    <img src={image} alt="display:flex;">  </div>
    <div class='image-wrapper'>
    <img src={photo} alt="display:flex;"></div>
    <div class='image-wrapper'>
    <img src={picture} alt="display:flex;"></div>
</div>
<style>


    .photos{
        display: flex;
        height: 600px;
        transition: width 2s;
        flex-wrap: wrap;
    }
    .image-wrapper{
        width: 100%;
        align-items:center;
        justify-content:center;
        flex:1;
        margin: 10px;
        height: 100%;

        transition: all 1s;

    }
    .image-wrapper img{
        width: 100%;
        height: 100%;
        border-radius: 20px;
        border: 2px solid rgb(0, 0, 0);
        box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
    }
    .image-wrapper:hover{
        flex:2;
    }
    .image-wrapper:active{ 
        transform: scale(0.9);
    }
   
    h1{
        text-align: center;
        font-size: 50px;
        margin: 20px;
        color: grey;
    }
</style>