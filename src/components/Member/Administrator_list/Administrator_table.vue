<template>
    <v-card class="mx-auto" max-width="90%">
      <v-card-actions>
        <p class="Head">
          Total<span class="Total">{{ items.length }}</span> number of views
        </p>
        <v-spacer></v-spacer>
        <v-btn @click="this.$router.push({ path: '/insert_Admin' })" class="text-none text-subtitle-1" color="#346DDB"
          variant="flat">
          Administrator registration
      </v-btn>
        <div class="items-per-page">
          <select v-model="itemsPerPage" id="itemsPerPage" class="items_per"  @update:model-value="itemsPerPage = parseInt($event, 10)">
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
              <th>Authority</th>
              <th>ID</th>
              <th>Member name</th>
              <th>Phone number</th>
              <th>Last access date</th>
              <th>Situation</th>
              <th>Join date</th>
              <th>Connection IP</th>
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
              <td>{{ item.authority }}</td>
              <td class="td3">{{ item.id }}</td>
              <td>{{ item.Member_name }}</td>
              <td>{{ item.Phone }}</td>
              <td class="td6">{{ item.Last_access_date }}</td>
              <td>{{ item.situation }}</td>
              <td>{{ item.Join_date }}</td>
              <td>{{ item.Connection_IP }}</td>
              <td>
                <router-link :to="`/modify(admin)/${item.Number}`">
              <v-btn
                size="x-small"
                flat
                class="management"
                >수정</v-btn
              ></router-link>
                <v-btn size="x-small" flat @click="confirmDelete(item)" class="management"
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
   import Get_data from "@/services/Get_data";
     const page =ref(1);
  const itemsPerPage  =ref(10);
  const items = ref([]);

const loadItems = async ()=>{
  try{
    const resp = await Get_data.get_partner();
    console.log(resp.data.Administrator);
    items.value = resp.data.Administrator;
  }
  catch(error){
    console.error('Exception occurred while try to fetch items', error);
  }
}

loadItems();
  
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
  </style>