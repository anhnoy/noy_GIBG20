<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head"> </span>
      <v-spacer></v-spacer>
     
    </v-card-actions>

    <v-expand-transition>
      <div v-show="!show">
        
        <v-container fluid>
          <Category_table />
        </v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script setup lang="js">
import Category_table from "@/components/Contents/Board/FAQ/Category_table";
import { ref } from 'vue';

const show = ref(false);

</script>
<style scoped></style>