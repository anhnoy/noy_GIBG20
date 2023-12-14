<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">조회조건</span>
      <v-spacer></v-spacer>
      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="!show">
        <v-divider></v-divider>

        <v-row class="ma-5">
          <v-col cols="6">
            <v-row>
              <p class="Title_bill">등록일</p>
              <span class="mt-1">
                <datepicker />
              </span>

              <span
                class="px-7"
                style="
                  color: #8899a8;
                  font-size: 12px;
                  font-weight: 700;
                  margin: 15px 0px 0px 0px;
                "
                >~</span
              >
              <span class="mt-1" style="margin-right: 10px">
                <datepicker
              /></span>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-row>
              <p class="Title_bill">검색어</p>
              <div class="selectdiv">
                <label class="options">
                  <select v-model="selectedWord" class="dropdown">
                    <option value="Number">Number</option>
                    <option value="Member">Member Name</option>
                    <option value="Phone">Phone Number</option>
                    <option value="Store">Store Name</option>
                    <option value="Product">Product</option>
                  </select>
                </label>
              </div>

              <div class="input-select-by-selectdiv">
                <input
                  v-if="selectedWord === 'Number'"
                  type="text"
                  class="input"
                  placeholder="Please enter your ID."
                />
                <input
                  v-if="selectedWord === 'Member'"
                  type="text"
                  class="input"
                  placeholder="Please enter your member name"
                />
                <input
                  v-if="selectedWord === 'Phone'"
                  type="text"
                  class="input"
                  placeholder="Please enter your Phone"
                />
                <input
                  v-if="selectedWord === 'Store'"
                  type="text"
                  class="input"
                  placeholder="Please enter your Store"
                />
                <input
                  v-if="selectedWord === 'Product'"
                  type="text"
                  class="input"
                  placeholder="Please enter your Phone"
                />
              </div>
            </v-row>
          </v-col>
        </v-row>

        <v-container>
          <v-row class="ma-3">
            <v-col cols="6">
              <v-row>
                <p class="Title">상태</p>
                <span class="mt-1"> </span>
                <input
                  type="radio"
                  id="entire"
                  name="hidden"
                  class="hidden-radio"
                  v-model="status"
                />
                <label for="entire" class="radio-label">전체</label>
                <input
                  type="radio"
                  id="Approval"
                  name="hidden"
                  class="hidden-radio"
                  v-model="status"
                />
                <label for="Approval" class="radio-label">승인요청</label>
                <input
                  type="radio"
                  id="Under"
                  name="hidden"
                  class="hidden-radio"
                  v-model="status"
                />
                <label for="Under" class="radio-label">심사중</label>
                <input
                  type="radio"
                  id="Approved"
                  name="hidden"
                  class="hidden-radio"
                  v-model="status"
                />
                <label for="Approved" class="radio-label">승인완료</label>
                <input
                  type="radio"
                  id="denied"
                  name="hidden"
                  class="hidden-radio"
                  v-model="status"
                />
                <label for="denied" class="radio-label">승인거부</label>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <p class="Title">답변여부</p>
                <span class="mt-1"> </span>
                <input
                  type="radio"
                  id="entire2"
                  name="entire2_name"
                  class="hidden-radio"
                  v-model="status"
                />
                <label for="entire2" class="radio-label">전체</label>
                <input
                  type="radio"
                  id="Waiting"
                  name="entire2_name"
                  class="hidden-radio"
                  v-model="status"
                />
                <label for="Waiting" class="radio-label">답변대기</label>
                <input
                  type="radio"
                  id="Answer"
                  name="entire2_name"
                  class="hidden-radio"
                  v-model="status"
                />
                <label for="Answer" class="radio-label">답변완료</label>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center" justify="center">
              <v-btn variant="outlined" color="#346DDB" class="button" @click="resetForm">
                초기화
              </v-btn>
              <v-btn elevation="0" color="#346DDB" class="button"> 조회 </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="js">
import { ref } from 'vue';
import datepicker from '../../../datepicker/datepicker.vue'

const show = ref(false);
const selectedWord = ref('Number');
const status = ref('entire');

const resetForm = () => {
  selectedWord.value = 'Number';
  status.value = 'entire';
  
};

</script>

<style scoped></style>
