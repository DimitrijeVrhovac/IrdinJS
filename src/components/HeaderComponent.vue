<template>
  <div class="content">
    <div class="banner">
      <div class="overlay"></div>
    </div>
    <div class="logo">
      <router-link to="/" style="text-decoration: none"
        ><span class="first-name">IRDIN</span><span class="last-name">DINČI</span
        ><span class="music">music</span></router-link
      >
    </div>

    <button class="menu-toggle" id="menu-toggle" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </button>

    <nav class="main-nav" :class="{ 'show-menu': menuToggle }">
      <router-link class="nav-link" to="/" @click="hideMenu">Pocetna</router-link>
      <router-link class="nav-link" to="/about" @click="hideMenu">O Irdinu</router-link>
      <router-link class="nav-link" to="/gallery" @click="hideMenu">Galerija</router-link>
      <router-link class="nav-link" to="/contact" @click="hideMenu">Kontakt</router-link>
    </nav>
    <div class="social-media">
      <a :href="instagram" target="_blank"
        ><i class="fa-brands fa-instagram fa-4x" style="color: #001514"></i
      ></a>
      <a :href="you_tube" target="_blank"
        ><i class="fa-brands fa-youtube fa-4x" style="color: #001514"></i
      ></a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const instagram = ref('https://www.instagram.com/irdin_dinci/')
const you_tube = ref('https://www.youtube.com/@IrdinDinciOfficial/featured')
const menuToggle = ref(false)

const toggleMenu = () => {
  menuToggle.value = !menuToggle.value
}

const hideMenu = () => {
  if (window.innerWidth <= 600) {
    menuToggle.value = false;
  }
};
</script>

<style scoped>
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
  border-bottom: 5px solid grey;
}
.main-nav {
  background-color: transparent;

  margin-bottom: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 2rem;
}

nav a {
  text-decoration: none;
  font-size: clamp(2rem, 2vw, 3rem);
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
  font-family: 'Edu TAS Beginner', cursive;
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

@media all and (max-width: 600px) {
  .banner {
    display: none;
  }

  .social-media {
    font-size: 0.5rem;
    position: fixed;
    top: 2%;
    left: 2%;
  }

  .first-name {
    color: black;
    font-size: 10vw;
  }
  .last-name {
    color: #ff930a;
    font-size: 10vw;
  }

  .music {
    font-size: 3vw;
    font-family: 'Edu TAS Beginner', cursive;
    color: black;
  }

  .menu-toggle {
    position: absolute;
    display: block;
    z-index: 9999;
  }

  .main-nav {
    display: none;
  }

  .show-menu {
    position: absolute;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    top: 14%;
    left: 0;
    width: 80%;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }

  .menu-toggle  {
    color: #ff930a;
  }

  .content{
    height:20vh;
  }
}
</style>
