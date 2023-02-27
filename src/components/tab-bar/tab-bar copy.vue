<template>
    <div class="tab-bar">
        <!-- <RouterLink to="/home">首页</RouterLink>
        <RouterLink to="/favor">收藏</RouterLink>
        <RouterLink to="/order">订单</RouterLink>
        <RouterLink to="/message">消息</RouterLink> -->
        <template v-for="(item, index) in tabbar">
            <div class="tab-bar-item" :class="{ active: currentIndex === index }" @click="itemclick(index, item)">
                <img v-if="currentIndex !== index" :src="getAssetUrl(item.image)" alt="">
                <img v-else :src="getAssetUrl(item.imageActive)" alt="">
                <span>{{ item.text }}</span>
            </div>
        </template>


    </div>
</template>

<script setup>
import tabbar from '@/assets/data/tabbar'
import { getAssetUrl } from '@/utils/getasset_img'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const currentIndex = ref(0)
const router = useRouter()
function itemclick(index, item) {
    //因为上面用ref变为动态所以setup里必须用value
    currentIndex.value = index
    router.push(item.path)
}
</script>.

<style lang="less" scoped>
.tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    border-top: 1px solid #f3f3f3;

    .tab-bar-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &.active {
            color: var(--primary-color);
        }

        span {
            font-size: 12px;
            margin-top: 2px;
        }

        img {
            width: 36px;
        }
    }
}
</style>