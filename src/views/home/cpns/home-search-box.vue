<template>
    <!-- 位置 -->
    <div class="location bottom-gray-line">
        <div class="place"><span @click="cityclick">{{ currentCity.cityName }}</span></div>

        <div class="userlocation" @click="positionclick">
            <span>我的位置</span>
            <img src="@/assets/img/home/icon_location.png" alt="">
        </div>
    </div>

    <!-- 日期范围 -->
    <div class="date bottom-gray-line" @click="selectdate">
        <div class="start">
            <div class="join">入住</div>
            <div class="datestart">{{ startDate }}</div>
        </div>
        <div class="totalday">
            <div class="night">共{{ staycount }}晚</div>
        </div>
        <div class="end">
            <div class="leave">离店</div>
            <div class="dateend">{{ endDate }}</div>
        </div>

    </div>

    <!-- 弹出日期 -->
    <div class="Calendar">
        <van-calendar v-model:show="calendarShow" @confirm="onConfirm" type="range" color="#ff9854"
            :show-confirm="false" />
    </div>
    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
        <div class="start">价格不限</div>
        <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">
        关键字/位置/民宿名
    </div>

    <!-- 热搜词 -->
    <div class="hottext">
        <template v-for="(item, index) in hottetx">
            <div :style="{ color: item.tagText.color, background: item.tagText.background.color }" class="hotitem">{{
                    item.tagText.text
            }}</div>

        </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="search">
        <div class="searchBtn" @click="searchBtn">开始搜索</div>
    </div>


</template>

<script setup>
import useCityStore from '@/store/modules/city';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { formatMonthDay, formatDayCount } from '@/utils/format_dayjs'
import usehomestore from '@/store/modules/home'
import useMainstore from '@/store/main';
import { computed } from '@vue/reactivity';

const router = useRouter()

//获取当前位置 暂时不可用
function positionclick() {
    navigator.geolocation.getCurrentPosition(res => {
        console.log('获取位置成功');
        console.log(res);
    }, error => {
        {
            console.log('获取位置失败');
        }
    }, {
        enableHighAccuracy: true,
        timeout: 3000,
        maximumAge: 0,
    })
}



function cityclick() {
    router.push('/city')
}
//拿到城市页面点击的城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

//入住和离店
const mainstore = useMainstore()
const { mainstartday, mainendday } = storeToRefs(mainstore)
const startDate = computed(() => formatMonthDay(mainstartday.value)) //获取当期日期 format...在utils里封装好了
const endDate = computed(() => formatMonthDay(mainendday.value))
const staycount = ref(formatDayCount(mainstartday.value, mainendday.value))


//日历部分
const calendarShow = ref(false)
function onConfirm(value) {  //vant里携带的参数可获得到选择的日期
    const selectStartday = value[0]
    const selectEndday = value[1]
    mainstore.mainstartday = selectStartday
    mainstore.mainendday = selectEndday
    staycount.value = formatDayCount(selectStartday, selectEndday)
    calendarShow.value = false
}
function selectdate() {  //点击日期部分弹出日历
    calendarShow.value = true

}

//热搜词部分
const homestore = usehomestore()
homestore.fetchHotText()
const { hottetx } = storeToRefs(homestore)

//搜索按钮
function searchBtn() {
    router.push({
        path: '/search',
        query: {
            startday: startDate.value,
            endday: endDate.value,
            currentcity: currentCity.value.cityName
        }

    })
}

</script>

<style lang="less" scoped>
.location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;

    .place {
        flex: 1;
        font-size: 16px;

        span {

            text-align: center;
            line-height: 44px;
        }
    }

    .userlocation {
        display: flex;
        align-items: center;

        span {
            position: relative;
            top: 1px;
            margin-right: 5px;
            color: #666;
        }

        img {
            width: 20px;
            height: 20px;
        }
    }
}

.date {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;

    .start {
        padding-left: 5px;

        .join {
            font-size: 12px;
            color: #666;
        }

        .datestart {
            font-size: 16px;
        }
    }

    .totalday {
        width: 130px;
        display: flex;
        justify-content: center;

        .night {
            color: #666;
        }
    }

    .end {
        padding-right: 25px;

        .leave {
            font-size: 12px;
            color: #666;
        }



        .dateend {
            font-size: 16px;
        }
    }
}

.price-counter {
    display: flex;
    padding: 20px 18px;
    font-size: 14px;
    color: #999999;

    .start {
        flex: 1;
    }

    .end {
        padding-right: 30px;
        flex: 1;
        text-align: right;
    }
}

.keyword {
    height: 45px;
    line-height: 45px;
    color: #999999;
    padding: 0 20px;
}

.hottext {
    display: flex;
    flex-wrap: wrap;
    padding: 0 13px;
    margin: 10px 0;


    .hotitem {
        border-radius: 14px;
        padding: 4px 8px;
        margin: 4px;
        font-size: 12px;
    }


}

.search {
    display: flex;
    height: 38px;
    padding: 0 20px;
    justify-content: center;


    .searchBtn {
        flex: 1;
        text-align: center;
        line-height: 38px;
        background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
        border-radius: 24px;
        font-size: 20px;
        color: #ffffff;
    }


}
</style>