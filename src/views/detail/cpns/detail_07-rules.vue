<template>
    <div class="rules">
        <DetailSection head="预定须知">
            <div class="allrules">
                <template v-for="(item, index) in rulesdata.orderRules" :key="index">
                    <div class="ruleItem">
                        <div class="title">{{ item.title }}</div>
                        <div class="introduction">{{ item.introduction }}
                            <div class="tip" v-if="item.tips">查看说明</div>
                        </div>

                    </div>
                </template>
            </div>
        </DetailSection>
    </div>
</template>

<script setup>
import DetailSection from '@/components/detail/DetailSection.vue';
defineProps({
    rulesdata: {
        typeof: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
.rules {
    .allrules {

        .ruleItem {
            padding: 10px 0;
            font-size: 12px;
            display: flex;

            .title {
                flex: 0.5;
            }

            .introduction {
                display: flex;
                justify-content: space-between;
                flex: 2;
                margin-left: 5px;

                .tip {
                    color: var(--primary-color);
                }
            }

            .tip {
                width: 50px;
            }
        }


    }
}
</style>