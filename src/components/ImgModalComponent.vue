<template>
  <Transition  name="modal" >
  <div class="modal" v-if="show">
    <div class="modal-content"  >
      
      <button @click="$emit('close')">close</button>
    </div>
  </div>
</Transition>
</template>

<script setup>

import { ref } from 'vue';

 defineProps({
  show : ref(Boolean)
 })
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
  background-color: white;
  padding: 1rem;
  width: 80vw;
  max-width: 800px;
  border-radius: 7px;
  height: 800px;
  max-height: 80vh;
  
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
  
 
</style>