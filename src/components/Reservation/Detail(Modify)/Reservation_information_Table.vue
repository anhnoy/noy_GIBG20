<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">Reservation information</span>
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
                <th>Category</th>
                <th>Service</th>
                <th>Product Name</th>
                <th>Reservation name</th>
                <th>Company information</th>
                <th>Reservation date and time</th>
                <th>Service date and time</th>
                <th>Amount</th>
              </tr>
              <tr v-for="item in items" :key="item.id">
                <td>{{ item.Category }}</td>
                <td>{{ item.Service }}</td>
                <td>{{ item.Name }}</td>
                <td>{{ item.Reservation }}</td>
                <td>{{ item.Company }}</td>
                <td>
                  {{ item.date }}
                  <v-btn variant="outlined" color="#346DDB">
                    Change
                  </v-btn>
                </td>
                <td>{{ item.Service_date }}</td>
                <td>{{ item.Amount }}</td>
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
  { Category: '정비/세차', 
  Service: '세차', 
  Name: '디테일링 세차',
  Reservation: '홍*동010-1234-****',
  Company : '크리스탈 디테일링 금천점02-1234-1234', 
  date: 'YYYY-MM-DD HH:MM',
  Service_date: '',
  Amount: '10,000 원',
       }
   ]);
  
 </script>
<style>
</style>