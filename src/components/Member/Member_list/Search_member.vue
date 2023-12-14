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
          <v-row>
            <v-col cols="4">
              <span class="Title mr-5">가입일</span>
              <input type="date" class="date-input" v-model="startDate" />
              <span class="ml-5 mr-5"> ~ </span>
              <input type="date" class="date-input" v-model="endDate" />
            </v-col>
            <v-col cols="8">
              <v-row>
                <span class="Title mt-5">검색어</span>
                <div class="dropdown">
                  <select v-model="selectedWord" @change="clearInput">
                    <option value="ID">아이디</option>
                    <option value="Member">회원명</option>
                    <option value="Phone">휴대폰번호</option>
                  </select>
                </div>

                <div class="ml-10 mt-3">
                  <input
                  v-if="selectedWord === 'ID'"
                  v-model="searchKeywordID"
                  type="text"
                  class="input"
                  placeholder="검색어를 입력하세요 ID"
                />
                <input
                  v-if="selectedWord === 'Member'"
                  v-model="searchKeywordName"
                  type="text"
                  class="input"
                  placeholder="검색어를 입력하세요 Name"
                />
                <input
                  v-if="selectedWord === 'Phone'"
                  v-model="searchKeywordPhone"
                  type="text"
                  class="input"
                  placeholder="검색어를 입력하세요 Phone"
                />
                </div>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span class="Title mr-8"> 상태</span>
              <input
                v-model="selectedStatus"
                type="radio"
                id="Situation_entire"
                value=""
                name="situation"
                class="hidden-radio"
              />
              <label for="Situation_entire" class="radio-label">전체</label>

              <input
                v-model="selectedStatus"
                type="radio"
                id="Registered_member"
                value="1"
                name="situation"
                class="hidden-radio"
              />
              <label for="Registered_member" class="radio-label"
                >가입회원</label
              >

              <input
                v-model="selectedStatus"
                type="radio"
                id="Withdrawal_member"
                value="2"
                name="situation"
                class="hidden-radio"
              />
              <label for="Withdrawal_member" class="radio-label"
                >탈퇴회원</label
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center" justify="center">
              <v-btn variant="outlined" color="#346DDB" class="button">
                초기화
              </v-btn>
              <v-btn
                elevation="0"
                color="#346DDB"
                class="button"
                @click="searchMembers"
              >
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

import {ref,defineEmits} from 'vue';

 const show = ref(false);
// Your existing data properties
const selectedStatus = ref('');
const selectedWord = ref('ID');
const searchKeywordID = ref('');
const searchKeywordName = ref('');
const searchKeywordPhone = ref('');
const startDate = ref('');
const endDate = ref('');

const clearInput = () => {
  searchKeywordID.value = '';
  searchKeywordName.value = '';
  searchKeywordPhone.value = '';
};

const emit = defineEmits([
  'filterMembers'
]);

const searchMembers = () => {
  const start = startDate.value;
  const end = endDate.value;
  const id = searchKeywordID.value;
  const name = searchKeywordName.value;
  const phone = searchKeywordPhone.value;
  const status = selectedStatus.value;
  const page = 0;
  const size = 10;
  const params = {
    start:start,
    end:end,
    id:id,
    name:name,
    phone:phone,
    status:status,
    page:page,
    size:size
  };
  emit('filterMembers', params);

};



</script>
<style scoped>
</style>