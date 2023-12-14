<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app style="background-color: #e3e8ed">
    <div>
      <div class="pb-5">
        <p class="Page_name">관리자 목록</p>
        <p class="Page_name_title">회원관리 > 관리자 > 관리자 목록</p>
      </div>
      <div class="pb-5">
        <Search_requirement @filter-admins="searchFunction_admin"/>
      </div>
      <div class="pb-5">
        <Member_table ref="adminTable"/>
      </div>
    </div>
  </v-app>
</template>
  <script setup lang="js">
  import { ref } from "vue";
  import Search_requirement from "@/components/Member/Administrator_list/Search_administrator.vue";
  import Member_table from "@/components/Member/Administrator_list/Administrator_table.vue";
  
  const adminTable = ref();

  const searchFunction_admin = (params)=>{
    console.log('==========>');
    console.log(params);
    adminTable.value.filterAdmins(params);
  }

  </script>
  <style scoped>
@import "/src/assets/css/style.css";
</style>