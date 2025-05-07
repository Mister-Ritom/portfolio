<script lang="ts">
  import { onMount } from 'svelte';
  import Bgshape from '$lib/images/bgshape.svelte';
  import myPhoto from '$lib/images/myphoto.png';
  import Courses from '$lib/components/courses.svelte';

  let hero: HTMLElement;

  //on scroll change the opacity of the hero section
  onMount(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 300);
      hero.style.opacity = opacity.toString();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

</script>

<div bind:this={hero} class="hero">
  <h1>RitomG</h1>
  <p>A Computer Science Student</p>
</div>

<div class="image">
  <span class="shape">
    <Bgshape fill={false} />
  </span>
  <span class="shape2">    <Bgshape fill={true} /></span>

  <!-- Image inside SVG with clipPath -->
  <svg viewBox="0 0 100 100" class="clipped-photo">
    <defs>
      <clipPath id="blobClip">
        <path d="M11.1,-22.3C14.3,-17.5,16.5,-14.1,21.9,-10.7C27.3,-7.2,35.9,-3.6,36.6,0.4C37.3,4.4,30.1,8.8,26.1,14.7C22.1,20.6,21.2,27.9,17.4,33.6C13.6,39.2,6.8,43.2,-0.2,43.5C-7.1,43.8,-14.3,40.5,-19.8,35.8C-25.3,31.1,-29.2,25.1,-31.5,18.9C-33.8,12.8,-34.5,6.4,-34.4,0C-34.4,-6.3,-33.7,-12.7,-31.1,-18.4C-28.5,-24.1,-24.1,-29.1,-18.6,-32.6C-13.2,-36,-6.6,-37.8,-1.3,-35.6C4,-33.4,8,-27.1,11.1,-22.3Z"
          transform="translate(50 50)" />
      </clipPath>
    </defs>

    <image
      href={myPhoto}
      x="0"
      y="0"
      width="100"
      height="100"
      clip-path="url(#blobClip)"
      preserveAspectRatio="xMidYMid slice"
    />
  </svg>
</div>

<div class="space"></div>

<section class="additional">
  <div class="container">
    <h2>Additional Highlights</h2>

    <div class="block">
      <h3>Certifications</h3>
      <ul>
        <li>
          <Courses
          courseName="Responsive Web Design"
          courseDescription="freeCodeCamp"
          courseLink="https://www.freecodecamp.org/learn/2022/responsive-web-design/"
          />
        </li>
        <li>
          <Courses
          courseName="Microsoft Python Development Fundamentals"
          courseDescription="Coursera"
          courseLink="https://www.coursera.org/professional-certificates/microsoft-python-developer/"
          />
        </li>
        <li>
          <Courses
          courseName="Firebase Essentials"
          courseDescription="Udemy"
          courseLink="https://www.udemy.com/course/firebase-fundamentals/"
          />
        </li>
        <li>
          <Courses
          courseName="Flutter & Dart - The Complete Guide"
          courseDescription="Udemy"
          courseLink="https://www.udemy.com/course/flutter-latest-course/"
          />
        </li>
      </ul>
    </div>

    <div class="block">
      <h3>What People Say</h3>
      <blockquote>
        “Ritom is incredibly talented and committed. His work on our chat app project was top-notch.”
        <footer>— Client, Upwork</footer>
      </blockquote>
      <blockquote>
        “Highly recommended for any Flutter or web development project.”
        <footer>— Freelancer Reviewer</footer>
      </blockquote>
    </div>

    <div class="block">
      <h3>Latest Articles</h3>
      <ul>
        <li><a href="/blog/flutter-vs-svelte">Flutter vs Svelte: Which Should You Use in 2025?</a></li>
        <li><a href="/blog/deploy-chat-app-firebase">How I Deployed a Secure Chat App with Firebase</a></li>
        <li><a href="/blog/switching-from-pocketbase">Why I Switched from PocketBase to Firebase</a></li>
      </ul>
    </div>
  </div>
</section>


<style>
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .hero h1 {
    font-size: 4rem;
    font-weight: bold;
    margin: 0;
  }

  .hero p {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: #696969;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: -1;
    width: 100vw;
    height: 100vh;
  }

  .shape {
    position: absolute;
    top: 10%;
    left: 20%; 
    width: inherit;
    height: inherit;
    z-index: 2;
  }

  .shape2 {
    position: absolute;
    top: 10%;
    left: 20%;
    width: inherit;
    height: inherit;
    z-index: 0;
  }

  .clipped-photo {
    position: absolute;
    top: 10%;
    left: 20%;
    width: inherit;
    height: inherit;
    z-index: 1;
  }
  .additional {
  padding: 3rem 1rem;
}

.additional .container {
  max-width: 800px;
  margin: 0 auto;
}

.additional h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.block {
  margin-bottom: 2rem;
}

.block h3 {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  color: var(--secondary)
}

.block ul {
  padding-left: 1.2rem;
}

.block ul li {
  margin-bottom: 0.5rem;
}

blockquote {
  border-left: 4px solid #007acc;
  margin: 1rem 0;
  padding: 1rem;
  font-style: italic;
}

blockquote footer {
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

a {
  color: #007acc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.space {
  height: 30vh;
}

</style>
