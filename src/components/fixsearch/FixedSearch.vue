<template>
    <div class="fixsearch">
        <div class="inner">
            <div class="left">
                <div class="start">
                    住 {{ startday }}
                </div>
                <div class="end">
                    离 {{ endday }}
                </div>
            </div>
            <div class="center">
                <input type="search" placeholder="关键字/位置/民宿">
            </div>
            <div class="right">
                <div class="searchicon">
                    <i class="imaicon"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import useMainstore from '@/store/main';
import { storeToRefs } from 'pinia';
import { formatMonthDay } from '@/utils/format_dayjs';
import { computed } from '@vue/reactivity';

const mainstore = useMainstore()
const { mainstartday, mainendday } = storeToRefs(mainstore)
const startday = computed(() => formatMonthDay(mainstartday.value, 'MM.DD'))
const endday = computed(() => formatMonthDay(mainendday.value, 'MM.DD'))
</script>

<style lang="less" scoped>
.fixsearch {
    padding: 16px 16px 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #ffffff;

    .inner {
        height: 45px;
        display: flex;
        background-color: #f2f4f6;
        border-radius: 10px;
        padding: 0 8px;

        .left {
            width: 60px;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #333333;
            border-right: 1px solid #ffffff;

        }

        .center {
            flex: 1;

            input {
                height: 45px;
                width: 100%;
                background-color: #f2f4f6;
                border: none;
            }
        }

        .right {
            display: flex;
            align-items: center;

            .searchicon {

                display: flex;
                align-items: center;

                .imaicon {
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    background-image: url(../../assets/img/home/home-sprite.png);
                    background-position: -28px -153px;
                    background-size: 207px 192px;
                }
            }

        }
    }


}
</style>