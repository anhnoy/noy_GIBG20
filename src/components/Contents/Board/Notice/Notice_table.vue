<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <p class="Head">
        Total<span class="Total">{{ items.length }}</span> number of views
      </p>
      <v-spacer></v-spacer>
        <v-btn @click="this.$router.push({ path: '/insert_Notice' })" class="text-none text-subtitle-1" color="#346DDB"
          variant="flat">
          Register notice
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
            <th>업체코드</th>
            <th>카테고리</th>
            <th>업체명</th>
            <th>주소</th>
            <th>리뷰평점</th>
            <th>영업여부</th>
            <th>노출여부</th>
            <th>입점상태</th>
            <th>등록일시</th>
            <th>관리</th>
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
            <td>{{ item.Division }}</td>
            <td>
              <p class="ID">{{ item.ID }}</p>
            </td>
            <td>
              <p class="Member_name">{{ item.Member_name }}</p>
            </td>
            <td>{{ item.Phone }}</td>
            <td>
              <p>{{ item.Last_access_date }}</p>
            </td>
            <td>
              <p>
                {{ item.Situation }}
              </p>
            </td>
            <td>
              <p>
                {{ item.Join_date }}
              </p>
            </td>
            <td>{{ item.Withdrawal_date }}</td>
            <td>
              <router-link :to="`/modify(member)/${item.Number}`">
                <v-btn size="x-small" flat class="management"
                  >수정</v-btn
                ></router-link
              >
              <v-btn
                size="x-small"
                flat
                @click="confirmDelete(item)"
                class="management"
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
    console.log(resp.data.member);
    items.value = resp.data.member;
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
const confirmDelete = (item) => {
  if (window.confirm('Are you sure you want to delete this item?')) {
    deleteItem(item);
  }
};

const deleteItem = (items) => {
  items.value = items.value.filter((i) => i !== items);
};
   </script>
  <style scoped>
</style>