<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">차량정보</span>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="!show">
        <v-divider></v-divider>

        <v-container fluid>
          <v-card-actions>
            <p class="Head">
              총<span class="Total">{{ items.length }}</span> 건 조회
            </p>
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-container fluid>
            <div>
              <table class="custom-table">
                <tr>
                  <th>번호</th>
                  <th>구분</th>
                  <th>차량번호</th>
                  <th>제조사</th>
                  <th>차종명</th>
                  <th>연식</th>
                  <th>연료</th>
                  <th>배기량(cc)</th>
                  <th>색상</th>
                  <th>생산_날짜</th>
                  <th>자동차 종류</th>
                  <th>첫 등록일</th>
                </tr>
                <tr v-for="item in items" :key="item.id">
                  <td>{{ item. mcid}}</td>
                  <td>{{ item.mid }}</td>
                  <td>
                    <p >{{ item.car_type }}</p>
                  </td>
                  <td>{{ item.car_brand }}</td>
                  <td>{{ item.model }}</td>
                  <td>
                    <p >{{ item.year }}</p>
                  </td>
                  <td>
                    <p>
                      {{ item.fuel }}
                    </p>
                  </td>
                  <td>
                    <p>
                      {{ item.cc }}
                    </p>
                  </td>
                  <td>{{ item.color }}</td>
                  <td>{{ item.production_date }}</td>
                  <td>{{ item.car_type }}</td>
                  <td>{{ item.last_inspection }}</td>
                </tr>
              </table>
            </div>
          </v-container>
        </v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>
  <script setup lang="js">
  import { ref } from 'vue'
  import axios from "axios"
  import { useRoute } from 'vue-router'

  const items = ref([]);
  const route = useRoute()
  console.log(route.params.id)


  const loadItems = async () => {
  try {
    const response = await axios.get(`http://192.168.100.81:5000/api/member_car/${route.params.id}`);
    console.log(response.data)
    items.value = response.data;
  } catch (err) {
    console.error(err);
  }
};
loadItems();

   const show = ref(false);
  
  </script>
  <style scoped>
</style>