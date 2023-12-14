<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-card class="mx-auto" max-width="90%">
        <v-card-actions>
            <span class="Head"> 조회조건 </span>


        </v-card-actions>

        <v-expand-transition>
            <div>
                <v-divider></v-divider>
                <v-container fluid>
                    <v-row>
                        <v-row class="search-row mt-1">
                            <v-col cols="1" class="lol">
                                <span>* 업체명1</span>
                            </v-col>
                            <v-col cols="2">
                                <v-select clearable label="Select" :items="items" variant="outlined"></v-select>
                            </v-col>


                        </v-row>
                    </v-row>
                    <br>
                    <v-row>
                        <v-row class="search-row mt-1">
                            <v-col cols="1" class="lol">
                                <span>* 업체명</span>
                            </v-col>
                            <v-col cols="10">
                                <form>
                                    <input  type="text" v-model="textInput" name="firstname" />
                                </form>
                                <v-text-field label="" variant="outlined"></v-text-field>
                            </v-col>


                        </v-row>
                    </v-row>
                    <br>
                    <v-row>
                        <v-row class="search-row mt-1">
                            <v-col cols="1" class="lol">
                                <span>* 업체명</span>
                            </v-col>
                            <v-col cols="10  ">                               
                                <v-text-field label="" variant="outlined"></v-text-field>
                            </v-col>

                        </v-row>
                    </v-row>

                    <v-col cols="12" class="d-flex justify-center">
                        <v-btn color="blue" :ripple="false" class="mx-2">
                            조회
                        </v-btn>
                        <v-btn color="blue" :ripple="false" class="mx-2">
                            조회
                        </v-btn>
                    </v-col>

                    <v-container>
                        <v-row justify="center">

                        </v-row>
                    </v-container>
                </v-container>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script setup lang="js">
import { ref } from 'vue';


const items = ref([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
]);



</script>