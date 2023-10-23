<template>
<div class="img">

<img v-for="image in images" :key="image.id" :src="image.url"  :show="showModal" @click="showModal=true">
<Teleport to="body">
<ImgModalComponent :show="showModal" @close="showModal=false"/>
</Teleport>
</div>  
</template>

<script setup>

import {useGalleryStore} from '../stores/galleryStore'
import ImgModalComponent from './ImgModalComponent.vue';
import  {ref} from 'vue'
  const store = useGalleryStore()

  const images = store.images

  store.fill()

  const showModal = ref(false)


</script>

<style scoped>

.img {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  gap: 0.5rem;
}

img { 
  height: 10rem;
  width: 15rem;
  max-width: 15rem;
  max-height: 15rem;
  border: 0.06rem solid black;
  border-radius: 1rem;
  box-shadow: 5px 5px 10px #888888;
}

</style>