<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app style="background-color: #e3e8ed">
    <div>
      <div class="pb-5">
        <p class="Page_name">관리자 상세정보</p>
        <p class="Page_name_title">
          회원관리 > 관리자 > 관리자 목록
        </p>
      </div>
      <div class="pb-5">
        <Basic_Information ref="Basic_Information"/>
      </div>
      <div class="pb-5">
        <Approval ref="Approval"/>
      </div>
      <div class="pb-5">
        <Permission ref="Permission"/>
      </div>
      <v-row>
        <v-col align="center" justify="center">
          <form @submit.prevent="edit_admin">
          <v-btn
            variant="outlined"
            color="#346DDB"
            class="button"
            @click="this.$router.push({ path: '/administrator' })"
          >
          목록
          </v-btn>
          <v-btn
              type="submit"
              color="#346DDB" class="button"
            >
            수정
            </v-btn>
          </form>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>
<script >
import Basic_Information from "@/components/Member/Administrator_list/Detail(modify)/Basic_Information.vue";
import Approval from "@/components/Member/Administrator_list/Detail(modify)/Approval.vue";
import Permission from "@/components/Member/Administrator_list/Detail(modify)/Permission.vue";

export default {
  data() {
    return {};
  },
  components: {
    Basic_Information,
    Approval,
    Permission,
  },
  methods: {
    edit_admin() {
      if (this.$refs.Basic_Information) {
        this.$refs.Basic_Information.edit_admin();
        this.$refs.Approval.edit_admin();
        this.$refs.Permission.edit_admin();
      } else {
        console.error("Unable to find the test2 component.");
      }
    },
  },
};

</script>
  <style scoped>
@import "/src/assets/css/style.css";
</style>