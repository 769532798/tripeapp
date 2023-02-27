import dayjs from 'dayjs'

export function formatMonthDay(data, formate = 'MM月DD日') {
    return dayjs(data).format(formate)
}
export function formatDayCount(startdata, enddata) {
    return dayjs(enddata).diff(startdata, "day")
}