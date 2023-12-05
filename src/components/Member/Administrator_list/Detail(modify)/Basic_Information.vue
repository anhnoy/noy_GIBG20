<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">Basic Information</span>

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
              <span class="Title">* id </span>
            </v-col>
            <v-col>
              <input
                v-for="item in items"
                :key="item.id"
                type="text"
                class="input"
                v-model="item.id"
                readonly
                style="background-color: #e3e8ed; color: #7d92a1"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* password</span>
            </v-col>
            <v-col>
              <label class="custom-file-label">Reset password</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Member name</span>
            </v-col>
            <v-col>
              <input
                v-for="item in items"
                :key="item.Member_name"
                type="text"
                class="input"
                v-model="item.Member_name"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Phone number</span>
            </v-col>
            <v-col>
              <input
                v-for="item in items"
                :key="item.Phone"
                type="text"
                class="input"
                v-model="item.Phone"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Permission type</span>
            </v-col>
           <v-col>
            <select id="CAT" name="CAT" class="input">
                <option value="" disabled selected>
                  Manager
                </option>
                <option v-for="Manager in Managers" :key="Manager.value" :value="Manager.value">
                  {{ Manager.label }}
                </option>
              </select>
           </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">Last access date</span>
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
   const Managers = ref([
  { value: 'volvo', label: 'Volvo' },
  { value: 'saab', label: 'Saab' },
  { value: 'fiat', label: 'Fiat' },
  { value: 'audi', label: 'Audi' },
]);
const items = ref([
  { Number: 1, 
    authority: '운영자', 
    id: 'ab******',
    Member_name: '홍*동',
    Phone : '010-1234-****', 
    Last_access_date: 'YYYY-MM-DD',
    situation: '승인',
    Join_date: 'YYYY-MM-DD',
    Connection_IP: '000.00.0.000', },
   ]);
  

  </script>
  <style scoped>

</style>