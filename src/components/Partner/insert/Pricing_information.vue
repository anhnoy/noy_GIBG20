<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="head"> Pricing information </span>

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
              <span class="T-search">price tag image</span>
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
.img-wrapper {
  position: relative; /* The parent container should be relative */
  display: inline-block;
  margin: 5px;
}

img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

button.remove-button {
  width: 16px;
  height: 16px;
  background-color: #394956;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  padding: 0; /* Resetting any default padding */
  border: none; /* Remove default border */
  position: absolute; /* Absolute positioning */
  top: -5px; /* Positioning it slightly above the top of the image */
  right: -5px; /* Positioning it slightly to the right of the image */
  border-radius: 50%; /* Making the button round */
  line-height: 16px; /* Vertically centering the "X" text */
  text-align: center; /* Horizontally centering the "X" text */
}
.head {
  font-size: 16px;
  font-weight: 700;
  color: #242424;
}
.T-search {
  font-size: 14px;
  font-weight: 700;
  color: #7d92a1;
}
.input {
  width: 250px;
  height: 35px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 400;
}
.input1 {
  width: 148px;
  height: 35px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 400;
}
.input2 {
  width: 106px;
  height: 35px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 400;
}
.input3 {
  width: 350px;
  height: 35px;
  padding: 8px 10px;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 400;
}
::placeholder {
  color: #8899a8;
}
.hint {
  font-size: 12px;
  font-weight: 500;
  color: #8899a8;
}
.checkbox {
  margin-left: 20px;
}
.radio {
  margin-left: 20px;
}
.button {
  margin: 5px;
}
.custom-file-label {
  padding: 8px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #7d92a1;
  cursor: pointer;
}
</style>