<template>
  <div class="home">
    <h1>HOME</h1>
    <Cart />
    <div class="allProducts">
      <div
        v-for="product in shopStore.products"
        :key="product.id"
        class="product"
      >
        <p>Name: {{ product.name }} </p>
        <p>Price: {{ product.price }}</p>
        <img :src="product.image" />
        <button @click="shopStore.addToCart(product)">ADD TO CART</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Cart from "@/components/CartComponent.vue"
import { useShopStore } from '@/stores/shop'
const shopStore = useShopStore()
</script>

<style scoped>
.home {
  padding: 20px;
}

.allProducts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.product {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.product p {
  margin-bottom: 10px;
}

.product img {
  width: 100%;
  height: auto;
  margin-top: 10px;
}

.product button {
  margin-top: 10px;
  border-radius: 4px;
  height: 30px;
  cursor: pointer;
  border: none;
  background-color: #007bff; 
  color: #fff; 
  transition: background-color 0.3s ease;
}

.product button:hover {
  background-color: #0056b3; 
}
</style>
