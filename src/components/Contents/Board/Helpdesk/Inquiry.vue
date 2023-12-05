<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app style="background-color: #e3e8ed">
    <div>
      <div class="pb-5">
        <p class="Page_name">1:1 inquiry</p>
        <p class="Page_name_title">Content Management > Bulletin Board Management > Frequently Asked Questions</p>
      </div>
      <div class="pb-5">
        <v-tabs
      v-model="tab"
      color="#346DDB"
      class="Page_name_title"
    >
      <v-tab value="1">1:1 inquiry list</v-tab>
      <v-tab value="2">Manage inquiry types</v-tab>
    </v-tabs>
    <v-window v-model="tab">
        <v-window-item value="1">
          <div class="pb-5">
        <Search_conditions />
      </div>
      <div class="pb-5">
            <Inquiry_table />
          </div>
        </v-window-item>

        <v-window-item value="2">
          <div class="pb-5">
            <Inquiry_type />
          </div>
          <div class="pb-5">
            <List_of_inquiry_types />
          </div>
          
        </v-window-item>
      </v-window>
      </div>
   
    </div>
  </v-app>
</template>
<script setup lang="js">
import { ref } from "vue";
const tab = ref(null);
import Search_conditions from "@/components/Contents/Board/Helpdesk/Search_conditions.vue";
import Inquiry_table from "@/components/Contents/Board/Helpdesk/Inquiry_table.vue";
import Inquiry_type from "@/components/Contents/Board/Helpdesk/Inquiry_type.vue";
import List_of_inquiry_types from "@/components/Contents/Board/Helpdesk/List_of_inquiry_types.vue";
</script>
<style scoped>
@import '/src/assets/css/style.css';
</style>