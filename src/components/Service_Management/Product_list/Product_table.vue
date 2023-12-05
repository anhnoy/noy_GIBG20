<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <p class="Head">
        Total<span class="Total">{{ items.length }}</span> number of views
      </p>
      <v-spacer></v-spacer>
      <v-btn
        @click="this.$router.push({ path: '/insert_product' })"
        class="text-none text-subtitle-1"
        color="#346DDB"
        variant="flat"
      >
        Product registration
      </v-btn>
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
            <th>Display</th>
            <th>Category</th>
            <th>Service</th>
            <th>Price standard</th>
            <th>Product image</th>
            <th>Product name</th>
            <th>Price</th>
            <th>Store availability</th>
            <th>Company name</th>
            <th>Registration date</th>
            <th>Management</th>
          </tr>
          <tr v-for="item in items" :key="item.id">
            <td>
              <input
                type="checkbox"
                v-model="item.selected"
                @change="itemSelected"
              />
            </td>
            <td>{{ item.Number }}</td>
            <td>
              <p>{{ item.Display_classification }}</p>
            </td>
            <td>{{ item.category }}</td>
            <td>{{ item.service }}</td>
            <td>{{ item.Price_standard }}</td>
            <td>
      <img :src="item.Product_image" alt="Product Image" style="width: 25px; height: auto;"/>
    </td>
            <td>{{ item.Product_name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.Store_availability }}</td>
            <td>{{ item.company_name }}</td>
            <td>{{ item.Registration_date }}</td>
            <td>
              <v-btn size="x-small" flat @click="editItem(item)" class="management"
                >수정</v-btn
              >
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
    console.log(resp.data.Product);
    items.value = resp.data.Product;
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

</style>