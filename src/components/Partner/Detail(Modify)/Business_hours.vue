<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="head"> Business hours settings</span>

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
              <span class="T-search">* Division</span>
            </v-col>
            <v-col>
              <input type="checkbox" name="Division" />
              <label> 24 hours</label>
              <input type="checkbox" name="Division" class="radio" />
              <label> holiday</label>
              <input type="checkbox" name="Division" class="radio" />
              <label> No information</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="T-search">* Operating time</span>
            </v-col>
            <v-col>
              <div class="form-container">
                <div v-for="dayItem in days" :key="dayItem.day" class="row">
                  <div class="checkbox-col">
                    <input type="checkbox" v-model="dayItem.isChecked" />
                  </div>
                  <div class="col">{{ dayItem.day }}</div>
                  <div class="input-col">
                    <input
                      :disabled="!dayItem.isChecked"
                      v-model="dayItem.startTime"
                      :style="{
                        backgroundColor: !dayItem.isChecked ? '#E3E8ED' : '',
                      }"
                      placeholder="Start Time"
                    />
                  </div>
                  <div class="col">~</div>
                  <div class="input-col">
                    <input
                      :disabled="!dayItem.isChecked"
                      v-model="dayItem.endTime"
                      :style="{
                        backgroundColor: !dayItem.isChecked ? '#E3E8ED' : '',
                      }"
                      placeholder="End Time"
                    />
                  </div>
                  <div class="col_Break">( Break time</div>
                  <div class="input-col">
                    <input
                      :disabled="!dayItem.isChecked"
                      v-model="dayItem.breakStart"
                      :style="{
                        backgroundColor: !dayItem.isChecked ? '#E3E8ED' : '',
                      }"
                      placeholder="Break Start"
                    />
                  </div>
                  <div class="col">~</div>
                  <div class="input-col">
                    <input
                      :disabled="!dayItem.isChecked"
                      v-model="dayItem.breakEnd"
                      :style="{
                        backgroundColor: !dayItem.isChecked ? '#E3E8ED' : '',
                      }"
                      placeholder="Break End"
                    />
                  </div>
                  <div class="col">)</div>
                </div>
                <br />
              <span class="hint">※ Please enter in 24-hour increments. Business status is displayed for the set time. (※ Based on Asia/Seoul time zone)</span>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="T-search">etc</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please enter if there are any special operating hours."
              />
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
     const days = ref([
  {
    day: 'MON',
    isChecked: false,
    startTime: '',
    endTime: '',
    breakStart: '',
    breakEnd: ''
  },
  {
    day: 'TUE',
    isChecked: false,
    startTime: '',
    endTime: '',
    breakStart: '',
    breakEnd: ''
  },
  {
    day: 'WED',
    isChecked: false,
    startTime: '',
    endTime: '',
    breakStart: '',
    breakEnd: ''
  },  {
    day: 'THU',
    isChecked: false,
    startTime: '',
    endTime: '',
    breakStart: '',
    breakEnd: ''
  },
  {
    day: 'FRI',
    isChecked: false,
    startTime: '',
    endTime: '',
    breakStart: '',
    breakEnd: ''
  },
  {
    day: 'SAT',
    isChecked: false,
    startTime: '',
    endTime: '',
    breakStart: '',
    breakEnd: ''
  },
  {
    day: 'SUN',
    isChecked: false,
    startTime: '',
    endTime: '',
    breakStart: '',
    breakEnd: ''
  },

]);

     </script>
    <style scoped>

.row {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.col {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  width: 50px;
}
.col_Break {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  width: auto;
}

.input-col input {
  width: 100px;
  padding: 5px 10px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
}
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