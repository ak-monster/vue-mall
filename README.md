# JSMAN商城

## 项目运行

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```



# 详细介绍

## 前言

学习并使用vue全家桶制作一个手机端的线上商城。通过调取服务器后台数据接口，实现商城的商品展示及基本完整的业务逻辑。

## 技术栈

vue3 + vue-router + vuex + webpack(vue-cli) + ES6 + axios + flex

## 项目布局

```txt
├─public                                                    //公共目录
│      favicon.ico                                          //图标
│      index.html                                           //入口html文件
│          
└─src                                                       //源码目录
    │  App.vue                                              //页面入口文件
    │  main.js                                              //程序入口文件，加载各种公共组件
    │  
    ├─assets                                                //固定资源目录
    │  ├─css                                                //通用css文件
    │  │      base.css
    │  │      normalize.css
    │  │      
    │  └─img                                                //本地图片
    │              
    ├─components                                            //组件
    │  ├─common                                             //公共组件
    │  │  ├─navBar                                          //顶部导航栏
    │  │  │      NavBar.vue
    │  │  │      
    │  │  ├─scroll                                          //better-scroll插件封装
    │  │  │      Scroll.vue
    │  │  │      
    │  │  ├─tabBar                                          //底部导航栏
    │  │  │      TabBar.vue
    │  │  │      TabBarItem.vue
    │  │  │      
    │  │  ├─toast                                           //弹窗
    │  │  │      index.js
    │  │  │      Toast.vue
    │  │  │      
    │  │  └─utils                                           //工具库
    │  │          utils.js
    │  │          
    │  └─content                                            //业务组件
    │      │  mainTabBar.vue                                //底部导航栏封装
    │      │  TabControl.vue                                //选项卡
    │      │  
    │      ├─backTop                                        //返回顶部
    │      │      BackTop.vue
    │      │      
    │      ├─checkButton                                    //选择按钮
    │      │      CheckButton.vue
    │      │      
    │      └─goods                                          //商品展示
    │              GoodsList.vue
    │              GoodsListItem.vue
    │              
    ├─network                                               //网络数据请求
    │      category.js                                      //分类页网络封装
    │      detail.js                                        //详情页网络封装
    │      home.js                                          //主页网络封装
    │      request.js                                       //主网络请求
    │      
    ├─router                                                //路由
    │      router-index.js
    │      
    ├─store                                                 //vuex状态管理
    │      actions.js                                       //配置actions
    │      getters.js                                       //配置getters
    │      index.js                                         //引用vuex，配置state
    │      mutation-types.js                                //定义mutations常量名
    │      mutations.js                                     //配置mutations
    │      
    └─views                                                 //页面
        ├─category                                          //商品分类页
        │  │  category.vue
        │  │  
        │  └─childComps
        │          CategoryMenu.vue
        │          SubCategoryMenu.vue
        │          
        ├─detail                                            //商品详情页
        │  │  Detail.vue
        │  │  
        │  └─childComps
        │          DetailBottomBar.vue
        │          DetailComments.vue
        │          DetailGoodsInfo.vue
        │          DetailItemParams.vue
        │          DetailNavBar.vue
        │          DetailRecommend.vue
        │          DetailSwiper.vue
        │          ItemBaseInfo.vue
        │          shopInfo.vue
        │          
        ├─home                                              //主页
        │  │  home.vue
        │  │  
        │  └─childComps
        │          featureView.vue
        │          homeSwiper.vue
        │          RecommendView.vue
        │          
        ├─profile                                           //我的
        │  │  profile.vue
        │  │  
        │  └─childComps
        │          ProfileAccount.vue
        │          ProfileList.vue
        │          ProfileLogin.vue
        │          
        └─shopcart                                          //购物车
            │  shopcart.vue
            │  
            └─childComps
                    CartButtonBar.vue
                    CartList.vue
                    CartListItem.vue
                    
```

## 项目详解

### 数据请求 src/network

- <kbd>request.js</kbd> 创建axios实例，配置baseURL，为实例方法传递相对url
- <kbd>home.js</kbd> 封装主页页面数据相关请求
- <kbd>detail.js</kbd> 封装商品详情页面数据相关请求
- <kbd>category.js</kbd> 封装分类页面数据相关请求

### 主页 src/views/home

- 主页展示

  ![home](https://github.com/ak-monster/vue-mall/row/master/screenshot/home/home1.png)

  ![home](https://github.com/ak-monster/vue-mall/row/master/screenshot/home/home2.png)

  ![home](https://github.com/ak-monster/vue-mall/row/master/screenshot/home/home3.png)

- 基本功能

  - 轮播图（vue-awesome-swiper组件）
  - 选项卡切换、吸顶
  - 回滚按钮
  - 图片懒加载（VueLazyload插件）

### 详情页 src/views/detail

- 详情页展示

  ![detail](https://github.com/ak-monster/vue-mall/row/master/screenshot/detail/detail1.png)

  ![detail](https://github.com/ak-monster/vue-mall/row/master/screenshot/detail/detail2.png)

  ![detail](https://github.com/ak-monster/vue-mall/row/master/screenshot/detail/detail3.png)

- 基本功能

  - 加入购物车（vuex）
  - 弹窗提示（自定义Toast插件）

  - 轮播图
  - 选项卡定位、吸顶
  - 回滚按钮
  - 图片懒加载

### 分类页 src/views/category

- 分类页展示

  ![category](https://github.com/ak-monster/vue-mall/row/master/screenshot/category/category1.png)

  ![category](https://github.com/ak-monster/vue-mall/row/master/screenshot/category/category2.png)

### 购物车 src/views/cart

- 购物车展示

  ![cart](https://github.com/ak-monster/vue-mall/row/master/screenshot/cart/cart1.png)

  ![cart](https://github.com/ak-monster/vue-mall/row/master/screenshot/cart/cart2.png)

- 基本功能（vuex）

  - 全选与否
  - 价格计算
  - 增减商品数量
  - 删除商品

### 用户 src/views/profile

- 用户展示

  ![profile](https://github.com/ak-monster/vue-mall/row/master/screenshot/profile/profile.png)