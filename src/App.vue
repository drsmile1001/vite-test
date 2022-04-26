<template>
  <v-app>
    <v-main>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      //
    };
  },
});
</script>
