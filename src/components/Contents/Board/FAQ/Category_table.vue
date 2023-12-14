<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <p class="card1">
        총 <span class="card2">{{ items.length }}</span> 신규 등록
      </p>
      <v-spacer></v-spacer>
      <v-btn :ripple="false" @click="$router.push('/insert1')" class="btn2"
        >조회</v-btn
      >

      <!-- <div class="items-per-page"> -->
        <!-- <select v-model="itemsPerPage" 
          id="itemsPerPage"
           class="items_per"
            @update:model-value="itemsPerPage = parseInt($event, 10)">
    <option value="10"><i class="fas fa-eye"></i> 10 items</option>
    <option value="30"><i class="fas fa-eye"></i> 20 items</option>
    <option value="50"><i class="fas fa-eye"></i> 40 items</option>
    <option value="100"><i class="fas fa-eye"></i> 80 items</option>
  </select> -->

  
  <div class="items-per-page">
    <v-col cols="2">
      <v-select
        v-model="itemsPerPage"
        id="itemsPerPage"
        @update:model-value="itemsPerPage = parseInt($event, 10)"
        variant="outlined"
        :menu-props="{ maxHeight: '300px' }" 
        style="width: 100px; max-width: 80px; margin-top: 20px;"
      >
        <option value="10"><i class="fas fa-eye"></i> 10 items</option>  
        <option value="30"><i class="fas fa-eye"></i> 20 items</option>
        <option value="50"><i class="fas fa-eye"></i> 40 items</option>
        <option value="100"><i class="fas fa-eye"></i> 80 items</option>
      </v-select>
    </v-col>
  </div>
    </v-card-actions>
    <v-container fluid>
      <div>
        <table class="custom-table">
          <tr>
            <th>분류</th>
            <th>질문</th>
            <th>답변</th>
            <th>등록일시</th>
            <th>관리</th>
          </tr>
          <tr v-for="item in visibleItems" :key="item.id">
            <td>{{ item.카테고리 }}</td>
            <td class="td3">{{ item.업체명 }}</td>
            <td>{{ item.주소 }}</td>
            <td>{{ item.등록일시 }}</td>
            <td>
              <v-btn
                :ripple="false"
                @click="$router.push('/FAQ_data2')"
                class="management"
                >조회</v-btn
              >

              <!-- <v-btn flat @click="this.$router.push({ path: `/FAQ_data2/${item}` })" class="management">수정</v-btn> -->

              <v-btn flat @click="confirmDelete(item)" class="management"
                >삭제</v-btn
              >
            </td>
          </tr>
        </table>
      </div>
      <!-- <v-pagination v-model="page" :length="pageCount"></v-pagination> -->
      <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
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
import { ref, computed } from 'vue';
const page = ref(1);
// const items2 = ['Item 1', 'Item 2', 'Item 3','hdruhgudhudifg'];
const itemsPerPage = ref(10);

const items = ref([


  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },

]);

const visibleItems = computed(() => {
  const startIndex = (page.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return items.value.slice(startIndex, endIndex);
});


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
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #346ddb;
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
