<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">기본정보</span>

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
          <v-row class="mt-5">
            <v-col cols="2">
              <span class="Title">* 등록일시 </span>
            </v-col>
            <v-col >
              <p>YYYY-MM-DD HH:MM:SS</p>
            </v-col>
          </v-row>
          <v-row class="mt-5">
            <v-col style="" cols="2">
              <span class="Title">* 작성자 </span>
            </v-col>
            <v-col  >
              <p>홍길동 (abcd12345)</p>
            </v-col>
          </v-row>
          <v-row class="mt-5">
            <v-col style="margin-top: 25px;" cols="2">
              <span  class="Title">*  업체명 </span>
            </v-col>
            <v-col  >
              <v-card-text >
                <v-text-field
                  style="margin-right: "
                  class="test_PM"
                  density="compact"
                  variant="solo"
                  label="크리스탈 디테일링 금천점"
                  single-line
                  hide-details
                  disabled
                  ref="searchField"
                ></v-text-field>
              </v-card-text>
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
@import '/src/assets/css/style_noy.css';
</style>
