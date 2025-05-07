<script>
    const projects = [
      {
        name: "Parla",
        svg: "1f510.svg", // 🔐
        alt: "lock emoji",
        description: "End to End encrypted Chat app, even the server can't decode any message",
        techStack: "Dart, Flutter, Firebase",
      },
      {
        name: "Ananta",
        svg: "1f9d9-200d-2642-fe0f.svg", // 🧙‍♂️
        alt: "wizard emoji",
        description: "Minecraft client Mod",
        techStack: "Java, Kotlin and Forge",
      },
      {
        name: "My Notes",
        svg: "1f5c2.svg", // 🗂️
        alt: "file organizer emoji",
        description: "A simple yet stylish notes app",
        techStack: "Flutter and Firebase",
      },
      {
        name: "Adda",
        svg: "1f5e8.svg", // 🗨️
        alt: "speech bubble emoji",
        description: "A discord like chat app with grouping system and stylish design",
        techStack: "Flutter and Firebase",
      },
      {
        name: "Coffees",
        svg: "1f3ae.svg", // 🎮
        alt: "video game controller emoji",
        description: "A game with C++ and no game engine",
        techStack: "C++",
      },
    ];
    </script>
    
    <h1>
        Projects
    </h1>
    <h2>
        Currently working on
    </h2>
    <ul>
        <div style="height: 16rem;"></div>
    </ul>
    <h2>
        Completed Projects
    </h2>
    <div class="container">
        {#each projects as project}
            <div class="project">
                <div class="horizontal">
                <a href="https://github.com/mister-ritom/{project.name.replaceAll(" ", "-")}" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/{project.svg}"
                     alt={project.alt} width="64" height="64" />
                    </a>
                     <h3>{project.name}</h3>
                         <!-- Horizontal ellipsis SVG -->
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="5" cy="12" r="2" />
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="19" cy="12" r="2" />
                    </svg>
  
                </div>
                <div class="project-info">
                    <p>{project.description}</p>
                    <p><strong>Tech Stack:</strong> {project.techStack}</p>
                </div>
            </div>
        {/each}
    </div>
    <div style="height: 12rem;"></div>
    <style>
        p,h1,h2,h3 {
            cursor: default; /* Change cursor to default for better UX */
        }
        h1 {
            text-align: center;
            margin-top: 2rem;
        }
    
        h2 {
            text-align: center;
            margin-top: 2rem;
        }
    
        .container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            margin: 0 auto;
            max-width: 1200px; /* Center the container */
            margin-top: 2rem;
        }
    
        .project {
            background-color: whitesmoke;
            color: black;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            width: 30%; /* Adjusted width for 3-4 cards per row */
            min-width: 250px; /* Add a minimum width to prevent cards from becoming too narrow on small screens */
            box-sizing: border-box; /* Include padding and border in element's total width and height */
            flex-grow: 1; /* Allow items to grow to fill available space */
        }
        .project:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }
    
        .horizontal {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
        }
        .horizontal h3 {
            margin-left: 1rem; /* Space between image and text */
        }

        .horizontal svg {
            margin-left: auto; /* Align the SVG to the right */
            cursor: pointer; /* Change cursor to pointer for better UX */
        }
    
        /* Media query for smaller screens (e.g., tablets) */
        @media (max-width: 768px) {
            .container {
                gap: 16px; /* Increase gap for better spacing on smaller screens */
            }
            .project {
                width: 45%; /* 2 cards per row on tablets */
                margin-right: 0;
                margin-bottom: 16px;
            }
        }
    
        /* Media query for even smaller screens (e.g., phones) */
        @media (max-width: 480px) {
            .project {
                width: 100%; /* 1 card per row on phones */
            }
            .container {
               gap: 16px;
            }
        }
    </style>
    