<template>
  <div id="app">
    <BaseLayout>
      <!-- Header Slot -->
      <template #header>
        <h1>Header</h1>
      </template>

      <!-- Main Content Slot -->
      <template #main>
        <CardRender
          v-for="(item, index) in database"
          :key="index"
          :name="item.name"
          :department="item.deparment"
          :salary="item.salary"
          :position="index"
          v-on:deleteItem="deleteCard"
        />
      </template>

      <!-- Footer Slot -->
      <template #footer>
        <p>Footer</p>
      </template>
    </BaseLayout>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardRender from "./components/CardRender.vue";
import BaseLayout from "./components/BaseLayout.vue";

let database = ref([
  {
    name: "Abbe",
    deparment: "Developer",
    salary: 42000
  },
  {
    name: "Juliana",
    deparment: "Engineering",
    salary: 55000
  },
  {
    name: "Robin",
    deparment: "Doctor",
    salary: 85000
  }
]);

function deleteCard(position) {
  console.log("This card have been pressed:", database.value[position])
  database.value.splice(position, 1);

}

</script>


<style scoped></style>
