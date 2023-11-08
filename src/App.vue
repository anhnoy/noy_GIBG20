<template>
  <v-app>
    <Navbar v-if="showNavbar" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },

  data: () => ({
    showNavbar: true,
  }),
  watch: {
    $route(to) {
      // Check the route and decide whether to show the Navbar or not
      if (to.name === "login") {
        this.showNavbar = false;
      } else {
        this.showNavbar = true;
      }
    },
  },
};
</script>
