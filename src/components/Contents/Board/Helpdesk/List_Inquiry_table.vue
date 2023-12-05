<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-card-actions>
      <p>
        Total<span class="Total">{{ items.length }}</span> number of views
      </p>
      <v-spacer></v-spacer>
      <v-btn class="BTN-Save"> Save order </v-btn>
    </v-card-actions>
    <ul>
      <li v-for="item in items" :key="item.id">
        <div class="item-info">
          <input class="item" v-model="item.name" :disabled="!item.editing" />
        </div>
        <v-spacer></v-spacer>

        <div class="box">{{ item.order }}</div>
        <div class="actions">
          <v-btn :text="item.editing ? 'Save' : 'Edit'" class="button-category" @click="toggleEdit(item)" flat></v-btn>
          <v-btn class="button-category" @click="confirmDelete(item)" flat
            >Delete</v-btn
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
      order: '1',
    },
    {
      id: 1,
      name: '예약',
      order: '2',
    },
    {
      id: 1,
      name: '리뷰',
      order: '3',
    },
    {
      id: 1,
      name: '포인트',
      order: '4',
    },
    {
      id: 1,
      name: '기타',
      order: '5',
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
