<template>
    <div class="cart-container">
      <h3>CART</h3>
      <div class="products">
        <div class="product-in-cart" v-for="item in data.getCartItems" :key="item.id">
          <p><strong>Name:</strong> {{ item.name }}</p>
          <p><strong>Price:</strong> ${{ item.price.toFixed(2) }}</p>
          <p><strong>Quantity:</strong> {{ item.quantity }}</p>
          <p><strong>Total price:</strong> ${{ (item.price * item.quantity).toFixed(2) }}</p>
          <button @click="data.removeFromCart(item)">REMOVE FROM CART</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useShopStore } from "@/stores/shop"
  const data = useShopStore();
  </script>
  
  <style scoped>
  h3 {
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .cart-container {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
  }
  
  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .product-in-cart {
    flex: 1 1 300px; /* Ensure equal width for products */
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
  }
  
  .product-in-cart p {
    margin: 5px 0;
  }
  
  button {
    padding: 5px 10px;
    border: none;
    background-color: #dc3545; /* Red color */
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #c82333; /* Darker shade of red on hover */
  }
  </style>
  