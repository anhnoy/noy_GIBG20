<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">기본정보</span>

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
            <v-row class="mt-2">
              <v-col cols="2">
                <span class="Title">* 등록일시 </span>
              </v-col>
              <v-col>
                <input
                  type="text"
                  class="input"
                  placeholder="YYYY-MM-DD HH:MM:SS"
                  style="border: none"
                  disabled
                />
              </v-col>
            </v-row>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* 작성자</span>
            </v-col>
            <v-col>
              <input
                type="text"
                class="input"
                placeholder="홍길동 (abcd12345)"
                style="border: none"
                disabled
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <span class="Title">* 사진</span>
            </v-col>
            <v-col>
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  density="compact"
                  variant="solo"
                  label="정비명세서 인증해요!"
                  single-line
                  hide-details
                  disabled
                  ref="searchField"
                ></v-text-field>
              </v-card-text>
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
<style scoped></style>
