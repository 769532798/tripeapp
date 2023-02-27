//参数一是相对路径  import.meta.url--拿到当前文件路径
export const getAssetUrl = (image) => {
    return new URL(`../assets/img/${image}`, import.meta.url).href
}
