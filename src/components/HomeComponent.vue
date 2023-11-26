<template>
<TableComponent></TableComponent>
  <div class="videos">
  <iframe class="video-one" width="560" height="315" src="https://www.youtube.com/embed/zQB4WQ8psv0?si=tHkO3yIerIfr7Sih" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe class="video-two" width="560" height="315" src="https://www.youtube.com/embed/arZhE8dxiOM?si=6eTvs3PLiYk2q5Bm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</template>

<script setup>
import TableComponent from '../components/TableComponent.vue';
</script>

<style scoped>
.videos {
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  
  }
  .video-one {
    width: 45vw;
    height: 50vh;
    border: 2px solid grey;
    box-shadow: 1px 1px 1px  grey;
  }
  .video-two {
    width: 45vw;
    height: 50vh;
    border: 2px solid grey;
    box-shadow: 1px 1px 1px grey;
  }


  @media all and (max-width:600px) {

    .videos{
      display: grid;
      grid-template-columns: 1fr;
      place-items: center;
    }
    .video-one {
    width: 90%;
    height: 70vh;
    border: 2px solid grey;
    box-shadow: 1px 1px 1px  grey;
  }

  .video-two {
    width: 90%;
    height: 70vh;
    border: 2px solid grey;
    box-shadow: 1px 1px 1px grey;
  }
  }
</style>