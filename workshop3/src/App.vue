<script setup>
import { RouterView, RouterLink } from "vue-router"
</script>

<template>
  <header>
    <div class="logo">
      <RouterLink to="/">
        <img
          src="@/assets/logo.png"
          alt="Logo"
        />
      </RouterLink>
    </div>
    <nav>
      <ul>
        <li>
          <RouterLink
            active-class="active"
            to="/"
          >Home</RouterLink>
        </li>
        <li>
          <RouterLink
            active-class="active"
            to="/drinks"
          >Drinks</RouterLink>
        </li>
        <li>
          <RouterLink
            active-class="active"
            to="/about"
          >About</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa; /* Light gray background */
  padding: 20px 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
}

.logo img {
  height: 50px; /* Adjust the logo height */
}

nav ul {
  display: flex;
  gap: 30px;
  list-style: none;
}

nav a {
  color: #333; /* Dark text color */
  text-decoration: none;
  font-size: 18px;
}

nav a.active {
  font-weight: bold;
  text-decoration: none;
}
</style>
