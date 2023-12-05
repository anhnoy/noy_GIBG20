<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app style="background-color: #e3e8ed">
    <div>
      <div class="pb-5">
        <p class="Page_name">Register Notice</p>
        <p class="Page_name_title">
          Content Management > Bulletin Board Management > Notices
        </p>
      </div>
      <div class="pb-5">
        <Basic_Information />
      </div>
      <v-row>
        <v-col align="center" justify="center">
          <v-btn variant="outlined" color="#346DDB" class="button" @click="this.$router.push({ path: '/member' })" >
            cancellation
          </v-btn>
          <v-btn elevation="0" color="#346DDB" class="button">
            registration
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>
<script setup lang="js">
import Basic_Information from "@/components/Contents/Board/Notice/insert/Basic_Information.vue";


</script>
  <style scoped>
@import "/src/assets/css/style.css";
</style>