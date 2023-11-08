<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="head"> Product price information</span>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="!show">
        <v-divider></v-divider>

        <v-container fluid>
          <div class="select-all-row">
            <input type="checkbox" v-model="selectAll" /> No full price
            information
          </div>
          <v-row>
            <div class="row">
              <div v-for="item in products" :key="item.price">
              <div class="col">{{ item.type }}</div>
              <div class="checkbox-col">
                <input
                  :disabled="item.isChecked"
                  v-model="item.startTime"
                  :style="{
                    backgroundColor: item.isChecked ? '#E3E8ED' : '',
                  }"
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
            </div>    
          </v-row>
        </v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="js">
import { ref , watch} from 'vue';
     
const show = ref(false);

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
  {
    price: "No pricing information",
    isChecked: false,
    type:"Light SUV"
  },
  {
    price: "No pricing information",
    isChecked: false,
    type:"Small SUV"
  },
  {
    price: "No pricing information",
    isChecked: false,
    type:"Semi-medium SUV"
  },
  {
    price: "No pricing information",
    isChecked: false,
    type:"Medium SUV"
  },
  {
    price: "No pricing information",
    isChecked: false,
    type:"Semi-large SUV"
  },

  {
    price: "No pricing information",
    isChecked: false,
    type:"Large SUV"
  },
  {
    price: "No pricing information",
    isChecked: false,
    type:"etc"
  },
 
]);
</script>

    <style scoped>
.row {
  width: 100%;
}
.col {
  width: 120px;
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
.head {
  font-size: 16px;
  font-weight: 700;
  color: #242424;
}
.T-search {
  font-size: 14px;
  font-weight: 700;
  color: #7d92a1;
  margin-right: 20px;
}
.price {
  width: 140px;
  height: 35px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  margin: 5px;
  font-size: 13px;
  font-weight: 400;
}
.input {
  width: 250px;
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
.button {
  margin: 5px;
}
.custom-file-label {
  padding: 8px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #7d92a1;
  cursor: pointer;
}
</style>