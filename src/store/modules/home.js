import { getHotText } from "@/services/modules/hottext";
import { defineStore } from "pinia";
import { getCateGory } from "@/services/modules/caterory";
import { getHomeList } from "@/services/modules/homelist";

const usehomestore = defineStore('home', {
    state: () => ({
        hottetx: [],
        category: [],
        homelist: [],
        pagenum: 1    //请求得页面 
    }),
    actions: {
        async fetchHotText() {
            const res = await getHotText()
            this.hottetx = res.data
        },
        async fetchCateGory() {
            const res = await getCateGory()
            this.category = res.data
        },
        async fetchHomeList() {
            const res = await getHomeList(this.pagenum)
            this.homelist.push(...res.data)  //要进行解构在推到数组里 不然成为二维数组  因为下一次请求得要加到数组里用等于得话就只有20条数据
            // this.homelist = res.data
            this.pagenum++
        }

    }

})
export default usehomestore