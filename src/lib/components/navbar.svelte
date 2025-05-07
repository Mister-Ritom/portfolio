<nav class="navbar">
  <div class="navbar-container">
    <div class="navbar-logo">
      <a href="/">RitomG</a>
    </div>
    <div class="navbar-links">
      <a href="/blogs">Blog</a>
      <a href="/projects">Projects</a>
      <a href="/contact">Contact</a>
    </div>
  </div>
</nav>

<style>

/* Navbar Styles */
.navbar {
  margin: 0 auto;
  padding: 20px 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  box-shadow: 0 1px 4px rgba(75, 144, 255, 0.1);
  border-radius: 8px;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo a {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
}

.navbar-logo a:hover {
  color: var(--primary);
}

.navbar-links {
  display: flex;
  gap: 32px; /* space-x-8 */
}

.navbar-links a {
  font-size: 1.125rem; /* text-lg */
  text-decoration: none;
  transition: color 0.3s;
}

.navbar-links a:hover {
  color: var(--secondary);
}

</style>