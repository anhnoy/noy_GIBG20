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
          <v-row>
            <v-col cols="2">
              <span class="Title">Member classification</span>
            </v-col>
            <v-col>
              <input
                type="radio"
                id="Common"
                name="Member"
                class="hidden-radio"
              />
              <label for="Common" class="radio-label"
                >Common</label
              >

              <input
                type="radio"
                id="Easy"
                name="Member"
                class="hidden-radio"
              />
              <label for="Easy" class="radio-label"
                >Easy login</label
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">ID</span>
            </v-col>
            <v-col>
              <input
              v-for="item in items"
                :key="item.ID"
                type="text"
                class="input"
                v-model="item.ID"
                style="background-color: #e3e8ed; color: #7d92a1"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">Member name</span>
            </v-col>
            <v-col>
              <input
              v-for="item in items"
                :key="item.Member"
                type="text"
                class="input"
                v-model="item.Member"
                style="background-color: #e3e8ed; color: #7d92a1"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">Phone number</span>
            </v-col>
            <v-col>
              <input
              v-for="item in items"
                :key="item.Phone"
                type="text"
                class="input"
                v-model="item.Phone"
                style="background-color: #e3e8ed; color: #7d92a1"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">the car's number</span>
            </v-col>
            <v-col>
              <input
              v-for="item in items"
                :key="item.car_number"
                type="text"
                class="input"
                v-model="item.car_number"
                style="background-color: #e3e8ed; color: #7d92a1"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">Car model name</span>
            </v-col>
            <v-col>
              <input
              v-for="item in items"
                :key="item.car_model"
                type="text"
                class="input"
                v-model="item.car_model"
                style="background-color: #e3e8ed; color: #7d92a1"
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
  { ID: 'abcd1234@abcd.com', 
    Member: '홍길동', 
    Phone: '010-1234-1234',
    car_number: '123가1234',
      car_model : '현대 쏘나타 디 엣지',},
   ]);

   </script>
  <style scoped>
</style>