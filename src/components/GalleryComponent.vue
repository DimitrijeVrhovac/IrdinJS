<template>
<div class="img">

<img v-for="image in images" :key="image.id" :src="image.url"  :show="showModal" @click="showModal=true">

<ImgModalComponent :show="showModal" @close="showModal=false"/>

</div>  
</template>

<script setup>

import {useGalleryStore} from '../stores/galleryStore'
import ImgModalComponent from './ImgModalComponent.vue';
import  {ref} from 'vue'
  const store = useGalleryStore()

  const images = store.images

  store.fill()

  const showModal = ref(true)


</script>

<style scoped>

.img {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  gap: 0.026rem;
}

img { 
  max-width: 10rem;
  max-height: 10rem;
}

</style>