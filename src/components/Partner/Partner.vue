<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app style="background-color: #e3e8ed">
    <div>
      <div class="pb-5">
        <p class="Page_name">Business Registration</p>
        <p class="Page_name_title">Company Management > Company List</p>
      </div>
      <div class="pb-5">
        <Search_requirement />
      </div>
      <div class="pb-5">
        <Data_table />
      </div>

    </div>
  </v-app>
</template>
<script setup lang="js">
import Search_requirement from "@/components/Partner/Search_requirement.vue";
import Data_table from "@/components/Partner/Data_table.vue";

</script>
<style scoped>
@import '/src/assets/css/style.css';
</style>