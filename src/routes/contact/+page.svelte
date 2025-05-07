<script>
    let fullName = "Ritom Ghosh";
    let email = "ritomghosh856@google.com";
    let github = "https://github.com/mister-ritom";
    let linkedin = "https://linkedin.com/in/yourusername";// Don't have one yet
</script>

<style>
    .contact-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        padding: 2rem;
        font-family: Arial, sans-serif;
    }

    h1 {
        text-align: center;
        margin-bottom: 1.5rem;
    }

    .contact-item {
        margin-bottom: 1rem;
    }

    .contact-item a {
        color: #0077b5;
        text-decoration: none;
    }

    .contact-item a:hover {
        text-decoration: underline;
    }
    strong {
        font-weight: bold;
        font-size: large;
    }
</style>

<div class="contact-container">
    <h1>Contact Me</h1>
    <div class="contact-item">
        <strong>{fullName}</strong>
    </div>
    <div class="contact-item">
        <strong>Email:</strong> <a href="mailto:{email}">{email}</a>
    </div>
    <div class="contact-item">
        <strong>GitHub:</strong> <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>
    </div>
    <div class="contact-item">
        <strong>LinkedIn:</strong> <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a>
    </div>
</div>