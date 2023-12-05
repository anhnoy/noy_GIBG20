<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">Register admin reply</span>
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
              <span class="Title">* Detail</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="textarea"
                placeholder="The customer's inquiry will be printed."
              />
            </v-col>
          </v-row>
          <v-row>
        <v-col align="center" justify="center">
          <v-btn variant="outlined" color="#346DDB" class="button" @click="this.$router.push({ path: '/partner' })" >
            cancellation
          </v-btn>
          <v-btn elevation="0" color="#346DDB" class="button">
            registration
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
@import '/src/assets/css/style.css';


</style>