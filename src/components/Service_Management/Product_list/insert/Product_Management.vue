<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head"> Product Management</span>

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
              <span class="Title">Display status </span>
            </v-col>
            <v-col>
              <input
                type="radio"
                id="Exhibition"
                name="Display"
                class="hidden-radio"
              />
              <label for="Exhibition" class="radio-label">Exhibition</label>
              <input
                type="radio"
                id="Hiding"
                name="Display"
                class="hidden-radio"
              />
              <label for="Hiding" class="radio-label">Hiding</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">Exposure period</span>
            </v-col>
            <v-col>
              <input type="date" class="date-input" />
              <span> ~ </span>
              <input type="date" class="date-input" />
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