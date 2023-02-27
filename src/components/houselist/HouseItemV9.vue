<template>
    <div class="houseitem">
        <div class="list">
            <div class="image">
                <img :src="itemdata.image.url" alt="">
            </div>
            <div class="inner">
                <div class="summary">{{ itemdata.summaryText }}</div>
                <div class="info">{{ itemdata.houseName }}</div>
                <div class="rate">
                    <van-rate :model-value="Number(itemdata.commentScore)" readonly allow-half color="#fff"
                        size="15px" />
                    <div class="price">￥{{ itemdata.finalPrice }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    itemdata: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
.houseitem {
    width: 50%;
    margin-bottom: 10px;

    .list {
        position: relative;
        padding: 0 5px;

        img {
            width: 100%;
            border-radius: 10px;
        }


        .inner {
            position: absolute;
            bottom: 0;
            color: #ffffff;
            font-size: 12px;
            padding: 0 8px;

            .info {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;

            }

            .rate {
                display: flex;

                .price {
                    line-height: 20px;
                    margin-left: 5px;
                    font-size: 14px;
                }
            }

        }
    }

}
</style>