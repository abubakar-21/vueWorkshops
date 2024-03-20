<template>
  <div class="app">
    <header>
      <h1>BestBuy</h1>
      <h3 :class="authStore.isLoggedIn ? 'online' : 'offline'">
        Login State: {{ authStore.isLoggedIn ? "Online" : "Offline" }}
      </h3>
    </header>
    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/login" class="nav-link">Login</RouterLink>
      <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the app takes up at least the full height of the viewport */
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333; /* Dark background color */
  color: #fff; /* White text color */
  padding: 10px 50px;
}

h1 {
  margin: 0; /* Remove default margin */
}

nav {
  display: flex;
  justify-content: center;
  background-color: #f8f9fa; /* Light background color */
  padding: 10px 0;
}

.nav-link {
  margin: 0 10px; /* Add spacing between nav links */
  text-decoration: none;
  color: #333; /* Dark text color */
  font-size: 18px;
}

.offline,
.online {
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 14px;
}

.offline {
  border: 1px solid #dc3545; /* Red border for offline */
  color: #dc3545; /* Red text color for offline */
}

.online {
  border: 1px solid #28a745; /* Green border for online */
  color: #28a745; /* Green text color for online */
}
</style>
