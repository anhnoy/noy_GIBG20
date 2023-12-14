<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app style="background-color: #e3e8ed">
        
        <div class="pb-5">
            <p class="Page_name">매장 정보 관리</p>
            <p class="Page_name_title">매장관리 > 매장 정보 관리</p>
        </div>
        <div class="pb-5">
    

            <v-window v-model="tab">
                <v-window-item value="1">
                    <div class="pb-5">
                        <Category_Registration />
                    </div>

                    <div class="pb-5">
                        <Category_list />
                    </div>
                </v-window-item>    
                
            </v-window>
        </div>
    </v-app>
</template>
<script setup lang="js">
import { ref } from "vue";
import Category_Registration from "@/components/Contents/Board/FAQ/FAQ_data.vue";


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