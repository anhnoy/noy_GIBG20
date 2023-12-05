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
          <tr v-for="item in items" :key="item.id">
            <td class="Number">{{ item.Reservation_number }}</td>
          
            <td class="Registration" @click="navigateToDetails(item)">
            
                {{ item.Registration_date_and_time }}</td>
         
            <td>{{ item.Member_name }}</td>
            <td>{{ item.Phone_number }}</td>
            <td>
              <p class="Division">{{ item.Division }}</p>
            </td>
            <td>{{ item.Store_name }}</td>
            <td>{{ item.Reservation_product }}</td>
            <td>{{ item.Reservation_date_and_time }}</td>
            <td>{{ item.Reservation_status }}</td>
            <td>
              <v-btn flat class="management" size="x-small">Record</v-btn>
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
                        <span class="Title">YYYY-MM-DD HH:MM:SS</span>
                        <span class="Date_detail"
                          >[서비스확정] 서비스완료 > 서비스확정, 크리스탈
                          디테일링 금천점, 디테일링 세차</span
                        >
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <span class="Title">YYYY-MM-DD HH:MM:SS</span>
                        <span class="Date_detail"
                          >[서비스완료] 예약확정 > 서비스완료, 크리스탈 디테일링
                          금천점, 디테일링 세차</span
                        >
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <span class="Title">YYYY-MM-DD HH:MM:SS</span>
                        <span class="Date_detail"
                          >[예약확정] 예약대기 > 예약확정, 크리스탈 디테일링
                          금천점, 디테일링 세차</span
                        >
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <span class="Title">YYYY-MM-DD HH:MM:SS</span>
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
     import { useRouter } from 'vue-router';
   import Get_data from "@/services/Get_data";

     const page =ref(1);
     const router = useRouter();
     const navigateToDetails = (item) => {
  router.push({ path: `/modify(Reservation)/${item.Reservation_number}` });
};

     const dialog =ref(false);
  const itemsPerPage  =ref(10);
const items = ref([]);

  const loadItems = async ()=>{
  try{
    const resp = await Get_data.get_partner();
    console.log(resp.data.Order);
    items.value = resp.data.Order;
  }
  catch(error){
    console.error('Exception occurred while try to fetch items', error);
  }
}

loadItems();

  
  const pageCount = computed(() => Math.ceil(items.value.length / itemsPerPage.value));

     </script>
    <style scoped>

</style>