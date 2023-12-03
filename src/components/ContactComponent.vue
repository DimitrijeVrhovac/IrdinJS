<template>
  
  <div class="contact">
    <p>Contact us : +417/62902023</p>
    <p>E-mail : irdindinci@gmail.com</p>
    <p>Follow us :  <a :href="instagram" target="_blank"
        ><i class="fa-brands fa-instagram fa-4x" style="color: #001514"></i
      ></a>
      <a :href="you_tube" target="_blank"
        ><i class="fa-brands fa-youtube fa-4x" style="color: #001514"></i
      ></a>
      <a :href="tiktok" target="_blank"
        ><i class="fa-brands fa-tiktok fa-3x" style="color: #001514"></i
      ></a>
      <a :href="facebook" target="_blank"
        ><i class="fa-brands fa-facebook-f fa-3x" style="color: #001514"></i
      ></a>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'




const instagram = ref('https://www.instagram.com/irdin_dinci/')
const you_tube = ref('https://www.youtube.com/@IrdinDinciOfficial/featured')
const tiktok = ref('https://www.tiktok.com/@irdindinciofficial')
const facebook = ref("https://www.facebook.com/krnjici/")
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