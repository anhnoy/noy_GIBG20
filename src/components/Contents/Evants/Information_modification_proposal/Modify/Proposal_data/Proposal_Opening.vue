<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">정보 수정 제안 내용</span>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="!show">
        <v-divider></v-divider>

        <v-container>
          <v-row class="mt-5">
            <v-col style="margin-left: " cols="2">
              <span class="Title">* 구분</span>
            </v-col>
            <v-col cols="8">
              <input
                type="radio"
                id="closed"
                name="division"
                class="hidden-radio"
                value="closed"
                v-model="selectedSituation"
              />
              <label for="closed" class="radio-label"> 폐업</label>

              <input
                type="radio"
                id="location"
                name="division"
                class="hidden-radio"
                value="location"
                v-model="selectedSituation"
              />
              <label for="location" class="radio-label"> 위치 이전</label>
              <input
                type="radio"
                id="pricing"
                name="division"
                class="hidden-radio"
                value="pricing"
                v-model="selectedSituation"
              />
              <label for="pricing" class="radio-label"> 가격 정보</label>
              <input
                type="radio"
                id="Opening"
                name="division"
                class="hidden-radio"
                value="Opening"
                v-model="selectedSituation"
              />
              <label for="Opening" class="radio-label"> 영업시간</label>

              <input
                type="radio"
                id="contact"
                name="division"
                class="hidden-radio"
                value="contact"
                v-model="selectedSituation"
              />
              <label for="contact" class="radio-label"> 연락처</label>
              <input
                type="radio"
                id="Facility"
                name="division"
                class="hidden-radio"
                value="Facility"
                v-model="selectedSituation"
              />
              <label for="Facility" class="radio-label"> 시설정보</label>
            </v-col>
          </v-row>
<div>
          <v-row class="ma-5">
            <v-col cols="10">
              <v-row>
                <p style="margin-left: -21px" class="Title">* 구분</p>

                <input
                  style="margin-left: 152px"
                  type="checkbox"
                  id="entire_MP"
                  name="entire_name"
                  class="checkbox_MP"
                  v-model="entire_MP"
                />
                <label for="entire_MP" class="checkbox_MP1">전체</label>
                <span class="mt-1"> </span>
                <input
                  type="checkbox"
                  id="entire_MP"
                  name="entire_name"
                  class="checkbox_MP"
                  v-model="entire_MP"
                />
                <label for="entire_MP" class="checkbox_MP1">전체</label>
                <span class="mt-1"> </span>
                <input
                  type="checkbox"
                  id="entire_MP"
                  name="entire_name"
                  class="checkbox_MP"
                  v-model="entire_MP"
                />
                <label for="entire_MP" class="checkbox_MP1">전체</label>
                <span class="mt-1"> </span>
                <input
                  type="checkbox"
                  id="entire_MP"
                  name="entire_name"
                  class="checkbox_MP"
                  v-model="entire_MP"
                />
                <label for="entire_MP" class="checkbox_MP1">전체</label>
              </v-row>
            </v-col>
          </v-row>

          <v-row class="mt-5">
            <v-col cols="2">
              <span class="Title">* 폐업일자</span>
            </v-col>

            <v-col style="" cols="2">
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="Proposal_pricing_text"
                  density="compact"
                  variant="solo"
                  label="YYYY-MM-DD"
                  single-line
                  hide-details
                  disabled
                  ref="searchField"
                ></v-text-field>
              </v-card-text>
            </v-col>

            <v-col class="" cols="2">
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="Proposal_pricing_text"
                  density="compact"
                  variant="solo"
                  label="YYYY-MM-DD"
                  single-line
                  hide-details
                  disabled
                  ref="searchField"
                ></v-text-field>
              </v-card-text>
            </v-col>
            <input
              style="margin-top: 10px; margin-left: 10px"
              type="checkbox"
              id="Facility"
              name="Facility_name"
              class="checkbox_MP"
              v-model="Facility"
            />
            <label style="margin-top: 10px" for="Facility" class="checkbox_MP1"
              >시설정보</label
            >
          </v-row>

          <v-row class="m-5">
            <v-col cols="2">
              <span class="Title">* 폐업일자</span>
            </v-col>

            <v-col style="" cols="2">
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="Proposal_pricing_text"
                  density="compact"
                  variant="solo"
                  label="YYYY-MM-DD"
                  single-line
                  hide-details
                  disabled
                  ref="searchField"
                ></v-text-field>
              </v-card-text>
            </v-col>
            <v-col class="" cols="4">
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="Proposal_pricing_text"
                  density="compact"
                  variant="solo"
                  label="YYYY-MM-DD"
                  single-line
                  hide-details
                  disabled
                  ref="searchField"
                ></v-text-field>
              </v-card-text>
            </v-col>
          </v-row>
          <v-row class="m-5">
            <v-col cols="2"> </v-col>

            <v-col style="" cols="2">
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="Proposal_pricing_text"
                  density="compact"
                  variant="solo"
                  label="YYYY-MM-DD"
                  single-line
                  hide-details
                  disabled
                  ref="searchField"
                ></v-text-field>
              </v-card-text>
            </v-col>
            <v-col class="" cols="4">
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="Proposal_pricing_text"
                  density="compact"
                  variant="solo"
                  label="YYYY-MM-DD"
                  single-line
                  hide-details
                  disabled
                  ref="searchField"
                ></v-text-field>
              </v-card-text>
            </v-col>
          </v-row>
          <v-row class="m-5">
            <v-col cols="2"> </v-col>

            <v-col style="" cols="2">
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="Proposal_pricing_text"
                  density="compact"
                  variant="solo"
                  label="YYYY-MM-DD"
                  single-line
                  hide-details
                  disabled
                  ref="searchField"
                ></v-text-field>
              </v-card-text>
            </v-col>
            <v-col class="" cols="4">
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="Proposal_pricing_text"
                  density="compact"
                  variant="solo"
                  label="YYYY-MM-DD"
                  single-line
                  hide-details
                  disabled
                  ref="searchField"
                ></v-text-field>
              </v-card-text>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="2">
              <br />
              <span class="Title">* 사진</span>
            </v-col>
            <v-col>
              <v-card-text style="margin-top: -29px"> </v-card-text>
              <v-row>
                <v-col cols="2" class="image-container">
                  <img
                    src="https://ttol.vietnamnetjsc.vn/images/2019/02/22/08/11/anh-2-1550738518-width650height867.jpg"
                    alt="Image 2"
                  />
                  <img
                    src="https://danviet.mediacdn.vn/upload/2-2018/images/2018-04-05/anh-2-1522914373-width660height825.jpg"
                    alt="Image 2"
                  />
                  <img
                    src="https://we25.vn/media2018/Img_News/2020/04/27/nu-sinh-2k2-ben-tre-dep-hut-hon-ngo-tuong-lai-tay-du-dinh-thi-vao-truong-du-lich-vi-dam-me-1_20200427134553.jpg"
                    alt="Image 2"
                  />
                  <img
                    src="https://i.pinimg.com/564x/d1/f2/65/d1f265cdf9bb0276242cd52c9a09e642.jpg"
                    alt="Image 2"
                  />
                </v-col>
              </v-row>

              <v-col> </v-col>
              <br />
            </v-col>
          </v-row>
        </div>
        </v-container>
        <v-row> </v-row>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script setup lang="js">
import { ref } from 'vue';

 const show = ref(false);
</script>
<style scoped>
@import "/src/assets/css/style_noy.css";
</style>
