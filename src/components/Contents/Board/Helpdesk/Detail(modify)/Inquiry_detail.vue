<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app style="background-color: #e3e8ed">
      <div>
        <div class="pb-5">
          <p class="Page_name">1:1 inquiry details</p>
          <p class="Page_name_title">Content Management > Bulletin Board Management > 1:1 Inquiry Management > 1:1 Inquiry Details</p>
        </div>
        <div class="pb-5">
        <Basic_Information />
      </div>  <div class="pb-5">
        <Inquiry_Details />
      </div>  <div class="pb-5">
        <Register_admin />
      </div>
      <v-row>
        <v-col align="center" justify="center">
          <v-btn elevation="0" color="#346DDB" class="button" @click="this.$router.push({ path: '/Inquiry' })">
            List
          </v-btn>
        </v-col>
      </v-row>
      </div>
    </v-app>
  </template>
  <script setup lang="js">
  import Basic_Information from "@/components/Contents/Board/Helpdesk/Detail(modify)/Basic_Information.vue";
  import Inquiry_Details from "@/components/Contents/Board/Helpdesk/Detail(modify)/Inquiry_Details.vue";
  import Register_admin from "@/components/Contents/Board/Helpdesk/Detail(modify)/Register_admin.vue";
  </script>
  <style scoped>
  @import '/src/assets/css/style.css';
  </style>