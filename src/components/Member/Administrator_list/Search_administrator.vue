<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">조회조건</span>
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
          <v-row align="center" justify="center">
            <v-col>
              <span class="Title">가입일</span>

              <input type="date" class="date-input"/>
              <span> ~ </span>
              <input type="date" class="date-input"/>
            </v-col>
          <v-col cols="6">
            <span class="Title">검색어</span>
            <select v-model="selectedWord" class="dropdown">
              <option value="ID">아이디</option>
              <option value="Member">회원명</option>
              <option value="Phone">휴대폰번호 </option>
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
              <span class="Title"> 권한</span>
              <input
                type="radio"
                id="Authority_entire"
                name="store"
                class="hidden-radio"
              />
              <label for="Authority_entire" class="radio-label">전체</label>

              <input
                type="radio"
                id="Manager"
                name="store"
                class="hidden-radio"
              />
              <label for="Manager" class="radio-label">관리자</label>

              <input
                type="radio"
                id="Operator"
                name="store"
                class="hidden-radio"
              />
              <label for="Operator" class="radio-label">운영자</label>
            </v-col>
            <v-col >
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
              <label for="Registered_member" class="radio-label">승인</label>

              <input
                type="radio"
                id="Withdrawal_member"
                name="store"
                class="hidden-radio"
              />
              <label for="Withdrawal_member" class="radio-label">미승인</label>
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