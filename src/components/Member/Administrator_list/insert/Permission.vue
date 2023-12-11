<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head"> 권한설정 </span>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-down' : 'mdi-chevron-up'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="!show">
        <v-divider></v-divider>

        <v-container fluid>
          <v-row>
            <v-col cols="2">
              <span class="Title">메뉴권한</span>
            </v-col>
            <v-col>
              <label for="Company" class="checkbox-label">
                <input type="checkbox" id="Company" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                업체관리
              </label>
              <label for="Membership" class="checkbox-label">
                <input type="checkbox" id="Membership" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                회원관리
              </label>
              <label for="Service" class="checkbox-label">
                <input type="checkbox" id="Service" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                서비스관리
              </label>
              <label for="Reservation" class="checkbox-label">
                <input type="checkbox" id="Reservation" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                예약관리
              </label>
              <label for="Content" class="checkbox-label">
                <input type="checkbox" id="Content" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                콘텐츠관리
              </label>
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