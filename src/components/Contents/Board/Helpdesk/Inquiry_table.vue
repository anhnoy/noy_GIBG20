<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <p class="Head">
        Total<span class="Total">{{ items.length }}</span> number of views
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
            <th>Number</th>
            <th>Inquiry type</th>
            <th>Writer</th>
            <th>Detail</th>
            <th>Company name</th>
            <th>Registration date and time</th>
            <th>Reply date and time</th>
            <th>Answer</th>
          </tr>
          <tr v-for="item in visibleItems" :key="item.id">
            <td>{{ item.Number }}</td>
            <td>{{ item.Inquiry }}</td>
            <td>{{ item.Writer }}</td>
            <td class="detail" @click="navigateToDetails(item)">{{ item.Detail }}</td>
            <td class="detail"> {{ item.Company }}</td>
            <td class="td6">{{ item.Registration }}</td>
            <td>{{ item.Reply }}</td>
            <td>{{ item.Answer }}</td>
          </tr>
        </table>
      </div>
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </v-container>
  </v-card>
</template>
     <script setup lang="js">
     import { ref , computed} from 'vue';
     import { useRouter } from 'vue-router';
     const page =ref(1);
     const router = useRouter();
     const navigateToDetails = (item) => {
  router.push({ path: `/modify(Inquiry)/${item.Inquiry}` });
};
  const itemsPerPage  =ref(10);
  const items = ref([
  { Number: 1, Inquiry: '예약',
   Writer: '홍*동', 
   Detail: '예약을 했는데 취소하고 싶어요ㅠㅠ',
    Company: '크리스탈 디테일링 금천점',
     Registration: 'YYYY-MM-DD HH:MM:SS',
      Reply: '', Answer: '답변 대기'}, 
  { Number: 2, Inquiry: '예약', Writer: '홍*동', Detail: '아이디와 비밀번호가 기억이 나질 않아요. 어떻게 하나요?', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변 대기'}, 
  { Number: 3, Inquiry: '기타', Writer: '홍*동', Detail: '서비스 상품 구매가 궁금해요!', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변 대기'}, 
]);
  
  const visibleItems = computed(() => {
    const startIndex = (page.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return items.value.slice(startIndex, endIndex);
  });
  const pageCount = computed(() => Math.ceil(items.value.length / itemsPerPage.value));
  
     </script>
    <style scoped>
    
</style>