<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head"> Permission settings </span>

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
              <span class="Title">Menu permission</span>
            </v-col>
            <v-col>
              <label for="Company" class="checkbox-label">
                <input type="checkbox" id="Company" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                Company management
              </label>
              <label for="Membership" class="checkbox-label">
                <input type="checkbox" id="Membership" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                Membership management
              </label>
              <label for="Service" class="checkbox-label">
                <input type="checkbox" id="Service" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                Service Management
              </label>
              <label for="Reservation" class="checkbox-label">
                <input type="checkbox" id="Reservation" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                Reservation management
              </label>
              <label for="Content" class="checkbox-label">
                <input type="checkbox" id="Content" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                Content Management
              </label>
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