<template>
    <div class="facility">
        <detail-section head="房屋设施" foot="查看全部设施">
            <div class="device">
                <template v-for="(item, index) in facilityinfos.houseFacilitys" :key="index">
                    <div class="item" v-if="facilityinfos.facilitySort?.includes(index)">
                        <div class="left">
                            <img :src="item.icon" alt="">
                            <span>{{ item.groupName }}</span>
                        </div>
                        <div class="right">
                            <template v-for="(item, index) in item.facilitys.slice(0, 4)" :key="index">
                                <span class="use">
                                    <span class=" facilityicon"></span>
                                    {{ item.name }}
                                </span>
                            </template>
                        </div>
                    </div>
                </template>
            </div>
        </detail-section>
    </div>
</template>

<script setup>
import DetailSection from '@/components/detail/DetailSection.vue';

defineProps({
    facilityinfos: {
        typeof: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
.facility {
    // padding: 15px 16px;

    .device {
        background-color: #f5f7fa;
        display: flex;
        flex-direction: column;
        justify-content: space-around;


        .item {
            display: flex;
            margin: 15px 0;

            .left {
                flex: 2;
                display: flex;
                flex-direction: column;
                width: 120px;
                align-items: center;
                justify-content: center;

                img {
                    width: 20px;
                    height: 20px;
                }
            }

            .right {
                flex: 4;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
                // justify-content: space-around;

                .use {
                    font-size: 12px;
                    width: 81px;
                    height: 16px;
                    line-height: 21px;
                    padding: 4px 6px;
                    margin: 0 10px;
                }

            }
        }
    }


}
</style>