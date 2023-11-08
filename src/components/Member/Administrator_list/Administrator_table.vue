<template>
    <v-card class="mx-auto" max-width="90%">
      <v-card-actions>
        <p class="card1">
          Total<span class="card2">{{ items.length }}</span> number of views
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
              <td>{{ item.업체코드 }}</td>
              <td>{{ item.카테고리 }}</td>
              <td class="td3">{{ item.업체명 }}</td>
              <td>{{ item.주소 }}</td>
              <td>{{ item.리뷰평점 }}</td>
              <td class="td6">{{ item.영업여부 }}</td>
              <td>{{ item.노출여부 }}</td>
              <td>{{ item.입점상태 }}</td>
              <td>{{ item.등록일시 }}</td>
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
  { 업체코드: 1, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 2, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 3, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 4, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 5, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 6, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 7, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 8, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 9, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 10, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 11, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 12, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 13, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 14, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 15, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 16, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 17, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 18, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 19, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 20, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 21, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 22, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 23, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 24, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 25, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 26, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 27, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 28, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 29, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 30, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 31, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 32, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 33, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 34, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
  { 업체코드: 35, 카테고리: '셀프/대여', 업체명: '크리스탈 디테일링 센터 금천점', 주소: '서울특별시 서초중앙로8길 115', 리뷰평점: 5.0, 영업여부: '영업중', 노출여부: '노출', 입점상태: '입점', 등록일시: 'YYYY-MM-DD HH:MM:SS' },
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