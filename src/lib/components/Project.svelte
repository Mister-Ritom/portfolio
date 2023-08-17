<script lang="ts">
    export let name:string;
    export let lang:string;
    export let link:string;
    export let logo:string = "";
    export let desc:string = "";
</script>

<a href={link} target="_blank">
    <div class="parent">
        <div class="info">
            <h2 class="name">{name}</h2>
            <p class="desc">{desc}</p>
        </div>
        <img src={logo} alt={desc}/>
    
    </div>
</a>

<style>
    a {
        color: var(--text);
    }
    .parent {
        display: flex;
        padding: 1rem;
        background:#181818;
        border-radius: 12px;
        width: 14em;
        height: 5.7em;
        overflow: hidden;
        cursor: pointer;
        border: 2px solid royalblue;
    }
    .parent:hover {
        background-color: #282828;
    }
    img {
        width:3rem;
        height:3rem;
        border-radius: 16px;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: auto;
    }
    .name {
        margin: 0;
        padding: 0;
        margin-bottom: 4px;
        text-align: center;
    }
    .desc {
        word-wrap: break-word;
        font-size: x-small;
        margin: 0;
        color: lightgray;
    }
    .info {
        padding-bottom: 8px;
    }
</style>