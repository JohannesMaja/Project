<script>
const boxes = ["1","2","3","4","5","6"];
const colors = [ 
    '#ff0000', 
    '#0000ff',
    '#008000',
    '#008000',
    '#800080',
    '#ffa500'  
]
</script>

<h1> C Prov </h1>

<div class=container> 
    {#each boxes as b, i}
    <div class=box style="background:{colors[i]}">{b}</div>
    {/each}
</div>

<style>
    .container{
        display: grid;
        grid-template-columns: repeat(3,250px);
        grid-template-rows: repeat(2, 200px);
        background-color: lightgray;
        justify-self: center;
        gap: 10px;
        padding: 10px;
        border-radius: 10px;
    
    
    }
    .box{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        color:white;
        transition: transform 1s;
        border-radius: 10px;
        
    }
    .box:hover{
        transform: scale(0.9);
    }







</style>