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
                  :type="show ? 'text' : 'password'"
                  @input="checkInput"
                  @click:clear="clearPass"
                ></v-text-field>

                <div class="text-center" v-if="!required">
                  <p class="validate">로그인 정보를 확인해주세요.</p>
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
                    로그인
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
  import axios from 'axios';
  import { ref, computed} from 'vue';
  import router from '../router/index';
  
  const username = ref('');
  const password = ref('');
  const show = ref('');
  const isInputFinished = ref(false);
  const showOTPInput = ref(false);
  const required = ref(true);
  const otp = ref('');
  
  const submitLogin = () => {
  axios.post('http://192.168.100.76:5000/api/auth/signin', {
    id: username.value,
    password: password.value
  })
  .then(response => {
    if (response.data.success) {
      console.error('Login failed:', response.data.message);
      
    } else {
      router.push({ path: '/change_pw' });  
    }
  })
  .catch(error => {
    console.error('An error occurred while logging in:', error);
     required.value = false;
  });
};
  const clearUser = () => {
    isInputFinished.value = false;
    username.value = "";
  };
  
  const clearPass = () => {
    isInputFinished.value = false;
    password.value = "";
  };
  
  const checkInput = () => {
    const usr = username.value;
    const passwd = password.value;
  
    if (usr !== 'admin' && passwd !== '1') {
      isInputFinished.value = true;
    } else {
      isInputFinished.value = false;
    }
  };
  const isFormValid = computed(() => {
  if (!showOTPInput.value) {
    return !!username.value  && !!password.value;
  } else {
    return !!username.value && !!password.value && !!otp.value;
  }
});

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