<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head"> Payment method </span>

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
              <span class="Title">Payment method </span>
            </v-col>
            <v-col>
              <label for="Cash" class="checkbox-label">
                <input
                  type="checkbox"
                  id="Cash"
                  class="hidden-checkbox"
                />
                <span class="custom-checkbox"></span>
               Cash
              </label>  <label for="Card" class="checkbox-label">
                <input
                  type="checkbox"
                  id="Card"
                  class="hidden-checkbox"
                />
                <span class="custom-checkbox"></span>
              Card
              </label>  <label for="Zero_pay" class="checkbox-label">
                <input
                  type="checkbox"
                  id="Zero_pay"
                  class="hidden-checkbox"
                />
                <span class="custom-checkbox"></span>
               Zero pay
              </label>  <label for="Local_currency" class="checkbox-label">
                <input
                  type="checkbox"
                  id="Local_currency"
                  class="hidden-checkbox"
                />
                <span class="custom-checkbox"></span>
               Local currency
              </label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">Additional payment methods</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please enter an additional payment method."
              />
              <br />
              <span class="hint"
                >※ Please enter information for more than one payment method, separated by a comma (,).</span
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