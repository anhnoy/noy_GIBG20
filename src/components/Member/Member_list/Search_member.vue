<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="card1">Search conditions</span>
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
              <span class="T-search">Join date</span>

              <input type="date" class="date" />
              <span>~</span>
              <input type="date" class="date" />
            </v-col>
          <v-col cols="6">
            <span class="T-search">Search word</span>
            <select v-model="selectedWord" class="dropdown">
              <option value="ID" >ID</option>
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
              <span class="T-search"> Situation</span>
              <input type="radio" name="closed down" />
              <label> entire</label>
              <input type="radio" name="closed down" class="radio" />
              <label> Registered member</label>
              <input type="radio" name="closed down" class="radio" />
              <label> Withdrawal member</label>
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
.date {
  width: 120px;
  height: 35px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  font-size: 13px;
  font-weight: 400;
  outline: none;
}
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
.dropdown {
  width: 200px;
  height: 35px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 400;
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