<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">View history</span>

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
              <span class="Title">YYYY-MM-DD HH:MM:SS</span>
            </v-col>
            <v-col>
              <span >[서비스확정] 서비스완료 > 서비스확정, 크리스탈 디테일링 금천점, 디테일링 세차</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">YYYY-MM-DD HH:MM:SS</span>
            </v-col>
            <v-col>
              <span >[서비스확정] 서비스완료 > 서비스확정, 크리스탈 디테일링 금천점, 디테일링 세차</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">YYYY-MM-DD HH:MM:SS</span>
            </v-col>
            <v-col>
              <span >[서비스확정] 서비스완료 > 서비스확정, 크리스탈 디테일링 금천점, 디테일링 세차</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">YYYY-MM-DD HH:MM:SS</span>
            </v-col>
            <v-col>
              <span >[서비스확정] 서비스완료 > 서비스확정, 크리스탈 디테일링 금천점, 디테일링 세차</span>
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