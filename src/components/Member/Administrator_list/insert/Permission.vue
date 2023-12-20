<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head"> 권한설정 </span>

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
              <span class="Title">메뉴권한</span>
            </v-col>
            <v-col>
              <label for="Company" class="checkbox-label">
                <input
                type="checkbox" id="Company" 
                class="hidden-checkbox" 
                v-model="admin.comp_mng"   />
                <span class="custom-checkbox"></span>
                업체관리
              </label>
              <label for="Membership" class="checkbox-label">
                <input 
                type="checkbox" id="Membership" 
                class="hidden-checkbox" 
                v-model="admin.mbr_mng" />
                <span class="custom-checkbox"></span>
                회원관리
              </label>
              <label for="Service" class="checkbox-label">
                <input 
                type="checkbox" id="Service" 
                class="hidden-checkbox" 
                v-model="admin.srvc_mng"  />
                <span class="custom-checkbox"></span>
                서비스관리
              </label>
              <label for="Reservation" class="checkbox-label">
                <input 
                type="checkbox" id="Reservation" 
                class="hidden-checkbox" 
                v-model="admin.rsv_mng"  />
                <span class="custom-checkbox"></span>
                예약관리
              </label>
              <label for="Content" class="checkbox-label">
                <input 
                type="checkbox" id="Content" 
                class="hidden-checkbox" 
                v-model="admin.cnt_mng"  />
                <span class="custom-checkbox"></span>
                콘텐츠관리
              </label>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script >
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

export default {
  data() {
    return {
      show: false,
      route: useRoute(),
      router: useRouter(),
      admin: {
        comp_mng: "",
        mbr_mng: "",
        srvc_mng: "",
        rsv_mng: "",
        cnt_mng: "",
        writedate: "2023-01-01 00:00:00",
        email: "khensa3d@gmail.com",
        delete_yn: "N",
        last_login: "2023-01-01 00:00:00",
      },
    };
  },
  methods: {
    async add_admin() {
      try {
        const response = await axios.post(`http://192.168.100.81:5000/api/admin/add`, {
          comp_mng: this.admin.comp_mng ? 'Y' : 'N',
          mbr_mng: this.admin.mbr_mng ? 'Y' : 'N',
          srvc_mng: this.admin.srvc_mng ? 'Y' : 'N',
          rsv_mng: this.admin.rsv_mng ? 'Y' : 'N',
          cnt_mng: this.admin.cnt_mng ? 'Y' : 'N',
          writedate: this.admin.writedate,
          email: this.admin.email,
          delete_yn: this.admin.delete_yn ,
          last_login: this.admin.last_login 
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
};
</script>
      <style scoped>
</style>