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
              <span class="Title">* Category </span>
            </v-col>
            <v-col>
              <label for="vehicle1" class="checkbox-label">
                <input type="checkbox" id="vehicle1" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                Maintenance/Car Wash
              </label>

              <label for="vehicle2" class="checkbox-label">
                <input type="checkbox" id="vehicle2" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                Business visit
              </label>

              <label for="vehicle3" class="checkbox-label">
                <input type="checkbox" id="vehicle3" class="hidden-checkbox" />
                <span class="custom-checkbox"></span>
                Self/Rental
              </label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Company code</span>
            </v-col>
            <v-col>
              <input
                v-for="item in items"
                :key="item.Company_code"
                type="text"
                class="input"
                v-model="item.Company_code"
                readonly
                style="background-color: #e3e8ed; color: #7d92a1"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Company name</span>
            </v-col>
            <v-col>
              <input
                v-for="item in items"
                :key="item.Company_name"
                type="text"
                class="input"
                v-model="item.Company_name"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Representative number</span>
            </v-col>
            <v-col>
              <input
                v-for="item in items"
                :key="item.Representative_number"
                type="text"
                class="input"
                v-model="item.Representative_number"
              /><br />
              <span class="hint">※ Please enter including the hyphen (-).</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Virtual number</span>
            </v-col>
            <v-col>
              <input
                v-for="item in items"
                :key="item.Virtual_number"
                type="text"
                class="input"
                v-model="item.Virtual_number"
                readonly
                style="background-color: #e3e8ed; color: #7d92a1"
              /><br />
              <span class="hint"
                >※ This is a virtual number automatically assigned when
                registering business information, regardless of whether the
                store is open or not.</span
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* address</span>
            </v-col>
            <v-col>
              <input
                v-for="item in items"
                :key="item.Address"
                type="text"
                class="input"
                v-model="item.Address"
              />
              <label class="custom-file-label">search address</label>
              <br />
              <input
                v-for="item in items"
                :key="item.Address_search"
                type="text"
                class="input"
                v-model="item.Address_search"
              />
              <input
                v-for="item in items"
                :key="item.Address_detail"
                type="text"
                class="input"
                v-model="item.Address_detail"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Latitude/Longitude</span>
            </v-col>
            <v-col>
              <input
                v-for="item in items"
                :key="item.Longitude"
                type="text"
                class="input"
                v-model="item.Longitude"
                style="background-color: #e3e8ed; color: #7d92a1"
              />
              <input
                v-for="item in items"
                :key="item.Latitude"
                type="text"
                class="input"
                v-model="item.Latitude"
                style="background-color: #e3e8ed; color: #7d92a1"
              />
              <br />
              <span class="hint">※ Please enter including the hyphen (-).</span>
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
                id="fileInput"
                @change="previewImage"
                style="display: none"
              />
              <label for="fileInput" class="custom-file-label">Find file</label>
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
          <v-row>
            <v-col cols="2">
              <span class="Title">* Store availability </span>
            </v-col>
            <v-col>
              <input
                type="radio"
                id="entire"
                name="store"
                class="hidden-radio"
              />
              <label for="entire" class="radio-label">Not in stores</label>

              <input
                type="radio"
                id="storeEntry"
                name="store"
                class="hidden-radio"
              />
              <label for="storeEntry" class="radio-label"> Store entry</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Exposure</span>
            </v-col>
            <v-col>
              <input
                type="radio"
                id="Hiding"
                name="store"
                class="hidden-radio"
              />
              <label for="Hiding" class="radio-label">Hiding</label>

              <input
                type="radio"
                id="Exposure"
                name="store"
                class="hidden-radio"
              />
              <label for="Exposure" class="radio-label">Exposure</label>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* Business status </span>
            </v-col>
            <v-col>
              <input type="radio" id="Open" name="store" class="hidden-radio" />
              <label for="Open" class="radio-label">Open</label>

              <input
                type="radio"
                id="Business_suspension"
                name="store"
                class="hidden-radio"
              />
              <label for="Business_suspension" class="radio-label"
                >Business suspension</label
              >
              <input
                type="radio"
                id="Closed_down"
                name="store"
                class="hidden-radio"
              />
              <label for="Closed_down" class="radio-label">Closed down</label>
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
  { Company_code: 1, 
    Category: '셀프/대여', 
    Company_name: '크리스탈 디테일링 센터 금천점',
     Representative_number: '02-1234-1234',
      Virtual_number : '050-1234-1234', 
      Address: '115',
      Longitude: '00.000000000',
      Latitude: '00.000000000',
       Address_search: '서울특별시',
        Address_detail: '서초중앙로8길',
        Review_rating: 5.0, 
        Business_status: '영업중',
         Exposure: '노출',
          Store_status: '입점', 
          Date: 'YYYY-MM-DD HH:MM:SS' },
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