<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <label>
      <input
        type="radio"
        v-model="selectedOption"
        value="option1"
        name="options"
      />
      Option 1
    </label>

    <label>
      <input
        type="radio"
        v-model="selectedOption"
        value="option2"
        name="options"
      />
      Option 2
    </label>

    <label>
      <input
        type="radio"
        v-model="selectedOption"
        value="option3"
        name="options"
      />
      Option 3
    </label>

    <p>Selected Option: {{ selectedOption }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedOption = ref('');
</script>