<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-tabs v-model="tab" color="#346DDB" class="Page_name_title">
    <v-tab value="1">Home</v-tab>
    <v-tab value="2">Maintenance/Car Wash</v-tab>
    <v-tab value="3">Business visit</v-tab>
    <v-tab value="4">Self rental</v-tab>
    <v-tab value="5">Event</v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item value="1">
      <v-card class="mx-auto" max-width="90%">
        <v-card-actions>
          <span class="Head"> Service List </span>

          <v-spacer></v-spacer>

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="!show">
            <v-divider></v-divider>

            <v-container fluid> <Service_table /></v-container>
          </div>
        </v-expand-transition>
      </v-card>
    </v-window-item>
    <v-window-item value="2"> 
      <v-card class="mx-auto" max-width="90%">
        <v-card-actions>
          <span class="Head"> Service List </span>

          <v-spacer></v-spacer>

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="!show">
            <v-divider></v-divider>

            <v-container fluid> <Service_table /></v-container>
          </div>
        </v-expand-transition>
      </v-card>
    </v-window-item>
    <v-window-item value="3"> 
      <v-card class="mx-auto" max-width="90%">
        <v-card-actions>
          <span class="Head"> Service List </span>

          <v-spacer></v-spacer>

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="!show">
            <v-divider></v-divider>

            <v-container fluid> <Service_table /></v-container>
          </div>
        </v-expand-transition>
      </v-card>
    </v-window-item>
    <v-window-item value="4"> 
      <v-card class="mx-auto" max-width="90%">
        <v-card-actions>
          <span class="Head"> Service List </span>

          <v-spacer></v-spacer>

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="!show">
            <v-divider></v-divider>

            <v-container fluid> <Service_table /></v-container>
          </div>
        </v-expand-transition>
      </v-card>
    </v-window-item>
    <v-window-item value="5"> 
      <v-card class="mx-auto" max-width="90%">
        <v-card-actions>
          <span class="Head"> Service List </span>

          <v-spacer></v-spacer>

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="!show">
            <v-divider></v-divider>

            <v-container fluid> <Service_table /></v-container>
          </div>
        </v-expand-transition>
      </v-card>
    </v-window-item>
  </v-window>
</template>
           <script setup lang="js">
                       import Service_table from "@/components/Service_Management/Category&Service Management/Service_table.vue";

           import { ref } from 'vue';
const tab = ref(null);
           const show = ref(false);
    
           </script>
          <style scoped>
</style>