<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">Store introduction</span>

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
              <span class="Title">Store introduction</span>
            </v-col>
            <v-col>
              <input
                v-for="item in items"
                :key="item.Store_introduction"
                type="text"
                class="Detail"
                v-model="item.Store_introduction"
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
   const items = ref([
  { Company_code: 1, 
    Category: '셀프/대여', 
    Company_name: '크리스탈 디테일링 센터 금천점',
     Representative_number: '02-1234-1234',
      Virtual_number : '050-1234-1234', 
      Address: '115',
      Longitude: '00.000000000',
      Latitude: '00.000000000',
       Address_search: '서울특별시',
        Address_detail: '서초중앙로8길',
        Review_rating: 5.0, 
        Business_status: '영업중',
         Exposure: '노출',
          Store_status: '입점', 
          Date: 'YYYY-MM-DD HH:MM:SS',
          Store_introduction: '매장에 대한 상세 설명을 입력하는 영역입니다.' },
   ]);

  </script>
  <style scoped>
</style>