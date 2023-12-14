<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head">관리자 답변 등록</span>

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
              <span class="Title">* 상태</span>
            </v-col>
            <v-col>
              <input
                type="radio"
                id="Approval"
                name="situation"
                class="hidden-radio"
                value="Approval"
                v-model="selectedSituation"
              />
              <label for="Approval" class="radio-label">승인요청</label>

              <input
                type="radio"
                id="Under"
                name="situation"
                class="hidden-radio"
                value="Under"
                v-model="selectedSituation"
              />
              <label for="Under" class="radio-label">심사중</label>
              <input
                type="radio"
                id="Review"
                name="situation"
                class="hidden-radio"
                value="Review"
                v-model="selectedSituation"
              />
              <label for="Review" class="radio-label"> 심사완료</label>
            </v-col>
          </v-row>
          <br>
          <v-row class="mt-5">
            <v-col cols="2">
              <span class="Title">* 승인여부</span>
            </v-col>

            <v-col cols="">
              <input
                type="radio"
                id="approval"
                name="Approval"
                class="hidden-radio"
                :disabled="disableApprovalCompanion"
                v-model="selectedApproval"
              />
              <label for="approval" class="radio-label">승인</label>

              <input
                type="radio"
                id="Companion"
                name="Approval"
                class="hidden-radio"
                :disabled="disableApprovalCompanion"
                v-model="selectedApproval"
              />
              <label for="Companion" class="radio-label">반려</label>
            </v-col>
          </v-row>
          <br>
          <v-row class="mt-5">
            <v-col cols="2">
              <span class="Title">답변 선택</span>
            </v-col>
            
            <v-col cols="">
              <v-select
                v-model="selectedItem"
                clearable
                label="답변을 선택해주세요."
                :items="items"
                variant="outlined"
                disabled
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid>
          <v-container>
            <v-row justify="center">
              <v-col cols="auto">
                <v-btn style="margin-top: -40px" @click="clearFields" class="bt1">초기화</v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn style="margin-top: -40px" :ripple="false" @click="performSearch" class="btn2"
                  >조회</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </div>
    </v-expand-transition>
  </v-card>
  <br />
  <v-col cols="auto" style="display: flex; justify-content: center">
    <v-btn :ripple="false" @click="performSearch" class="btn2">조회</v-btn>
  </v-col>
</template>
<script setup lang="js">
import { ref, watch } from 'vue';

const selectedSituation = ref('');
const selectedApproval = ref('');
const disableApprovalCompanion = ref(false);

watch([selectedSituation, selectedApproval], ([newSituation, newApproval]) => {
  disableApprovalCompanion.value = newSituation === 'Approval' || newSituation === 'Under';

  // ตรวจสอบเงื่อนไขเพื่อเปิดให้ส่วนนี้ทำงานเมื่อเลือก "승인"
  if (newApproval === '승인' && newSituation !== 'Approval') {
    disableApprovalCompanion.value = false;
  } else {
    disableApprovalCompanion.value = true;
  }
});
  const show = ref(false);
</script>
<style scoped></style>
