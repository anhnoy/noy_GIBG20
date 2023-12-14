
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app style="background-color: #e3e8ed">
        <div style="margin-left: 40px; margin-top: 10px;">
            <p class="Page_name">정비명세서 인증 관리</p>
            <p class="Page_name_title">콘텐츠 관리 > 이벤트 관리 > 정비명세서 인증 관리</p>
        </div>
<br>
        <div class="pb-5">

            <v-window v-model="tab">
                <v-window-item value="1">
                    <div class="pb-5">
                        <Search_conditions />
                        
                    </div>
                    <div class="pb-5">
                        <Total_MP />
                    </div>                                               
                </v-window-item> 
                 
            </v-window>
        </div>
    </v-app>
</template>
<script setup lang="js">
import { ref } from "vue";

import Total_MP from "@/components/Contents/Evants/Information_modification_proposal/Modify/Basic_PM.vue";



const tab = ref(null);

</script>
<style scoped>
@import '/src/assets/css/style.css';

.Page_name_title1 {
    font-size: 12px;
    font-weight: 500;
    color: #8899a8;
    margin-left: 5%;
}
</style>