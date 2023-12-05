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
        <p class="item">사용</p>
        <v-divider class="ma-3" inset vertical></v-divider>
        <p class="item">지도 사용</p>
        <v-divider class="ma-3" inset vertical></v-divider>
        <p class="item">순서</p>
        <div class="box">{{ item.order }}</div>
        <v-btn class="button-category" flat
          >수정
          <v-dialog v-model="dialog" activator="parent" width="800px">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>More information</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text>
                <v-row>
                  <v-col cols="2"  class="mt-2">
                    <span class="Title">Category Type</span>
                  </v-col>
                  <v-col>
                    <v-radio-group inline>
  <v-radio label="Common" value="Common" color="#346DDBCC"></v-radio>
  <v-radio label="Event" value="Event" color="#346DDBCC"></v-radio>
</v-radio-group>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="2">
                    <span class="Title">Category Code</span>
                  </v-col>
                  <v-col >
                    <span >cg202310200000001e</span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="2">
                    <span class="Title">Not to use</span>
                  </v-col>
                  <v-col >
                  
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="2">
                    <span class="Title">Not to use</span>
                  </v-col>
                  <v-col >
                    <v-checkbox label="Use"></v-checkbox>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-row align="center" justify="center">
                  <v-btn
                    class="text-none text-subtitle-1"
                    color="#346DDB"
                    variant="flat"
                    @click="dialog = false"
                  >
                    Save
                  </v-btn>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
      
        <v-btn class="button-category" flat>삭제</v-btn>
      </li>
    </ul>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue';

const dataList = ref([]);
const dialog =ref(false);

const loadData = () => {
  // Load your data here
  dataList.value = [
    {
      id: 1,
      name: '정비/세차',
      imageUrl: 'https://static.thenounproject.com/png/17840-200.png',
      category: '일반',
      order: '1',
    },
    {
      id: 2,
      name: '정비/세차',
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
