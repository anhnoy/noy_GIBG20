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
              <span class="Title"> Company name</span>
            </v-col>
            <v-col>
              <span style="color: #346DDB;"> 크리스탈 디테일링 금천점</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title"> Writer</span>
            </v-col>
            <v-col>
              <span style="color: #346DDB;"> 홍길동 (abcd12345)</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title"> Creation date and time</span>
            </v-col>
            <v-col>
              <span> YYYY-MM-DD HH:MM:SS</span>
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
@import "/src/assets/css/style.css";
</style>