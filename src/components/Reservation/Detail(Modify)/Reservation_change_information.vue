<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">Reservation change information</span>
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
          <div>
            <table class="custom-table">
              <tr>
                <th>Number</th>
                <th>Product Name</th>
                <th>Reservation date and time before change</th>
                <th>Reservation date and time</th>
                <th>Changer</th>
                <th>Date of change</th>
              </tr>
              <tr v-for="item in items" :key="item.id">
                <td>{{ item.Number }}</td>
                <td>{{ item.Name }}</td>
                <td>{{ item.before }}</td>
                <td>{{ item.Reservation }}</td>
                <td>{{ item.Changer }}</td>
                <td>{{ item.Date }}</td>
              </tr>
            </table>
          </div>
        </v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>
 <script setup lang="js">
 import { ref } from 'vue';
 
 const show = ref(false);
 const items = ref([
  { Number: '1', 
  Name: '디테일링 세차', 
  before: 'YYYY-MM-DD HH:MM',
  Reservation: 'YYYY-MM-DD HH:MM',
  Changer : '김*순', 
  Date: 'YYYY-MM-DD HH:MM:SS',
       }
   ]);
  
 </script>
<style>
</style>