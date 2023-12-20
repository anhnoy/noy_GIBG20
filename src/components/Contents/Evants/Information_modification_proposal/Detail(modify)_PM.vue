<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app style="background-color: #e3e8ed">
        <div >
            <p class="Page_name">정보 수정 제안 상세</p>
            <p class="Page_name_title">콘텐츠 관리 > 이벤트 관리 > 정보 수정 제안 상세</p>
        </div>
<br>
        <div class="pb-5">

            <v-window v-model="tab">
                <v-window-item value="1">
                    <div class="pb-5">
                        <Basic_PM />
                        
                    </div>
                    <div class="pb-5">
                        <Proposal_closed />
                        <Edit_PM />
                        <Register_PM />
                        <Record />
                       
                    </div>     
                         
                     
                  
                   <div class="pb-5">
                       
                       <Proposal_location />
                       <Proposal_pricing/>
                       <Proposal_Opening/>
                       <Proposal_Contact/>
                       <Proposal_Faciiity/>
                   </div>     
                   <div class="pb-5">
                       
                       

                   </div>                                 
                </v-window-item> 
                 
            </v-window>
        </div>
    </v-app>
</template>
<script setup lang="js">
import { ref } from "vue";

import Basic_PM from "@/components/Contents/Evants/Information_modification_proposal/Modify/Basic_PM.vue";
import Proposal_closed from "@/components/Contents/Evants/Information_modification_proposal/Modify/Proposal_data/Proposal_closed.vue";
// import Edit_PM from "@/components/Contents/Evants/Information_modification_proposal/Modify/Edit_PM.vue";
// import Register_PM from "@/components/Contents/Evants/Information_modification_proposal/Modify/Register_PM.vue";
// import Record from "@/components/Contents/Evants/Bill/Detaill/Record.vue";


// import Proposal_location from "@/components/Contents/Evants/Information_modification_proposal/Modify/Proposal_data/Proposal_location.vue";
// import Proposal_pricing from "@/components/Contents/Evants/Information_modification_proposal/Modify/Proposal_data/Proposal_pricing.vue";
// import Proposal_Opening from "@/components/Contents/Evants/Information_modification_proposal/Modify/Proposal_data/Proposal_Opening.vue";
// import Proposal_Contact from "@/components/Contents/Evants/Information_modification_proposal/Modify/Proposal_data/Proposal_Contact.vue";
// import Proposal_Faciiity from "@/components/Contents/Evants/Information_modification_proposal/Modify/Proposal_data/Proposal_Faciiity.vue";



const tab = ref(null);

</script>
<style scoped>
@import '/src/assets/css/style_noy.css';

.Page_name_title1 {
    font-size: 12px;
    font-weight: 500;
    color: #8899a8;
    margin-left: 5%;
}
</style>