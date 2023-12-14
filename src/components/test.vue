<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head"> 조회조건 </span>
      <v-spacer></v-spacer>
      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="!show">
        <v-divider></v-divider>
        <v-container fluid>
          <v-row>
            <v-row class="mt-2">
              <v-col cols="1" style="text-align: center;padding-top: 15px;">
                <span class="T-search">* 분류</span>
              </v-col>
              <v-col cols="2">
                <v-select v-model="selectedCategory" clearable label="" :items="categories" variant="outlined"></v-select>
              </v-col>
              <v-col cols="1" style="text-align: center;padding-top: 15px;">
                <span class="T-search">* 검색어</span>
              </v-col>

              <v-col cols="2">
                <v-select v-model="selectedItem" clearable label="" :items="items" variant="outlined"></v-select>
              </v-col>
              
              <v-card-text class="search-field-container">
                <v-text-field v-model="searchText" variant="outlined"  density="compact" 
                  label="검색어를 입력하세요" single-line hide-details ref="searchField"
                  @click:append-inner="onClick"></v-text-field>
              </v-card-text>
            </v-row>
          </v-row>
          <v-container>
            <v-row justify="center">
              
              <v-col cols="auto">
                  <v-btn @click="clearFields" class="bt1">초기화</v-btn>
              </v-col>
              

              <v-col cols="auto">
                  <v-btn  :ripple="false" @click="performSearch" class="btn2">조회</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="js">
import { ref } from 'vue';

const selectedCategory = ref(null);
const selectedItem = ref(null);
const searchText = ref('');
const loading = ref(false);

const categories = ['Category 1', 'Category 2', 'Category 3'];
const items = ['Item 1', 'Item 2', 'Item 3'];

const onClick = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const clearFields = () => {
  selectedCategory.value = null;
  selectedItem.value = null;
  searchText.value = '';
};

const performSearch = () => {
  console.log('ทำการค้นหาด้วย:', selectedCategory.value, selectedItem.value, searchText.value);
  // ทำโลจิกการค้นหาของคุณที่นี่
};
</script>

<style>
@import '/src/assets/css/style.css';
</style>
