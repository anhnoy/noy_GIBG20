<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav>
    <v-navigation-drawer
      style="background-color: #292b3a"
      :width="230"
      permanent
    >
      <template v-slot:prepend>
        <div class="text-center py-3">
          <v-col>
            <v-img :src="require('../assets/images/GMS.png')" height="35" />
          </v-col>
          <p class="title">공임비교 앱 통합관리자</p>
        </div>
      </template>
      <v-list :lines="false" density="compact" nav>
        <v-list-group value="Company" style="color: white">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-storefront-outline"
              title="업체관리"
            ></v-list-item>
          </template>
          <v-list-item
            title="업체 목록"
            @click="this.$router.push({ path: '/partner' })"
          ></v-list-item>
        </v-list-group>
        <v-list-group value="Membership" style="color: white">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-emoticon-happy-outline"
              title="회원관리"
            ></v-list-item>
          </template>
          <v-list-item
            title="회원목록"
            @click="this.$router.push({ path: '/member' })"
          ></v-list-item>
          <v-list-item
            title="관리자"
            @click="this.$router.push({ path: '/administrator' })"
          ></v-list-item>
        </v-list-group>
        <v-list-group value="Service" style="color: white">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-wallet-travel"
              title="서비스 관리"
            ></v-list-item>
          </template>
          <v-list-item
            @click="this.$router.push({ path: '/Category_Service' })"
            title="카테고리/서비스 관리"
          ></v-list-item>
          <v-list-item
            @click="this.$router.push({ path: '/product_list' })"
            title="상품목록"
          ></v-list-item>
          <v-list-item
            @click="this.$router.push({ path: '/tire_information' })"
            title="타이어 정보 관리"
          ></v-list-item> </v-list-group
        ><v-list-group value="Reservation" style="color: white">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-calendar-month-outline"
              title="예약관리"
            ></v-list-item>
          </template>
          <v-list-item
            @click="this.$router.push({ path: '/reservation' })"
            title="예약 목록"
          ></v-list-item> </v-list-group
        ><v-list-group value="Content" style="color: white">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-clipboard-minus-outline"
              title="콘텐츠 관리"
            ></v-list-item>
          </template>

          <v-list-group value="Board">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="게시판 관리"></v-list-item>
            </template>

            <v-list-item
              v-for="Board in Boards"
              :key="Board.text"
              router
              :to="Board.route"
            >
              <v-list-item-content>
                <v-list-item-title>{{ Board.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group value="Event">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="이벤트 관리"></v-list-item>
            </template>

            <v-list-item
              v-for="([title], i) in Events"
              :key="i"
              :title="title"
              :value="title"
            ></v-list-item>
            <v-list-item
              @click="$router.push('/Information_MP')"
              title="정보 수정 제안"
            ></v-list-item>


          </v-list-group>
          <v-list-item title="배너 관리"></v-list-item>
          <v-list-item title="팝업 관리"></v-list-item>
          <v-list-item title="앱 푸시 관리"></v-list-item>
          <v-list-item title="약관 관리"></v-list-item>
        </v-list-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-card-item class="d-flex justify-center pt-8">
           <div class="pa-2">
            <v-img
              :src="require('../assets/images/Auto_Logo_Gray_2400x2400.png')"
              height="30"
            />
           </div>
            <p class="caption">Administrator © auto&</p>
          </v-card-item>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar color="#FFFFFF" elevation="1">
      <v-spacer></v-spacer>
      <P class="login"> {{ name}} ({{ ID }})</P>
      <v-divider class="ma-3" inset vertical></v-divider>
      <v-btn
        prepend-icon="mdi mdi-logout"
        variant="plain"
        @click="this.$router.push({ path: '/login' }), logout()"
        class="login"
      >
        로그아웃
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script setup lang="js">
import { ref } from 'vue';

const ID = ref( localStorage.getItem("ID"));
const name = ref( localStorage.getItem("name"));
const logout = () => {
localStorage.removeItem("Token");
};

const Boards = [
{text:'공지사항', route: '/notice'},
{text:'리뷰관리', route: '/'},
{text:'자주 묻는 질문', route: '/FAQ'},
{text:'1:1 문의 관리', route: '/Inquiry'},
      ];

const Events = [
  ["이벤트 목록"],
  ["정비명세서 인증 관리"],
  // ["정보 수정 제안"],
];

</script>
<style scoped>
.list-item-title {
font-size: 12px;
}
.title {
font-size: 14px;
font-weight: 500;
color: #8899a8;
}
.logo {
font-size: 20px;
font-weight: 700;
color: #ffffff;
}
.caption {
font-size: 12px;
font-weight: 400;
color: #8899a8;
}
.custom-text {
font-size: 12px;
font-weight: 500;
color: #ffffff;
}
.border {
color: #346ddb;
}
</style>
