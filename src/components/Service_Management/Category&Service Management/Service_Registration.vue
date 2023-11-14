<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head"> Service Registration </span>

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
            <v-col cols="5">
              <span class="Title">Service name </span>
              <select v-model="selectedWord" class="dropdown">
              <option value="ID" >Please select a category.</option>
              <option value="Member">Member Name</option>
              <option value="Phone">Phone Number</option>
            </select>

            <input
              v-if="selectedWord === 'ID'"
              type="text"
              class="input"
              placeholder="Please enter the service name."
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
            <v-col cols="6">
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
           const selectedWord = ref('ID');
    
           </script>
          <style scoped>
</style>