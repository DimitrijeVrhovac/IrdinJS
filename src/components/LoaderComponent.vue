<template>
    <div v-if="isLoading" class="wrapper">
      <i class="fa-solid fa-music fa-beat-fade fa-2xl"></i>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  
  const isLoading = ref(true);
  
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false; // Postavite isLoading na false
    }, 3000);
  });
  </script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.wrapper {
    position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
} 
</style>