<template>
    
  <div class="table">
    
    <table>
        <h1>NASTUPI</h1>
      <thead>
        <tr>
          <td>Datum</td>
          <td>Vreme</td>
          <td>Mesto</td>
       </tr>
    </thead>
    <tbody>
      <tr>
        <td>24.11.2023.</td>
        <td>21:00</td>
        <td>Cirih</td>
      </tr>
      <tr>
        <td>27.11.2023.</td>
        <td>Diskoteka</td>
        <td>Beograd</td>
      </tr>
      <tr>
        <td>28.11.2023.</td>
        <td>Diskoteka</td>
        <td>Sabac</td>
      </tr>
      <tr>
        <td>29.11.2023.</td>
        <td>Diskoteka</td>
        <td>Sarajevo</td>
      </tr>
      <tr>
        <td>30.11.2023.</td>
        <td>Diskoteka</td>
        <td>Zenica</td>
      </tr>
      <tr>
        <td>09.12.2023.</td>
        <td>Diskoteka</td>
        <td>Beograd</td>
      </tr>
      <tr>
        <td>18.12.2023.</td>
        <td>Diskoteka</td>
        <td>Vicenca Italija</td>
      </tr>
      <tr>
        <td>13.02.2024.</td>
        <td>Diskoteka</td>
        <td>Kraljevo</td>
      </tr>
    </tbody>
    </table> 
  </div>
  <p class="text" style="display: flex; background-color: #EBE3D5; flex-direction: row; align-items: center; justify-content: center; font-size: 6vw;"><b>Usoro dve nove pesme !!</b></p>
</template>

<script setup>


</script>

<style scoped>
table {
    
    
    width: 80%;
    background-color: #EBE3D5;
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
   
   
    }

    @media all and (max-width: 600px){
      .table {
        position: relative;
        top: 20px;
      }

      .text{
        margin-top: 0.7rem;
        border: none;
        background-color: transparent !important;
      }
    }
</style>