<script>
    import Bolt from "$lib/Icons/Bolt.png"
    import Home from "$lib/Icons/Home.png"
    import Person from "$lib/Icons/Person.png"
</script>

<nav>
    <a href="/" class="nav-link">
        <img class="icon" width="24px" height="24px" src={Home} alt="Home navbar icon">
        <span class="nav-text">Home</span>
    </a>
    <a href="/projects" class="nav-link">
        <img class="icon" width="24px" height="24px" src={Bolt} alt="Bolt navbar icon">
        <span class="nav-text">Projects</span>
    </a>
    <a href="/profile" class="nav-link">
        <img class="icon" width="24px" height="24px" src={Person} alt="Person navbar icon">
        <span class="nav-text">Socials</span>
    </a>
</nav>

<style>
    nav {
        display: flex;
        margin-left: auto;
        margin-right: 1rem;
        margin-bottom: 6px;
        width: max-content;
        height: fit-content;
        border-width: 1px;
        border-style: solid;
        border-color: var(--nav-border);
        background: var(--nav-bg);
        padding: 8px;
        border-radius: 16px;
        gap: 0.5rem;
        border-top-right-radius: 2px;
        border-top-left-radius: 2px;
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
    a:hover .icon {
        filter: invert(98%) sepia(55%) saturate(1754%) hue-rotate(68deg) brightness(97%) contrast(83%); 
        /* the above filter is for accent color */
    }
    a:hover .nav-text {
        color: var(--primary);
    }
    a span {
        margin-left: 2px;
        margin-right: 2px;
    }

    .icon {
        margin-top: auto;
        margin-bottom: auto;
        filter: invert(100%) sepia(0%) saturate(7497%) hue-rotate(66deg) brightness(97%) contrast(101%);
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
        .icon {
            display: none;
            width: 0;
            height: 0;
            margin: 0;
            padding: 0;
        }
    }

</style>