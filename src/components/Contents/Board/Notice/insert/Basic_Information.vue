<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">Basic Information</span>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="!show">
        <v-divider></v-divider>

        <v-container fluid>
          <v-row>
            <v-col cols="2">
              <span class="Title">Division</span>
            </v-col>
            <v-col >
              <span class="Title"
              v-for="item in items"
                :key="item.Division"
            >{{ item.Division }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">Writer</span>
            </v-col>
            <v-col >
              <span class="Title"
              v-for="item in items"
                :key="item.Writer"
            >{{ item.Writer }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Title</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input_title"
                placeholder="제목을 입력해주세요."
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Detail</span>
            </v-col>
            <v-col>
              <input type="text" class="input_detail" placeholder="" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">Attachments</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please select a file."
              />
              <input
                type="file"
                id="fileInput"
                @change="previewImage"
                style="display: none"
              />
              <label for="fileInput" class="custom-file-label">Select file</label>
              <br />
              <v-row class="pt-5 ml-2">
                <div v-for="(img, index) in imagePreviews" :key="index">
                  <div class="img-wrapper">
                    <img :src="img" alt="Image Preview" />
                    <button class="remove-button" @click="removeImage(index)">
                      X
                    </button>
                  </div>
                </div>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>
  <script setup lang="js">
  import { ref } from 'vue';
     
   const show = ref(false);  
   const items = ref([
  { Division: '공지사항', 
    Writer: '홍길동 (abcd12345)', 
     },
   ]);
   const imagePreviews = ref([]);
  
  const previewImage = (event) => {
    const selectedImage = event.target.files[0];
    imagePreviews.value.push(URL.createObjectURL(selectedImage));
  };
  
  const removeImage = (index) => {
    imagePreviews.value.splice(index, 1);
  };

  </script>
  <style scoped>
</style>