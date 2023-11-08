<!-- eslint-disable vue/multi-word-component-names -->
<template>
 
    <div class="select-all-row">
      <input type="checkbox" v-model="selectAll" /> No full price information
    </div>

    <div v-for="item in products" :key="item.price" class="row">
      <div class="col">{{ item.type }}</div>
      <div class="checkbox-col">
        <input
          :disabled="item.isChecked"
          v-model="item.startTime"
          :style="{ backgroundColor: item.isChecked ? '#E3E8ED' : '' }"
          placeholder="price"
          class="price"
        />
        <input
          type="checkbox"
          v-model="item.isChecked"
          @change="updateSelectAll"
        />
      </div>
      <div class="col">{{ item.price }}</div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";

const selectAll = ref(false);


watch(selectAll, (newValue) => {
  products.value.forEach((item) => {
    item.isChecked = newValue;
  });
});

const updateSelectAll = () => {
  const allChecked = products.value.every(item => item.isChecked);
  const allUnchecked = products.value.every(item => !item.isChecked);

  if (allChecked) {
    selectAll.value = true;
  } else if (allUnchecked) {
    selectAll.value = false;
  }
};

const products = ref([
  {
    price: "No pricing information",
    isChecked: false,
    type:"Light"
  },
  {
    price: "No pricing information",
    isChecked: false,
    type:"Small"
  },
  {
    price: "No pricing information",
    isChecked: false,
    type:"Semi-medium"
  },
  {
    price: "No pricing information",
    isChecked: false,
    type:"Medium"
  },
  {
    price: "No pricing information",
    isChecked: false,
    type:"Semi-large"
  },

  {
    price: "No pricing information",
    isChecked: false,
    type:"Large"
  },
 
]);
</script>

<style>
/* Simple styling for better clarity */
.row {
  display: flex;
  align-items: center;
  margin-top: 5px;
}
.col {
  width: 100px;
  padding: 5px 10px;
}
.price {
  width: 145px;
  height: 35px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin: 5px;
  padding: 8px;
}
</style>
