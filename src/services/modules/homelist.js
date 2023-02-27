import HYRequest from '../request/index'

export function getHomeList(pagenum) {
    return HYRequest.get({
        url: '/home/houselist',
        params: {
            page: pagenum
        }
    })
}