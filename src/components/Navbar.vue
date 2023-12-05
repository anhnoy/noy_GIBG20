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
            <p class="title">Labor comparison app integrated manager</p>
          </div>
        </template>
        <v-list :lines="false" density="compact" nav>
          <v-list-group value="Company" style="color: white">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-storefront-outline"
                title="Company"
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
                title="Membership"
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
                title="Service"
              ></v-list-item>
            </template>
            <v-list-item @click="this.$router.push({ path: '/Category_Service' })" title="Category/service"></v-list-item>
            <v-list-item @click="this.$router.push({ path: '/product_list' })" title="Product list"></v-list-item>
            <v-list-item @click="this.$router.push({ path: '/tire_information' })" title="Tire Information"></v-list-item>
             </v-list-group
          ><v-list-group value="Reservation" style="color: white">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-calendar-month-outline"
                title="Reservation"
              ></v-list-item>
            </template>
            <v-list-item  @click="this.$router.push({ path: '/reservation' })" title="Reservation list"></v-list-item> </v-list-group
          ><v-list-group value="Content" style="color: white">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-clipboard-minus-outline"
                title="Content"
              ></v-list-item>
            </template>

            <v-list-group value="Board">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Board"></v-list-item>
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
                <v-list-item v-bind="props" title="Event"></v-list-item>
              </template>

              <v-list-item
                v-for="([title], i) in Events"
                :key="i"
                :title="title"
                :value="title"
              ></v-list-item>
            </v-list-group>
            <v-list-item title="Banner"></v-list-item>
            <v-list-item title="Popup"></v-list-item>
            <v-list-item title="Push"></v-list-item>
            <v-list-item title="Policy"></v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar color="#FFFFFF" elevation="1">
      <v-spacer></v-spacer>
      <P  class="login"> {{ ID }}</P>
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
{text:'Notice', route: '/notice'},
{text:'Review', route: '/'},
{text:'FAQ', route: '/'},
{text:'1:1 inquiry', route: '/Inquiry'},
      ];

const Events = [
  ["Event List"],
  ["Maintenance statement certification management"],
  ["Proposal to amend information"],
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

