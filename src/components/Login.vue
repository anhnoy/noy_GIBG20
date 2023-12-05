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
              <v-form>
                <v-text-field
                  v-model="username"
                  label="아이디를 입력하세요."
                  clearable
                  single-line
                  variant="outlined"
                  color="#346DDB"
                  @click:clear="clearUser"
                  :disabled="loggedIn"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  label="비밀번호를 입력하세요."
                  clearable
                  single-line
                  variant="outlined"
                  color="#346DDB"
                  :type="visible ? 'text' : 'password'"
                  @click:clear="clearPass"
                  :disabled="loggedIn"
                ></v-text-field>

                <div v-if="showOTPInput">
                  <v-text-field
                    v-model="otp"
                    label="인증번호를 입력하세요."
                    clearable
                    single-line
                    variant="outlined"
                    color="#346DDB"
                    :disabled="otpExpired"
                  >
                    <template v-slot:append-inner>
                      <p class="time">
                        {{ Math.floor(otpTimer / 60) }}:{{
                          (otpTimer % 60).toString().padStart(2, "0")
                        }}
                      </p>
                    </template>
                  </v-text-field>

                  <div>
                    <v-row class="pb-5">
                      <a class="l-under"> 인증번호를 받지 못하셨나요?</a>
                      <v-spacer></v-spacer>
                      <p
                        class="r-under"
                        style="cursor: pointer"
                        @click="resetTimer"
                      >
                        인증번호 재발송
                      </p></v-row
                    >
                  </div>
                </div>

                <div class="text-center" v-if="required">
                  <p class="validate">로그인 정보를 확인해주세요.</p>
                </div>
                <div class="text-center" v-if="requiredOTP">
                  <p class="validate">
                    인증번호를 확인해주세요.
                  </p>
                </div>
                <div class="text-center" v-if="otpExpired">
                  <p class="validate">입력시간이 초과되었습니다.</p>
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
                </div>
                <v-card-item class="d-flex justify-center pt-8">
                  <v-img
                    :src="
                      require('../assets/images/Auto_Logo_Gray_2400x2400.png')
                    "
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
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import Post_admin from '@/services/Post_admin';


  const username = ref('123456789');
  const password = ref('12345677');
  const loggedIn = ref(false);
  const showOTPInput = ref(false);
  const required = ref(false);
  const requiredOTP = ref(false);
  const otp = ref('');
  const otpTimer = ref(180);
  const otpExpired = ref(false);
  const timerInterval = ref('');
  const visible = ref('');
  const router = useRouter();
  




const submitLogin = async () => {
  const usr = username.value;
  const passwd = password.value;
  const code = otp.value;

  if (showOTPInput.value) {
    if (usr && code && passwd) {
      try {
        const res = await Post_admin.otp(usr, code, passwd);
        console.log(res.data.accessToken);
        localStorage.setItem(
                "Token",
                res.data.accessToken
              );
              localStorage.setItem(
                "ID",
                res.data.name
              );
        requiredOTP.value = false;
        router.push({ name: 'Partner' });
      } catch (error) {
        console.error(error);
        requiredOTP.value = true;
      }
    } else {
      requiredOTP.value = true;
    }
  } else {
    if (usr && passwd) {
      try {
        const res = await Post_admin.login(usr, passwd);
        console.log(res.data.message);
        if(res.data.message === "Invalid Password!." ||res.data.message === "ID not found." ){    
          username.value = '';
          password.value = '';
          required.value = true;
        }
        
        if(res.data.message === "Sccuessfully Send OTP"){
           showOTPInput.value = true;
        startOTPCountdown();
        loggedIn.value = true;
        required.value = false;
        }
       
      } catch (error) {
        console.error(error);
        required.value = true;
      }
    } else {
      required.value = true;
    }
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
    username.value = "";
  };
  
  const clearPass = () => {
    password.value = "";
  };
  
  const isFormValid = computed(() => {
  if (!showOTPInput.value) {
    return !!username.value  && !!password.value;
  } else {
    return !!username.value && !!password.value && !!otp.value;
  }
});

  const startOTPCountdown = () =>{
    let countdown = otpTimer.value;
    timerInterval.value = setInterval(() => {
      countdown--;
      otpTimer.value = countdown;
      if (countdown <= 0) {
        clearInterval(timerInterval.value);
        otpExpired.value =true;
        otp.value = '';
      }
    },1000);
  };

  const resetTimer = () =>{
    Post_admin.login(username.value, password.value);
    requiredOTP.value = false;
    otpExpired.value = false;
    otpTimer.value = 180;
    clearInterval(timerInterval.value);
    startOTPCountdown();
  };

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