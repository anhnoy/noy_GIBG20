<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app style="background-color: #e3e8ed">
    <div>
      <div class="pb-5">
        <p class="H-Title">Product registration</p>
        <p class="Title">
          Service Management > Product List > Product Registration
        </p>
      </div>
      <div class="pb-5">
        <company_information />
      </div>
      <div class="pb-5">
        <Basic_product_information @selection="handleSelection" />
      </div>
      <div class="pb-5" v-if="showPriceInformation">
        <Price_information />
      </div>
      <div class="pb-5">
        <Product_Management />
      </div>
      <v-row>
        <v-col align="center" justify="center">
          <v-btn
            variant="outlined"
            color="#346DDB"
            class="button"
            @click="this.$router.push({ path: '/product_list' })"
          >
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
import { ref } from 'vue';
  import company_information from "@/components/Service_Management/Product_list/insert/Company_information.vue";
  import Basic_product_information from "@/components/Service_Management/Product_list/insert/Basic_product_information.vue";
  import Price_information from "@/components/Service_Management/Product_list/insert/Price_information.vue";
  import Product_Management from "@/components/Service_Management/Product_list/insert/Product_Management.vue";


  const showPriceInformation = ref(true);

const handleSelection = (serviceType) => {
  // Assuming you only want to hide the Price_information when "tireChange" is selected
  showPriceInformation.value = serviceType !== 'tireChange';
};
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