<template>
<div class="img">

<img v-for="image in images" :key="image.id" :src="image.url"  :show="showModal" @click="openModal(image)">
<Teleport to="body">
<ImgModalComponent :show="showModal" :currentImage="currentImage" @close="closeModal" />
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
    currentIndex.value = images.findIndex((img) => img.id === image.id);
  currentImage.value = images[currentIndex.value];
  showModal.value = true;
  console.log(image.id)
}

function closeModal() {
  currentImage.value = null;
  showModal.value = false;
}


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
  cursor: pointer;
}

</style>