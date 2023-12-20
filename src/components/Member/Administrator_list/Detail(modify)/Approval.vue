<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card class="mx-auto" max-width="90%">
    <v-card-actions>
      <span class="Head"> 승인여부 </span>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-down' : 'mdi-chevron-up'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="!show">
        <v-divider></v-divider>

        <v-container fluid>
          <v-row>
            <v-col cols="2">
              <span class="Title">구분</span>
            </v-col>
            <v-col>
              <input
              v-model="admin.activation"
                type="radio"
                id="approval"
                name="approval"
                value="Y"
                class="hidden-radio"
                :checked="admin.activation === 'Y'"
              />
              <label for="approval" class="radio-label">승인</label>

              <input
              v-model="admin.activation"
                type="radio"
                id="Not_approved"
                name="Not_approved"
                value="N"
                class="hidden-radio"
                :checked="admin.activation === 'N'"
              />
              <label for="Not_approved" class="radio-label">미승인</label>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-expand-transition>
  </v-card>
</template>
         <script >
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

export default {
  data() {
    return {
      show: false,
      route: useRoute(),
      router: useRouter(),
      admin: {
        activation: "",
      },
    };
  },
  methods: {
    async fetch_single_admin() {
      try {
        const response = await axios.get(`http://192.168.100.81:5000/api/admin/detail/${this.route.params.id}`);
        console.log(response.data);
        this.admin.activation = response.data.activation;
      } catch (err) {
        console.error(err);
      }
    },
    async edit_admin() {
      try {
        const response = await axios.patch(`http://192.168.100.81:5000/api/admin/update`, {
          admid: this.route.params.id,
          activation: this.admin.activation,
        });
        setTimeout(async() => {
          await this.router.push('/administrator');
        console.log(response);
        }, 100);
      } catch (error) {
        console.error('Error updating member:', error);
      }
    },
  },
  mounted() {
    this.fetch_single_admin();
  },
};
</script>
        <style scoped>
</style>