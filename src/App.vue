<template>
  <div class="app">
    <RouterView v-slot="props">
      <KeepAlive include="home">
        <component :is="props.Component"></component>
      </KeepAlive>
    </RouterView>
    <!-- <tab-bar></tab-bar> -->
    <!-- <tab-bar v-show="!route.meta.hideTabar"></tab-bar> -->

    <looading></looading>
  </div>
</template>
<script setup>
import TabBar from '@/components/tab-bar/tab-bar.vue'
import { useRoute } from 'vue-router';
import Looading from './components/loading/Looading.vue';
const route = useRoute()

</script>

<style scoped>

</style>