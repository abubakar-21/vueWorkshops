<template>
    <svg :width="svgWidth" :height="svgHeight">
      <rect v-for="(height, index) in data1" :key="'bar1-' + index"
            :x="(index * (barWidth + barSpacing)) + barSpacing"
            :y="calculateY(height)"
            :width="barWidth"
            :height="height"
            fill="red"/> <!-- Ändra färgen till röd -->
      <rect v-for="(height, index) in data2" :key="'bar2-' + index"
            :x="(index * (barWidth + barSpacing)) + barSpacing + barWidth + barSpacing"
            :y="calculateY(height)"
            :width="barWidth"
            :height="height"
            fill="green"/> <!-- Ändra färgen till grön -->
    </svg>
  </template>
  
  <script>
  export default {
    props: {
      data1: {
        type: Array,
        required: true
      },
      data2: {
        type: Array,
        required: true
      },
      svgWidth: {
        type: Number,
        default: 400
      },
      svgHeight: {
        type: Number,
        default: 300
      },
      barWidth: {
        type: Number,
        default: 40
      },
      barSpacing: {
        type: Number,
        default: 10
      }
    },
    methods: {
      calculateY(height) {
        return this.svgHeight - height;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Eventuell CSS-styling för din komponent */
  </style>
  