<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-card class="mx-auto" max-width="90%">
        <v-card-actions>
            <span class="Head"> 조회조건 </span>
        </v-card-actions>
        <v-expand-transition>
        <div >
          <v-divider></v-divider>
          <v-container fluid>
            <v-row>
              <v-row class="mt-2">
                <v-col cols="1 T-search" >
                  <span>* 분류</span>
                </v-col>

                <v-card-text class="search-field-container">
                  <v-text-field   density="compact" variant="solo"
                    label=""  single-line hide-details ref="searchField"
                   >               
                </v-text-field>   
                         
                </v-card-text>
                <v-col cols="auto">
                                <v-btn style="margin-top: 8px;" color="blue" :ripple="false">
                                  등록
                                </v-btn>
                            </v-col>
              </v-row>
            </v-row>
            <v-container>
              <v-row justify="center">             
              </v-row>
            </v-container>
          </v-container>
        </div>
      </v-expand-transition>
    </v-card>
</template>