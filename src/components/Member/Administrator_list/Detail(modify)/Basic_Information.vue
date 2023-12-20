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
                v-model="admin.id"
                readonly
                style="background-color: #e3e8ed; color: #7d92a1"
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
              <input
                type="text"
                class="input"
                v-model="admin.name"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* 휴대폰 번호</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                v-model="admin.phone"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* 권한타입</span>
            </v-col>
           <v-col>
            <div class="dropdown_Type">
            <select v-model="admin.type">
                <option value="Y" :selected="admin.type === 'Y'">관리자 </option>
                <option value="N" :selected="admin.type === 'N'">운영자 </option>
              </select>
            </div>
           </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">최근 접속일</span>
            </v-col>
            <v-col>
              <span >YYYY-MM-DD HH:MM:SS</span>
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
      admin: {
        id: '',
        name: '',
        phone: '',
        type: '',
      },
    };
  },
  methods: {
    async fetch_single_admin() {
      try {
        const response = await axios.get(`http://192.168.100.81:5000/api/admin/detail/${this.route.params.id}`);
        console.log(response.data);
        this.admin.id = response.data.id;
        this.admin.name = response.data.name;
        this.admin.phone = response.data.phone;
        this.admin.type = response.data.type;
      } catch (err) {
        console.error(err);
      }
    },
    async edit_admin() {
      try {
        const response = await axios.patch(`http://192.168.100.81:5000/api/admin/update`, {
          admid: this.route.params.id,
          name: this.admin.name,
          phone: this.admin.phone,
          type: this.admin.type
        });
        setTimeout(async() => {
          await this.router.push('/administrator');
        console.log(response);
        }, 100);
      } catch (error) {
        console.error('Error updating member:', error);
      }
    },
  },
  mounted() {
    this.fetch_single_admin();
  },
};
</script>

  <style scoped>

</style>