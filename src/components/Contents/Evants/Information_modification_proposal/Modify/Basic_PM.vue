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
            <v-col cols="10">
              <p>YYYY-MM-DD HH:MM:SS</p>
            </v-col>
          </v-row>
          <v-row class="mt-5">
            <v-col style="margin-top: 25px;" cols="2">
              <span class="Title">* 등록일시 </span>
            </v-col>
            <v-col  cols="10">
              <p>YYYY-MM-DD HH:MM:SS</p>
            </v-col>
          </v-row>
          <v-row class="mt-5">
            <v-col style="margin-top: 25px;" cols="2">
              <span  class="Title">* 등록일시 </span>
            </v-col>
            <v-col cols="10">
              <v-card-text>
                <v-text-field class="test_PM"
                  density="compact"
                  label="정비명세서 인증해요!"
                  disabled
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
<style scoped></style>
