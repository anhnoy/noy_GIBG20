<template>
    <v-card class="mx-auto" max-width="90%">
      <v-card-actions>
        <p class="Head">
          총<span class="Total">{{ totalItems }}</span> 건 조회
        </p>
        <v-spacer></v-spacer>
        <v-btn @click="this.$router.push({ path: '/insert_Admin' })" class="text-none text-subtitle-1" color="#346DDB"
          variant="flat">
          관리자 등록
      </v-btn>
        <div class="items-per-page">
          <select v-model="itemsPerPage" id="itemsPerPage" class="items_per"  @update:model-value="itemsPerPage = parseInt($event, 10)">
            <option value="10">10 건씩 조회</option>
            <option value="30">30 건씩 조회</option>
            <option value="50">50 건씩 조회</option>
            <option value="100">100 건씩 조회</option>
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
              <th>번호</th>
              <th>권한</th>
              <th>아이디</th>
              <th>회원명</th>
              <th>휴대폰 번호</th>
              <th>최종 접속일</th>
              <th>상태</th>
              <th>가입일</th>
              <th>접속IP</th>
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
              <td>{{ item.admid }}</td>
              <td>{{ item.authority }}</td>
              <td>
              <router-link :to="`/modify(admin)/${item.admid}`" class="no-underline">
                <p class="ID">{{ item.id }}</p>
              </router-link>
            </td>
            <td>
              <router-link :to="`/modify(admin)/${item.admid}`" class="no-underline">
                <p class="ID">{{ item.name }}</p>
              </router-link>
            </td>
              <td>{{ item.phone }}</td>
              <td>{{ item.Last_access_date }}</td>
              <td>{{ item.situation }}</td>
              <td>{{ item.Join_date }}</td>
              <td>{{ item.Connection_IP }}</td>
              <td>
                <router-link :to="`/modify(admin)/${item.admid}`">
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
        <v-pagination
        v-model="page"
        :length="pageCount"
        :total-visible="7"
      ></v-pagination>
      </v-container>
    </v-card>
  </template>
     <script setup lang="js">
     import { ref , computed, watch} from 'vue';
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
    const resp = await Post_admin.get_admin(PG,SZ);
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

  
  const selectAll = ref(false);
  
  
  const itemSelected = () => {
    selectAll.value = items.value.every((item) => item.selected);
  };
  
  const pageCount = computed(() => Math.ceil(totalItems.value / size.value));
  
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