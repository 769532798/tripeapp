<template>
    <div class="houseitem">
        <div class="list">
            <div class="image">
                <img :src="itemdata.image.url" alt="">
            </div>
            <div class="inner">
                <div class="location">{{ itemdata.location }}</div>
                <div class="info">{{ itemdata.houseName }}</div>
                <div class="summary">{{ itemdata.summaryText }}</div>
                <div class="price">
                    <div class="finalprice">￥{{ itemdata.finalPrice }}</div>
                    <div class="productprice">￥{{ itemdata.productPrice }}</div>
                    <div class="discount">{{ itemdata?.priceTipBadge?.text }}</div>
                    <!-- 如果后面有的数据没有priceTipBadge则会报错不能继续加载所以加问好
                        或者用v-if=“itemdata.priceTipBadge” 即可
                    -->
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
        padding: 0 5px;

        img {
            width: 100%;
            border-radius: 10px;
        }


        .inner {
            color: #333333;
            font-size: 14px;
            padding: 0 8px;

            .location {
                font-size: 12px;
                color: #666666;
                margin-top: 10px;

            }

            .summary {
                font-size: 12px;
                color: #666666;
                margin: 5px 0;
            }

            .info {
                margin: 5px 0;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;

            }

            .price {
                display: flex;
                height: 14px;
                margin: 5px 0;

                .finalprice {
                    color: #ff9645;
                    width: 30px;
                }

                .productprice {
                    color: #666666;
                    text-decoration: line-through;
                    font-size: 12px;
                    margin: 0px 8px;
                }

                .discount {
                    background-image: linear-gradient(270deg, #f66, #ff9f9f);
                    border-radius: 5px;
                    font-size: 12px;
                    line-height: 14px;

                }
            }

        }
    }

}
</style>