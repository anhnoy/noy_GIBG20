<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">Order information</span>
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
              <span class="Title"> Division</span>
              </v-col>
              <v-col>
                <input
                type="radio"
                id="Reservation"
                name="Division"
                class="hidden-radio"
              />
              <label for="Reservation" class="radio-label">Reservation</label>
              <input
                type="radio"
                id="Phone"
                name="Division"
                class="hidden-radio"
              />
              <label for="Phone" class="radio-label">Phone call</label>
              </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">Reservation number</span>
            </v-col>
            <v-col>
              <input
                v-for="item in items"
                :key="item.Company_code"
                type="text"
                class="input"
                v-model="item.Company_code"
                readonly
                style="background-color: #e3e8ed; color: #7d92a1"
              />
            </v-col>
          </v-row>
           <v-row>
            <v-col cols="2">
              <span class="Title">Registration date and time</span>
            </v-col>
            <v-col>
              <span >YYYY-MM-DD HH:MM:SS</span>
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