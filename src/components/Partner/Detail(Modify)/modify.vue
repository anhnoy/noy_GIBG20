<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app style="background-color: #e3e8ed">
    <div>
      <div class="pb-5">
        <p class="Page_name">Company details</p>
        <p class="Page_name_title">
          Company Management > Company List > Company Details
        </p>
      </div>
      <div class="pb-5">
        <Basic_Information />
      </div>
      <div class="pb-5">
        <Store_Information />
      </div>
      <div class="pb-5">
        <Store_introduction />
      </div>
      <div class="pb-5">
        <Business_hours />
      </div>
      <div class="pb-5">
        <Facility_information />
      </div>
      <div class="pb-5">
        <Payment />
      </div>
      <div class="pb-5">
        <Pricing />
      </div>
      <v-row>
        <v-col align="center" justify="center">
          <v-btn variant="outlined" color="#346DDB" class="button" @click="this.$router.push({ path: '/partner' })" >
            cancellation
          </v-btn>
          <v-btn elevation="0" color="#346DDB" class="button"  @click="confirmEdit">
            registration
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>
<script setup lang="js">
import Basic_Information from "@/components/Partner/Detail(Modify)/Basic_Information.vue";
import Store_Information from "@/components/Partner/Detail(Modify)/Store_information.vue";
import Store_introduction from "@/components/Partner/Detail(Modify)/Store_introduction.vue";
import Business_hours from "@/components/Partner/insert/Business_hours.vue";
import Facility_information from "@/components/Partner/insert/Facility_information.vue";
import Payment from "@/components/Partner/insert/Payment.vue";
import Pricing from "@/components/Partner/insert/Pricing_information.vue";

const confirmEdit = () => {
  if (window.confirm('Are you sure you want to edit this item?')) ;
};
</script>
  <style scoped>
  @import '/src/assets/css/style.css';
</style>