<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head"> List of inquiry types </span>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="!show">
        <v-divider></v-divider>

        <v-container fluid> <List_Inquiry_table /></v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>
            <script setup lang="js">
            import List_Inquiry_table from "@/components/Contents/Board/Helpdesk/List_Inquiry_table.vue";

            import { ref } from 'vue';
            
            const show = ref(false);
    
            </script>
          <style scoped>
@import '/src/assets/css/style.css';
        
</style>