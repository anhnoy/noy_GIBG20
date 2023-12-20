<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <label>
      <input type="radio" v-model="selectedOption" value="option1" />
      Option 1
    </label>

    <label>
      <input type="radio" v-model="selectedOption" value="option2" />
      Option 2
    </label>

    <label>
      <input type="radio" v-model="selectedOption" value="option3" />
      Option 3
    </label>
    <label>
      <input type="radio" v-model="selectedOption" value="option4" />
      Option 4
    </label>

    <label>
      <input type="radio" v-model="selectedOption" value="option5" />
      Option 5
    </label>

    <label>
      <input type="radio" v-model="selectedOption" value="option6" />
      Option 6
    </label>

    <v-text-field v-if="selectedOption == 'option1'" label="1" outlined></v-text-field>
    <v-text-field v-if="selectedOption == 'option2'" label="2" outlined></v-text-field>
    <v-text-field v-if="selectedOption == 'option2'" label="2" outlined></v-text-field>
    <v-text-field v-if="selectedOption == 'option3'" label="3" outlined></v-text-field>
    <v-text-field v-if="selectedOption == 'option4'" label="4" outlined></v-text-field>
    <v-text-field v-if="selectedOption == 'option4'" label="4" outlined></v-text-field>
    <v-text-field v-if="selectedOption == 'option5'" label="5" outlined></v-text-field>
    <v-text-field v-if="selectedOption == 'option6'" label="6" outlined></v-text-field>

  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: "option1",
      textFieldValue: '',
    };
  },
};
</script>

<style scoped>

div {
  margin: 20px;
}

p {
  margin-top: 10px;
}

.v-radio {
  margin-right: 10px;
}

.v-text-field {
  width: 300px;
}
</style>

