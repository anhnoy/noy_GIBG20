<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div style="display: inline-flex">
      <span style="padding-top: 8px; margin-right: 10px; cursor: pointer">
        <v-img
          width="21"
          @click="showCalendar"
          src="../../assets/images/calendar.png"
        >
        </v-img>
      </span>
      <span>
        <input
          v-model="valInput"
          class="date"
          placeholder="YYYY-MM-DD"
          id="start"
          @focus="showCalendar"
        />
      </span>
    </div>
    <v-dialog v-model="showDatePicker" width="auto">
      <v-card>
        <v-card-text>
          <v-date-picker
            @input="selectedDate = $event"
            v-model="picker"
            locale="ko"
          />
        </v-card-text>
        <div style="display: flex; justify-content: flex-end">
          <v-card-actions>
            <v-btn @click="showDatePicker = false">Close</v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  
  const showDatePicker = ref(false);
  const selectedDate = ref(null);
  const valInput = ref("");
  const picker = ref();
  const showCalendar = () => {
    showDatePicker.value = true;
  };
  watch(picker, () => {
    console.log(picker);
    if (picker.value !== undefined && picker.value !== null) {
      console.log(`==========================`);
      console.log(picker);
      const date = Date.parse(picker.value);
      console.log(date);
      valInput.value = convert(new Date(date).toUTCString());
      console.log(valInput.value);
    }
  });
  
  console.log(picker);
  const convert = (str) => {
    const date = new Date(str);
    const mnth = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };
  </script>
  
  <style scoped>
  .date {
    border: 1px solid #e3e8ed;
    padding: 10px 8px;
    width: 125px;
    height: 38px;
    color: #242424;
    font-size: 14px;
    text-align: center;
    font-weight: 400;
    outline: none;
  }
  </style>
  