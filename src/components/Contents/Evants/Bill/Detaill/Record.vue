<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-card class="mx-auto" max-width="90%">
      <v-card-actions>
        <span class="Head">이력</span>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="!show">
          <v-divider></v-divider>
  
          <v-container fluid>
            <v-row>
              <v-col cols="2">
                <span class="Title"> YYYY-MM-DD HH:MM:SS </span>
              </v-col>
              <v-col cols="2">
                <span class=""> YYYY-MM-DD HH:MM:SS </span>
              </v-col>
             
    
            </v-row>
          </v-container>
        </div>
      </v-expand-transition>
    </v-card>
  </template>
    <script setup lang="js">
    import { ref } from 'vue';
       
     const show = ref(false);
    </script>
    <style scoped>
  </style>