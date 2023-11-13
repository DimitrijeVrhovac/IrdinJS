<template>
<div class="img">

<img v-for="image in images" :key="image" :src="image.url"   @click="openModal(image)">
<Teleport to="body">
<ImgModalComponent :show="showModal" :currentImage="currentImage" :currentIndex="currentIndex " @close="closeModal" />
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
  const currentImage = ref(null)
  const currentIndex = ref(null)

  function openModal(image) {
    currentIndex.value = images.findIndex((img) => img.url === image.url);
  currentImage.value = images[currentIndex.value];
  showModal.value = true;
  
}

function closeModal() {
  currentImage.value = null;
  showModal.value = false;
}


</script>

<style scoped>

.img {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  place-items:center;
  
  background-color:transparent;
 
}

img { 
  width: 70%;
  height:50%;
  object-fit: cover;
  border: 0.06rem solid lightgrey;
  border-radius: 10px;
  box-shadow: 4px 4px 8px grey;
  cursor: pointer;
}



</style>