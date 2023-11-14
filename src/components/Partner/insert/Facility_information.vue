<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">Facility information </span>

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
              <span class="Title">* category </span>
            </v-col>
            <v-col>
              <label for="Free_parking" class="checkbox-label">
                <input
                  type="checkbox"
                  id="Free_parking"
                  class="hidden-checkbox"
                />
                <span class="custom-checkbox"></span>
                Free parking
              </label>

              <label for="Restroom" class="checkbox-label">
                <input type="checkbox" id="Restroom" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                Restroom
              </label>

              <label for="Wireless_Internet" class="checkbox-label">
                <input
                  type="checkbox"
                  id="Wireless_Internet"
                  class="hidden-checkbox"
                />
                <span class="custom-checkbox"></span>
                Wireless Internet
              </label>
              <label for="Accessibility" class="checkbox-label">
                <input
                  type="checkbox"
                  id="Accessibility"
                  class="hidden-checkbox"
                />
                <span class="custom-checkbox"></span>
                Accessibility facilities for the disabled
              </label>
              <label for="Dogs" class="checkbox-label">
                <input type="checkbox" id="Dogs" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                Dogs allowed
              </label>
              <label for="cafe" class="checkbox-label">
                <input type="checkbox" id="cafe" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                cafe
              </label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">Additional facility information</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please enter additional facility information."
              />
              <br />
              <span class="hint"
                >※ Please enter more than one facility information separated by
                a comma (,).</span
              >
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