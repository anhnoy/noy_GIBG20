<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app style="background-color: #e3e8ed">
      <div>
        <div class="pb-5">
          <p class="Page_name">Reservation Management</p>
          <p class="Page_name_title">Reservation Management > Reservation List</p>
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
@import '/src/assets/css/style.css';
  
  </style>