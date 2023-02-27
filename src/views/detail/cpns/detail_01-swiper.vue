<template>
    <div class="swiper">
        <van-swipe class="myswipe" :autoplay="3000" indicator-color="white">
            <template v-for="(item, index) in swiperdata">
                <van-swipe-item class="item">
                    <img :src="item.url" alt="">
                </van-swipe-item>
            </template>
            <template #indicator="{ active, total }">
                <div class="indicator">
                    <template v-for="(value, key, index) in picGroup" :key="index">
                        <div class="item" :class="{ active: swiperdata[active]?.enumPictureCategory == key }">
                            <span class="text"> {{ gerName(value[0].title) }}</span>
                            <span class="count" v-if="swiperdata[active]?.enumPictureCategory == key">
                                {{ getCurrentIndex(swiperdata[active]) }}/{{ value.length }}
                            </span>
                        </div>
                    </template>
                </div>
            </template>
        </van-swipe>
    </div>
</template>

<script setup>

const props = defineProps({
    swiperdata: {
        type: Array,
        default: () => []
    }
})

//将图片根据enumPictureCategory 来进行分组    
const picGroup = {}
for (const item of props.swiperdata) {
    let group = picGroup[item.enumPictureCategory]
    if (!group) {
        group = []
        picGroup[item.enumPictureCategory] = group
    }
    group.push(item)
}
// console.log(picGroup);

//把卧室等分组的多余的符号去除
const nameReg = /【(.*?)】/i
const gerName = (name) => {
    const results = nameReg.exec(name)
    return results[1].replace(/[0-9]+/g, "")
}

//获取当前分组滚动图片位置
const getCurrentIndex = (item) => {
    let value = picGroup[item.enumPictureCategory]
    return value.findIndex(data => data === item) + 1
}

</script>

<style lang="less" scoped>
.swiper {
    .myswipe {
        .item {
            img {
                width: 100%;
            }
        }

        .indicator {
            display: flex;
            border-radius: 10px;
            position: absolute;
            color: #ffffff;
            right: 5px;
            bottom: 5px;
            padding: 2px 5px;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.5);

            .item {
                margin: 0 3px;
            }

            .active {

                background-color: var(--primary-color);
                border-radius: 3px;

            }
        }
    }
}

// .custom-indicator {
//     position: absolute;
//     color: #ffffff;
//     right: 5px;
//     bottom: 5px;
//     padding: 2px 5px;
//     font-size: 12px;
//     background: rgba(0, 0, 0, 0.1);
// }
</style>