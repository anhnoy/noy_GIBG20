<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app style="background-color: #e3e8ed">
      <div>
        <div class="pb-5">
          <p class="H-Title">Product list</p>
          <p class="Title">Service Management > Product List</p>
        </div>
        <div class="pb-5">
          <Search_Product />
        </div>
         <div class="pb-5">
          <Data_table />
        </div>
  
      </div>
    </v-app>
  </template>
  <script setup lang="js">
  import Search_Product from "@/components/Service_Management/Product_list/Search_Product.vue";
  import Data_table from "@/components/Service_Management/Product_list/Product_table.vue";
  
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