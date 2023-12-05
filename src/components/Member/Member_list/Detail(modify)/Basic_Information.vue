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
          <v-row>
            <v-col cols="2">
              <span class="Title">구분</span>
            </v-col>
            <v-col>
              <input
                v-model="member.Division"
                type="radio"
                id="Division"
                name="common"
                class="hidden-radio"
                :checked="member.Division === '일반'"
              />
              <label for="common" class="radio-label">일반</label>

              <input
                v-model="member.Division"
                type="radio"
                id="Division"
                name="Social"
                class="hidden-radio"
                :checked="member.Division === '소셜 로그인'"
              />
              <label for="Social" class="radio-label">소셜 로그인</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* 아이디</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                v-model="member.email"
                style="background-color: #e3e8ed; color: #7d92a1"
                readonly
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* 비밀번호</span>
            </v-col>
            <v-col>
              <label class="custom-file-label">비밀번호 초기화</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* 회원명</span>
            </v-col>
            <v-col>
              <input type="text" class="input" v-model="member.name" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* 휴대폰번호</span>
            </v-col>
            <v-col>
              <input type="text" class="input" v-model="member.phone" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">성별</span>
            </v-col>
            <v-col>
              <input
                v-model="member.gender"
                type="radio"
                id="Gender"
                name="Gender"
                class="hidden-radio"
                :checked="member.gender === '1'"
              />
              <label for="Man" class="radio-label">남자</label>

              <input
                v-model="member.gender"
                type="radio"
                id="Woman"
                name="Gender"
                class="hidden-radio"
                :checked="member.gender === '0'"
              />
              <label for="Woman" class="radio-label">여자</label>
            </v-col>
            <v-btn elevation="0" color="#346DDB" class="button"  @click="edit_member">
            수정
          </v-btn>
          </v-row>
        </v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>
  <script setup lang="js">
  import { ref, onMounted } from 'vue'
  import axios from "axios"
  import { useRoute } from 'vue-router'
import router from '@/router';


  const route = useRoute()
  console.log(route.params.id)

  const member =ref({
    email :'',
    name :'',
    phone :'',
    gender :'',
    Division :'',
  })

const fetch_single_user = async () => {
  try {
    const response = await axios.get(`http://192.168.100.81:5000/api/member/${route.params.id}`);
    console.log(response.data)
    member.value.email = response.data.email
    member.value.name = response.data.name
    member.value.phone = response.data.phone
    member.value.gender = response.data.gender
    member.value.Division = response.data.device_id
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  fetch_single_user();
});


const edit_member = async () => {
  try {
    const response = await axios.patch(`http://192.168.100.81:5000/api/member/`, {
      "mid" : route.params.id,
      "name": member.value.name,
      "phone": member.value.phone
    });
     await router.push('/member')
console.log(response);
} catch (error) {
console.error(error);
}
};


   const show = ref(false);

  
  </script>
  <style scoped>
</style>