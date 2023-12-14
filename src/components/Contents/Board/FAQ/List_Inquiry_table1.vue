<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-card-actions>
      <p>
        총<span class="Total">{{ items.length }}</span> 건 조회
      </p>
      <v-spacer></v-spacer>
      
    </v-card-actions>
    <ul>
      <li v-for="item in items" :key="item.id">
        <div class="item-info">
          <input class="item_c" v-model="item.name" :disabled="!item.editing" />
        </div>
        <v-spacer></v-spacer>

       
        <div class="actions">
          <v-btn :text="item.editing ? '저장' : '수정'" class="button-category" @click="toggleEdit(item)" flat></v-btn>
          <v-btn class="button-category" @click="confirmDelete(item)" flat
            >삭제</v-btn
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue';

const items = ref([]);

const loadData = () => {
  // Load your data here
  items.value = [
    {
      id: 1,
      name: '회원',
    },
    {
      id: 1,
      name: '예약',
      
    },
    {
      id: 1,
      name: '리뷰',
     
    },
    {
      id: 1,
      name: '포인트',
   
    },
    {
      id: 1,
      name: '기타',

    },
    // more items...
  ];
};

onMounted(() => {
  loadData();
});
  const confirmDelete = (item) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteItem(item);
    }
  };
  const deleteItem = (item) => {
    items.value = items.value.filter((i) => i !== item);
  };

  const toggleEdit = (item) => {
  item.editing = !item.editing; // Toggle edit mode
};

</script>


<style scoped>
</style>
