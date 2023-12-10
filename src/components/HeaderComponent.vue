<template>
  <div class="content">
    <div class="banner">
      <div class="overlay"></div>
    </div>
    <div class="logo">
      <router-link to="/" style="text-decoration: none">
       <div class="name"><span class="first" style="font-family:'Ephesis', cursive; font-size: 9vw; font-weight: bold; color: black">I</span><span class="second" style="font-family:  'Ephesis', cursive; font-weight: bold; font-size: 9vw; color:#ff930a ;">D</span><span class="music">Music</span></div>  
        </router-link>

    
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
        ><i class="fa-brands fa-instagram fa-3x" style="color: #001514"></i
      ></a>
      <a :href="you_tube" target="_blank"
        ><i class="fa-brands fa-youtube fa-3x" style="color: #001514"></i
      ></a>
      <a :href="tiktok" target="_blank"
        ><i class="fa-brands fa-tiktok fa-3x" style="color: #001514"></i
      ></a>
      <a :href="facebook" target="_blank"
        ><i class="fa-brands fa-facebook-f fa-3x" style="color: #001514"></i
      ></a>
      
    </div>
    <div class="links">
      <a :href="grand" target="_blank"><img src="/images/grand.jpg" alt=""></a>
      <a :href="express" target="_blank"><img src="/images/logo-express.png" alt=""></a>
      <a :href="zenicaBlog" target="_blank"><img src="/images/zenicaBlog.png" alt=""></a>
      <a :href="nezavisneNovine" target="_blank"><img src="/images/nezavisneNovine.jpg" alt=""></a>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const instagram = ref('https://www.instagram.com/irdin_dinci/')
const you_tube = ref('https://www.youtube.com/@IrdinDinciOfficial/featured')
const tiktok = ref('https://www.tiktok.com/@irdindinciofficial')
const facebook = ref("https://www.facebook.com/krnjici/")
const grand = ref("https://grand.nova.rs/showbiz/irdin-dinci-godine-su-samo-broj/")
const express = ref("https://express.ba/tag/irdin-dinci/")
const nezavisneNovine = ref("https://www.nezavisne.com/magazin/scena/Irdin-Dinci-objavio-spot-za-pjesmu-Godine-su-samo-broj/796594")
const zenicaBlog = ref("https://www.zenicablog.com/zenicanin-irdin-dinci-uspjesno-gradi-muzicku-karijeru-sa-sedam-godina-pobijedio-na-djecjem-festivalu-nove-pjesme-snima-sa-banetom-vasicem-i-slavkonijem/")
const menuToggle = ref(false)

const toggleMenu = () => {
  menuToggle.value = !menuToggle.value
}

const hideMenu = () => {
  if (window.innerWidth <= 600) {
    menuToggle.value = false
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Edu+TAS+Beginner:wght@400;500;700&family=Fira+Mono:wght@400;700&family=Nunito:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Quicksand:wght@400;700&family=Raleway:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Roboto:ital,wght@0,500;0,700;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Edu+TAS+Beginner:wght@400;500;700&family=Ephesis&family=Fira+Mono:wght@400;700&family=Nunito:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Quicksand:wght@400;700&family=Raleway:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Roboto:ital,wght@0,500;0,700;1,300&display=swap');
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 55vh;
}
.name{
  font-family:  'Ephesis', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  
  top: 0;
 
  
  
}

.music {
  font-size: 2.5vw;
  font-family: 'Edu TAS Beginner', cursive;
  color: black;}
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
  margin-top: auto;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10rem;
  align-self: center;
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
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
 
  

}

/*.logo img {
  width: 20vw;
  height: 25vh;
}
*/

.links {
  position: absolute;
  top: 2%;
  right: 2%;
  display: flex;
  flex-direction: column;
}

.links img {
  width: 4vw;
  height: 5vh;
}

.social-media {
  position: fixed;
  display: flex;
  flex-direction: column;
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

  

  
  .menu-toggle {
    top: 3%;
    right: 5%;
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
    top: 10%;
    left: 11%;
    width: 80%;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }

  .menu-toggle {
    color: #ff930a;
  }

  .content {
    height: 10vh;
  }

  .links {
  position: absolute;
  display: none;
  right: 2%;
  display: flex;
  flex-direction: row;
  margin: 2%;
  padding: 2px;
 }
 .links a {
  display: none;
 }
}
</style>
