<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app style="background-color: #e3e8ed">
      <div>
        <div class="pb-5">
          <p class="Page_name">회원목록</p>
          <p class="Page_name_title">회원관리 > 회원목록</p>
        </div>
        <div class="pb-5">
          <Search_requirement @filter-members="searchFunction"/>
        </div>
        <div class="pb-5">
          <Member_table ref="memberTable"/>
        </div>
  
      </div>
    </v-app>
  </template>
  <script setup lang="js">
  import { ref } from "vue";
  import Search_requirement from "@/components/Member/Member_list/Search_member.vue";
  import Member_table from "@/components/Member/Member_list/Member_table.vue";

  const memberTable = ref();

  const searchFunction = (params)=>{
    console.log('==========>');
    console.log(params);
    memberTable.value.filterMembers(params);
  }

  
  </script>
  <style scoped>
  @import '/src/assets/css/style.css';
  </style>