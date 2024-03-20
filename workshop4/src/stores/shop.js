import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
  state: () => {
    return {
      products: [
        {
          id: 1,
          name: 'Laptop',
          price: 999.99, // Adjusted price
          image: 'https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg'
        },
        {
          id: 2,
          name: 'Washing machine',
          price: 599.99, // Adjusted price
          image: 'https://cdn.pixabay.com/photo/2017/08/10/03/01/washing-machine-2617514_1280.jpg'
        },
        {
          id: 3,
          name: 'Samsung Tv',
          price: 1499.99, // Adjusted price
          image: 'https://cdn.pixabay.com/photo/2019/06/30/18/19/tv-4308538_960_720.jpg'
        },
        {
          id: 4,
          name: 'Iphone 15 pro',
          price: 1299.99, // Adjusted price
          image: 'https://cdn.pixabay.com/photo/2015/12/15/03/56/macbook-1093641_960_720.jpg'
        }
      ],
      cartItems: []
    }
  },
  actions: {
    addToCart(item) {
      let newItem = JSON.parse(JSON.stringify(item))
      let index = this.cartItems.findIndex((product) => product.id === newItem.id)
      if (index !== -1) {
        this.products[index].quantity += 1
      } else {
        item.quantity = 1
        this.cartItems.push(item)
      }
    },
    removeFromCart(item) {
      let newItem = JSON.parse(JSON.stringify(item))
      this.cartItems = this.cartItems.filter((product) => product.id !== newItem.id)
    }
  },
  getters: {
    getCartItems() {
      return this.cartItems
    }
  }
})
