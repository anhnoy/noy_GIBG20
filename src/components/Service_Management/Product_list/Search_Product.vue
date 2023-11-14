<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">Search conditions</span>
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
              <span class="Title">Join date</span>
              <input type="date" class="date-input" v-model="startDate" />
              <span> ~ </span>
              <input type="date" class="date-input" v-model="endDate" />
            </v-col>
            <v-col>
              <span class="Title">Display classification</span>
              <input
                type="radio"
                id="Entire"
                name="store"
                class="hidden-radio"
              />
              <label for="Entire" class="radio-label">Entire</label>

              <input
                type="radio"
                id="Exhibition"
                name="store"
                class="hidden-radio"
              />
              <label for="Exhibition" class="radio-label">Exhibition</label>
              <input
                type="radio"
                id="Hiding"
                name="store"
                class="hidden-radio"
              />
              <label for="Hiding" class="radio-label">Hiding</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
              <span class="Title">category</span>
              <select id="CAT" name="CAT" class="input">
                <option value="" disabled selected>
                  Please select a category.
                </option>
                <option
                  v-for="car in Category"
                  :key="car.value"
                  :value="car.value"
                >
                  {{ car.label }}
                </option>
              </select>
              <select id="CAT" name="CAT" class="input">
                <option value="" disabled selected>
                  Please select a service.
                </option>
                <option
                  v-for="car in Service"
                  :key="car.value"
                  :value="car.value"
                >
                  {{ car.label }}
                </option>
              </select>
            </v-col>
            <v-col>
              <span class="Title">Product name</span>
              <input
                type="text"
                class="input"
                placeholder="Please enter your search term"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <span class="Title">Store availability</span>
              <input
                type="radio"
                id="Entire"
                name="store"
                class="hidden-radio"
              />
              <label for="Entire" class="radio-label">Entire</label>
              <input
                type="radio"
                id="Store_entry"
                name="store"
                class="hidden-radio"
              />
              <label for="Store_entry" class="radio-label">Store entry</label>
              <input
                type="radio"
                id="Not_in_stores"
                name="store"
                class="hidden-radio"
              />
              <label for="Not_in_stores" class="radio-label">Not in stores</label>
            </v-col>
            <v-col>
              <span class="Title">Company name</span>
              <input
                type="text"
                class="input"
                placeholder="Please enter your search term"
              />
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
 const Category = ref([
  { value: 'volvo', label: 'Volvo' },
  { value: 'saab', label: 'Saab' },
  { value: 'fiat', label: 'Fiat' },
  { value: 'audi', label: 'Audi' },
]);
const Service = ref([
  { value: 'volvo', label: 'Volvo' },
  { value: 'saab', label: 'Saab' },
  { value: 'fiat', label: 'Fiat' },
  { value: 'audi', label: 'Audi' },
]);
 
 const show = ref(false);
 </script>
<style scoped>
</style>