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
            <th>Reservation number</th>
            <th>Registration date and time</th>
            <th>Member name</th>
            <th>Phone number</th>
            <th>Division</th>
            <th>Store name</th>
            <th>Reservation product</th>
            <th>Reservation date and time</th>
            <th>Reservation status</th>
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
            <td class="td3">{{ item.number }}</td>
            <td class="td3">{{ item.Registration }}</td>
            <td>{{ item.Member }}</td>
            <td>{{ item.Phone }}</td>
            <td>{{ item.Division }}</td>
            <td>{{ item.Store }}</td>
            <td>{{ item.product }}</td>
            <td>{{ item.Reservation }}</td>
            <td>{{ item.status }}</td>
            <td>
              <v-btn flat class="management">Record</v-btn>
              <v-dialog v-model="dialog" activator="parent" width="800px">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>View history</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                      <v-btn icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-toolbar-items>
                  </v-toolbar>
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <span class="Date">YYYY-MM-DD HH:MM:SS</span>
                        <span class="Date_detail"
                          >[서비스확정] 서비스완료 > 서비스확정, 크리스탈
                          디테일링 금천점, 디테일링 세차</span
                        >
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <span class="Date">YYYY-MM-DD HH:MM:SS</span>
                        <span class="Date_detail"
                          >[서비스완료] 예약확정 > 서비스완료, 크리스탈 디테일링
                          금천점, 디테일링 세차</span
                        >
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <span class="Date">YYYY-MM-DD HH:MM:SS</span>
                        <span class="Date_detail"
                          >[예약확정] 예약대기 > 예약확정, 크리스탈 디테일링
                          금천점, 디테일링 세차</span
                        >
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <span class="Date">YYYY-MM-DD HH:MM:SS</span>
                        <span class="Date_detail"
                          >[예약완료] 예약 정보가 등록되었습니다.</span
                        >
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions>
                    <v-row align="center" justify="center">
                      <v-btn
                        class="text-none text-subtitle-1"
                        color="#346DDB"
                        variant="flat"
                        @click="dialog = false"
                      >
                        Check
                      </v-btn>
                    </v-row>
                  </v-card-actions>
                </v-card>
              </v-dialog>
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
     const dialog =ref(false);
  const itemsPerPage  =ref(10);
  const items = ref([
  { number: '20231106103826NVIEH', Registration: 'YYYY-MM-DD HH:MM:SS', Member: '홍*동', Phone: '010-1234-****', Division: '예약', Store: '크리스탈 디테일링 금천점', product: '상품명', Reservation: 'YYYY-MM-DDHH:MM', status: '예약완료' },
  { number: '20231106103826NVIEH', Registration: 'YYYY-MM-DD HH:MM:SS', Member: '홍*동', Phone: '010-1234-****', Division: '예약', Store: '크리스탈 디테일링 금천점', product: '상품명', Reservation: 'YYYY-MM-DDHH:MM', status: '예약완료' },
  { number: '20231106103826NVIEH', Registration: 'YYYY-MM-DD HH:MM:SS', Member: '홍*동', Phone: '010-1234-****', Division: '예약', Store: '크리스탈 디테일링 금천점', product: '상품명', Reservation: 'YYYY-MM-DDHH:MM', status: '예약완료' },
  { number: '20231106103826NVIEH', Registration: 'YYYY-MM-DD HH:MM:SS', Member: '홍*동', Phone: '010-1234-****', Division: '예약', Store: '크리스탈 디테일링 금천점', product: '상품명', Reservation: 'YYYY-MM-DDHH:MM', status: '예약완료' },
  { number: '20231106103826NVIEH', Registration: 'YYYY-MM-DD HH:MM:SS', Member: '홍*동', Phone: '010-1234-****', Division: '예약', Store: '크리스탈 디테일링 금천점', product: '상품명', Reservation: 'YYYY-MM-DDHH:MM', status: '예약완료' },
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

     </script>
    <style scoped>
.Date {
  font-size: 14px;
  font-weight: 700;
  color: #7d92a1;
  margin-right: 5%;
}
.Date_detail {
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.01em;
  text-align: left;
}
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