<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">정보 수정 제안 내용</span>

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
            <v-col cols="1">
              <br /><br />
              <span class="Title">* 주소</span>
            </v-col>

            <v-col cols="3">
              <br /><br />
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="test_IB"
                  density="compact"
                  variant="solo"
                  label="12345"
                  single-line
                  hide-details
                  ref="searchField"
                ></v-text-field>
              </v-card-text>
            </v-col>
            <v-col cols="3">
              <br /><br />
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="test_BI1"
                  density="compact"
                  variant="solo"
                  label="우편번호 검색"
                  single-line
                  hide-details
                  ref="searchField"
                ></v-text-field>
              </v-card-text>
            </v-col>
          </v-row>
          <v-row class="mt-5">
            <v-col cols="1">
           
            </v-col>
            <v-col cols="3">
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="test_BI3"
                  density="compact"
                  variant="solo"
                  label="서울특별시 서초중앙로8길 115"
                  single-line
                  hide-details
                  ref="searchField"
                ></v-text-field>
              </v-card-text>
            </v-col>
            <v-col cols="3">
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="test_BI4"
                  density="compact"
                  variant="solo"
                  label="1층"
                  single-line
                  hide-details
                  ref="searchField"
                ></v-text-field>
                <v-col cols="auto" style="display: flex; justify-content: center">
            <v-btn :ripple="false" @click="performSearch" class="btn2" style="min-width: 140px;"
              >업체 정보 업데이트</v-btn
            >
          </v-col>
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
@import "/src/assets/css/style_noy.css";
</style>
