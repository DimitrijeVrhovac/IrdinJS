<template>

  <div class="videos">
  <iframe class="video-one" width="560" height="315" src="https://www.youtube.com/embed/zQB4WQ8psv0?si=tHkO3yIerIfr7Sih" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe class="video-two" width="560" height="315" src="https://www.youtube.com/embed/arZhE8dxiOM?si=6eTvs3PLiYk2q5Bm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe class="video-three" width="560" height="315" src="https://www.youtube.com/embed/je0Nz6hXmXg?si=KYegnB9H4tMZbUZz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe class="video-four" width="560" height="315" src="https://www.youtube.com/embed/o3XoCwQgrEE?si=S1gSQRvXB7RBRBA3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe class="video-five" width="560" height="315" src="https://www.youtube.com/embed/8jVa309UvO0?si=Sq-CPDK-ozk_XagS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe class="video-six" width="560" height="315" src="https://www.youtube.com/embed/fNci1zHehLY?si=GQ0FuwjMi6hYzJ7B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div class="info">
    <p>USKORO NOVE DVE PESME</p>
  </div>
</template>

<script setup>

</script>

<style scoped>
.videos {
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
   
  
  }
  .video-one {
    width: 25vw;
    height: 25vh;
    border: 2px solid grey;
    box-shadow: 1px 1px 1px  grey;
  }
  .video-two {
    width: 25vw;
    height: 25vh;
    border: 2px solid grey;
    box-shadow: 1px 1px 1px grey;
  }
  .video-three {
    width: 25vw;
    height: 25vh;
    border: 2px solid grey;
    box-shadow: 1px 1px 1px grey;
  }
  .video-four {
    width: 25vw;
    height: 25vh;
    border: 2px solid grey;
    box-shadow: 1px 1px 1px grey;
  }
  .video-five {
    width: 25vw;
    height: 25vh;
    border: 2px solid grey;
    box-shadow: 1px 1px 1px grey;
  }
  .video-six {
    width: 25vw;
    height: 25vh;
    border: 2px solid grey;
    box-shadow: 1px 1px 1px grey;
  }
  .info{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .info p {
    font-size: 4vw;
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
  .video-three {
    width: 90%;
    height: 70vh;
    border: 2px solid grey;
    box-shadow: 1px 1px 1px grey;
  }
  .video-four {
    width: 90%;
    height: 70vh;
    border: 2px solid grey;
    box-shadow: 1px 1px 1px grey;
  }
  .video-five {
    width: 90%;
    height: 70vh;
    border: 2px solid grey;
    box-shadow: 1px 1px 1px grey;
  }
  .video-six {
    width: 90%;
    height: 70vh;
    border: 2px solid grey;
    box-shadow: 1px 1px 1px grey;
  }
  }
</style>