<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="text-center">
    <v-btn color="primary">
      Open Dialog

      <v-dialog v-model="dialog" activator="parent" width="400">
        <v-card width="360" height="170">
         <div class="pt-8">
          <v-card-title class="Title_dialog">삭제하시겠습니까?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="button_dialog_cancel"> 아니오 </v-btn>
            <v-btn class="button_dialog"> 네 </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
         </div>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Simulate a successful login (replace this with your actual login logic)
      if (this.username === "demo" && this.password === "password") {
        // Save user information to localStorage
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", this.username);

        // Redirect to the home page or perform any other necessary actions
        console.log("Login successful");
      } else {
        console.log("Login failed. Invalid credentials.");
      }
    },
  },
};
</script>

<style scoped>
@import "/src/assets/css/style.css";
</style>

<script setup>
import { ref } from 'vue';

const selectedOption = ref('');
</script>