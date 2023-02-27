<template>
    <div class="home" ref="homeref">
        <home-nav-bar></home-nav-bar>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>

        <home-search></home-search>

        <!-- 分类 -->
        <category-bar></category-bar>


        <!-- 房源 -->
        <home-list></home-list>
        <!-- <button @click="loadmore">加载更多</button> -->

        <!-- 顶部搜索栏 -->
        <fixed-search v-if="isShow"></fixed-search>

    </div>
</template>

<script>
export default { name: 'home' }
</script>
<script setup>
import HomeNavBar from './cpns/HomeNavBar.vue';
import HomeSearch from './cpns/home-search-box.vue';
import CategoryBar from './cpns/CategoryBar.vue';
import FixedSearch from '@/components/fixsearch/FixedSearch.vue';
import usehomestore from '@/store/modules/home';
import HomeList from './cpns/HomeList.vue'
import useScroll from '@/hooks/usescroll'
import { onActivated, ref, watch } from 'vue';
import { computed } from '@vue/reactivity';
const homestore = usehomestore()
//发送网络请求
homestore.fetchCateGory()
homestore.fetchHomeList()


// function loadmore() {
//     console.log(1);
//     homestore.fetchHomeList()
// }

// 监听滚动自动加载
// useScroll(() => { //方法一
//     homestore.fetchHomeList()
// })

//方法二
//由于这个页面监听的window所以跳到其他页面滚动到底部时也会发送网络请求，所以将这个页面改成100vh在页面内滚动
// 还有一种办法就是在usescroll里设定onActivity和onDeactivity 分别设定监听和移除监听
let homeref = ref()
const { isReachbottom, scrolltop } = useScroll(homeref)
watch(isReachbottom, (newValue) => {
    if (newValue) {
        homestore.fetchHomeList().then(() => {
            isReachbottom.value = false
        })
    }
})
onActivated(() => {
    homeref.value.scrollTo({
        top: scrolltop.value
    })
})
//当滚动到某个高度得时候显示
// const isShow = ref(false)  方法一
// watch((scrolltop), (newValue) => {
//     isShow.value = newValue > 100
// })

// 方法二
const isShow = computed(() => {
    return scrolltop.value >= 500
})



</script>

<style lang="less" scoped>
.home {
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box;
    padding-bottom: 50px;

    .banner {
        img {
            width: 100%;
        }
    }


}
</style>