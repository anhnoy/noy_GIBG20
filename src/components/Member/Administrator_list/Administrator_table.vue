<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <p class="Head">
        총<span class="Total">{{ total }}</span> 건 조회
      </p>
      <v-spacer></v-spacer>
      <v-btn
        @click="this.$router.push({ path: '/insert_Admin' })"
        class="text-none text-subtitle-1"
        color="#346DDB"
        variant="flat"
      >
        관리자 등록
      </v-btn>
      <div class="item_per_page">
        <select
          v-model="size"
          id="size"
          @update:model-value="size = parseInt($event, 10)"
        >
          <option value="5">5 건씩 조회</option>
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
          <tr v-for="item in admins" :key="item.admid">
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
              <router-link
                :to="`/modify(admin)/${item.admid}`"
                class="no-underline"
              >
                <p class="ID">{{ item.id }}</p>
              </router-link>
            </td>
            <td>
              <router-link
                :to="`/modify(admin)/${item.admid}`"
                class="no-underline"
              >
                <p class="ID">{{ item.name }}</p>
              </router-link>
            </td>
            <td>{{ item.phone }}</td>
            <td>{{ item.Last_access_date }}</td>
            <td>
              <p
                class=""
                :class="{
                  NO: item.activation === 'N',
                  YES: item.activation === 'Y',
                }"
              >
                {{
                  item.activation === "N" ? "미승인" : item.activation === "Y" ? "승인" : ""
                }}
              </p>
            </td>
            <td>{{  formatTime(item.writedate) }}</td>
            <td>{{ item.Connection_IP }}</td>
            <td>
              <router-link :to="`/modify(admin)/${item.admid}`">
                <v-btn size="x-small" flat class="management"
                  >수정</v-btn
                ></router-link
              >
              <v-dialog
        transition="dialog-bottom-transition"
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <v-btn
                size="x-small"
                flat
                class="management"
                v-bind="props"
              >
                삭제</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card width="360" height="170">
                    <div class="pt-8">
                      <v-card-title class="Title_dialog"
                        >삭제하시겠습니까?</v-card-title
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="button_dialog_cancel" @click="isActive.value = false">
                          아니오
                        </v-btn>
                        <v-btn
                          class="button_dialog"
                          @click="confirmDelete(item.admid)"
                        >
                          네
                        </v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </div>
                  </v-card>
        </template>
      </v-dialog>
            </td>
          </tr>
          <template v-if="admins.length === 0">
            <tr>
              <td colspan="11">조회된 내용이 없습니다.</td>
            </tr>
          </template>
        </table>
      </div>
      <div class="mt-5">
        <label class="custom-file-label">선택 일괄승인</label>
      <label class="custom-file-label">선택 일괄미승인</label>
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
     import { ref , computed, defineExpose } from 'vue';
     import AdminService from '@/services/admin.service';
     import axios from 'axios';
     import moment from 'moment';
     import { useRouter } from 'vue-router';

     const router = useRouter();
     const page =ref(1);
   const size =ref(10);
  const totalItems = ref(0);
  const admins= ref([]);
  const total = ref(0);

  const selectAll = ref(false);
  
  
  const filterAdmins = (params)=>{searchAdmins(params);}

  const searchAdmins = async(params)=>{
    try{
      const resp = await AdminService.getAdmins(params.start,params.end,  params.id,  params.name, params.phone,  params.page, params.size, params.type, params.activation)
      admins.value = resp.data.data;
      console.log("resp.data.data.activation")
      total.value = resp.data.total;
    }
    catch(error){
      console.error('Exception while try to search admins',error);
    }
  }

  
  defineExpose({filterAdmins});

  const loadAdmins = async ()=>{
  const start = '';
  const end = '';
  const id = '';
  const name = '';
  const phone = '';
  const page = 0;
  const size = 12;
  const type = '';
  const activation = ''

  try{
    const resp = await AdminService.getAdmins(start,end, id,  name, phone, page, size, type, activation);
    admins.value = resp.data.data;
    total.value = resp.data.total;
    console.log(resp.data.data)
  }
  catch(error){
    console.error('Exception while try to search members',error);}}
  
    loadAdmins();


  const itemSelected = () => {
    selectAll.value = admins.value.every((item) => item.selected);
  };
  
  const pageCount = computed(() => Math.ceil(totalItems.value / size.value));
  
  const selectAllItems = () => {
    admins.value.forEach((item) => (item.selected = selectAll.value));
  };
  const confirmDelete = (admid) => {
    router.push({ query: { id: admid } });
    console.log(admid);
    try {
      const response = axios.patch(`http://192.168.100.81:5000/api/admin/delete`, {
        admid: admid,
        delete_yn: 'Y',
      });
      window.location.reload();
      console.log(response);
      console.log("helll");
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };

  const formatTime = (day) => {
  return moment(day, "HH:mm:ss").format("YYYY-MM-DD");
};
  
     </script>
    <style scoped>
</style>