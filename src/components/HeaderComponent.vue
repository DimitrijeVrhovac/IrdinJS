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
  background-color: transparent;
  
  margin-bottom: 5rem ;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10rem;
}
nav a {
  text-decoration: none;
  font-size: clamp(2rem , 2vw , 3rem);
  color: #A9BCD0;
}


.logo { 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  margin: 0;
}
.first-name {
  color: black;
  font-size: 8vw;
}
.last-name {
  color: #ff930a;
  font-size: 8vw;
}

</style>