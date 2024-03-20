<template>
    <div class="dashboard">
        <h1>DASHBOARD</h1>
        <div class="statistics">
            <div class="statistic">
                <h3>Total Users</h3>
                <p>{{ totalUsers }}</p>
            </div>
            <div class="statistic">
                <h3>Total Orders</h3>
                <p>{{ totalOrders }}</p>
            </div>
            <div class="statistic">
                <h3>Total Revenue</h3>
                <p>{{ totalRevenue | currency }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const totalUsers = ref(100)
const totalOrders = ref(500)
const totalRevenue = ref(25000)

const currency = (value) => {
    return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
</script>

<style scoped>
.dashboard {
    padding: 20px;
}

.statistics {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.statistic {
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.statistic h3 {
    margin: 0;
    font-size: 18px;
}

.statistic p {
    font-size: 24px;
    font-weight: bold;
    margin-top: 5px;
    color: #007bff; 
}
</style>
