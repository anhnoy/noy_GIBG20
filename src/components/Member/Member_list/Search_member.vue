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
          </v-row>
          <v-row>
            <v-col cols="5">
              <span class="Title"> Situation</span>
              <input
                type="radio"
                id="Situation_entire"
                name="store"
                class="hidden-radio"
              />
              <label for="Situation_entire" class="radio-label">Entire</label>

              <input
                type="radio"
                id="Registered_member"
                name="store"
                class="hidden-radio"
              />
              <label for="Registered_member" class="radio-label">Registered member</label>

              <input
                type="radio"
                id="Withdrawal_member"
                name="store"
                class="hidden-radio"
              />
              <label for="Withdrawal_member" class="radio-label">Withdrawal member</label>
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
 const selectedWord = ref('ID');
 </script>
<style scoped>
</style>