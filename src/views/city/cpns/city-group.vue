<template>
    <!-- 获取国内外城市方法1 -->
    <div class="citygroup">
        <van-index-bar :sticky="false" :index-list="indexlist">
            <van-index-anchor index="热门" />
            <div class="country">
                <div class="hotcities">
                    <template v-for="(item, index) in groupdata?.hotCities" :key="index">
                        <div class="hotcitiesitem" @click="cityClick(item)">{{ item.cityName }}</div>
                    </template>
                </div>
            </div>

            <template v-for="(item, index) in groupdata?.cities" :key="index">
                <!-- vantui -->
                <van-index-anchor :index="item.group" />
                <template v-for="(element, indey) in item.cities" :key="indey">
                    <van-cell :title="element.cityName" @click="cityClick(element)" />
                </template>
            </template>
        </van-index-bar>
    </div>
</template>

<script setup>
import router from '@/router';
import useCityStore from '@/store/modules/city';
import { computed } from '@vue/reactivity';

//定义props
const props = defineProps({
    groupdata: {
        type: Object,
        default: () => { }
    }
})

//设置右边导航（ABC...）
const indexlist = computed(() => {
    const list = props.groupdata.cities.map(item => item.group)
    list.unshift("#")
    return list
})
const citystore = useCityStore()
function cityClick(city) {
    citystore.currentCity = city
    router.back()
}
</script>

<style lang="less" scoped>
.citygroup {
    .country {

        .hotcities {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding: 10px;

            .hotcitiesitem {
                height: 24px;
                border-radius: 14px;
                width: 70px;
                text-align: center;
                line-height: 24px;
                margin: 5px 6px;
                background-color: #fff4ec;
                border-radius: 14px;
            }
        }
    }

}
</style>