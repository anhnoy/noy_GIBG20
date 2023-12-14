<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">기본정보</span>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ?  'mdi-chevron-down' : 'mdi-chevron-up'"
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
                id="common"
                name="common"
                value="일반"
                class="hidden-radio"
                :checked="member.Division === '일반'"
              />
              <label for="common" class="radio-label">일반</label>

              <input
                v-model="member.Division"
                type="radio"
                id="Social"
                value="소셜 로그인"
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
                id="Man"
                name="Man"
                value="1"
                class="hidden-radio"
                :checked="member.gender === '1'"
              />
              <label for="Man" class="radio-label">남자</label>

              <input
                v-model="member.gender"
                type="radio"
                id="Woman"
                name="Woman"
                value="0"
                class="hidden-radio"
                :checked="member.gender === '0'"
              />
              <label for="Woman" class="radio-label">여자</label>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

export default {
  data() {
    return {
      show: false,
      route: useRoute(),
      router: useRouter(),
      member: {
        email: '',
        name: '',
        phone: '',
        gender: '',
      },
    };
  },
  methods: {
    async fetch_single_user() {
      try {
        const response = await axios.get(`http://192.168.100.81:5000/api/member/detail/${this.route.params.id}`);
        console.log(response.data);
        this.member.email = response.data.email;
        this.member.name = response.data.name;
        this.member.phone = response.data.phone;
        this.member.gender = response.data.gender;
        this.member.Division = response.data.device_id;
      } catch (err) {
        console.error(err);
      }
    },
    async edit_member() {
      try {
        const response = await axios.patch(`http://192.168.100.81:5000/api/member/update`, {
          mid: this.route.params.id,
          name: this.member.name,
          phone: this.member.phone,
          gender: this.member.gender
        });
        setTimeout(async() => {
          await this.router.push('/member');
        console.log(response);
        }, 100);
      } catch (error) {
        console.error('Error updating member:', error);
      }
    },
  },
  mounted() {
    this.fetch_single_user();
  },
};
</script>

  <style scoped>
</style>