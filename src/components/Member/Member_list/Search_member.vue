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
            <v-col>
              <span class="Title">가입일</span>
              <input type="date" class="date-input" v-model="startDate"/>
              <span> ~ </span>
              <input type="date" class="date-input" v-model="endDate" />
            </v-col>
            <v-col cols="6">
              <span class="Title">검색어</span>
              <select v-model="selectedWord" class="dropdown" @change="clearInput">
              <option value="ID">아이디</option>
              <option value="Member">회원명</option>
              <option value="Phone">휴대폰번호 </option>
            </select>

            <input
              v-if="selectedWord === 'ID'"
              v-model="searchKeywordID"
              type="text"
              class="input"
              placeholder="검색어를 입력하세요 ID"
            />
            <input
              v-if="selectedWord === 'Member'"
              v-model="searchKeyword_name"
              type="text"
              class="input"
              placeholder="검색어를 입력하세요 Name"
            />
            <input
              v-if="selectedWord === 'Phone'"
              v-model="searchKeyword_phone"
              type="text"
              class="input"
              placeholder="검색어를 입력하세요 Phone"
            />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span class="Title"> 상태</span>
              <input
              v-model="selectedStatus"
                type="radio"
                id="Situation_entire"
                value="null"
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
              <v-btn elevation="0" color="#346DDB" class="button" @click="findMember"> 조회 </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script setup>
import axios from 'axios';
import {ref} from 'vue';


 const show = ref(false);
// Your existing data properties
const selectedStatus = ref(null);
const selectedWord = ref('ID');
const searchKeywordID = ref(null);
const searchKeyword_name = ref(null);
const searchKeyword_phone = ref(null);
const startDate = ref(null);
const endDate = ref(null);

const clearInput = () => {
  searchKeywordID.value = '';
  searchKeyword_name.value = '';
  searchKeyword_phone.value = '';
};

// const members = ref([]);


// const searchMembers = async () => {
//   try{
//     const  resp = await 

//   }
//   catch(error){
//     console.error('Exception occured while try to get information', error);
//   }
// }

// searchMembers();

const findMember = () => {
  const requestData = {
    page: 0,
    size: 10,
    params: {
      status: selectedStatus.value,
      id: searchKeywordID.value,
      name: searchKeyword_name.value,
      phone: searchKeyword_phone.value,
      startDate: startDate.value,
      endDate: endDate.value,
    },
  };


  

  axios.post('http://192.168.100.81:5000/api/find_condition_member', requestData)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
</script>
<style scoped>
</style>