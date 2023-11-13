<template>
  <Transition  name="modal" >
   
  <div class="modal" v-if="show">
    
    <button  @click="previousImage()" class="previous"><i class="fa-solid fa-arrow-left fa-2xl"></i></button>
      
      <div class="img-modal">
      <img :src="currentImage.url"  alt="Image" />
    </div>
    <button  @click="nextImage()" class="next"><i class="fa-solid fa-arrow-right fa-2xl"></i></button>
      <button class="button" @click="$emit('close')">X</button>
    </div>
    
 
</Transition>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
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
  } else {
    currentIndexInArrey.value = 0
  }
} ;

function previousImage() {
  if(currentIndexInArrey.value > 0) {
    currentIndexInArrey.value--
  } else {
    currentIndexInArrey.value = images.length - 1
  }
} ;
onMounted(() => {
  window.addEventListener("keydown", handleKeyPress);
});
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyPress);
});


const handleKeyPress = (event) => {
  if (event.key === "ArrowLeft") {
    previousImage();
  } else if (event.key === "ArrowRight") {
    nextImage();
  }
};



</script >

<style scoped>
  .modal {
  margin: 0;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .9);
  display: grid;
  place-items: center;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 9);
  width: 100%; 
  height: 100%;
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
  max-height: 800px;
  max-width: 1200px;
  object-fit: contain; 
  padding: 4rem 0 4rem 0;
 
  }
  .button { 
    position:absolute;
    top : 0 ;
    left : 0;
    cursor: pointer;
    background-color: transparent;
    color: azure;
    font-size: 3rem;
    border: none;
    
  }

  .img-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
   
    display: grid;
    place-items: center;
    
    
  }

  .next {
    position: absolute;
    left: 90%;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    color: whitesmoke;
    cursor: pointer;
    z-index: 999;
  }

  .previous {
    position: absolute;
    left: 5%;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    color: whitesmoke;
    cursor: pointer;
    z-index: 999;
  }

  
  
  
 
</style>