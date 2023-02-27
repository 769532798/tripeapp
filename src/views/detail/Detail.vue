<template>
    <div class="alldetail top-bar" ref="detailref">
        <tab-control class="tabs" :titles="names" v-if="tabshow" @tabItemClick="tabClick" ref="tabref">
        </tab-control>
        <div class="detail">
            <van-nav-bar title="房源详情" left-text="返回" left-arrow @click-left="onClickLeft" />
        </div>
        <div v-if="infos.mainPart" v-memo="[infos]">
            <!-- 轮播图 -->
            <detail-swiper :swiperdata="infos.mainPart.topModule.housePicture.housePics" />
            <!-- 位置评价标题等 -->
            <detail-infos name="描述" :ref="getsectionRef" :swiperinfos="infos.mainPart.topModule"></detail-infos>
            <!-- 设备 -->
            <detail-facility name="设备" :ref="getsectionRef"
                :facilityinfos="infos.mainPart.dynamicModule.facilityModule.houseFacility">
            </detail-facility>
            <!-- 房东介绍 -->
            <detail-landlord name="房东" :ref="getsectionRef" :landdata="infos.mainPart.dynamicModule.landlordModule">
            </detail-landlord>
            <!-- 评论 -->
            <detail-comment name="评论" :ref="getsectionRef" :commentdata="infos.mainPart.dynamicModule.commentModule">
            </detail-comment>
            <!-- 规则 -->
            <detail-rules name="须知" :ref="getsectionRef" :rulesdata="infos.mainPart.dynamicModule.rulesModule">
            </detail-rules>
            <!-- 地图 -->
            <detail-map name="周边" :ref="getsectionRef" :loacte="infos.mainPart.dynamicModule.positionModule">
            </detail-map>
            <!-- 价格说明 -->
            <detail-priceinfo :priceinfo="infos.mainPart.introductionModule"></detail-priceinfo>
        </div>
        <div class="footer">
            <img src="@/assets/img/detail/icon_ensure.png" alt="">
            <div class="text">弘源旅途, 永无止境!</div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from '@/services/modules/detailinfos'
import DetailSwiper from './cpns/detail_01-swiper.vue'
import DetailInfos from './cpns/detail_02-infos.vue'
import DetailFacility from './cpns/detail_03-facility.vue';
import DetailMap from './cpns/detail_04-map.vue';
import DetailLandlord from './cpns/detail_05-landlord.vue';
import DetailComment from './cpns/detail_06-comment.vue';
import DetailRules from './cpns/detail_07-rules.vue';
import DetailPriceinfo from './cpns/detail_08-priceinfo.vue';
import TabControl from '@/components/tabcontrol/tab-control.vue'
// import DetailSection from '@/components/detail/DetailSection.vue';
import { ref, watch } from 'vue';
import useScroll from '@/hooks/usescroll';
import { computed } from '@vue/reactivity';

const router = useRouter()
const route = useRoute()
const houseId = route.params.id
// 点击导航栏返回按钮
function onClickLeft() {
    router.back()
}
// 获取网络请求数据
const infos = ref({})
getDetailInfos(houseId).then(res => {
    infos.value = res.data
})

// 滚动距离
const detailref = ref()    //在一个视口里面滚动的所以要监听这个视口的滚动
const { scrolltop } = useScroll(detailref)
const tabshow = computed(() => {
    return scrolltop.value > 300
})


// 选择tab栏切换到对应位置
const tips = ref({})
const names = computed(() => {  //names:[tips.key,tips.key...]
    return Object.keys(tips.value)
})
const getsectionRef = (value) => {
    // console.log(value.$el);
    if (!value) return    //卸载时也会执行这个函数，卸载时value为null 所以会报错无法返回
    const name = value.$el.getAttribute("name")   //把上面组件定义的name属性的值都传给name(这个getsectionRef里面会遍历，一个一个传)
    tips.value[name] = value.$el   //tips{name(设备...):value.$el(组件实例)}
}
let isclick = false   //当点击时不需要判断屏幕滚动选择tab栏
let currentDistance = ref(-1)
function tabClick(index) {
    const key = Object.keys(tips.value)[index]  //arr[num] 输出对应的tips对象里面的key
    const el = tips.value[key]     //tips.value['设备'] 对应的就是设备组件实例
    let distance = el.offsetTop
    if (index !== 0) {
        distance = distance - 44
    }
    isclick = true
    currentDistance.value = distance

    detailref.value.scrollTo(
        {
            top: distance,
            behavior: 'smooth',
        }
    )
}

// 根据屏幕滑动自动切换tab
const tabref = ref()
watch(scrolltop, (newValue) => {
    if (newValue === currentDistance.value) {
        isclick = false
    }
    if (isclick) return

    // 1.获取所有的区域的offsetTops
    const els = Object.values(tips.value)
    const values = els.map(el => el.offsetTop)

    // 2.根据newValue去匹配想要索引
    let index = values.length - 1
    for (let i = 0; i < values.length; i++) {
        if (values[i] > newValue + 44) {
            index = i - 1
            break
        }
    }
    // console.log(index)
    tabref.value?.setCurrentIndex(index)
})
// watch(scrolltop, (newValue) => {
//     if (newValue === currentDistance) {
//         isclick = false
//     }
//     if (isclick) {
//         return
//     }

//     // 获取所有区域的offset
//     let els = Object.values(tips.value)
//     let values = els.map(item => item.offsetTop)

//     // 根据newValue去匹配想要的索引
//     let index = values.length - 1
//     for (let i = 0; i < values.length; i++) {
//         if (values[i] > newValue + 44) {
//             index = i - 1
//             break
//         }
//     }
//     tabref.value?.setCurrentIndex(index)
//     // console.log(tabref.value);
// })


</script>

<style lang="less" scoped>
.footer {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        height: 17px;
    }

    .text {
        margin-top: 15px;
        color: #7688a7;
        font-size: 12px;
    }


}

.tabs {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
}
</style>