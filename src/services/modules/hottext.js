import HYRequest from '../request/index'

export function getHotText() {
    return HYRequest.get({
        url: '/home/hotSuggests'
    })
}