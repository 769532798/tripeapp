<template>
    <div class="map">
        <DetailSection head="位置周边">
            <div ref="mapref" class="baidu"></div>
        </DetailSection>
    </div>
</template>

<script setup>
import DetailSection from '@/components/detail/DetailSection.vue';
import { onMounted, ref } from 'vue';

const props = defineProps({
    loacte: {
        type: Object,
        default: () => ({})
    }
})
const mapref = ref()

onMounted(() => {
    var map = new BMap.Map(mapref.value);          // 创建地图实例  
    var point = new BMap.Point(props.loacte.longitude, props.loacte.latitude);  // 创建点坐标  
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  
    var marker = new BMap.Marker(point);        // 创建标注    
    map.addOverlay(marker);                     // 将标注添加到地图中 
})

</script>

<style lang="less" scoped>
.baidu {
    height: 300px;
}
</style>