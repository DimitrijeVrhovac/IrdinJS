<template>
  <div class="logo">
  <span class="first-name">IRDIN</span><span class="last-name">DINČI</span>
</div>
  <nav class="main-nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/gallery">Gallery</router-link>
    <router-link to="/contact">Contact</router-link>
  
  </nav>
</template>

<script setup>


</script>

<style  scoped>

.main-nav {
  background-color: grey;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5rem;
}
nav a {
  text-decoration: none;
  font-size: clamp(2rem , 2vw , 3rem);
}


.logo { 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aqua;
}
.first-name {
  color: black;
  font-size: 5vw;
}
.last-name {
  color: red;
  font-size: 4vw;
}

</style>