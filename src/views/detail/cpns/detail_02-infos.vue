<template>
    <div class="infos">
        <div class="housename">
            {{ swiperinfos?.houseName }}
        </div>
        <div class="title">
            <template v-for="item in swiperinfos.houseTags">
                <span class="tag" v-if="item.tagText"
                    :style="{ color: item.tagText.color, background: item.tagText.background.color }">
                    {{ item.tagText.text }}
                </span>
            </template>
        </div>
        <div class="commentall">
            <div class="left">
                <span class="rate">{{ swiperinfos.commentBrief.overall }}</span>
                <span class="scoreTitle">{{ swiperinfos.commentBrief.scoreTitle }} </span>
                <span class="brief">{{ swiperinfos.commentBrief.commentBrief }} </span>
            </div>
            <div class="right">
                <span class="comment">{{ swiperinfos.commentBrief.totalCount }}条评论
                    <van-icon name="arrow" />
                </span>
            </div>
        </div>
        <div class="location">
            <div class="left">
                <span class="address">{{ swiperinfos.nearByPosition.address }}</span>
            </div>
            <div class="right">
                <span class="map">地图·周边
                    <van-icon name="arrow" />
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    swiperinfos: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
.infos {
    padding: 12px 16px;

    .housename {
        font-size: 20px;
        color: #333333;
        font-weight: 700;
        margin-bottom: 6px;
    }

    .title {
        margin: 0 0 12px;
        display: flex;
        flex-wrap: wrap;

        .tag {
            font-size: 12px;
            padding: 2px 4px;
            margin: 4px 4px 0 0;
        }
    }

    .commentall {
        display: flex;
        height: 35px;
        background-color: #f5f7fa;
        align-items: center;
        padding: 0 10px;
        margin-bottom: 10px;
        border-radius: 10px;

        .left {
            .rate {
                font-size: 18px;
                font-weight: 900;
            }

            .scoreTitle {
                font-size: 12px;
                margin: 0 7px;
                font-weight: 900;
            }

            .brief {
                font-size: 12px;
            }
        }

        .right {
            flex: 1;
            text-align: right;

            .comment {
                font-size: 12px;
                color: var(--primary-color);
            }
        }
    }

    .location {
        border-radius: 10px;
        padding: 13px 10px;
        display: flex;
        flex-wrap: wrap;
        // padding: 0 10px;
        background-color: #f5f7fa;
        // height: 35px;
        align-items: center;

        .left {
            flex: 3;
            font-size: 14px;
            font-weight: 900;

        }

        .right {
            flex: 1;
            text-align: right;

            .map {
                width: 60px;
                font-size: 12px;
                color: var(--primary-color);
            }
        }
    }
}
</style>