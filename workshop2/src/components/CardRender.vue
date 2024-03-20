<template>
  <div class="container">
    <h2>Name: {{ name }}</h2>
    <p>Department: {{ department }}</p>
    <p>Salary: {{ salary }}</p>
    <p>Position: {{ position }}</p>
    <ButtonComponent>
      <template #button>
        <button @click="$emit('deleteItem', position)">Delete {{ name }}</button>
      </template>
    </ButtonComponent>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  department: String,
  salary: Number,
  position: Number
})

import ButtonComponent from './ButtonComponent.vue';

</script>

<style scoped>
h2 {
  padding: 0;
  margin: 0;
}

.container {
  border: 1px solid rgb(28, 30, 31);
  width: 300px;
  height: 400px;
  margin: 1em auto 1em auto;
  padding: 1em;
  border-radius: 3px;
  font-size: 1.3em;
}
</style>
