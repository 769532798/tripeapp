<template>
    <div class="tab-bar">

        <!-- <template v-for="(item, index) in tabbar">
            <div class="tab-bar-item" :class="{ active: currentIndex === index }" @click="itemclick(index, item)">
                <img v-if="currentIndex !== index" :src="getAssetUrl(item.image)" alt="">
                <img v-else :src="getAssetUrl(item.imageActive)" alt="">
                <span>{{ item.text }}</span>
            </div>
        </template> -->
        <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
            <template v-for="(item, index) in tabbar">
                <van-tabbar-item :to="item.path">
                    <span>{{ item.text }}</span>
                    <template #icon>
                        <img v-if="currentIndex !== index" :src="getAssetUrl(item.image)" alt="">
                        <img v-else :src="getAssetUrl(item.imageActive)" alt="">
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>

    </div>
</template>

<script setup>
import tabbar from '@/assets/data/tabbar'
import { getAssetUrl } from '@/utils/getasset_img'
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const currentIndex = ref(0)
const route = useRoute()
watch(route, (newRoute) => {
    const index = tabbar.findIndex(item => item.path === newRoute.path)
    if (index === -1) return //findIndex没找到得话会返回-1
    currentIndex.value = index
})
</script>.

<style lang="less" scoped>
.tab-bar {

    // --van-tabbar-item-icon-size: 30px;
    // :deep(.van-tabbar-item__icon) {
    //     font-size: 50px;
    // }

    img {
        height: 32px;
    }
}
</style>