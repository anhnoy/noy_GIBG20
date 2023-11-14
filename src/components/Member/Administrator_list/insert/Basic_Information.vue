<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">Basic Information</span>

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
              <span class="Title">* id </span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please enter your ID."
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* password</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Your password will be automatically sent upon registration."
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Member name</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Input your name, please."
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Phone number</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please enter your mobile phone number."
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Permission type</span>
            </v-col>
           <v-col>
            <select id="CAT" name="CAT" class="input">
                <option value="" disabled selected>
                  Manager
                </option>
                <option v-for="Manager in Managers" :key="Manager.value" :value="Manager.value">
                  {{ Manager.label }}
                </option>
              </select>
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
   const Managers = ref([
  { value: 'volvo', label: 'Volvo' },
  { value: 'saab', label: 'Saab' },
  { value: 'fiat', label: 'Fiat' },
  { value: 'audi', label: 'Audi' },
]);
  

  </script>
  <style scoped>

</style>