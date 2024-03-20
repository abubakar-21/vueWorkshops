<template>
  <div class="container">
    <div class="input-container">
      <input type="text" v-model="data1Input" placeholder="Ange värden för Data 1" class="input-field">
      <input type="text" v-model="data2Input" placeholder="Ange värden för Data 2" class="input-field">
      <button @click="updateChartData" class="update-button">Uppdatera stapeldiagram</button>
    </div>
    <div class="chart-container">
      <bar-chart :data1="data1" :data2="data2" />
    </div>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';

export default {
  data() {
    return {
      data1: [50],
      data2: [225],
      data1Input: '',
      data2Input: ''
    };
  },
  components: {
    BarChart
  },
  methods: {
    updateChartData() {
      // Konvertera inmatade strängar till nummer
      const newData1 = this.data1Input.split(',').map(value => parseInt(value.trim()));
      const newData2 = this.data2Input.split(',').map(value => parseInt(value.trim()));

      // Uppdatera data1 och data2 med de nya värdena
      this.data1 = newData1;
      this.data2 = newData2;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
}

.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.input-field {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 21px;
}

.update-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.update-button:hover {
  background-color: #0056b3;
}

.chart-container {
  margin-left: 21px;
  width: 400px;
  height: 300px;
}
</style>
