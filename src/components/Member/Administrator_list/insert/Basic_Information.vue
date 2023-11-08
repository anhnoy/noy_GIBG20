<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="card1">Basic Information</span>

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
              <span class="T-search">* id </span>
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
              <span class="T-search">* password</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input3"
                placeholder="Your password will be automatically sent upon registration."
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="T-search">* Member name</span>
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
              <span class="T-search">* Phone number</span>
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
              <span class="T-search">* Permission type</span>
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
.img-wrapper {
  position: relative; /* The parent container should be relative */
  display: inline-block;
  margin: 5px;
}

img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

button.remove-button {
  width: 16px;
  height: 16px;
  background-color: #394956;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  padding: 0; /* Resetting any default padding */
  border: none; /* Remove default border */
  position: absolute; /* Absolute positioning */
  top: -5px; /* Positioning it slightly above the top of the image */
  right: -5px; /* Positioning it slightly to the right of the image */
  border-radius: 50%; /* Making the button round */
  line-height: 16px; /* Vertically centering the "X" text */
  text-align: center; /* Horizontally centering the "X" text */
}
.card1 {
  font-size: 16px;
  font-weight: 700;
  color: #242424;
}
.T-search {
  font-size: 14px;
  font-weight: 700;
  color: #7d92a1;
  margin: 5px 20px 5px 0px;
}
.input {
  width: 250px;
  height: 35px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 400;
}
.input1 {
  width: 148px;
  height: 35px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  margin: 0px 10px 10px 0px;
  font-size: 13px;
  font-weight: 400;
}

.input3 {
  width: 350px;
  height: 35px;
  padding: 8px 10px;
  font-size: 13px;
  font-weight: 400;
}
::placeholder {
  color: #8899a8;
}
.hint {
  font-size: 12px;
  font-weight: 500;
  color: #8899a8;
}
.checkbox {
  margin-left: 20px;
}
.radio {
  margin-left: 20px;
}
.button {
  margin: 5px;
}
.custom-file-label {
  padding: 8px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #7d92a1;
  cursor: pointer;
}
</style>