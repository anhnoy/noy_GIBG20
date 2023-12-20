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
                v-model="admin.id"
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
                v-model="admin.name"
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
                v-model="admin.phone"
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
            <select v-model="admin.type">
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
        type: 'Y',
        comp_mng: "Y",
        mbr_mng: "Y",
        srvc_mng: "Y",
        rsv_mng: "Y",
        cnt_mng: "Y",
        writedate: "2023-01-01 00:00:00",
        email: "khensa3d@gmail.com",
        delete_yn: "N",
        last_login: "2023-01-01 00:00:00",
        // activation: "Y",
      },
    };
  },
  methods: {
    async add_admin() {
      try {
        const response = await axios.post(`http://192.168.100.81:5000/api/admin/add`, {
          id: this.admin.id,
          name: this.admin.name,
          phone: this.admin.phone,
          type: this.admin.type,
          activation: this.admin.activation,
          comp_mng: this.admin.comp_mng,
          mbr_mng: this.admin.mbr_mng, 
          srvc_mng: this.admin.srvc_mng, 
          rsv_mng: this.admin.rsv_mng,
          cnt_mng: this.admin.cnt_mng, 
          writedate: this.admin.writedate,
          email: this.admin.email,
          delete_yn: this.admin.delete_yn ,
          last_login: this.admin.last_login,
        });
        setTimeout(async() => {
          await this.router.push('/administrator');
        console.log(response);
        console.log('dsadsa')
        }, 100);
      } catch (error) {
        console.error('Error updating member:', error);
      }
    },
  },
};
</script>

  <style scoped>

</style>