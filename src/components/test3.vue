<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <p>{{ find_member }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const find_member = ref(localStorage.getItem("find_member.mid"));
</script>

<style scoped>
/* Add your component styles here */
</style>
