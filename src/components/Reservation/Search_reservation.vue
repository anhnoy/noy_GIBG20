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
            <v-col cols="4">
              <span class="T-search">Reservation date</span>

              <input type="date" class="date-input" />
              <span> ~ </span>
              <input type="date" class="date-input" />
            </v-col>
          <v-col>
            <span class="T-search">Search word</span>
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
              <span class="T-search"> Division</span>
              <input type="radio" name="Division" />
              <label> entire</label>
              <input type="radio" name="Division" class="radio" />
              <label> Reservation</label>
              <input type="radio" name="Division" class="radio" />
              <label> Phone call</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span class="T-search"> Reservation status</span>
              <input type="radio" name="Reservation" />
              <label> entire</label>
              <input type="radio" name="Reservation" class="radio" />
              <label> Reservation complete</label>
              <input type="radio" name="Reservation" class="radio" />
              <label> Reservation confirmed</label>
              <input type="radio" name="Reservation" class="radio" />
              <label> Service completed</label>
              <input type="radio" name="Reservation" class="radio" />
              <label> Service confirmed</label>
              <input type="radio" name="Reservation" class="radio" />
              <label> cancel reservation</label>
              <input type="radio" name="Reservation" class="radio" />
              <label> Reservation refused</label>
              <input type="radio" name="Reservation" class="radio" />
              <label> Did not visit the store</label>
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
.date-input {
  width: 150px;
  height: 35px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
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