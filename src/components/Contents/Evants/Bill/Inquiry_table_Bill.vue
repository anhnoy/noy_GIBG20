<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <p class="Head">
        총<span class="Total">{{ items.length }}</span> 건 조회
      </p>

      <v-spacer></v-spacer>
      <div class="items-per-page">
        <select
          v-model="itemsPerPage"
          id="itemsPerPage"
          class="items_per"
          @update:model-value="itemsPerPage = parseInt($event, 10)"
        >
          <option value="10">10건씩 조회</option>
          <option value="20">20건씩 조회</option>
          <option value="40">40건씩 조회</option>
          <option value="100">100건씩 조회</option>
        </select>
      </div>
    </v-card-actions>
    <v-container fluid>
      <div>
        <table class="custom-table">
          <tr>
            <th>번호</th>
            <th>상태</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일시</th>
            <th>답변일시</th>
            <th>답변여부</th>
          </tr>
          <tr v-for="item in visibleItems" :key="item.id">
            <td>{{ item.Number }}</td>
            <td>
              <p
                :class="{
                  Approval_request: item.situation === '승인요청',
                  Under: item.situation === '심사중',
                  Approval: item.situation === '승인완료',
                  Approved: item.situation === '승인거부',
                

                }"
              >
                {{ item.situation }}
               
              </p>

              
            </td>
            <td class="detail" @click="navigateToDetails(item)">
              {{ item.title }}
            </td>
            <td>{{ item.Writer }}</td>
            <td>{{ item.Registration }}</td>
            <td>{{ item.Reply }}</td>
            <td>
              <p
                :class="{
                  Waiting: item.Answer === '답변대기',
                  Answer: item.Answer === '답변완료',
                  
                

                }"
              >
                {{ item.Answer }}
               
              </p>

              
            </td>
          </tr>
        </table>
      </div>
      <div class="text-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="8">
              <v-container class="max-width">
                <v-pagination
                  v-model="pageCount"
                  class="my-4"
                  :length="15"
                ></v-pagination>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </v-card>
</template>
<script setup lang="js">
     import { ref , computed} from 'vue';
     import { useRouter } from 'vue-router';
     const page =ref(1);
     const router = useRouter();
     const navigateToDetails = () => {
  router.push({ path: `/Detaill` });
};
  const itemsPerPage  =ref(10);
  const items = ref([
  { Number: 1, situation: '승인요청', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 2, situation: '심사중', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 3, situation: '승인완료', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },
  { Number: 3, situation: '승인거부', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },
  { Number: 1, situation: '승인요청', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 2, situation: '심사중', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 3, situation: '승인완료', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },
  { Number: 3, situation: '승인거부', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },
  { Number: 1, situation: '승인요청', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 2, situation: '심사중', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 3, situation: '승인완료', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },
  { Number: 3, situation: '승인거부', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },
  { Number: 1, situation: '승인요청', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 2, situation: '심사중', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 3, situation: '승인완료', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },
  { Number: 3, situation: '승인거부', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },
  { Number: 1, situation: '승인요청', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 2, situation: '심사중', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 3, situation: '승인완료', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },
  { Number: 3, situation: '승인거부', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },
  { Number: 1, situation: '승인요청', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 2, situation: '심사중', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 3, situation: '승인완료', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },
  { Number: 3, situation: '승인거부', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },
  { Number: 1, situation: '승인요청', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 2, situation: '심사중', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 3, situation: '승인완료', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },
  { Number: 3, situation: '승인거부', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },
  { Number: 1, situation: '승인요청', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 2, situation: '심사중', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: '', Answer: '답변대기' },
  { Number: 3, situation: '승인완료', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },
  { Number: 3, situation: '승인거부', title: '정비명세서 인증해요!', Writer: '홍*동', Registration: 'YYYY-MM-DD HH:MM:SS', Reply: 'YYYY-MM-DD HH:MM:SS', Answer: '답변완료' },

]);

  const visibleItems = computed(() => {
    const startIndex = (page.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return items.value.slice(startIndex, endIndex);
  });
  const pageCount = computed(() => Math.ceil(items.value.length / itemsPerPage.value));
  
</script>
<style scoped></style>
