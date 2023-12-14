<template>
  <div>
    <v-text-field
      label="Select date"
      v-model="selectedDate"
      readonly
      :append-icon="isMenuOpen ? 'mdi-close' : 'mdi-calendar'"
      @click:append="isMenuOpen = !isMenuOpen"
    />
    <v-menu v-model="isMenuOpen">
      <template v-slot:activator="{ attrs }">
        <div v-bind="attrs" @click.stop>
          <span v-if="isMenuOpen">&nbsp;</span>
        </div>
      </template>
      <v-date-picker v-model="selectedDate" no-title scrollable></v-date-picker>
    </v-menu>
  </div>
  ddddddddddddddd
</template>
<script>
export default {
  data() {
    return { isMenuOpen: false, selectedDate: new Date() };
  },
};
</script>
