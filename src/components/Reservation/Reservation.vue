<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app style="background-color: #e3e8ed">
      <div>
        <div class="pb-5">
          <p class="H-Title">Reservation Management</p>
          <p class="Title">Reservation Management > Reservation List</p>
        </div>
        <div class="pb-5">
          <Search_reservation />
        </div>
        <div class="pb-5">
          <Reservation_table />
        </div>
  
      </div>
    </v-app>
  </template>
  <script setup lang="js">
  import Search_reservation from "@/components/Reservation/Search_reservation.vue";
  import Reservation_table from "@/components/Reservation/Reservation_table.vue";
  
  </script>
  <style scoped>
  .H-Title {
    font-size: 20px;
    font-weight: 700;
    color: #242424;
    margin-left: 5%;
    margin-top: 2%;
  }
  .Title {
    font-size: 12px;
    font-weight: 500;
    color: #8899a8;
    margin-left: 5%;
  }
  
  </style>