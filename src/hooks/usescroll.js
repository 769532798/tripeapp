import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from 'underscore'
// export function useScroll(reachbottom) {
//     const scrollslide = function () {
//         const clientheight = this.document.documentElement.clientHeight  //可视区域高度
//         const scrolltop = document.documentElement.scrollTop            //滚动了多少高度
//         const scrollheight = document.documentElement.scrollHeight        //可滚动得高度
//         if (scrollheight <= clientheight + scrolltop) {
//             if (reachbottom) { reachbottom() }

//         }
//     }

//     onMounted(() => {
//         window.addEventListener('scroll', scrollslide)
//     })
//     onUnmounted(() => {
//         window.removeEventListener('scroll', scrollslide)

//         console.log('unmounted');
//     })
// }

export default function useScroll(elRef) {
    let el = window
    const isReachbottom = ref(false)
    const clientheight = ref(0)
    const scrolltop = ref(0)
    const scrollheight = ref(0)
    const scrollslide = throttle(function () {
        if (el === window) {
            clientheight.value = document.documentElement.clientHeight  //可视区域高度
            scrolltop.value = document.documentElement.scrollTop            //滚动了多少高度
            scrollheight.value = document.documentElement.scrollHeight     //可滚动得高度
        } else {
            // console.log('滚动');
            clientheight.value = el.clientHeight  //可视区域高度
            scrolltop.value = el.scrollTop            //滚动了多少高度
            scrollheight.value = el.scrollHeight     //可滚动得高度
        }

        if (scrollheight.value - 300 <= clientheight.value + scrolltop.value) {
            isReachbottom.value = true
        }
        // console.log(scrolltop.value);
    }, 100)

    onMounted(() => {
        if (elRef) el = elRef.value
        el.addEventListener('scroll', scrollslide)
    })
    onUnmounted(() => {
        el.removeEventListener('scroll', scrollslide)
    })
    return { isReachbottom, clientheight, scrolltop, scrollheight }
}