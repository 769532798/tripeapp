<template>

    <div class="city">
        <div class="top">
            <van-search @cancel="cancelClick" v-model="searchValue" shape="round" show-action placeholder="城市/区域/位置" />

            <van-tabs v-model:active="tabActive" color="#ff9854" line-height="5px">
                <template v-for="(value, key, index) in allCities">
                    <van-tab :title='value.title' :name="key"></van-tab> <!-- name绑定的值会传给上方的active -->
                </template>

            </van-tabs>

        </div>
        <div class="content">
            <!-- <city-group :groupdata="currentCity"></city-group> -->
            <!-- 城市 -->
            <template v-for="(value, key, index) in allCities">
                <city-group v-show="tabActive === key" :groupdata="value" />
            </template>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
// import { getCityAll } from '@/services/modules/city';
import useCityStore from '@/store/modules/city'
import { computed } from '@vue/reactivity';
import cityGroup from './cpns/city-group.vue';


const router = useRouter()
//绑定搜索框
const searchValue = ref('')
//绑定地区tab
const tabActive = ref()
//搜索框取消按钮的点击
function cancelClick() {
    router.back()
}
// //发送网络请求获取所有城市 在services里的modules/city里封装好了
// const allCity = ref()
// getCityAll().then(res => {
//     allCity.value = res.data
// })

//在store里发送网络请求然后取过来用
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
// 这里不用解构加storetoRefs的话会有bug
const { allCities } = storeToRefs(cityStore)

//点击国内外获取不同的cities数据
const currentCity = computed(() => allCities.value[tabActive.value])
</script>

<style lang="less" scoped>
.city {
    --van-tabs-line-height: 30px;

    //固定top栏方法1 （但是滚动条会贯穿到固定的top栏上）
    // .top {
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    // }
    // .content {
    //     margin-top: 84px;
    // }

    .top {
        z-index: 9;
    }

    //固定top栏方法2
    .content {
        height: calc(100vh - 84px); //这里的空格都不能少 不然不生效
        overflow: auto;

    }
}
</style>