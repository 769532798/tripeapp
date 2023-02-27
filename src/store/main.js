import { defineStore } from "pinia";
const nowData = new Date()
const endDate = new Date()
endDate.setDate(nowData.getDate() + 1)
const useMainstore = defineStore('main', {
    state: () => ({
        mainstartday: nowData,
        mainendday: endDate,
        isLoading: false,
    })
})
export default useMainstore