<template>
    <div class="container">
      <div v-if="currentDrink" class="drink-info">
        <h1>Drink Information</h1>
        <div class="drink-details">
          <p><strong>Name:</strong> {{ currentDrink.name }}</p>
          <p><strong>Type:</strong> {{ currentDrink.type }}</p>
          <p><strong>Price:</strong> ${{ currentDrink.price.toFixed(2) }}</p>
          <p v-if="currentDrink.rating"><strong>Rating:</strong> {{ currentDrink.rating }}</p>
        </div>
      </div>
      <div v-else>
        <p>Drink Not Found</p>
      </div>
      <button @click="goBack">Go Back</button>
      <RouterView />
    </div>
  </template>
  
  <script setup>
  import { useRoute, RouterView, useRouter } from "vue-router"
  import { ref, onBeforeMount } from "vue"
  import drinksData from "../data.json"
  
  const router = useRouter()
  const currentDrink = ref(null)
  const route = useRoute()
  const { id } = route.params
  
  onBeforeMount(() => {
    currentDrink.value = drinksData.find(drink => drink.id === parseInt(id))
  })
  
  function goBack() {
    router.back()
  }
  </script>
  
  <style scoped>
  .container {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .drink-info {
    margin-bottom: 20px;
  }
  
  .drink-details {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 4px;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  p {
    margin: 5px 0;
  }
  </style>
  