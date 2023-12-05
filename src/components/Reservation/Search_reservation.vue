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
              <span class="Title">Reservation date</span>

              <input type="date" class="date-input" />
              <span> ~ </span>
              <input type="date" class="date-input" />
            </v-col>
          <v-col>
            <span class="Title">Search word</span>
            <select v-model="selectedWord" class="dropdown">
              <option value="Number">Number</option>
              <option value="Member">Member Name</option>
              <option value="Phone">Phone Number</option>
              <option value="Store">Store Name</option>
              <option value="Product">Product</option>
            </select>

            <input
              v-if="selectedWord === 'Number'"
              type="text"
              class="input"
              placeholder="Please enter your ID."
            />
            <input
              v-if="selectedWord === 'Member'"
              type="text"
              class="input"
              placeholder="Please enter your member name"
            />
            <input
              v-if="selectedWord === 'Phone'"
              type="text"
              class="input"
              placeholder="Please enter your Phone"
            />
            <input
              v-if="selectedWord === 'Store'"
              type="text"
              class="input"
              placeholder="Please enter your Store"
            />
            <input
              v-if="selectedWord === 'Product'"
              type="text"
              class="input"
              placeholder="Please enter your Phone"
            />
            </v-col>
        </v-row>
          <v-row>
            <v-col>
              <span class="Title"> Division</span>
              <input
                type="radio"
                id="Situation_entire"
                name="store"
                class="hidden-radio"
              />
              <label for="Situation_entire" class="radio-label">Entire</label>
              <input
                type="radio"
                id="Reservation"
                name="Division"
                class="hidden-radio"
              />
              <label for="Reservation" class="radio-label">Reservation</label>
              <input
                type="radio"
                id="Phone_cal"
                name="Division"
                class="hidden-radio"
              />
              <label for="Phone_cal" class="radio-label">Phone call</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span class="Title"> Reservation status</span>
              <input
                type="radio"
                id="Entire"
                name="Reservation"
                class="hidden-radio"
              />
              <label for="Entire" class="radio-label">Entire</label>
              <input
                type="radio"
                id="complete"
                name="Reservation"
                class="hidden-radio"
              />
              <label for="complete" class="radio-label">Reservation complete</label>
              <input
                type="radio"
                id="confirmed"
                name="Reservation"
                class="hidden-radio"
              />
              <label for="confirmed" class="radio-label">Reservation confirmed</label>
              <input
                type="radio"
                id="Service_completed"
                name="Reservation"
                class="hidden-radio"
              />
              <label for="Service_completed" class="radio-label">Service completed</label>
              <input
                type="radio"
                id="Service_confirmed"
                name="Reservation"
                class="hidden-radio"
              />
              <label for="Service_confirmed" class="radio-label">Service confirmed</label>
              <input
                type="radio"
                id="Cancel_reservation"
                name="Reservation"
                class="hidden-radio"
              />
              <label for="Cancel_reservation" class="radio-label">Cancel reservation</label>
              <input
                type="radio"
                id="Reservation_refused"
                name="Reservation"
                class="hidden-radio"
              />
              <label for="Reservation_refused" class="radio-label">Reservation refused</label>
              <input
                type="radio"
                id="Did_not"
                name="Reservation"
                class="hidden-radio"
              />
              <label for="Did_not" class="radio-label"> Did not visit the store</label>
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
 
 const show = ref(false);
 const selectedWord = ref('Number');
 </script>
<style scoped>

</style>