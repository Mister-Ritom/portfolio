<script>
    const blogs = [
        { title: "Understanding Svelte Basics", link: "https://blog.ritom.site/svelte-basics", description: "A beginner's guide to Svelte." },
        { title: "Advanced Svelte Techniques", link: "https://blog.ritom.site/advanced-svelte", description: "Take your Svelte skills to the next level." },
        { title: "Building a Portfolio with Svelte", link: "https://blog.ritom.site/svelte-portfolio", description: "Step-by-step guide to creating a portfolio using Svelte." }
    ];
</script>

<style>
    .blog-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
    }

    .blog-card {
        padding: 1.5rem;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s, box-shadow 0.2s;
        background-color: #fff;
    }

    .blog-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }

    .blog-title {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .blog-description {
        font-size: 1rem;
        color: #555;
        margin-bottom: 1rem;
    }

    .blog-link {
        color: #0070f3;
        text-decoration: none;
        font-weight: bold;
    }

    .blog-link:hover {
        text-decoration: underline;
    }

    .more-blogs {
        margin-top: 2rem;
        text-align: center;
    }

    .more-blogs a {
        color: #0070f3;
        text-decoration: none;
        font-weight: bold;
    }

    .more-blogs a:hover {
        text-decoration: underline;
    }
</style>

<div class="blog-container">
    {#each blogs as blog}
        <div class="blog-card">
            <div class="blog-title">{blog.title}</div>
            <div class="blog-description">{blog.description}</div>
            <a class="blog-link" href={blog.link} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
    {/each}
</div>

<div class="more-blogs">
    For more, check out <a href="https://blog.ritom.site" target="_blank" rel="noopener noreferrer">blog.ritom.site</a>.
</div>