<template>
  <Transition  name="modal" >
  <div class="modal" v-if="show">
    <div class="modal-content"  >
      <img :src="currentImage.url"  alt="Image" />
      <button class="button" @click="$emit('close')">close</button>
    </div>
  </div>
</Transition>
</template>

<script setup>

import { ref } from 'vue';
import {useGalleryStore} from '../stores/galleryStore'
import { computed } from 'vue';
const store = useGalleryStore()

  const images = store.images
  const props = defineProps({
  show : ref(Boolean),
  currentIndex : Number
 })
 const currentImage = computed(() => images[props.currentIndex]);

  
 
 




</script >

<style scoped>
  .modal {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .6);
    display: grid;
    place-items: center;
  }
  .modal-content {
  background-color: transparent;
  padding: 1rem;
  width: 80vw;
  max-width: 800px;
  border-radius: 7px;
  height: 800px;
  max-height: 80vh;
  display: grid;
  place-items: center;
  }

  .modal-enter-active , .modal-leave-active {
    transition: opacity 0.5s;
  }
  .modal-enter-from, .modal-leave-to {
    opacity: 0;
  }
 .modal-enter-to, .modal-leave-from {
    opacity: 100;
  }

  img {
    width: 90%;
    height: 90%;
  }
  button { 
    position: absolute;
    top : 0 ;
    left : 0
  }
  
 
</style>