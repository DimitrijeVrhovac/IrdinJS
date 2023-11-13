<template>
  <div class="content">
    <div class="banner">
      <div class="overlay"></div>
    </div>
  <div class="logo">
  <router-link to="/" style="text-decoration: none;"><span class="first-name">IRDIN</span><span class="last-name">DINČI</span><span class="music">music</span></router-link>
  
</div>
  <nav class="main-nav">
    <router-link class="nav-link" to="/">Pocetna</router-link>
    <router-link class="nav-link" to="/about">O Irdinu</router-link>
    <router-link class="nav-link" to="/gallery">Galerija</router-link>
    <router-link class="nav-link" to="/contact">Kontakt</router-link>
    
  </nav>
  <div class="social-media">
  <a :href="instagram" target="_blank"><i class="fa-brands fa-instagram fa-4x" style="color: #001514;"></i></a>
  <a :href="you_tube" target="_blank"><i class="fa-brands fa-youtube fa-4x" style="color: #001514;"></i></a>
  </div>
  </div>
</template>

<script setup>
import { ref} from 'vue';

const instagram = ref('https://www.instagram.com/irdin_dinci/')
const you_tube = ref('https://www.youtube.com/@IrdinDinciOfficial/featured')

</script>

<style  scoped>

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Edu+TAS+Beginner:wght@400;500;700&family=Fira+Mono:wght@400;700&family=Nunito:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Quicksand:wght@400;700&family=Raleway:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Roboto:ital,wght@0,500;0,700;1,300&display=swap');

.content {
  height: 55vh;
}
.banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 55vh;
  background-image: url('/images/irdinCover.jpg');
  background-size: cover;
  z-index: -1; 
  opacity: 0.9;
  
  }
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
  color: black;
}


.logo { 
  position: sticky;
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

.music {
  font-size: 2.5vw;
  font-family:  'Edu TAS Beginner', cursive;
  color: black;
}

.social-media {
  
  position: fixed;
  top: 2%;
  left: 2%;
}

/* .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3); 
  z-index: 1; 
}*/

.nav-link {
  position: relative;
  color: black;
}

.nav-link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: #ff930a;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.5s ease-out;
}

.nav-link:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

</style>