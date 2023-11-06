<template>
  <Transition  name="modal" >
  <div class="modal" v-if="show">
    <div class="modal-content"  >
      <div class="img-modal">
      <button @click="previousImage()" class="previous">previous</button>
      <img :src="currentImage.url"  alt="Image" />
      <button @click="nextImage()" class="next">next</button>
    </div>
      <button class="button" @click="$emit('close')">close</button>
    </div>
  </div>
</Transition>
</template>

<script setup>

import { ref } from 'vue';
import {useGalleryStore} from '../stores/galleryStore'
import { computed } from 'vue';
import { watch } from 'vue';

  const store = useGalleryStore()
  
  const props = defineProps({
  show : ref(Boolean),
  currentIndex : Number
 })

 const currentIndexInArrey = ref(props.currentIndex)
 const images = store.images
 watch(() => props.currentIndex, (newIndex) => {
  currentIndexInArrey.value = newIndex;
});

 const currentImage = computed(() => images[currentIndexInArrey.value]);

function nextImage() {
  if(currentIndexInArrey.value < images.length - 1) {
    currentIndexInArrey.value ++
  }
} ;

function previousImage() {
  if(currentIndexInArrey.value > 0) {
    currentIndexInArrey.value--
  }
}




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
    width: 100%;
    height: 100%;
  }
  .button { 
    position: absolute;
    top : 0 ;
    left : 0;
    cursor: pointer;
    
  }

  .img-modal {
    display: grid;
    place-content: center;
  }

  .next {
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    color: whitesmoke;
    cursor: pointer;
  }

  .previous {
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    color: whitesmoke;
    cursor: pointer;
  }
  
  
 
</style>