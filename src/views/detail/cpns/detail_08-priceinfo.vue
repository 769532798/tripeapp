<template>
    <div class="priceinfo">
        <DetailSection head="价格说明">
            <div class="instructions">
                {{ priceinfo.introduction }}
            </div>
        </DetailSection>
    </div>
</template>

<script setup>
import DetailSection from '@/components/detail/DetailSection.vue';
defineProps({
    priceinfo: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
.instructions {
    font-size: 12px;
    color: #666666;
}
</style>