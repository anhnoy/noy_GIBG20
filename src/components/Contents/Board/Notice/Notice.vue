<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app style="background-color: #e3e8ed">
    <div>
      <div class="pb-5">
        <p class="Page_name">Announcement</p>
        <p class="Page_name_title">Content Management > Bulletin Board Management > Notices</p>
      </div>
      <div class="pb-5">
        <Search_conditions />
      </div>
      <div class="pb-5">
        <Notice_table />
      </div>

    </div>
  </v-app>
</template>
<script setup lang="js">
import Search_conditions from "@/components/Contents/Board/Notice/Search_conditions.vue";
import Notice_table from "@/components/Contents/Board/Notice/Notice_table.vue";

</script>
<style scoped>
@import '/src/assets/css/style.css';
</style>