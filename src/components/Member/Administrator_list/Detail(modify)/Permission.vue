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
                v-model="admin.comp_mng"  
                :checked="admin.comp_mng === 'Y'"/>
                <span class="custom-checkbox"></span>
                업체관리
              </label>
              <label for="Membership" class="checkbox-label">
                <input
                type="checkbox" id="Membership" 
                class="hidden-checkbox" 
                v-model="admin.mbr_mng"  
                :checked="admin.mbr_mng === 'Y'"/>
                <span class="custom-checkbox"></span>
                회원관리
              </label>
              <label for="Service" class="checkbox-label">
                <input
                type="checkbox" id="Service" 
                class="hidden-checkbox" 
                v-model="admin.srvc_mng"  
                :checked="admin.srvc_mng === 'Y'"/>
                <span class="custom-checkbox"></span>
                서비스관리
              </label>
              <label for="Reservation" class="checkbox-label">
                <input
                type="checkbox" id="Reservation" 
                class="hidden-checkbox" 
                v-model="admin.rsv_mng"  
                :checked="admin.rsv_mng === 'Y'"/>
                <span class="custom-checkbox"></span>
                예약관리
              </label>
              <label for="Content" class="checkbox-label">
                <input
                type="checkbox" id="Content" 
                class="hidden-checkbox" 
                v-model="admin.cnt_mng"  
                :checked="admin.cnt_mng === 'Y'"/>
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
    async fetch_single_admin() {
      try {
        const response = await axios.get(`http://192.168.100.81:5000/api/admin/detail/${this.route.params.id}`);
        console.log(response.data.comp_mng);
        this.admin.comp_mng = response.data.comp_mng;
        this.admin.mbr_mng = response.data.mbr_mng;
        this.admin.srvc_mng = response.data.srvc_mng;
        this.admin.rsv_mng = response.data.rsv_mng;
        this.admin.cnt_mng = response.data.cnt_mng;
      } catch (err) {
        console.error(err);
      }
    },
    async edit_admin() {
  try {
    const response = await axios.patch(`http://192.168.100.81:5000/api/admin/update`, {
      admid: this.route.params.id,
      comp_mng: this.admin.comp_mng ? 'Y' : 'N',
      mbr_mng: this.admin.mbr_mng ? 'Y' : 'N',
      srvc_mng: this.admin.srvc_mng ? 'Y' : 'N',
      rsv_mng: this.admin.rsv_mng ? 'Y' : 'N',
      cnt_mng: this.admin.cnt_mng ? 'Y' : 'N',
    });

    setTimeout(async () => {
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