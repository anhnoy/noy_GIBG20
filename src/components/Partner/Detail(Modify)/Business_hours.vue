<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head"> Business hours settings</span>

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
              <span class="Title">* Division</span>
            </v-col>
            <v-col>
              <label for="24hours" class="checkbox-label">
                <input
                  type="checkbox"
                  id="24hours"
                  class="hidden-checkbox"
                />
                <span class="custom-checkbox"></span>
               24 hours
              </label>
              <label for="Holiday" class="checkbox-label">
                <input
                  type="checkbox"
                  id="Holiday"
                  class="hidden-checkbox"
                />
                <span class="custom-checkbox"></span>
               Holiday
              </label>
              <label for="No_information" class="checkbox-label">
                <input
                  type="checkbox"
                  id="No_information"
                  class="hidden-checkbox"
                />
                <span class="custom-checkbox"></span>
                No information
              </label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Operating time</span>
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
              <span class="Title">etc</span>
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

</style>