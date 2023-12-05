<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">조회조건</span>
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
            <v-col >
              <span class="Title">가입일</span>
              <input type="date" class="date-input" v-model="startDate" />
              <span> ~ </span>
              <input type="date" class="date-input" v-model="endDate" />
            </v-col>
            <v-col cols="6">
              <span class="Title">검색어</span>
              <select v-model="selectedWord" class="dropdown">
                <option value="ID">ID</option>
                <option value="Member">Member Name</option>
                <option value="Phone">Phone Number</option>
              </select>
              <input
                v-if="selectedWord === 'ID'"
                type="text"
                class="input"
                placeholder="검색어를 입력하세요"
              />
              <input
                v-if="selectedWord === 'Member'"
                type="text"
                class="input"
                placeholder="검색어를 입력하세요"
              />
              <input
                v-if="selectedWord === 'Phone'"
                type="text"
                class="input"
                placeholder="검색어를 입력하세요"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span class="Title"> 상태</span>
              <input
                type="radio"
                id="Situation_entire"
                name="store"
                class="hidden-radio"
              />
              <label for="Situation_entire" class="radio-label">전체</label>

              <input
                type="radio"
                id="Registered_member"
                name="store"
                class="hidden-radio"
              />
              <label for="Registered_member" class="radio-label">가입회원</label>

              <input
                type="radio"
                id="Withdrawal_member"
                name="store"
                class="hidden-radio"
              />
              <label for="Withdrawal_member" class="radio-label">탈퇴회원</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center" justify="center">
              <v-btn variant="outlined" color="#346DDB" class="button">
                초기화
              </v-btn>
              <v-btn elevation="0" color="#346DDB" class="button">
                조회
              </v-btn>
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
 const selectedWord = ref('ID');
 </script>
<style scoped>
</style>