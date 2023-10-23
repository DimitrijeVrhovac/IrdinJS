<template>
  <div class="modal" v-if="show">
    <div class="modal-content"  >
      
      <button @click="$emit('close')">close</button>
    </div>
  </div>
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
</style>