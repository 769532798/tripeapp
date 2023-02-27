<template>
    <div class="lanlord">
        <DetailSection head="房东介绍" foot="查看房东主页">
            <div class="landinfo">
                <!-- 横幅部分 -->
                <div class="topimg">
                    <img :src="landdata.topScroll" alt="">
                </div>

                <!-- 酒店名字和简介 -->
                <div class="loago">
                    <div class="hotellogo">
                        <img :src="landdata.hotelLogo" alt="">
                    </div>
                    <div class="nameinfon">
                        <div class="name">
                            {{ landdata.hotelName }}
                        </div>
                        <div class="hotertage">
                            <template v-for="(item, index) in landdata.hotelTags">
                                <span class="tagname" :style="{ color: item.tagText.color }">
                                    {{ item.tagText.text }}
                                    <span v-if="index !== landdata.hotelTags.length - 1" class="divider">
                                        &nbsp;|&nbsp;
                                    </span>
                                </span>
                            </template>
                        </div>
                    </div>
                    <div class="link">
                        <button class="linland">联系房东</button>
                    </div>
                </div>
                <!-- 好评率等 -->
                <div class="rateinfo">
                    <template v-for="(item, index) in landdata.hotelSummary">
                        <div class="rate">
                            <div class="gooderate">{{ item.title }}</div>
                            <div class="talkrate">{{ item.introduction }}</div>
                            <div class="confirmrate">{{ item.tip }}</div>
                        </div>
                    </template>
                </div>
            </div>

        </DetailSection>
    </div>
</template>

<script setup>
import DetailSection from '@/components/detail/DetailSection.vue';

defineProps({
    landdata: {
        type: Object,
        default: () => ({})
    }
})
</script>


<style lang="less" scoped>
.lanlord {

    .landinfo {

        .topimg {
            img {
                width: 100%;
            }
        }

        .loago {
            margin-top: 10px;
            display: flex;

            .hotellogo {
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 0.8;
                margin-right: 5px;

                img {
                    width: 50px;
                    height: 50px;
                }
            }

            .nameinfon {
                flex: 3;
                display: flex;
                flex-direction: column;
                justify-content: center;


                .hotertage {
                    font-size: 12px;
                    margin-top: 4px;

                    .tagname {
                        padding-right: 3px;
                    }
                }
            }

            .link {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;

                .linland {
                    background-color: var(--primary-color);
                    width: 72px;
                    height: 24px;
                    border: none;
                    border-radius: 5px;
                    color: #ffffff;
                }
            }
        }
    }

    .rateinfo {
        margin-top: 50px;
        display: flex;
        justify-content: space-around;

        .rate {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            .gooderate {
                color: #999999;
                font-size: 12px;

            }

            .talkrate {
                font-size: 18px;
                padding: 5px 0;
                font-weight: 700;
            }

            .confirmrate {
                font-size: 12px;
            }
        }
    }
}
</style>