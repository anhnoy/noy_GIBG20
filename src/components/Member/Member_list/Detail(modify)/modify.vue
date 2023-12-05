<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app style="background-color: #e3e8ed">
    <div>
      <div class="pb-5">
        <p class="Page_name">회원 상세정보</p>
        <p class="Page_name_title">
          회원관리 > 회원목록 > 회원 상세
        </p>
      </div>
      <div class="pb-5">
        <Basic_Information />
      </div>
      <div class="pb-5">
        <Vehicle_information />
      </div>
      <div class="pb-5">
        <Other_information />
      </div>
      <div class="pb-5">
        <memo />
      </div>
      <v-row>
        <v-col align="center" justify="center">
          <v-btn variant="outlined" color="#346DDB" class="button" @click="this.$router.push({ path: '/partner' })" >
            목록
          </v-btn>
          <v-btn elevation="0" color="#346DDB" class="button"  @click="confirmEdit">
            수정
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>
<script setup lang="js">
import Basic_Information from "@/components/Member/Member_list/Detail(modify)/Basic_Information.vue";
import Vehicle_information from "@/components/Member/Member_list/Detail(modify)/Vehicle_information.vue";
import Other_information from "@/components/Member/Member_list/Detail(modify)/Other_information.vue";
import memo from "@/components/Member/Member_list/Detail(modify)/memo.vue";

const editMember = async () => {
  await Basic_Information.edit_member();
};

const confirmEdit = () => {
  if (window.confirm('Are you sure you want to edit this item?')) {

    editMember();
  }
};
</script>
  <style scoped>
  @import '/src/assets/css/style.css';
</style>