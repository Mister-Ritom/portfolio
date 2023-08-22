<svelte:head>
    <title>Ritom's Projects</title>
    <meta name="description" content="Projects of Ritom">
</svelte:head>

<script>
    let currentPage = 1
    import MyImage from "$lib/images/Cropped.webp"
	import Projects from "$lib/components/Projects.svelte";
</script>

<header>
    <h1>Projects of me, Ritom</h1>
    <img class="my-image" src={MyImage} alt="Ritom">
</header>

<div class="languages">
    <h2>I learnt so far</h2>
    <h3>Java</h3>
    <h3>Kotlin</h3>
    <h3>Javascript</h3>
    <h3>C++(Basic)</h3>
    <p>Yes I love Object oriented languages only.</p>
</div>

<div class="projects">
<div class="sort">
    <h2>Sort by language</h2>
    <label for="lang">Language</label>
    <select name="Language" id="lang">
        <option value="java">Java</option>
        <option value="kotlin">Kotlin</option>
        <option value="Javascript">JavaScript</option>
        <option value="cpp">C++</option>
    </select>
</div>
    <div class="projects">
        <Projects bind:pageNum={currentPage}/>
        <button on:click={()=> currentPage--} ><img width="36" height="36" src="https://img.icons8.com/ios/36/back--v1.png" alt="back--v1"/></button>
        <button on:click={()=> currentPage++}><img width="36" height="36" src="https://img.icons8.com/ios/36/forward--v1.png" alt="forward--v1"/></button>
    </div>
</div>

<style>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }
    header img {
        width: 36px;
        height: 36px;
    }
    .languages {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-left: 1rem;
    }
    .languages h3 {
        margin: 0 0 0 0.5rem;
        padding: 8px;
        background-color: var(--primary);
        border: 1px solid var(--nav-border);
        box-shadow: 2px 2px 2px 1px rgba(255,255,255, 0.2);
        color: var(--text);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        border-radius: 12px;
        width: fit-content;
        cursor: default;
    }
    .sort {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .sort select {
        width: fit-content;
        height: fit-content;
    }

    .projects {
        padding-bottom: 5rem;
    }

    button {
        all: unset;
        cursor: pointer;
        margin-left: 5rem;
    }

    button img {
        font-size: small;
    }

</style>