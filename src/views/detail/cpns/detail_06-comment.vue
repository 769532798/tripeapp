<template>
    <div class="comment">
        <DetailSection head="热门评论" :foot="`查看全部 ${commentdata.totalCountStr} 条评论`">
            <div class="commentMoule">
                <div class="top">
                    <div class="score">
                        <div class="text">{{ commentdata.overall }}</div>
                        <div class="line"></div>
                    </div>
                    <div class="rate">
                        <div class="scoreTitle">{{ commentdata.scoreTitle }}</div>
                        <div class="totalCount">{{ commentdata.totalCount }}条评论</div>
                        <van-rate :model-value="commentdata.overall" :size="12" color="#ffd21e" allow-half readonly
                            void-color="#eee" />
                    </div>
                    <div class="rightevaluation">
                        <template v-for="(item, index) in commentdata.subScores" :key="index">
                            <div class="rateitem">{{ item }}</div>
                        </template>
                    </div>
                </div>
                <div class="middle">
                    <template v-for="(item, index) in commentdata.commentTagVo">
                        <div class="serviceComment" :style="{ color: item.color, background: item.backgroundColor }">{{
                                item.text
                        }}</div>
                    </template>
                </div>

                <div class="bottom">
                    <div class="photo">
                        <img :src="commentdata.comment.userAvatars" alt="">
                        <div class="user">
                            <div class="usearname">{{ commentdata.comment.userName }}</div>
                            <div class="commentDate">{{ commentdata.comment.checkInDate }}</div>
                        </div>

                    </div>
                    <div class="userComment">{{ commentdata.comment.commentDetail }}</div>
                </div>
            </div>
        </DetailSection>
    </div>
</template>

<script setup>
import DetailSection from '@/components/detail/DetailSection.vue';
import { clamp } from '@antfu/utils';
defineProps({
    commentdata: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
.comment {
    .commentMoule {
        .top {
            display: flex;

            .score {
                flex: 1;
                display: flex;
                margin-left: -3px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: 50px;
                position: relative;

                .line {
                    // position: absolute;
                    margin-top: -10px;
                    height: 6px;
                    width: 57px;
                    text-align: center;
                    background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
                    border-radius: 5px;
                }
            }

            .rate {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 20px;
                font-size: 12px;
                // align-items: center;
                flex: 1;

                .totalCount {
                    color: #666666;
                }
            }

            .rightevaluation {
                flex: 2;
                justify-content: flex-end;
                font-size: 12px;
                display: flex;
                flex-wrap: wrap;

                .rateitem {
                    margin-left: 4px;
                    color: #666666;
                }
            }
        }

        .middle {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;


            .serviceComment {
                font-size: 12px;
                margin-top: 5px;
                padding: 3px 3px;
                border-radius: 5px;
            }
        }

        .bottom {
            margin-top: 20px;
            background-color: #f7f9fb;
            padding: 10px 5px;

            .photo {
                display: flex;
                height: 32px;

                img {
                    height: 100%;
                }

                .user {
                    margin-left: 5px;

                    .commentDate {
                        font-size: 12px;
                        color: #999999;
                    }
                }
            }

            .userComment {
                margin-top: 20px;
                font-size: 12px;
            }
        }

    }



}
</style>