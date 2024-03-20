<template>
    <main class="container">
      <h1>Our Drinks</h1>
      <select @change="handleChange" v-model="type" class="select-type">
        <option value="All">All</option>
        <option value="Cocktail">Cocktail</option>
        <option value="Whiskey">Whiskey</option>
        <option value="Wine">Wine</option>
        <option value="Beer">Beer</option>
        <option value="Sparkling Wine">Sparkling Wine</option>
      </select>
      <p>Click on a drink for more information!</p>
      <div class="drinks">
        <div v-for="drink in drinks" :key="drink.id" @click="goToDrink(drink.id)" class="card">
          <h2>{{ drink.name }}</h2>
          <p class="price">${{ drink.price.toFixed(2) }}</p>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import drinksData from "../data.json";
  import { ref, watch, onMounted } from "vue";
  import { useRouter, useRoute } from "vue-router";
  
  const router = useRouter();
  const route = useRoute();
  const drinks = ref(drinksData);
  const type = ref("All");
  

  onMounted(() => {
    type.value = route.query.type || "";
  });
  

  watch(type, () => {
    if (type.value === "All") {
      drinks.value = drinksData;
    } else {
      drinks.value = drinksData.filter((drink) => drink.type === type.value);
    }
  });
  

  function handleChange() {
    router.push({ query: { type: type.value } });
  }
  
  function goToDrink(drinkId) {
    router.push(`/drink/${drinkId}`);
  }
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  .select-type {
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
  }
  
  .drinks {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .card {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    min-width: 200px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .price {
    font-size: 18px;
    margin-top: 5px;
  }
  </style>
  