<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app style="background-color: #e3e8ed">
        <div style="margin-left: 40px; margin-top: 10px;">
            <p class="Page_name">자주 묻는 질문</p>
            <p class="Page_name_title">콘텐츠 관리 > 게시판 관리 > 자주 묻는 질문</p>
        </div>
<br>
        <div class="pb-5">
            <v-tabs v-model="tab" color="#346DDB" class="Page_name_title1">
                <v-tab value="1">자주 묻는 질문 목록</v-tab>
                <v-tab value="2">분류 관리</v-tab>    
            </v-tabs>

            <v-window v-model="tab">
                <v-window-item value="1">
                    <div class="pb-5">
                        <S_Conditions />
                    </div>

                    <div class="pb-5">
                        <Total_views />
                    </div>
                </v-window-item>   
                
                <v-window-item value="2">
                      <Registion /> 
                      <br>       
                        <Tab2 /> 
                                                   
                </v-window-item> 
                 
            </v-window>
        </div>
    </v-app>
</template>
<script setup lang="js">
import { ref } from "vue";
import S_Conditions from "@/components/Contents/Board/FAQ/S_Conditions.vue";
import Total_views from "@/components/Contents/Board/FAQ/Total_views.vue";
import Registion from "@/components/Contents/Board/FAQ/Registration.vue";
import Tab2 from "@/components/Contents/Board/FAQ/Category_list.vue";

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