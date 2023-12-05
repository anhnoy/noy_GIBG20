<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head"> Pricing information </span>

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
              <span class="Title">price tag image</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please register the price list."
              />
              <input
                type="file"
                id="fileInput3"
                @change="previewImage"
                style="display: none"
              />
              <label for="fileInput3" class="custom-file-label"
                >Find file</label
              >
              <br />
              <span class="hint"
                >You can register up to 5 items. (Only image format files such as jpg, gif, png can be registered)</span
              ><br />
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