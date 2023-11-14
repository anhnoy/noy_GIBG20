<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head"> Category Registration </span>

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
          <v-row align="center" justify="left">
            <v-col cols="3">
              <span class="Title">Category Type </span>
              <input
                type="radio"
                id="Common"
                name="store"
                class="hidden-radio"
              />
              <label for="Common" class="radio-label">Common</label>

              <input
                type="radio"
                id="Event"
                name="store"
                class="hidden-radio"
              />
              <label for="Event" class="radio-label">Event</label>
            </v-col>
            <v-col cols="6">
              <span class="Title">Category name</span>
              <input
                type="text"
                class="input"
                placeholder="Enter the category name."
              />
              <v-btn
                class="text-none text-subtitle-1"
                color="#346DDB"
                variant="flat"
              >
                Registration
              </v-btn>
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