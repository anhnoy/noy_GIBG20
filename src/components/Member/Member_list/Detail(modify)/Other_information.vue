<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">기타정보</span>

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
              <span class="Title">최종 접속일</span>
            </v-col>
            <v-col>
              <span >{{  formatTime(member.logintime) }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">마케팅 수신동의</span>
            </v-col>
            <v-col>
              <input
              v-model="member.marketing_agree"
                type="radio"
                id="Agree"
                name="marketing"
                class="hidden-radio"
                :checked="member.marketing_agree === 'Y'"
              />
              <label for="Agree" class="radio-label">동의  {{ formatTime(member.marketing_agree_date)}}</label>

              <input
              v-model="member.marketing_agree"
                type="radio"
                id="Reject"
                name="marketing"
                class="hidden-radio"
                :checked="member.marketing_agree === 'N'"
              />
              <label for="Reject" class="radio-label">거부  {{ formatTime(member.marketing_agree_date)}}</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">야간알림</span>
            </v-col>
            <v-col>
              <input
              v-model="member.night_push_agree"
                type="radio"
                id="Agree_night"
                name="Night_notification"
                class="hidden-radio"
                :checked="member.night_push_agree === 'Y'"
              />
              <label for="Agree_night" class="radio-label">동의  {{formatTime(night_push_agree_date)}}</label>

              <input
              v-model="member.night_push_agree"
                type="radio"
                id="Reject_night"
                name="Night_notification"
                class="hidden-radio"
                :checked="member.night_push_agree === 'N'"
              />
              <label for="Reject_night" class="radio-label">거부 {{formatTime(night_push_agree_date)}}</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">구분</span>
            </v-col>
            <v-col>
              <input
              v-model="member.activation"
                type="radio"
                id="Join"
                name="Division"
                class="hidden-radio"
                :checked="member.activation === '1'"
              />
              <label for="Join" class="radio-label">가입</label>

              <input
              v-model="member.activation"
                type="radio"
                id="Secession"
                name="Division"
                class="hidden-radio"
                :checked="member.activation === '0'"
              />
              <label for="Secession" class="radio-label">탈퇴</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">가입일시</span>
            </v-col>
            <v-col>
              <span >{{  formatTime(member.writedate) }}</span>
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
              <label for="provided" class="checkbox-label">
                <input type="checkbox" id="provided" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                제공되는 서비스가 별로 없어서
              </label><br><br>
              <label for="service" class="checkbox-label">
                <input type="checkbox" id="service" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                서비스 정보가 정확하지 않아서
              </label><br><br>
              <label for="inconvenient" class="checkbox-label">
                <input type="checkbox" id="inconvenient" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                앱을 사용하기 불편해서
              </label><br><br>
              <label for="vehicle" class="checkbox-label">
                <input type="checkbox" id="vehicle" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                차량이 없어 서비스 이용에 제약이 많아서
              </label><br><br>
              <label for="more" class="checkbox-label">
                <input type="checkbox" id="more" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                더 나은 서비스를 찾아내서
              </label><br><br>
               <label for="Advertising" class="checkbox-label">
                <input type="checkbox" id="Advertising" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                광고성 앱 푸시 등의 알람이 빈번해서
              </label><br><br>
              <label for="customers" class="checkbox-label">
                <input type="checkbox" id="customers" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                고객에게 제공하는 혜택이 많지 않아서
              </label>

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
import moment from 'moment';

export default {
  data() {
    return {
      show: false,
      route: useRoute(),
      router: useRouter(),
      member: {
        night_push_agree: '',
        night_push_agree_date: '',
        writedate: '',
        logintime: '',
        marketing_agree:'',
        marketing_agree_date:'',
        activation:'',
      },
    };
  },
  methods: {
    async fetch_single_admin() {
      try {
        const response = await axios.get(`http://192.168.100.81:5000/api/member/detail/${this.route.params.id}`);
        console.log(response.data);
        this.member.night_push_agree = response.data.night_push_agree;
        this.member.night_push_agree_date = response.data.night_push_agree_date;
        this.member.marketing_agree = response.data.marketing_agree;
        this.member.marketing_agree_date = response.data.marketing_agree_date;
        this.member.writedate = response.data.writedate;
        this.member.logintime = response.data.logintime;
        this.member.activation = response.data.activation;
        console.log(response.data.writedate)
      } catch (err) {
        console.error(err);
      }
    },
    formatTime(day) {
      return moment(day, "HH:mm:ss").format("YYYY-MM-DD");
    },
    // async edit_member() {
    //   try {
    //     const response = await axios.patch(`http://192.168.100.81:5000/api/member/update`, {
    //       mid: this.route.params.id,
    //       name: this.member.name,
    //       phone: this.member.phone,
    //       gender: this.member.gender
    //     });
    //     setTimeout(async() => {
    //       await this.router.push('/member');
    //     console.log(response);
    //     }, 100);
    //   } catch (error) {
    //     console.error('Error updating member:', error);
    //   }
    // },
  },
  mounted() {
    this.fetch_single_admin();
  },
  
};

</script>

  <style scoped>
</style>