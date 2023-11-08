<template>
    <div class="banner">
      <div class="overlay"></div>
    </div>

    <p style="font-size: 2rem;">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consectetur quos esse natus reprehenderit neque, fugit, mollitia accusantium aliquid delectus enim deserunt vero laudantium vitae aspernatur, libero nulla aliquam! Placeat!
    Lorem, ipsum dolor.
    Lorem, ipsum dolor.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, possimus, dolorem laborum illo voluptatum
    delectus dolore, nostrum dolorum asperiores
  quis voluptates ipsum facilis facere iure porro doloremque error cupiditate non.</p>
  <div class="videos">
  <iframe class="video-one" width="560" height="315" src="https://www.youtube.com/embed/zQB4WQ8psv0?si=tHkO3yIerIfr7Sih" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe class="video-two" width="560" height="315" src="https://www.youtube.com/embed/arZhE8dxiOM?si=6eTvs3PLiYk2q5Bm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  </template>
  
  <script setup>
  
  
  </script>
  
  
  <style scoped>
  .banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/irdinCover.jpg');
  background-size: cover;
  z-index: -1; 
  opacity: 0.7;
  }

  .videos {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  
  }

 /* .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3); 
  z-index: 1; 
}*/
  </style>