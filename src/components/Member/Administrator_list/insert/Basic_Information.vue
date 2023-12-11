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
              <input
                type="text"
                class="input"
                placeholder="Your password will be automatically sent upon registration."
              />
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
            <select id="CAT" name="CAT" class="input">
                <option value="" disabled selected>
                  관리자
                </option>
                <option v-for="Manager in Managers" :key="Manager.value" :value="Manager.value">
                  {{ Manager.label }}
                </option>
              </select>
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
   const Managers = ref([
  { value: 'volvo', label: 'Volvo' },
  { value: 'saab', label: 'Saab' },
  { value: 'fiat', label: 'Fiat' },
  { value: 'audi', label: 'Audi' },
]);
  

  </script>
  <style scoped>

</style>