<script setup>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import LoaderComponent from './components/LoaderComponent.vue'
</script>

<template>
  <div class="main">
    <LoaderComponent />

    <HeaderComponent />
    <RouterView />

    <FooterComponent />
  </div>
</template>

<style scoped>

.main {
  overflow-x: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
}


@media all and (max-width: 600px ){
  *{
    margin: 5px;
  }
}

</style>
