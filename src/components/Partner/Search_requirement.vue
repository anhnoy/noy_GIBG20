<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="card1">Basic information</span>
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
              <span class="T-search">category</span>
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
              <span class="T-search">company name</span>
              <input
                type="text"
                class="input"
                placeholder="Please enter your business name"
              />
            </v-col>
            <v-col cols="4">
              <span class="T-search">Store status</span>
              <input type="radio" name="store" />
              <label>entire</label>
              <input type="radio" name="store" class="radio" />
              <label>Store entry</label>
              <input type="radio" name="store" class="radio" />
              <label>Not in stores</label>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <span class="T-search">Exposure</span>
              <input type="radio" name="closed down" />
              <label>entire</label>
              <input type="radio" name="closed down" class="radio" />
              <label>exposure</label>
              <input type="radio" name="closed down" class="radio" />
              <label>hiding</label>
            </v-col>
            <v-col cols="6">
              <span class="T-search">Business status</span>
              <input type="radio" name="Business status" />
              <label>entire</label>
              <input type="radio" name="Business status" class="radio" />
              <label>Open</label>
              <input type="radio" name="Business status" class="radio" />
              <label>Business suspension</label>
              <input type="radio" name="Business status" class="radio" />
              <label>closed down</label>
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
.card1 {
  font-size: 16px;
  font-weight: 700;
  color: #242424;
  margin-left: 10px;
}
.T-search {
  font-size: 14px;
  font-weight: 700;
  color: #7d92a1;
  margin-right: 5%;
}
.input {
  width: 200px;
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
  margin-right: 10px;
  font-size: 13px;
  font-weight: 400;
}
.input2 {
  width: 106px;
  height: 35px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 400;
}
.input3 {
  width: 350px;
  height: 35px;
  padding: 8px 10px;
  margin-right: 10px;
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
</style>