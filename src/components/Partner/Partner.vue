<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app style="background-color: #e3e8ed">
    <div>
      <div class="pb-5">
        <p class="H-Title">Business Registration</p>
        <p class="Title">Company Management > Company List</p>
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
.H-Title {
  font-size: 20px;
  font-weight: 700;
  color: #242424;
  margin-left: 5%;
  margin-top: 2%;
}
.Title {
  font-size: 12px;
  font-weight: 500;
  color: #8899a8;
  margin-left: 5%;
}

</style>