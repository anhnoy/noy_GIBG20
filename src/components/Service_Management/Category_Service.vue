<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app style="background-color: #e3e8ed">
    <div>
      <div class="pb-5">
        <p class="Page_name">Category/Service Management</p>
        <p class="Page_name_title">Service Management > Category/Service Management</p>
      </div>
      <div class="pb-5">
        <v-tabs
      v-model="tab"
      color="#346DDB"
      class="Page_name_title"
    >
      <v-tab value="1">Category Management</v-tab>
      <v-tab value="2">Service Management</v-tab>
    </v-tabs>
    <v-window v-model="tab">
        <v-window-item value="1">
          <div class="pb-5">
        <Category_Registration />
      </div>
      <div class="pb-5">
        <Category_list />
      </div>
        </v-window-item>

        <v-window-item value="2">
          <Service_Registration />
        </v-window-item>
      </v-window>
      </div>

    </div>
  </v-app>
</template>
<script setup lang="js">
import { ref } from "vue";
const tab = ref(null);
import Category_Registration from "@/components/Service_Management/Category&Service Management/Category_Registration.vue";
import Service_Registration from "@/components/Service_Management/Category&Service Management/Service_Registration.vue";
import Category_list from "@/components/Service_Management/Category&Service Management/Category_list.vue";

</script>
<style scoped>

@import '/src/assets/css/style.css';

</style>