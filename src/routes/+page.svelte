<svelte:head>
    <title>Ritom Ghosh</title>
    <meta name="description" content="The teenager who built a social media.">
</svelte:head>

<script>
        import MyImage from "$lib/images/Cropped.webp"
        import Fashion from "$lib/images/Fashion.png"
</script>

<header>
        <img class="my-image" src={MyImage} alt="Ritom">
        <h1>Ritom Ghosh</h1>
</header>
<div class="programmer">
    <h1>Software developer</h1>
    <h2>Passionate learner | Software Developer | Android Developer | Web Enthusiast</h2>
    <p>Discord members say</p>
    <div class="quotes">
        <p class="quote">Ritom is a great developer. He can create various types of softwares.</p>
        <p class="quote">He has a great imagination.</p>
        <p class="quote">He tried C++ games,Java/Kotlin applications and now he is learning web development.</p>
    </div>
</div>
<div class="fashion">
    <h1>Fashion Maven | Fashion Guru</h1>
    <img loading="lazy" src={Fashion} alt="Fashion guru Ritom">
    <h2>🌟 Elevating Fashion to an Art Form: Your Trusted Fashion Guru</h2>
    <p>I don't merely follow trends.
        I breathe life into them. From deciphering the subtleties of color palettes 
        to crafting harmonious ensembles, my approach to fashion is akin to creating a masterpiece. 
        With each piece of advice, I aim to empower you to express your individuality, 
        enhancing your confidence and charisma.</p>
</div>

<style>
    header {
        justify-content: center;
        align-items: center;
    }
    header,.programmer {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
    }
    header h1 {
        font-size: 36px;
        letter-spacing: 0.3rem;
        background: linear-gradient(45deg,#1565c0,yellowgreen,#b92b27);
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
    }
    .my-image {
        width: 100px;
        height: 100px;
    }

    .quote {
        margin: 0 0 0 1rem;
        font-weight: bold;
        font-style: italic;
    }

    .fashion {
        position: relative;
        
    }

    .fashion h1 {
        width: fit-content;
    }

    .fashion p {
        margin-left: 2rem;
        margin-right: 5rem;
    }

    .fashion img {
        position: absolute;
        width: 350px;
        height: 600px;
        right: 0;
        z-index: -1;
    }

    p,h2 {
        margin-left: 0.5rem;
    }
</style>