<!-- eslint-disable vue/multi-word-component-names -->

<template>
<<<<<<< HEAD
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="bottom"
        temporary
      >
        <v-list
          :items="items"
        ></v-list>
      </v-navigation-drawer>

      <v-main style="height: 500px;">
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
=======
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

<script setup>
import { ref } from 'vue';

<<<<<<< HEAD
const selectedOption = ref('');
</script>
=======

>>>>>>> 02a6b5a4444474abdbaa8e2ae5c36f92e47fe319
>>>>>>> feature
