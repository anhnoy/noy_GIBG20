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
              v-for="item in items"
                :key="item.Business_number"
                type="text"
                class="input"
                v-model="item.Business_number"
              />
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
              v-for="item in items"
                :key="item.Representative_name"
                type="text"
                class="input"
                v-model="item.Representative_name"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Business status</span>
            </v-col>
            <v-col>
              <input
              v-for="item in items"
                :key="item.Business_status"
                type="text"
                class="input"
                v-model="item.Business_status"
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
              v-for="item in items"
                :key="item.Sectors"
                type="text"
                class="input"
                v-model="item.Sectors"
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
              v-for="item in items"
                :key="item.id"
                type="text"
                class="input"
                v-model="item.id"
                style="background-color: #e3e8ed; color: #7d92a1"
              />
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
              v-for="item in items"
                :key="item.email"
                type="text"
                class="input"
                v-model="item.email"
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
              v-for="item in items"
                :key="item.Contact"
                type="text"
                class="input"
                v-model="item.Contact" /><br /><span class="hint"
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
   const items = ref([
  { Company_code: 1, 
    Category: '셀프/대여', 
    Company_name: '크리스탈 디테일링 센터 금천점',
     Representative_number: '02-1234-1234',
      Virtual_number : '050-1234-1234', 
      Business_number : '123-45-67890', 
      Contact:'010-1234-1234',
      Address: '115',
      Longitude: '00.000000000',
      Latitude: '00.000000000',
       Address_search: '서울특별시',
        Address_detail: '서초중앙로8길',
        Representative_name:'김길동',
        Sectors:'세차',
        email:'abcd1324@abcd.com',
        id:'detailing01',
        Review_rating: 5.0, 
        Business_status: '영업중',
         Exposure: '노출',
          Store_status: '입점', 
          Date: 'YYYY-MM-DD HH:MM:SS' },
   ]);
  
  
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