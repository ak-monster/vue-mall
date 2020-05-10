import { request } from "@/network/request";

export function getCategoryMenu() {
  return request({
    url: '/category'
  })
}

export function getSubCategoryMenu(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      // 再次注意：这里是简写，相当于是 maiKey: maitKey 前者是对象key名，后者是对象值（变量）
      maitKey
    }
  })
}

export function getGoods(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params:{
      miniWallkey,
      type
    }
  })
}