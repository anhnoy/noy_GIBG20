<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app style="background-color: #e3e8ed">
    <div>
      <div class="pb-5">
        <p class="H-Title">Business Registration</p>
        <p class="Title">
          Company Management > Company List > Company Registration
        </p>
      </div>
      <div class="pb-5">
        <Basic_Information />
      </div>
      <div class="pb-5">
        <Store_Information />
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
          <v-btn elevation="0" color="#346DDB" class="button">
            registration
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>
<script setup lang="js">
import Basic_Information from "@/components/Partner/insert/Basic_Information.vue";
import Store_Information from "@/components/Partner/insert/Store_information.vue";
import Business_hours from "@/components/Partner/insert/Business_hours.vue";
import Facility_information from "@/components/Partner/insert/Facility_information.vue";
import Payment from "@/components/Partner/insert/Payment.vue";
import Pricing from "@/components/Partner/insert/Pricing_information.vue";

</script>
  <style scoped>
.button {
  margin: 5px;
}
.card1 {
  font-size: 16px;
  font-weight: 700;
  color: #242424;
}
.T-search {
  font-size: 14px;
  font-weight: 700;
  color: #7d92a1;
}
.H-Title {
  font-size: 20px;
  font-weight: 700;
  color: #242424;
  margin-left: 5%;
  margin-top: 2%;
}
.Title {
  font-size: 12px;
  font-weight: 500;
  color: #8899a8;
  margin-left: 5%;
}
.input {
  width: 200px;
  height: 35px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 400;
}
.input1 {
  width: 148px;
  height: 35px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 400;
}
.input2 {
  width: 106px;
  height: 35px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 400;
}
.input3 {
  width: 350px;
  height: 35px;
  padding: 8px 10px;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 400;
}
::placeholder {
  color: #8899a8;
}
.hint {
  font-size: 12px;
  font-weight: 500;
  color: #8899a8;
}
.checkbox {
  margin-left: 20px;
}
.radio {
  margin-left: 20px;
}
.button4 {
  background-color: white;
  color: #8899a8;
  border: 1px solid #ccc;
  width: 106px;
  height: 35px;
  font-size: 13px;
  font-weight: 400;
}

.button4:hover {
  background-color: #e7e7e7;
}
.custom-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #f5f8fa;
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
}

.custom-table th,
.custom-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.custom-table tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>