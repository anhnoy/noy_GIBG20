<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav>
    <v-navigation-drawer
      style="background-color: #292b3a"
      :width="190"
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

      <v-list nav>
        <v-list-group value="Partner" style="color: white">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props">
              <template #default>
                <v-icon size="16" class="mr-2" color="#8899A8"
                  >mdi-storefront-outline</v-icon
                >
                <span class="custom-text">Company</span>
              </template>
            </v-list-item>
          </template>
          <v-list-item
            v-for="partner in partnerSubGroups"
            :key="partner.text"
            router
            :to="partner.route"
            active-class="border"
          >
            <v-list-item-content>
              <v-list-item-title>{{ partner.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group value="Member" style="color: white">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props">
              <template #default>
                <v-icon size="16" class="mr-2" color="#8899A8"
                  >mdi-emoticon-happy-outline</v-icon
                >
                <span class="custom-text">Membership</span>
              </template>
            </v-list-item>
          </template>
          <v-list-item
            v-for="member in memberSubGroups"
            :key="member.text"
            router
            :to="member.route"
            active-class="border"
          >
            <v-list-item-content>
              <v-list-item-title>{{ member.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group value="Product" style="color: white">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props">
              <template #default>
                <v-icon size="16" class="mr-2" color="#8899A8"
                  >mdi-wallet-travel</v-icon
                >
                <span class="custom-text">Service</span>
              </template>
            </v-list-item>
          </template>
          <v-list-item
            v-for="Product in productSubGroups"
            :key="Product.text"
            router
            :to="Product.route"
            active-class="border"
          >
            <v-list-item-content>
              <v-list-item-title>{{ Product.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group value="Order" style="color: white">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props">
              <template #default>
                <v-icon size="16" class="mr-2" color="#8899A8"
                  >mdi-calendar-month-outline</v-icon
                >
                <span class="custom-text">Reservation</span>
              </template>
            </v-list-item>
          </template>
          <v-list-item
            v-for="Order in orderSubGroups"
            :key="Order.text"
            router
            :to="Order.route"
            active-class="border"
          >
            <v-list-item-content>
              <v-list-item-title>{{ Order.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group value="Content" style="color: white">
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props">
          <template #default>
            <v-icon size="16" class="mr-2" color="#8899A8">mdi-calendar-month-outline</v-icon>
            <span class="custom-text">Content</span>
          </template>
        </v-list-item>
      </template>
      
      <v-list-item
        v-for="content in contentSubGroups"
        :key="content.text"
        router
        :to="content.route"
        active-class="border"
      >
        <v-list-item-content>
          <v-list-item-title>{{ content.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      
    </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#FFFFFF" elevation="1">
      <v-spacer></v-spacer>
      <v-btn
        prepend-icon="mdi mdi-logout"
        variant="plain"
        @click="this.$router.push({ path: '/login' })"
      >
        log out
      </v-btn>
    </v-app-bar>
  </nav>
</template>
<script setup lang="js">
// import { ref } from 'vue';

const partnerSubGroups = [
{text:'Business List', route: '/partner'},
      ];

const memberSubGroups = [
{text:'Member list', route: '/member'},
{text:'Administrator list', route: '/administrator'},
];
const productSubGroups = [
{text:'Category/Service Management list', route: '/Category_Service'},
{text:'Product list', route: '/product_list'},
{text:'Tire information', route: '/tire_information'},
];
const orderSubGroups = [
{text:'Reservation list', route: '/reservation'},
];
const contentSubGroups = [
{text:'Board', route: '/Board'},
{text:'Event', route: '/Event'},
{text:'Banner', route: '/Banner'},
{text:'Popup', route: '/Popup'},
{text:'Push', route: '/Push'},
{text:'Policy', route: '/Policy'},
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


