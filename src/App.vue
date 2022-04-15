<script setup>
// This starter template is using Vue 3 <script setup> SFCs

import { onBeforeMount } from 'vue';

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
onBeforeMount(() => {
  // Do something before mounting : get token
  console.log("this is do something");
});
</script>

<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
