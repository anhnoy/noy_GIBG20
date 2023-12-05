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
            <th>Registration date and time</th>
            <th>Product image</th>
            <th>Product Name</th>
            <th>Company information</th>
            <th>Order status</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.Date }}</td>
            <td>
      <img :src="item.Image" alt="Product Image" style="width: 25px; height: auto;"/>
    </td>
            <td>{{ item.Name }}</td>
            <td>{{ item.Information }}</td>
            <td>
        <select v-model="item.Status"  class="custom-select">
          <option value="예약완료">예약완료</option>
          <option value="예약확정">예약확정</option>
          <option value="서비스완료">서비스완료</option>
          <option value="서비스확정">서비스확정</option>
          <option value="예약취소">예약취소</option>
          <option value="매장 미방문">매장 미방문</option>
          <option value="예약거절">예약거절</option>
        </select>
      </td>
            <td>{{ item.Quantity }}</td>
            <td>{{ item.Amount }}</td>
            
          </tr>
          <tr>
    <td colspan="5">The total amount</td>
    <td colspan="2">40,000 원</td>
  </tr>
        </table>
        <div class="d-flex justify-end">
          <v-btn
        class="text-none text-subtitle-1 mt-5"
        color="#346DDB"
        variant="flat"
      >
      Change order status
      </v-btn>
        </div> 
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
  { Date: 'YYYY-MM-DD HH:MM:SS', 
    Image: 'https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png', 
    Name: '디테일링 세차',
     Information: '크리스탈 디테일링 금천점',
      Status : '예약완료', 
      Quantity: '1',
      Amount: '10,000 원'
       },
       { Date: 'YYYY-MM-DD HH:MM:SS', 
    Image: 'https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png', 
    Name: '디테일링 세차',
     Information: '크리스탈 디테일링 금천점',
      Status : '예약완료', 
      Quantity: '1',
      Amount: '10,000 원'
       },
       { Date: 'YYYY-MM-DD HH:MM:SS', 
    Image: 'https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png', 
    Name: '디테일링 세차',
     Information: '크리스탈 디테일링 금천점',
      Status : '예약완료', 
      Quantity: '1',
      Amount: '10,000 원'
       },
       { Date: 'YYYY-MM-DD HH:MM:SS', 
    Image: 'https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png', 
    Name: '디테일링 세차',
     Information: '크리스탈 디테일링 금천점',
      Status : '예약완료', 
      Quantity: '1',
      Amount: '10,000 원'
       },
       { Date: 'YYYY-MM-DD HH:MM:SS', 
    Image: 'https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png', 
    Name: '디테일링 세차',
     Information: '크리스탈 디테일링 금천점',
      Status : '예약완료', 
      Quantity: '1',
      Amount: '10,000 원'
       },
       { Date: 'YYYY-MM-DD HH:MM:SS', 
    Image: 'https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png', 
    Name: '디테일링 세차',
     Information: '크리스탈 디테일링 금천점',
      Status : '예약완료', 
      Quantity: '1',
      Amount: '10,000 원'
       },
       { Date: 'YYYY-MM-DD HH:MM:SS', 
    Image: 'https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png', 
    Name: '디테일링 세차',
     Information: '크리스탈 디테일링 금천점',
      Status : '예약완료', 
      Quantity: '1',
      Amount: '10,000 원'
       },
   ]);
  
 </script>
<style>
</style>