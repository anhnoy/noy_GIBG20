<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <p class="card1">
        Total<span class="card2">{{ items.length }}</span> number of views
      </p>
      <v-spacer></v-spacer>
      <div class="items-per-page">
        <select
          v-model="itemsPerPage"
          id="itemsPerPage"
          class="items_per"
          @update:model-value="itemsPerPage = parseInt($event, 10)"
        >
          <option value="10">10 items</option>
          <option value="30">30 items</option>
          <option value="50">50 items</option>
          <option value="100">100 items</option>
        </select>
      </div>
    </v-card-actions>
    <v-container fluid>
      <div>
        <table class="custom-table">
          <tr>
            <th>
              <input
                type="checkbox"
                v-model="selectAll"
                @change="selectAllItems"
              />
            </th>
            <th>Number</th>
            <th>Division</th>
            <th>Section width</th>
            <th>Management</th>
          </tr>
          <tr v-for="item in visibleItems" :key="item.id">
            <td>
              <input
                type="checkbox"
                v-model="item.selected"
                @change="itemSelected"
              />
            </td>
            <td>{{ item.Number }}</td>
            <td>{{ item.Division }}</td>
            <td class="td3">{{ item.Section }}</td>

            <td>
              <v-btn flat @click="editItem(item)" class="management"
                >수정</v-btn
              >
              <v-btn flat @click="confirmDelete(item)" class="management"
                >삭제</v-btn
              >
            </td>
          </tr>
        </table>
      </div>
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </v-container>
  </v-card>
</template>
     <script setup lang="js">
     import { ref , computed} from 'vue';
     const page =ref(1);
  const itemsPerPage  =ref(10);
  const items = ref([
  { Number: 1, Division: 'Brand', Section: '145'}, 
  { Number: 2, Division: 'Brand', Section: '145'}, 
  { Number: 3, Division: 'Brand', Section: '145'}, 
  { Number: 4, Division: 'Brand', Section: '145'}, 
  { Number: 5, Division: 'Brand', Section: '145'}, 
  { Number: 6, Division: 'Brand', Section: '145'}, 
  { Number: 7, Division: 'Brand', Section: '145'}, 
  { Number: 8, Division: 'Brand', Section: '145'}, 
  { Number: 9, Division: 'Brand', Section: '145'}, 
  { Number: 10, Division: 'Brand', Section: '145'}, 

]);
  
  const selectAll = ref(false);
  
  
  const itemSelected = () => {
    selectAll.value = items.value.every((item) => item.selected);
  };
  
  const visibleItems = computed(() => {
    const startIndex = (page.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return items.value.slice(startIndex, endIndex);
  });
  const pageCount = computed(() => Math.ceil(items.value.length / itemsPerPage.value));
  
  const selectAllItems = () => {
    items.value.forEach((item) => (item.selected = selectAll.value));
  };
  const editItem = (item) => {
    // Handle edit action for the selected item
    console.log('Edit:', item);
  };
  const confirmDelete = (item) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteItem(item);
    }
  };
  
  const deleteItem = (item) => {
    items.value = items.value.filter((i) => i !== item);
  };
     </script>
    <style scoped>
.items_per {
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #8899a8;
  width: 85px;
  height: 35px;
  border: 1px solid #e3e8ed;
  margin: 5px;
}
.management {
  height: 18px;
  text-align: center;
  color: #7d92a1;
  border: 1px solid #7d92a1;
  margin-left: 5px;
  font-family: Noto Sans KR;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: -0.01em;
  text-align: center;
}
.td3 {
  width: 788px;
  height: 36px;
  padding: 4px, 8px, 4px, 8px;
  border: 1px, 0px, 0px, 1px;
  gap: 8px;
}

.card1 {
  font-size: 16px;
  font-weight: 700;
  margin-left: 10px;
  color: #242424;
}
.card2 {
  font-size: 16px;
  font-weight: 700;
  margin-left: 10px;
  color: #346ddb;
}
.custom-table {
  width: 100%;
  border-collapse: collapse;
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
}

.custom-table th {
  background-color: #f5f8fa;
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}
.custom-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.btn {
  color: white;
  background-color: #346ddb;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: center;
  height: 32px;
}
</style>