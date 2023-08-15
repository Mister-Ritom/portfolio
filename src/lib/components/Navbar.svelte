<script>
</script>

<nav>
    <a href="/" class="nav-link">
        <span class="material-symbols-outlined">home</span>
        <span class="nav-text">Home</span>
    </a>
    <a href="/projects" class="nav-link">
        <span class="material-symbols-outlined">bolt</span>
        <span class="nav-text">Projects</span>
    </a>
    <a href="/profile" class="nav-link">
        <span class="material-symbols-outlined">person</span>
        <span class="nav-text">Socials</span>
    </a>
</nav>

<style>
    nav {
        display: flex;
        margin-left: auto;
        margin-right: 1rem;
        margin-top: 2px;
        margin-bottom: 6px;
        width: max-content;
        height: fit-content;
        border-width: 0.5px;
        border-style: solid;
        border-color: var(--nav-bd);
        background: var(--nav-bg);
        padding: 8px;
        border-radius: 16px;
        gap: 0.5rem;
    }
    nav:hover {
        background: var(--background);
    }
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text);
        width: fit-content;
        height: fit-content;
        border-style: solid;
        border-width: 0.5px;
        border-color: var(--background);
        padding: 2px;
        border-radius: 8px;
        transition: transform 128ms;
        box-shadow: 1px 1px var(--primary);
    }
    a:hover {
        transform: translate(0,-3px);
        border-color: var(--nav-bg);
    }
    a:hover .material-symbols-outlined {
        color: var(--accent);
    }
    a:hover .nav-text {
        color: var(--primary);
    }
    a span {
        margin-left: 2px;
        margin-right: 2px;
    }

    @media (max-width:720px) {
        nav {
            position: absolute;
            bottom: 0;
            left: 50%;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            padding: 4px;
            margin: 0;
            border-radius: 6px;
            border-bottom: none;
            border-left: none;
            border-right: none;
        }
        .material-symbols-outlined {
            display: none;
            width: 0;
            height: 0;
            margin: 0;
            padding: 0;
        }
    }

</style>