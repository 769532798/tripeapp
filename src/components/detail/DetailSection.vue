<template>
    <div class="section">
        <div class="header">
            <div name>{{ head }}</div>
        </div>
        <div class="content">
            <slot>默认内容</slot>
        </div>
        <div class="footer" v-if="foot.length">
            <div class="more">{{ foot }}</div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    head: {
        type: String,
        default: '顶部'
    },
    foot: {
        type: String,
        default: ''
    }
})

</script>

<style lang="less" scoped>
.section {

    .header {
        padding: 7px 16px;
        border-top: 8px solid #f5f7fa;
        border-bottom: 1px solid #f5f7fa;
        font-size: 20px;
        font-weight: 700;
    }

    .content {
        padding: 7px 16px;

    }

    .footer {
        padding: 7px 16px;
        text-align: right;
        font-size: 14px;
        color: var(--primary-color);
    }
}
</style>