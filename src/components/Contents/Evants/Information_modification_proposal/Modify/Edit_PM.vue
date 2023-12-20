<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">fdvbfdbdfbfdb</span>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="!show">
        <v-divider></v-divider>

        <v-container>
          <v-row class="mt-5">
            <v-col cols="2">
              <span class="Title">* 상태1</span>
            </v-col>
            <v-col cols="8">
              <input
                type="radio"
                id="Approval"
                name="situation"
                class="hidden-radio"
                value="Approval"
                v-model="selectedSituation"
              />
              <label for="Approval" class="radio-label">승인요청</label>

              <input
                type="radio"
                id="Under"
                name="situation"
                class="hidden-radio"
                value="Under"
                v-model="selectedSituation"
              />
              <label for="Under" class="radio-label">심사중</label>
              <input
                type="radio"
                id="Review"
                name="situation"
                class="hidden-radio"
                value="Review"
                v-model="selectedSituation"
              />
              <label for="Review" class="radio-label"> 심사완료</label>
             
            </v-col>
          </v-row>
          <br />
          <v-col cols="auto" style="display: flex; justify-content: center">
            <v-btn :ripple="false" @click="performSearch" class="btn2" style="min-width: 140px;"
              >업체 정보 업데이트</v-btn
            >
          </v-col>
          <br />
        </v-container>
        <v-row> </v-row>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script setup lang="js">
import { ref } from 'vue';
 const show = ref(false);
</script>
<style scoped></style>
