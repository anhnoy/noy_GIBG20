<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">Store information</span>

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
              <span class="Title">* Business classification</span>
            </v-col>
            <v-col>
              <input
                type="radio"
                id="Corporate_business"
                name="store"
                class="hidden-radio"
              />
              <label for="Corporate_business" class="radio-label"
                >Corporate business</label
              >

              <input
                type="radio"
                id="Sole_proprietor"
                name="store"
                class="hidden-radio"
              />
              <label for="Sole_proprietor" class="radio-label"
                >Sole proprietor</label
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Business Number</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please enter your business registration number."
              />
              <label class="custom-file-label">Double check</label>
              <br /><span class="hint"
                >※ Please enter including the hyphen (-).</span
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Representative name</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please enter the representative name."
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Business status</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please enter your business type."
              /><br /><span class="hint"
                >※ If there is more than one type of business, please enter them
                separated by a comma (,).</span
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Sectors</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please enter your industry."
              /><br /><span class="hint"
                >※ If there is more than one industry, please enter them
                separated by a comma (,).</span
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* id</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please enter your ID."
              />
              <label class="custom-file-label">Double check</label>
              <br />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* password</span>
            </v-col>
            <v-col cols="5">
              <input
                type="text"
                class="input3"
                placeholder="Your password will be automatically sent upon registration."
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* email</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please enter your e-mail"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title"
                >* Contact information for person in charge</span
              >
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="Please enter the contact information of the person in charge."
              /><br /><span class="hint"
                >※ A secondary authentication number will be sent.</span
              >
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