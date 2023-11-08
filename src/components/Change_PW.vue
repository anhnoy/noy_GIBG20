<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app style="background-color: #f5f8fa">
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col>
          <v-card
            class="mx-auto ma-15"
            max-width="320"
            elevation="0"
            style="background-color: #f5f8fa"
          >
            <div class="text-center">
              <v-img :src="require('../assets/images/gibg.png')" height="60" />
              <v-card-title class="pt-5">비밀번호 변경 </v-card-title>
              <p class="title"
                >보안 정책에 따라 관리자 계정의 비밀번호를 <br>3개월 마다 주기적으로
                변경하고 있습니다.<br><br>
                비밀번호 변경 후 다시 로그인 해주세요.</p
              >
            </div>
            <v-card-text>
              <v-form @submit.prevent="login">
                <div class="py-5">
                  <p class="change">신규 비밀번호</p>
                <v-text-field
                  v-model="newpassword"
                  clearable
                  single-line
                  variant="outlined"
                  color="#346DDB"
                  @click:clear="clearUser"
                ></v-text-field>    
                  <v-row class="pb-5">
                    <a class="l-under">영문, 숫자, 특수문자를 포함한 8~16글자</a>
                  </v-row>
                </div>
              

                <p class="change">신규 비밀번호 확인</p>
                <v-text-field
                  v-model="confirmpassword"
                  clearable
                  single-line
                  variant="outlined"
                  color="#346DDB"
                  :type="visible ? 'text' : 'password'"
                  @click:clear="clearPass"
                ></v-text-field>

                <div class="text-center" v-if="!required">
                  <p class="validate">비밀번호를 확인해주세요.</p>
                </div>
              
                <div class="pt-5">
                  <v-btn
                    :disabled="!isFormValid"
                    block
                    rounded="lg"
                    size="x-large"
                    variant="flat"
                    @click="submitLogin"
                    :class="{
                      'success-btn': isFormValid,
                      'error-btn': !isFormValid,
                    }"
                  >
                  저장
                  </v-btn>
                </div>
                <v-card-item class="d-flex justify-center pt-8">
                  <v-img
                    :src="require('../assets/images/Auto_Logo_Gray_2400x2400.png')"
                    height="30"
                  />
                  <p class="caption">Administrator © auto&</p>
                </v-card-item>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
  
  <script setup lang="js">
  import { ref, watch, computed} from 'vue';
  
  const newpassword = ref('');
  const confirmpassword = ref('');
  const showOTPInput = ref(false);
  const required = ref(true);
  const inputText = ref('');
  const countdown = ref(10);
  const otp = ref('');
  
  const submitLogin = () => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

  if (passwordRegex.test(newpassword.value) && newpassword.value === confirmpassword.value) {
    required.value = true;
      console.log('success');
  } else {
    required.value = false;
  } 
};
  
  const clearUser = () => {
    newpassword.value = "";
  };
  
  const clearPass = () => {
    confirmpassword.value = "";
  };
  
  const isFormValid = computed(() => {
  if (!showOTPInput.value) {
    return !!newpassword.value  && !!confirmpassword.value;
  } else {
    return !!confirmpassword.value && !!newpassword.value && !!otp.value;
  }
});
  
  // Watch for changes in inputText and restart the countdown
  watch(inputText, () => {
    countdown.value = 20; // Reset countdown to 2 minutes (120 seconds)
  });
  
  // Start the countdown when the component is mounted
  </script>
  
  <style scoped>
.v-card-title {
  font-size: 24px;
  font-weight: 700;
  color: #394956;
}
.v-card-text {
  font-size: 16px;
  font-weight: 400;
  color: #394956;
}
.caption {
  font-size: 12px;
  font-weight: 400;
  color: #8899a8;
}
.validate {
  font-size: 12px;
  font-weight: 400;
  color: #d93025;
}
.l-under {
  font-size: 12px;
  font-weight: 500;
  color: #aab8c2;
  margin-left: 4%;
}
.r-under {
  font-size: 12px;
  font-weight: 500;
  color: #394956;
  margin-right: 4%;
}
.time {
  font-size: 15px;
  font-weight: 700;
  color: #346ddb;
}
.before-input-color {
  background-color: red;
}
.success-btn {
  background-color: #346ddb;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
}

.error-btn {
  background-color: #e3e8ed;
  font-size: 15px;
  font-weight: 500;
  color: #7d92a1;
}
.change{
  font-size: 12px;
  font-weight: 700;
  color: #7D92A1;
}
.title{
  font-size: 15px;
  font-weight: 400;
  color: #394956;
}
</style>