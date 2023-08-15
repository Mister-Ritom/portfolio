<script>
    import "./Styles.css"
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte"
</script>

<header>
    <Navbar/>
</header>
<main>
    <slot/>
</main>
<footer>
    <Footer/>
</footer>

<style>
    footer {
        position: fixed;
        bottom: 0;
    }
</style>