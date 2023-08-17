<script script lang="ts">
    import MyImage from "$lib/images/Cropped.webp"
	import Project from "./Project.svelte";

    export let pageNum:number;
    const link = `https://api.github.com/users/mister-ritom/repos?&sort=pushed&per_page=100&page=${pageNum}`

    let repos: any[] = []

    async function getRepos() {
        const res = await fetch(link)
        repos = await res.json()
        repos.sort((a:any, b:any) => b.forks_count - a.forks_count);
        repos.sort((a:any, b:any) => b.stargazers_count - a.stargazers_count);
    }
    getRepos()
</script>

<ul>
    {#each repos as repo}
        <li>
            <Project logo={MyImage} name={repo.name} desc={repo.description} lang={repo.language} link={repo.html_url} />
        </li>
    {/each}
</ul>

<style>
    ul {
        margin: 0;
        padding: 0;
        margin-left: auto;
        margin-right: auto;
        list-style: none;
        display: grid;
        gap: 4px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: fit-content;
    }
</style>