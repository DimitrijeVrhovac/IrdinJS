<script setup>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import LoaderComponent from './components/LoaderComponent.vue';
</script>

<template>
  <div>
    <LoaderComponent />

  </div>
  <HeaderComponent/>    
  <RouterView/>


<FooterComponent/>
</template>

<style scoped>

</style>