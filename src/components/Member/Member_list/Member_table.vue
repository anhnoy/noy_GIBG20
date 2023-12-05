<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <p class="Head">
        총<span class="Total">{{ totalItems }}</span> 건 조회
      </p>
      <v-spacer></v-spacer>
      <div class="items-per-page">
        <select v-model="itemsPerPage" id="itemsPerPage" class="items_per">
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
            <th>번호</th>
            <th>구분</th>
            <th>아이디</th>
            <th>회원명</th>
            <th>휴대폰 번호</th>
            <th>최종 접속일</th>
            <th>상태</th>
            <th>가입일</th>
            <th>탈퇴일</th>
            <th>관리</th>
          </tr>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.mid }}</td>
            <td>{{ item.device_id }}</td>
            <td>
              <router-link :to="`/modify(member)/${item.mid}`" class="no-underline">
                <p class="ID">{{ item.email }}</p>
              </router-link>
            </td>
            <td>
              <router-link :to="`/modify(member)/${item.mid}`" class="no-underline">
                <p class="Member_name">{{ item.name }}</p>
              </router-link>
            </td>
            <td>{{ item.phone }}</td>
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
              <router-link :to="`/modify(member)/${item.mid}`">
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
      <v-pagination
        v-model="page"
        :length="pageCount"
        :total-visible="7"
      ></v-pagination>
    </v-container>
  </v-card>
</template>

<script setup lang="js">
   import { ref, watch, computed} from 'vue';
   import Post_admin from '@/services/Post_admin';


   const page =ref(1);
   const size =ref(10);
   const itemsPerPage  =ref(10);
   const items = ref([]);
   const totalItems = ref([]);

const loadItems = async ()=>{
  const PG = page.value;
  const SZ = size.value;
  try{
    const resp = await Post_admin.get_member(PG,SZ);
    console.log(resp.data.datas);
    items.value = resp.data.datas;
    totalItems.value = resp.data.totalItems;
  }
  catch(error){
    console.error('Exception occurred while try to fetch items', error);
  }
}
loadItems();

watch(itemsPerPage, (newValue) => {
  size.value = parseInt(newValue, 10);
  loadItems();
});
watch(page, (newValue) => {
  page.value = parseInt(newValue, 10);
  loadItems();
});


const pageCount = computed(() => Math.ceil(totalItems.value / size.value));

const confirmDelete = (item) => {
  if (window.confirm('Are you sure you want to delete this item?')) {
    deleteItem(item);
  }
};

const deleteItem = (itemToDelete) => {
  items.value = items.value.filter((item) => item !== itemToDelete);
};
   </script>
  <style scoped>
</style>