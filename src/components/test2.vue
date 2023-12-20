<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div style="display: inline-flex">
    <span style="padding-top: 8px; margin-right: 10px; cursor: pointer">
      <span class="mdi mdi-calendar-month-outline"></span>
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
        <v-date-picker
          @input="selectedDate = $event"
          v-model="picker"
          @click="showDatePicker = false"
        />
  </v-dialog>
</template>

<script setup lang="js">
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
    const date = Date.parse(picker.value);
    valInput.value = convert(new Date(date).toUTCString());
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



