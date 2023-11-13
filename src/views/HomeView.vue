<template>
  <div class="content">
    <div class="banner">
      <div class="overlay"></div>
    </div>
    <div class="table">
    <table>
      <thead>
        <tr>
          <td>Datum</td>
          <td>Vreme</td>
          <td>Mesto</td>
       </tr>
    </thead>
    <tbody>
      <tr>
        <td>01.01.2024.</td>
        <td>21:00</td>
        <td>Frankfurt</td>
      </tr>
      <tr>
        <td>14.55</td>
        <td>Diskoteka</td>
        <td>Beograd</td>
      </tr>
      <tr>
        <td>14.55</td>
        <td>Diskoteka</td>
        <td>Beograd</td>
      </tr>
      <tr>
        <td>14.55</td>
        <td>Diskoteka</td>
        <td>Beograd</td>
      </tr>
    </tbody>
    </table>
  </div>
  <div class="videos">
  <iframe class="video-one" width="560" height="315" src="https://www.youtube.com/embed/zQB4WQ8psv0?si=tHkO3yIerIfr7Sih" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe class="video-two" width="560" height="315" src="https://www.youtube.com/embed/arZhE8dxiOM?si=6eTvs3PLiYk2q5Bm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
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

  table {
    
    
    width: 80%;
    background-color: white;
    opacity: 0.7;
    color: black;
    border: 1px solid black;
    font-size: 3vh;
  }
  th, td {
      border: 1px solid black;
      text-align: left;
      padding: 8px;
    }
    th {
      background-color: #f2f2f2;
    }
    .table {
    display: flex;
    justify-content: center;
    align-items: center;
   width: 80%;
   
    }
    .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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