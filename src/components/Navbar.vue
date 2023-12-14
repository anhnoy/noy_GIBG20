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
            title="Partner"
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
            title="Member list"
            @click="this.$router.push({ path: '/member' })"
          ></v-list-item>
          <v-list-item
            title="Administrator list"
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
          <v-list-item @click="this.$router.push({ path: '/Category_Service' })" title="Category/service"></v-list-item>
          <v-list-item @click="this.$router.push({ path: '/product_list' })" title="Product list"></v-list-item>
          <v-list-item @click="this.$router.push({ path: '/tire_information' })" title="Tire Information"></v-list-item>
        </v-list-group>
        <v-list-group value="Reservation" style="color: white">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-calendar-month-outline"
              title="예약관리"
            ></v-list-item>
          </template>
          <v-list-item  @click="this.$router.push({ path: '/reservation' })" title="Reservation list"></v-list-item> </v-list-group>
        <v-list-group value="Content" style="color: white">
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

            <!-- เพิ่มรายการ "정비명세서 인증 관리" ใน Event และกำหนด route เป็น '/Bill' -->
            <v-list-item
              @click="$router.push('/Bill')"
              title="정비명세서 인증 관리"
            ></v-list-item>

            <!-- เพิ่มรายการ "정보 수정 제안" ใน Event และกำหนด route เป็น '/info-proposal' -->
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
    </v-navigation-drawer>
    <v-app-bar color="#FFFFFF" elevation="1">
      <v-spacer></v-spacer>
      <p class="login"> {{ ID }}</p>
      <v-divider class="ma-3" inset vertical></v-divider>
      <v-btn
        prepend-icon="mdi mdi-logout"
        variant="plain"
        @click="this.$router.push({ path: '/login' }),logout()"
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
const logout = () => {
localStorage.removeItem("Token");
};

const Boards = [
{text:'공지사항', route: '/notice'},
{text:'공지사항', route: '/'},
{text:'자주 묻는 질문', route: '/FAQ'},
{text:'1:1 문의 관리', route: '/Inquiry'},
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
