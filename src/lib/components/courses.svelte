<script>
    let {
        courseName,
        courseDescription,
        courseLink
        } = $props();
</script>

<style>
    .course-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, rgba(120, 120, 120, 0.8), rgba(54, 54, 54, 0.8));
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(74, 145, 226, 0.7);
        border-radius: 16px;
        padding: 8px;
        margin: 10px;
        box-shadow: 0 4px 8px rgba(245, 245, 245, 0.3);
    }

    .course-name {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .course-description {
        font-size: 1rem;
        line-height: 1.5;
    }
</style>

<div class="course-container">
    <div class="course-name">{courseName}</div>
    <a href={courseLink} class="course-description">{courseDescription}</a>
</div>