<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">Inquiry Detail</span>
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
              <span class="Title">* Inquiry type</span>
            </v-col>
            <v-col>
              <select id="CAT" name="CAT" class="input">
                <option value="" disabled selected>Reservation</option>
                <option
                  v-for="Manager in Managers"
                  :key="Manager.value"
                  :value="Manager.value"
                >
                  {{ Manager.label }}
                </option>
              </select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Title</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="I made a reservation but I want to cancel it"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Detail</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="textarea"
                placeholder="The customer's inquiry will be printed."
              />
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