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
            <v-col cols="2">
              <span class="Title">* 구분</span>
            </v-col>
            <v-col cols="8">
              <input
                type="radio"
                id="option1"
                name="division"
                class="hidden-radio"
                value="option1"
                v-model="selectedOption"
              />
              <label for="option1" class="radio-label"> 폐업</label>

              <input
                type="radio"
                id="option2"
                name="division"
                class="hidden-radio"
                value="option2"
                v-model="selectedOption"
              />
              <label for="option2" class="radio-label"> 위치 이전</label>
              <input
                type="radio"
                id="option3"
                name="division"
                class="hidden-radio"
                value="option3"
                v-model="selectedOption"
              />
              <label for="option3" class="radio-label"> 가격 정보</label>
              <input
                type="radio"
                id="option4"
                name="division"
                class="hidden-radio"
                value="option4"
                v-model="selectedOption"
              />
              <label for="option4" class="radio-label"> 영업시간</label>

              <input
                type="radio"
                id="option5"
                name="division"
                class="hidden-radio"
                value="option5"
                v-model="selectedOption"
              />
              <label for="option5" class="radio-label"> 연락처</label>
              <input
                type="radio"
                id="option6"
                name="division"
                class="hidden-radio"
                value="option6"
                v-model="selectedOption"
              />
              <label for="option6" class="radio-label"> 시설정보</label>
              <input
                type="radio"
                id="option7"
                name="division"
                class="hidden-radio"
                value="option7"
                v-model="selectedOption"
              />
              <label for="option7" class="radio-label"> 결제수단</label>
            </v-col>
          </v-row>

          <v-row class="mt-5" v-if="selectedOption == 'option1'">
            <v-col cols="2">
              <br /><br />
              <span class="Title">* 폐업일자</span>
            </v-col>

            <v-col cols="10">
              <br /><br />
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="test_PM"
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
          <v-row v-if="selectedOption == 'option1'">
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
          <v-row class="mt-5" v-if="selectedOption == 'option2'">
            <v-col cols="2">
              <br /><br />
              <span class="Title">* 폐업일자</span>
            </v-col>

            <v-col style="" cols="5">
              <br /><br />
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="Proposal_location_text"
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
              <br /><br />
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="Proposal_location_text"
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
          <v-row class="mt-5" v-if="selectedOption == 'option2'">
            <v-col cols="2">
              <span class="Title">* 폐업일자</span>
            </v-col>

            <v-col style="" cols="5">
              <v-card-text style="margin-top: -29px">
                <v-text-field
                  style="margin-right: "
                  class="Proposal_location_text"
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
                  class="Proposal_location_text"
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
          
<br> <br>
          <!--Proposal_pricing-->

          <div v-if="selectedOption == 'option3'">
            <v-row class="m-5">
              <v-col style="margin-top: 40px; margin-right: -20px" cols="2">
                <span class="Title">* jhgjkgtyy1</span>
              </v-col>
              <v-col style="" cols="2">
                <v-card-text style="margin-top: -29px">
                  <v-list-item
                    style="margin-left: -15px; color: blue"
                    link
                    title="서비스 관리 바로가기"
                  ></v-list-item>
                  <div class="selectdiv">
                    <label class="options">
                      <select v-model="selectedWord" class="dropdown">
                        vscode-file://vscode-app/c:/Users/TRIVICO/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html
                        <option value="Number">Number</option>
                        <option value="Member">Member Name</option>
                        <option value="Phone">Phone Number</option>
                        <option value="Store">Store Name</option>
                        <option value="Product">Product</option>
                      </select>
                    </label>
                  </div>
                </v-card-text>
              </v-col>
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
          <!--Proposal_opening-->
          <div v-if="selectedOption == 'option4'">
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
              <label
                style="margin-top: 10px"
                for="Facility"
                class="checkbox_MP1"
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

          <!-- Proposal_Contact -->
          <div v-if="selectedOption == 'option5'">
            <v-row class="mt-5">
              <v-col cols="2">
                <br />
                <span class="Title">* 폐업일자</span>
              </v-col>

              <v-col cols="10">
                <br />
                <v-card-text style="margin-top: -29px">
                  <v-text-field
                    style="margin-right: "
                    class="test_PM"
                    density="compact"
                    variant="solo"
                    label="031-123-1234"
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
              </v-col>
            </v-row>
          </div>

          <!-- Proposal_Facility -->
          <br /><br />

          <div v-if="selectedOption == 'option6'">
            <v-row class="m-5">
              <v-col style="margin-top: -10px" cols="2">
                <span class="Title">* 폐업일자</span>
              </v-col>
              <v-col style="margin-left: -20px" cols="10">
                <v-card-text style="margin-top: -29px; margin-right: 100px">
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
                    id="closed"
                    name="closed_name"
                    class="checkbox_MP"
                    v-model="closed"
                  />
                  <label for="closed" class="checkbox_MP1">폐업</label>
                  <span class="mt-1"> </span>
                  <input
                    type="checkbox"
                    id="location"
                    name="location_name"
                    class="checkbox_MP"
                    v-model="location"
                  />
                  <label for="location" class="checkbox_MP1">위치 이전</label>
                  <span class="mt-1"> </span>
                  <input
                    type="checkbox"
                    id="pricing"
                    name="pricing_name"
                    class="checkbox_MP"
                    v-model="pricing"
                  />
                  <label for="pricing" class="checkbox_MP1">가격 정보</label>
                  <span class="mt-1"> </span>
                  <input
                    type="checkbox"
                    id="Opening"
                    name="Opening_name"
                    class="checkbox_MP"
                    v-model="Opening"
                  />
                  <label for="Opening" class="checkbox_MP1">영업시간</label>
                  <span class="mt-1"> </span>
                  <input
                    type="checkbox"
                    id="contact"
                    name="contact_name"
                    class="checkbox_MP"
                    v-model="contact"
                  />
                  <label for="contact" class="checkbox_MP1">연락처</label>
                  <span class="mt-1"> </span>
                  <input
                    type="checkbox"
                    id="Facility"
                    name="Facility_name"
                    class="checkbox_MP"
                    v-model="Facility"
                  />
                  <label for="Facility" class="checkbox_MP1">시설정보</label>
                  <span class="mt-1"> </span>
                  <input
                    type="checkbox"
                    id="Facility"
                    name="Facility_name"
                    class="checkbox_MP"
                    v-model="Facility"
                  />
                  <label for="Facility" class="checkbox_MP1">시설정보</label>
                  <span class="mt-1"> </span>
                  <input
                    type="checkbox"
                    id="Facility"
                    name="Facility_name"
                    class="checkbox_MP"
                    v-model="Facility"
                  />
                  <label for="Facility" class="checkbox_MP1">시설정보</label>
                  <span class="mt-1"> </span>
                  <input
                    type="checkbox"
                    id="Facility"
                    name="Facility_name"
                    class="checkbox_MP"
                    v-model="Facility"
                  />
                  <label for="Facility" class="checkbox_MP1">시설정보</label>
                </v-card-text>
              </v-col>
            </v-row>

            <v-row class="m-5">
              <v-col cols="2">
                <span class="Title">* 폐업일자</span>
              </v-col>

              <v-col style="" cols="2">
                <v-card-text style="margin-top: -29px">
                  <v-text-field
                    class="Proposal_pricing_text_contack"
                    density="compact"
                    variant="solo"
                    label="추가 시설 정보가 있을 경우 고객이 입력했던 정보가 노출됩니다."
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
              </v-col>
            </v-row>
          </div>
        
          <!-- Proposal_payment -->
          <div  v-if="selectedOption == 'option7'">
          <v-row class="ma-5">
            <v-col cols="10">
              <v-row>
                <p style="margin-left: -21px" class="Title">* 구분</p>

                <input
                  style="margin-left: 155px"
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
          <br /><br />

       

            <v-row class="m-5">
              <v-col cols="2">
                <span class="Title">* 폐업일자</span>
              </v-col>

              <v-col style="" cols="10">
                <v-card-text style="margin-top: -29px">
                  <v-text-field
                    class="Proposal_pricing_text_contack"
                    density="compact"
                    variant="solo"
                    label="추가 시설 정보가 있을 경우 고객이 입력했던 정보가 노출됩니다."
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
              </v-col>
            </v-row>
          </div>
          <br>

          <v-row v-if="selectedOption == 'option2'">
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

          <!-- Proposal_payment -->
        </v-container>
        <v-row> </v-row>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script setup lang="js">
import { ref } from 'vue';


const show = ref(false);
// const selectedSituation = ref('');
const selectedOption = ref('option1');
</script>
<style scoped>
@import "/src/assets/css/style_noy.css";
</style>
