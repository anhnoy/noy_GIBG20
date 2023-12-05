<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app style="background-color: #e3e8ed">
      <div>
        <div class="pb-5">
          <p class="Page_name">Tire information management</p>
          <p class="Page_name_title">Service Management > Tire Information Management</p>
        </div>
        <div class="pb-5">
          <v-tabs
        v-model="tab"
        color="#346DDB"
        class="Page_name_title"

      >
        <v-tab value="1">Brand</v-tab>
        <v-tab value="2">Section width</v-tab>
        <v-tab value="3">Aspect ratio</v-tab>
        <v-tab value="4">Inch</v-tab>
      </v-tabs>
      <v-window v-model="tab">
          <v-window-item value="1">
            <div class="pb-5">
          <Brand_Registration />
        </div>
        <div class="pb-5">
          <Brand_table />
        </div>
          </v-window-item>
  
          <v-window-item value="2">
            <div class="pb-5">
          <Section_width />
        </div>
        <div class="pb-5">
          <Section_width_table />
        </div>
          </v-window-item>
          <v-window-item value="3">
            <div class="pb-5">
          <aspect />
        </div>
        <div class="pb-5">
          <aspect_table />
        </div>
          </v-window-item>
          <v-window-item value="4">
            <div class="pb-5">
          <inch />
        </div>
        <div class="pb-5">
          <inch_table />
        </div>
          </v-window-item>
        </v-window>
        </div>
  
      </div>
    </v-app>
  </template>
  <script setup lang="js">
  import { ref } from "vue";
  const tab = ref(null);
  import Brand_Registration from "@/components/Service_Management/Tire_information/Brand_Registration.vue";
  import Brand_table from "@/components/Service_Management/Tire_information/Brand_table.vue";
  import Section_width from "@/components/Service_Management/Tire_information/Section_width.vue";
  import Section_width_table from "@/components/Service_Management/Tire_information/Section_width_table.vue";
  import aspect from "@/components/Service_Management/Tire_information/aspect.vue";
  import aspect_table from "@/components/Service_Management/Tire_information/aspect_table.vue";
  import inch from "@/components/Service_Management/Tire_information/inch.vue";
  import inch_table from "@/components/Service_Management/Tire_information/inch_table.vue";

  
  </script>
  <style scoped>
  
  </style>