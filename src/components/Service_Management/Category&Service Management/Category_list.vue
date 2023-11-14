<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head"> Category list </span>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="!show">
        <v-divider></v-divider>

        <v-container fluid> <Category_table /></v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>
            <script setup lang="js">
            import Category_table from "@/components/Service_Management/Category&Service Management/Category_table.vue";
            import { ref } from 'vue';
            
            const show = ref(false);
    
            </script>
          <style scoped>
</style>