<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <p class="Head">
        총<span class="Total">{{ totalCount }}</span> 건 조회
      </p>
      <v-spacer></v-spacer>
      <div class="item_per_page">
                <select v-model="size" id="size" @update:model-value="size = parseInt($event, 10)">
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
          <tr v-for="item in visibleItems" :key="item.mid">
            <td>{{ item.mid }}</td>
            <td>{{ item.device_id }}</td>
            <td>
              <router-link
                :to="`/modify(member)/${item.mid}`"
                class="no-underline"
              >
                <p class="ID">{{ item.email }}</p>
              </router-link>
            </td>
            <td>
              <router-link
                :to="`/modify(member)/${item.mid}`"
                class="no-underline"
              >
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
                <v-btn size="x-small" flat class="management" @click="dialog = true">
                  삭제
                  <v-dialog v-model="dialog" width="auto">
                    <v-card width="360" height="170">
                      <div class="pt-8">
                        <v-card-title class="Title_dialog"
                          >삭제하시겠습니까?</v-card-title
                        >
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn class="button_dialog_cancel" @click="close">
                            아니오
                          </v-btn>
                          <v-btn
                            class="button_dialog"
                            @click="confirmDelete(item.mid)"
                          >
                            네
                          </v-btn>
                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </div>
                    </v-card>
                  </v-dialog>
                </v-btn>
            </td>
          </tr>
          <template v-if="members.length === 0">
            <tr>
              <td colspan="10">조회된 내용이 없습니다.</td>
            </tr>
          </template>
        </table>
      </div>
      <v-pagination v-model="page" :length="totalCount" ></v-pagination>
    </v-container>
  </v-card>
</template>

<script setup lang="js">

  import MemberService from '@/services/member.service'
  import axios from 'axios';
  import { ref, computed, defineExpose} from 'vue';
  import { useRouter } from 'vue-router';

   const page =ref(1);
   const size =ref(5);
   const router = useRouter();
   const totalCount = ref(0);
   const members= ref([]);
   const mid= ref([]);
   const dialog = ref(false);

   const visibleItems = computed(() => {
    const startIndex = (page.value - 1) * size.value;
    const endIndex = startIndex + size.value;
    return members.value.slice(startIndex, endIndex);
  });



  const filterMembers = (params)=>{searchMembers(params);}


  const loadMembers = async ()=>{
  const start = '';
  const end = '';
  const status = '';
  const id = '';
  const name = '';
  const phone = '';
  const page = 0;
  const limit = size.value;

  try{
    const resp = await MemberService.getMembers(start,end, id,  name, phone, status, page, limit);
    members.value = resp.data.data;
    totalCount.value = (resp.data.totalCount+limit-1)/limit;
   
    mid.value = resp.data.data.map(item => item.mid);
    console.log(resp.data.data.map(item => item.mid))
  }
  catch(error){
    console.error('Exception while try to search members',error);}
  }
  
  loadMembers();

  const searchMembers = async(params)=>{
  try{
    const resp = await MemberService.getMembers(params.start,params.end,  params.id,  params.name, params.phone, params.status, params.page, params.size);
    members.value = resp.data.data;
    totalCount.value = resp.data.totalCount;
  }
  catch(error){
    console.error('Exception  while try to search members',error);}}


  defineExpose({filterMembers});

  const confirmDelete = (mid) => {
    router.push({ query: { id: mid } });
    console.log(mid);
    try {
      const response = axios.patch(`http://192.168.100.81:5000/api/member/delete`, {
        mid: mid,
        delete_yn: 'Y',
      });
      window.location.reload();
      console.log(response);
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };

  const close = () => {
  dialog.value = false;
};

  


   </script>
  <style scoped>
</style>