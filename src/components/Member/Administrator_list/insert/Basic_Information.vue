<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">기본정보</span>

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
            <v-col cols="2">
              <span class="Title">* 아이디 </span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="아이디를 입력해주세요."
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* 비밀번호</span>
            </v-col>
            <v-col>
              <span >비밀번호는 등록 시 자동으로 발송됩니다.</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* 회원명</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="이름을 입력해주세요."
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* 휴대폰번호</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="휴대폰번호를 입력해주세요."
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* 권한타입</span>
            </v-col>
           <v-col>
            <div class="dropdown_Type">
            <select v-model="Type">
                <option value="Y">관리자 </option>
                <option value="N">운영자 </option>
              </select>
            </div>
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
   const Type = ref([
]);
  

  </script>
  <style scoped>

</style>