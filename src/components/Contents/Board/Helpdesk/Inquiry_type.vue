<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">Register inquiry type</span>
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
          <v-row align="center" justify="left">
            <v-col cols="6">
              <span class="Title">Inquiry type</span>
              <input
                type="text"
                class="input"
                placeholder="Please enter the inquiry type."
              />
              <v-btn
                class="text-none text-subtitle-1"
                color="#346DDB"
                variant="flat"
              >
                Registration
              </v-btn>
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
@import '/src/assets/css/style.css';


</style>