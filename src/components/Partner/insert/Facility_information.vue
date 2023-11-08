<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="head"> Facility information </span>

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
              <span class="T-search">* category </span>
            </v-col>
            <v-col>
              <label for="vehicle1"
                ><input type="checkbox" id="vehicle1" /> Free parking
              </label>
              <label for="vehicle2" class="checkbox"
                ><input type="checkbox" id="vehicle2" /> Restroom</label
              >
              <label for="vehicle3" class="checkbox"
                ><input type="checkbox" id="vehicle3" /> Wireless
                Internet</label
              >
              <label for="vehicle3" class="checkbox"
                ><input type="checkbox" id="vehicle3" /> Accessibility
                facilities for the disabled</label
              >
              <label for="vehicle3" class="checkbox"
                ><input type="checkbox" id="vehicle3" /> Dogs allowed</label
              ><label for="vehicle3" class="checkbox"
                ><input type="checkbox" id="vehicle3" /> cafe</label
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="T-search">Additional facility information</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please enter additional facility information."
              />
              <br />
              <span class="hint"
                >※ Please enter more than one facility information separated by
                a comma (,).</span
              >
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
.head {
  font-size: 16px;
  font-weight: 700;
  color: #242424;
}
.T-search {
  font-size: 14px;
  font-weight: 700;
  color: #7d92a1;
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