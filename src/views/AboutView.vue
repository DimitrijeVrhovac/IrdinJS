<template>
  <div class="about">



 <AboutComponent/>
  </div>
</template>

<script setup>
const windowHeight = window.innerHeight;
console.log("Visina prozora: " + windowHeight + " piksela");
import AboutComponent from '../components/AboutComponent.vue';

</script>


<style>

</style>