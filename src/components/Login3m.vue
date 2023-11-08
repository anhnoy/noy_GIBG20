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
              <v-card-title class="pt-5">GMS 로그인 </v-card-title>
              <v-card-text>공임비교 앱 통합 관리자 </v-card-text>
            </div>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field
                  v-model="username"
                  label="아이디를 입력하세요."
                  clearable
                  single-line
                  variant="outlined"
                  color="#346DDB"
                  @input="checkInput"
                  @click:clear="clearUser"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  label="비밀번호를 입력하세요."
                  clearable
                  single-line
                  variant="outlined"
                  color="#346DDB"
                  :type="visible ? 'text' : 'password'"
                  @input="checkInput"
                  @click:clear="clearPass"
                ></v-text-field>

                <div v-if="showOTPInput">
                  <v-text-field
                    v-model="otp"
                    label="인증번호를 입력하세요."
                    clearable
                    single-line
                    variant="outlined"
                    color="#346DDB"
                  >
                    <template v-slot:append-inner>
                      <p class="time">
                        {{ Math.floor(countdown / 60) }}:{{ countdown % 60 }}
                      </p>
                    </template>
                  </v-text-field>

                  <div>
                    <v-row class="pb-5">
                      <a class="l-under"> 인증번호를 받지 못하셨나요?</a>
                      <v-spacer></v-spacer>
                      <a
                        class="r-under"
                        style="cursor: pointer"
                        @click="resetCountdown(10)"
                      >
                        인증번호 재발송</a
                      ></v-row
                    >
                  </div>
                </div>

                <div class="text-center" v-if="!required">
                  <p class="validate">로그인 정보를 확인해주세요.</p>
                </div>
                <div class="text-center" v-if="!requiredOTP">
                  <p class="validate">인증번호를 확인해주세요.</p>
                </div>
                <div class="text-center" v-if="!requiredTime">
                  <p class="validate">인증번호를 확인해주세요.</p>
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
                    {{ buttonText }}
                  </v-btn>
                  <v-dialog
                    v-model="successDialog"
                    max-width="327"
                    height-width="167"
                  >
                    <v-card class="pa-3">
                      <v-card-text>
                        비밀번호 변경 후 로그인해 주세요.
                      </v-card-text>
                     <div class="d-flex justify-center">
                      <v-btn
                        max-width="68"
                        color="#346DDB"
                        @click="this.$router.push({ path: '/change_pw' })"
                        >확인</v-btn>
                     </div>
                    </v-card>
                  </v-dialog>
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
    
    const username = ref('admin');
    const password = ref('');
    const isInputFinished = ref(false);
    const showOTPInput = ref(false);
    const required = ref(true);
    const requiredOTP = ref(true);
    const requiredTime = ref(true);
    const inputText = ref('');
    const countdown = ref(10);
    const successDialog = ref(false);
    const otp = ref('');
    let timer;
    
    const submitLogin = () => {
    const usr = username.value;
    const passwd = password.value;
  
    if (passwd == '1' && usr == 'admin') {
      required.value = true;
     
      isInputFinished.value = true;
      startCountdown();
  
      // If OTP input is not visible, show it
      if (!showOTPInput.value) {
        showOTPInput.value = true;
      } else {
        // Validate OTP and perform login
        if (otp.value === '123456') {
          successDialog.value = true;
           requiredOTP.value = true; // Open the success dialog
        } else {
          requiredOTP.value = false;
        }
      }
    } else {
      required.value = false;
    }
  };
    
    const buttonText = computed(() => {
    if (!showOTPInput.value) {
      return '로그인';
    } else {
      return '인증완료';
    }
  });
    const clearUser = () => {
      isInputFinished.value = false;
      username.value = "";
    };
    
    const clearPass = () => {
      isInputFinished.value = false;
      password.value = "";
    };
    const isFormValid = computed(() => {
    if (!showOTPInput.value) {
      return !!username.value  && !!password.value;
    } else {
      return !!username.value && !!password.value && !!otp.value;
    }
  });
    const startCountdown = () => {
      const timer = setInterval(() => {
        countdown.value--;
    
        if (countdown.value === 0) {
          clearInterval(timer);
          requiredTime.value = false;
        }
      }, 1000);
    };
    const resetCountdown = (initialValue) => {
    clearInterval(timer);
    countdown.value = initialValue; // Reset the countdown to the specified initial value
  };
    
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
</style>