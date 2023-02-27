import HYRequest from '../request/index'

export function getCateGory() {
    return HYRequest.get({
        url: '/home/categories'
    })
}