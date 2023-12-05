<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">Basic product information</span>

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
              <span class="Title">* category</span>
            </v-col>
            <v-col>
              <select id="CAT" name="CAT" class="input">
                <option value="" disabled selected>Manager</option>
                <option
                  v-for="Manager in Managers"
                  :key="Manager.value"
                  :value="Manager.value"
                >
                  {{ Manager.label }}
                </option>
              </select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Service </span>
            </v-col>
            <v-col>
              <input
                type="radio"
                id="engineOilChange"
                name="Service"
                class="hidden-radio"
                @change="updateSelection('engineOilChange')"
              />
              <label for="engineOilChange" class="radio-label">Engine oil change</label>

              <input
                type="radio"
                id="tire"
                name="Service"
                class="hidden-radio"
                @change="updateSelection('tireChange')"
              />
              <label for="tire" class="radio-label">Entire</label>

              <input
                type="radio"
                id="carWash"
                name="Service"
                class="hidden-radio"
                @change="updateSelection('carWash')"
              />
              <label for="carWash" class="radio-label">Car wash</label>
    
            </v-col>
          </v-row>
          <v-row v-if="selection === 'tireChange'">
            <v-col cols="2">
              <span class="Title">* Brand name</span>
            </v-col>
            <v-col>
              <select id="CAT" name="CAT" class="input">
                <option value="" disabled selected>Brand</option>
                <option
                  v-for="Manager in Managers"
                  :key="Manager.value"
                  :value="Manager.value"
                >
                  {{ Manager.label }}
                </option>
              </select>
            </v-col>
          </v-row>
          <v-row v-if="selection !== 'tireChange'">
            <v-col cols="2">
              <span class="Title">* Product name</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please enter the product name."
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">Product Description</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="textarea"
                placeholder="Please enter a product description."
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">Company photo</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please attach a photo of the company."
              />
              <input
                type="file"
                id="fileInput2"
                @change="previewImage"
                style="display: none"
              />
              <label for="fileInput2" class="custom-file-label"
                >Find file</label
              >
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
   import { defineEmits } from 'vue';
   const selection = ref(null);
   const emit = defineEmits(['selection']);
   function updateSelection(value) {
  selection.value = value;
  emit('selection', value);
}
   
   
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