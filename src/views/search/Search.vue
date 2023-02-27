<template>
    <div class="search">
        <h2>入住日期：{{ $route.query.startday }}</h2>
        <h2>离开日期：{{ $route.query.endday }}</h2>
        <h2>当前城市:{{ $route.query.currentcity }}</h2>
    </div>
    <button @click="back">返回</button>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
console.log(route.query.currentcity);

const router = useRouter()
function back() {
    router.back()
}
</script>

<style lang="less" scoped>

</style>