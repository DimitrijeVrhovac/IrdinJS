<template>
  
  <div class="contact">
    <p>Contact us : +381/xxxxx/xxxx/xx</p>
    <p>E-mail : example@gmail.com</p>
    <p>Follow us :  <a :href="instagram" target="_blank"
        ><i class="fa-brands fa-instagram fa-4x" style="color: #001514"></i
      ></a>
      <a :href="you_tube" target="_blank"
        ><i class="fa-brands fa-youtube fa-4x" style="color: #001514"></i
      ></a></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'




const instagram = ref('https://www.instagram.com/irdin_dinci/')
const you_tube = ref('https://www.youtube.com/@IrdinDinciOfficial/featured')
</script>

<style scoped>
  .contact{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .contact p {
    font-size: 2vw;
  }

  @media all and (max-width:600px){
    .contact p {
    font-size: 4vw;
  }
  }
</style>