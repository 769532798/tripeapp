<template>
    <div class="category">
        <template v-for="(item, index) in category" :key="index">
            <div class="CategoryItem">
                <img :src="item.pictureUrl" alt="">
                <div class="text">{{ item.title }}</div>
            </div>
        </template>
    </div>
</template>

<script setup>
import usehomestore from '@/store/modules/home';
import { storeToRefs } from 'pinia';
const homestore = usehomestore()
const { category } = storeToRefs(homestore)

</script>

<style lang="less" scoped>
.category {
    padding: 20px;
    display: flex;
    flex-shrink: 0;
    overflow-x: auto;

    //隐藏滚动条
    &::-webkit-scrollbar {
        display: none;
    }

    .CategoryItem {

        width: 60px;
        height: 52px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 23px;

        img {
            width: 32px;
            height: 32px;
        }

        .text {
            display: inline-block;
            width: 48px;
            font-size: 12px;
            text-align: center;
        }
    }

}
</style>