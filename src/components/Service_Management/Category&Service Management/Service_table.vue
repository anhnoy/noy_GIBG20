<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-card-actions>
      <p>
        Total<span class="Total">{{ dataList.length }}</span> number of views
      </p>
      <v-spacer></v-spacer>
      <v-btn class="BTN-Save"> Save order </v-btn>
    </v-card-actions>
    <ul>
      <li v-for="item in dataList" :key="item.id">
        <img :src="item.imageUrl" alt="" class="list-image" />
        <div class="item-info">
          <p class="item">{{ item.name }}</p>
        </div>
        <v-spacer></v-spacer>
        <p class="item">{{ item.category }}</p>
        <v-divider class="ma-3" inset vertical></v-divider>
        <p class="item">순서</p>
        <div class="box">{{ item.order }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue';

const dataList = ref([]);

const loadData = () => {
  // Load your data here
  dataList.value = [
    {
      id: 1,
      name: '엔진오일 교환',
      imageUrl: 'https://static.thenounproject.com/png/17840-200.png',
      category: '일반',
      order: '1',
    },
    {
      id: 2,
      name: '엔진오일 교환',
      imageUrl: 'https://static.thenounproject.com/png/17840-200.png',
      category: '일반',
      order: '2',
    },
    {
      id: 3,
      name: '세차',
      imageUrl: 'https://static.thenounproject.com/png/17840-200.png',
      category: '일반',
      order: '2',
    },
    {
      id: 4,
      name: '불스원 입점기념',
      imageUrl: 'https://static.thenounproject.com/png/17840-200.png',
      category: '이벤트',
      order: '2',
    },
    // more items...
  ];
};

onMounted(() => {
  loadData();
});

</script>


<style scoped>
</style>
