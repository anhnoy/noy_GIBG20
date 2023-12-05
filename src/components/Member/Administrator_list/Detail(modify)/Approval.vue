<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head"> Approval </span>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="!show">
        <v-divider></v-divider>

        <v-container fluid>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Division</span>
            </v-col>
            <v-col>
              <input
                type="radio"
                id="Approval"
                name="store"
                class="hidden-radio"
              />
              <label for="Approval" class="radio-label">Approval</label>

              <input
                type="radio"
                id="Not_approved"
                name="store"
                class="hidden-radio"
              />
              <label for="Not_approved" class="radio-label">Not approved</label>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>
         <script setup lang="js">
         import { ref } from 'vue';
         
         const show = ref(false);
  
         </script>
        <style scoped>

</style>