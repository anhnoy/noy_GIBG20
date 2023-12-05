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
            <v-col>
              <span class="Title">Join date</span>

              <input type="date" class="date-input" v-model="startDate" />
              <span> ~ </span>
              <input type="date" class="date-input" v-model="endDate" />
            </v-col>
            <v-col>
              <span class="Title"> Inquiry type</span>
              <input
                type="radio"
                id="Inquiry"
                name="Inquiry"
                class="hidden-radio"
              />
              <label for="Inquiry" class="radio-label">Entire</label>

              <input
                type="radio"
                id="Reservation"
                name="Inquiry "
                class="hidden-radio"
              />
              <label for="Reservation" class="radio-label">Reservation</label>

              <input
                type="radio"
                id="member"
                name="Inquiry"
                class="hidden-radio"
              />
              <label for="member" class="radio-label">member</label>
              <input
                type="radio"
                id="etc"
                name="Inquiry"
                class="hidden-radio"
              />
              <label for="etc" class="radio-label">etc</label>
            </v-col>
        </v-row>
          <v-row>
            <v-col cols="6">
            <span class="Title">Search word</span>
            <select v-model="selectedWord" class="dropdown">
              <option value="ID">ID</option>
              <option value="Member">Member Name</option>
              <option value="Phone">Phone Number</option>
            </select>

            <input
              v-if="selectedWord === 'ID'"
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
            </v-col>
            <v-col >
              <span class="Title"> Answer</span>
              <input
                type="radio"
                id="Situation_entire"
                name="Answer"
                class="hidden-radio"
              />
              <label for="Situation_entire" class="radio-label">Entire</label>

              <input
                type="radio"
                id="Waiting"
                name="Answer"
                class="hidden-radio"
              />
              <label for="Waiting" class="radio-label">Waiting for reply</label>

              <input
                type="radio"
                id="complete"
                name="Answer"
                class="hidden-radio"
              />
              <label for="complete" class="radio-label">Answer complete</label>
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
 const selectedWord = ref('ID');
 
 const show = ref(false);
 </script>
<style scoped>
@import '/src/assets/css/style.css';


</style>