<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <p class="Head">
        총<span class="Total">{{ totalCount }}</span> 건 조회
      </p>
      <v-spacer></v-spacer>
      <div class="item_per_page">
        <select v-model="state.size" id="size" @change="handlePageSizeChange">
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
          <tr v-for="item in members" :key="item.mid">
            <td>{{ item.mid }}</td>
            <td>{{  item.divid === 0 ? "소셜 로그인" : item.divid === 1 ? "일반" : "" }}</td>
            <td>
              <router-link
                :to="`/modify(member)/${item.mid}`"
                class="no-underline"
              >
                <p class="ID">{{ maskID(item.id) }}</p>
              </router-link>
            </td>
            <td>
              <router-link
                :to="`/modify(member)/${item.mid}`"
                class="no-underline"
              >
                <p class="Member_name">{{ maskName(item.name) }}</p>
              </router-link>
            </td>
            <td>{{ maskPhone(item.phone) }}</td>
            <td>
              <p>{{ formatTime(item.logintime) }}</p>
            </td>
            <td>
  <p>
    {{
      item.activation === 0 ? "탈퇴" :
      item.activation === 1 ? "" :
      ""
    }}
  </p>
</td>
            <td>
              <p>
                {{ formatTime(item.writedate) }}
              </p>
            </td>
            <td>   {{ formatTime(item.sec_date) }}</td>
            <td>
              <router-link :to="`/modify(member)/${item.mid}`">
                <v-btn size="x-small" flat class="management"
                  >수정</v-btn
                ></router-link
              >
              <v-dialog transition="dialog-bottom-transition" width="auto">
                <template v-slot:activator="{ props }">
                  <v-btn size="x-small" flat class="management" v-bind="props"
                    >삭제</v-btn
                  >
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card width="360" height="170">
                    <div class="pt-8">
                      <v-card-title class="Title_dialog"
                        >삭제하시겠습니까?</v-card-title
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          class="button_dialog_cancel"
                          @click="isActive.value = false"
                        >
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
                </template>
              </v-dialog>
            </td>
          </tr>
          <template v-if="members.length === 0">
            <tr>
              <td colspan="10">조회된 내용이 없습니다.</td>
            </tr>
          </template>
        </table>
      </div>
      <div style="text-align: center; margin: 20px">
        <button
          @click="loadPreviousPage"
          :disabled="state.page === 0"
          style="
            width: 50px;
            height: 50px;
            border: 1px solid #e3e8ed;
            cursor: pointer;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          "
        >
          <v-icon :style="{color: state.page === 0 ? '#8899a8' : '#242424' }">mdi-chevron-double-left</v-icon>
        </button>
        <span v-for="pageNumber in totalPages" :key="pageNumber">
  <button
    @click="goToPage(pageNumber)"
    style="
      width: 50px;
      height: 50px;
      border: 1px solid #e3e8ed;
      cursor: pointer;
      background-color: #e3e8edcc;
      color: #333333;
    "
    :style="{ backgroundColor: pageNumber === state.page+1 ? '#FFFFFF' : '#e3e8edcc', color: pageNumber === state.page+1 ? '#346DDB' : '#242424' }"
  >
    {{ pageNumber }}
  </button>
</span>

        <button
          @click="loadNextPage"
          :disabled="members.length < state.size"
          style="
            width: 50px;
            height: 50px;
            border: 1px solid #e3e8ed;
            cursor: pointer;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          "
        >
          <v-icon  :style="{color: members.length < state.size ? '#8899a8' : '#242424' }">mdi-chevron-double-right</v-icon>
        </button>
      </div>
      <!-- <v-pagination v-model="page" :length="totalCount"></v-pagination> -->
    </v-container>
  </v-card>
</template>

<script setup lang="js">

  import MemberService from '@/services/member.service'
  import moment from 'moment';
  import axios from 'axios';
  import { ref, defineExpose, reactive, watch} from 'vue';
  import { useRouter } from 'vue-router';

  //  const page =ref(1);
  //  const size =ref(5);
   const router = useRouter();
   const totalCount = ref(0);
   const members= ref([]);
   const mid= ref([]);

  const state = reactive({
      start: '',
      end: '',
      status: '',
      id: '',
      name: '',
      phone: '',
      page: 0,
      size: 10,
      type: '',
    });

  const filterMembers = (params)=>{searchMembers(params);}
  
  
  const searchMembers = async(params)=>{
  try{
    const resp = await MemberService.getMembers(params.start, params.end,  params.id,  params.name, params.phone, params.status, params.page, params.size, params.type);
    members.value = resp.data.data;
    totalCount.value = resp.data.totalCount;
    console.log(resp.data.data)
  }
  catch(error){
    console.error('Exception  while try to search members',error);}}


  defineExpose({filterMembers});



  const loadMembers = async () => {
      try {
        const resp = await MemberService.getMembers(
          state.start,
          state.end,
          state.id,
          state.name,
          state.phone,
          state.status,
          state.page,
          state.size,
          state.type,
        );

        members.value = resp.data.data;
        totalCount.value = resp.data.totalCount;
        mid.value = resp.data.data.map(item => item.mid);
        console.log(resp.data.data.map(item => item.mid));
      } catch (error) {
        console.error('Exception while trying to search members', error);
      }
    };

    const loadNextPage = () => {
      state.page++;
      loadMembers();
    };

    const loadPreviousPage = () => {
      if (state.page > 0) {
        state.page--;
        loadMembers();
      }
    };

    const goToPage = (pageNumber) => {
  state.page = pageNumber - 1; // Adjust the page number to start from 0
  loadMembers();
};

    const handlePageSizeChange = () => {
  state.page = 0; // Reset to the first page when the page size changes
  loadMembers();
};

    // Watch for changes in the total number of members and recalculate total pages
    const totalPages = ref(0);
  watch(totalCount, () => {
  totalPages.value = Math.ceil(totalCount.value / state.size);
  });

  loadMembers();

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

  const maskID = (id) => {
    const firstTwoChars = id.slice(0, 2);
    const maskedRest = '*'.repeat(Math.max(0, id.length - 2));
    return `${firstTwoChars}${maskedRest}`;
  };
  
  const maskName = (name) => {
    const firstTwoChars = name.slice(0, 1);
    const maskedRest = '*'.repeat(Math.max(0, name.length - 1));
    return `${firstTwoChars}${maskedRest}`;
  };
  
  const maskPhone = (phone) => {
    const firstTwoChars = phone.slice(0, 8);
    const maskedRest = '*'.repeat(Math.max(0, phone.length - 8));
    return `${firstTwoChars}${maskedRest}`;
  };

  const formatTime = (day) => {
  return moment(day, "HH:mm:ss").format("YYYY-MM-DD");
};
</script>
<style scoped></style>
