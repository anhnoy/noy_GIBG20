<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">Basic information</span>
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
          <v-row align="center" justify="center">
            <v-col cols="4">
              <span class="Title">category</span>
              <select id="CAT" name="CAT" class="input">
                <option value="" disabled selected>
                  Please select a category.
                </option>
                <option v-for="car in cars" :key="car.value" :value="car.value">
                  {{ car.label }}
                </option>
              </select>
            </v-col>
            <v-col cols="4">
              <span class="Title">company name</span>
              <input
                type="text"
                class="input"
                placeholder="Please enter your business name"
              />
            </v-col>
            <v-col cols="4">
              <span class="Title">Store status</span>
              <input
                type="radio"
                id="entire"
                name="store"
                class="hidden-radio"
              />
              <label for="entire" class="radio-label">Entire</label>

              <input
                type="radio"
                id="storeEntry"
                name="store"
                class="hidden-radio"
              />
              <label for="storeEntry" class="radio-label">Store entry</label>

              <input
                type="radio"
                id="notInStores"
                name="store"
                class="hidden-radio"
              />
              <label for="notInStores" class="radio-label">Not in stores</label>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <span class="Title">Exposure</span>
              <input
                type="radio"
                id="Exposure_entire"
                name="store"
                class="hidden-radio"
              />
              <label for="Exposure_entire" class="radio-label">Entire</label>

              <input
                type="radio"
                id="Exposure"
                name="store"
                class="hidden-radio"
              />
              <label for="Exposure" class="radio-label">Exposure</label>

              <input
                type="radio"
                id="Hiding"
                name="store"
                class="hidden-radio"
              />
              <label for="Hiding" class="radio-label">Hiding</label>

            </v-col>
            <v-col cols="6">
              <span class="Title">Business status</span>
              <input
                type="radio"
                id="Business_entire"
                name="store"
                class="hidden-radio"
              />
              <label for="Business_entire" class="radio-label">Entire</label>

              <input
                type="radio"
                id="Open"
                name="store"
                class="hidden-radio"
              />
              <label for="Open" class="radio-label">Open</label>

              <input
                type="radio"
                id="Business_suspension"
                name="store"
                class="hidden-radio"
              />
              <label for="Business_suspension" class="radio-label">Business suspension</label>
              <input
                type="radio"
                id="Closed_down"
                name="store"
                class="hidden-radio"
              />
              <label for="Closed_down" class="radio-label">Closed down</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center" justify="center">
              <v-btn variant="outlined" color="#346DDB" class="button">
                reset
              </v-btn>
              <v-btn elevation="0" color="#346DDB" class="button">
                check
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
 const cars = ref([
  { value: 'volvo', label: 'Volvo' },
  { value: 'saab', label: 'Saab' },
  { value: 'fiat', label: 'Fiat' },
  { value: 'audi', label: 'Audi' },
]);
 
 const show = ref(false);
 </script>
<style scoped>
@import '/src/assets/css/style.css';

</style>