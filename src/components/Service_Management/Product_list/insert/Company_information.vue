<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-card class="mx-auto" max-width="90%">
      <v-card-actions>
        <span class="Head"> Company information </span>
  
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
              <span class="Title">* company name</span>
            </v-col>
            <v-col>
              <input type="text" class="input" placeholder="Please enter the company name." />
              <label class="custom-file-label">Company search</label>
            </v-col>
          </v-row>
           <v-row>
            <v-col cols="2">
              <span class="Title">* Company code</span>
            </v-col>
            <v-col>
              <input type="text" class="input" />
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