<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app style="background-color: #e3e8ed">
      <div>
        <div class="pb-5">
          <p class="Page_name">Reservation Details</p>
          <p class="Page_name_title">Reservation Management > Reservation List > Reservation Details</p>
        </div>
        <div class="pb-5">
          <Order_information />
        </div>
        <div class="pb-5">
          <Reservation_product_information />
        </div>
        <div class="pb-5">
          <Reservation_information_Table />
        </div>
        <div class="pb-5">
          <Reservation_change_information />
        </div>
        <div class="pb-5">
          <Reservation_information />
        </div>
        <div class="pb-5">
          <memo />
        </div>
        <v-row>
        <v-col align="center" justify="center">
          <v-btn variant="outlined" color="#346DDB" class="button" @click="this.$router.push({ path: '/partner' })" >
            cancellation
          </v-btn>
          <v-btn elevation="0" color="#346DDB" class="button"  @click="confirmEdit">
            Correction
          </v-btn>
        </v-col>
      </v-row>
        <div class="pb-5">
          <View_history />
        </div>
    

      </div>
    </v-app>
  </template>
  <script setup lang="js">
  import Order_information from "@/components/Reservation/Detail(Modify)/Order_information.vue";
  import Reservation_product_information from "@/components/Reservation/Detail(Modify)/Reservation_product_information.vue";
  import Reservation_information_Table from "@/components/Reservation/Detail(Modify)/Reservation_information_Table.vue";
  import Reservation_change_information from "@/components/Reservation/Detail(Modify)/Reservation_change_information.vue";
  import Reservation_information from "@/components/Reservation/Detail(Modify)/Reservation_information.vue";
  import memo from "@/components/Reservation/Detail(Modify)/memo.vue";
  import View_history from "@/components/Reservation/Detail(Modify)/View_history.vue";

  const confirmEdit = () => {
  if (window.confirm('Are you sure you want to edit this item?')) ;
};
  </script>
  <style scoped>
@import '/src/assets/css/style.css';
  
  </style>