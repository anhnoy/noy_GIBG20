<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">기타정보</span>

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
              <span class="Title">최종 접속일</span>
            </v-col>
            <v-col>
              <span >YYYY-MM-DD HH:MM:SS</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">마케팅 수신동의</span>
            </v-col>
            <v-col>
              <input
                type="radio"
                id="Agree"
                name="Division"
                class="hidden-radio"
              />
              <label for="Agree" class="radio-label">동의  (YYYY-MM-DD)</label>

              <input
                type="radio"
                id="Reject"
                name="Division"
                class="hidden-radio"
              />
              <label for="Reject" class="radio-label">거부  (YYYY-MM-DD)</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">야간알림</span>
            </v-col>
            <v-col>
              <input
                type="radio"
                id="Agree"
                name="Division"
                class="hidden-radio"
              />
              <label for="Agree" class="radio-label">동의  (YYYY-MM-DD)</label>

              <input
                type="radio"
                id="Reject"
                name="Division"
                class="hidden-radio"
              />
              <label for="Reject" class="radio-label">거부  (YYYY-MM-DD)</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">구분</span>
            </v-col>
            <v-col>
              <input
                type="radio"
                id="Join"
                name="Division"
                class="hidden-radio"
              />
              <label for="Join" class="radio-label">가입</label>

              <input
                type="radio"
                id="Secession"
                name="Division"
                class="hidden-radio"
              />
              <label for="Secession" class="radio-label">탈퇴</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">가입일시</span>
            </v-col>
            <v-col>
              <span >YYYY-MM-DD HH:MM:SS</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">탈퇴일시</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">탈퇴사유</span>
            </v-col>
            <v-col>
              <label for="vehicle1" class="checkbox-label">
                <input type="checkbox" id="vehicle1" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                고객에게 제공하는 혜택이 많지 않아서
              </label><br>

              <label for="vehicle2" class="checkbox-label">
                <input type="checkbox" id="vehicle2" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                제공되는 서비스가 별로 없어서
              </label><br>

              <label for="vehicle3" class="checkbox-label">
                <input type="checkbox" id="vehicle3" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                서비스 정보가 정확하지 않아서
              </label><br>
              <label for="vehicle3" class="checkbox-label">
                <input type="checkbox" id="vehicle3" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                앱을 사용하기 불편해서
              </label><br>
              <label for="vehicle3" class="checkbox-label">
                <input type="checkbox" id="vehicle3" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                차량이 없어 서비스 이용에 제약이 많아서
              </label><br>
              <label for="vehicle3" class="checkbox-label">
                <input type="checkbox" id="vehicle3" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                더 나은 서비스를 찾아내서
              </label><br>
               <label for="vehicle3" class="checkbox-label">
                <input type="checkbox" id="vehicle3" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                광고성 앱 푸시 등의 알람이 빈번해서
              </label>
            </v-col>
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
fetch_single_user(); // Invoke the function here
});

 const show = ref(false);


</script>
  <style scoped>
</style>