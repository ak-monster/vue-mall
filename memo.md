### 预留属性设置  
1. 在插入NavBar的时候，可以使用属性bgColor来调整导航栏的颜色
2. 在mainTabBar中，可以给tabBarItem中给定属性值text-color来更改字体颜色，注意直接赋值颜色值时不要加:

### 注意事项   
1. 一般vue组件的文件名用驼峰表示，并且首字母大写   

2. 路由一不要忘记加上<router-view>   

3. 轮播插件swiper的name不要用swiper本身作名字，class也不要用swiper本身作名字

4. 静态路径加上~表示完整路径  

5. props中加default时，数组和对象要用default的函数形式  

6. 在Detail详情页的swiper中，在keep-alive的情况下，Detail组件不会重新渲染，
    所有的图片都是获取的都是第一次点击的图片，所以要在keep-alive中exclude掉Detail  

7. <img>中引入本地静态地址的方法：

   ![image-20200429182750474](C:\Users\ak monster\AppData\Roaming\Typora\typora-user-images\image-20200429182750474.png)


### 重点学习
1. 网络请求
    - 对服务器的请求获取到的数据是多而杂的 request.vue
    - 对接受数据的处理进行分类，提取每个组件需要的数据 network/home.js
    - 再次将数据进行清理，把有用的数据提取存储在变量中 getHomeMultidata().then()
    - 调整代码逻辑，将home.vue中的create中的网络请求全部迁移到methods中，create中只负责调用
    - 详情页的网络请求数据较为复杂和杂乱，用class类来封装请求的数据，方便管理和调用
2. 知识点：$emit及props的使用  
3. 知识点：v-on中.native关键字的使用  
4. 知识点：路由返回$router.back()和$router.go(-1)  
5. 知识点：时间戳的转换  
6. mixin混入——用来存放公共代码（和vuex的区别——mixin在各个组件中的数据是私有的，使用互不干扰；而vuex中的数据是公用的）
7. vuex的使用
### 常用技巧

1. 利用动态绑定class实现元素的变化效果 TabControl中的点击按钮变红

2. 多次传入数组数据到list中时，使用展开运算符  

3. **利用展开运算符来触动computed计算属性重新计算（category.vue中有使用此技巧）—— this.categoryData = {...this.categoryData}**

   - 计算属性的一个知识点：对于对象而言，其中的某一键对应的值发生改变，不会使计算属性重新对该元素进行渲染（既认为该对象没有发生改变），用this.obj = {...this.obj}的方式可以使计算属性检测到对象的某一值的改变，从而做出反应

4. 在终端控制台中输入命令 tree /f>list.md 可以输出树状图

### css样式调整
1. flex布局——属性的使用
2. 多利用子元素对父元素width的百分比来调整大小
3. ::before的运用——控制某个元素始终保持在某个元素前面特定距离，固定格式：
```css
元素 {
  position: relative;
}

元素::before {
  content: '';
  position: absolute;
  left: -15px;    /*这里很妙：若没有定位改变位置，那这个背景将会出现在数字的位置，背景本身宽度14px，left设置为-15px，就是把背景朝左移动15px，刚好还和数字保持1px的距离*/
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;  /*注意：size和position属性在简写的情况下，要么都写，要么都不写。都写的时候size前面需要加/*/
}
```
4. table布局（详情页中商家信息里对描述、价格、质量的排列）
5. 利用translate实现元素垂直居中布局
```css
元素 {
position: absolute; /* 相对定位或绝对定位均可 */
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}
```

6. 取消文字换行：white-space: nowrap

7. flex布局中，最后一排左对齐的方法：

   ```css
   .container {
       display: flex;
       flex-wrap: wrap;
   }
   .list {
       width: 24%; height: 100px;
       background-color: skyblue;
       margin-top: 15px;
   }
   .list:not(:nth-child(4n)) {
       margin-right: calc(4% / 3);
   }
   /*
   1. :not是排除的意思
   2. 4%是24%*4余下的空间，分成3份，即四个格子的三个间隙平分
   */
   ```



### 插件的使用  

1. better-scroll：  
    - 若不能滑动，检查wrapper和content的高度，wrapper的高度一定要小于content的高度
    - 在有图片异步加载的时候，要注意每次加载了图片后都要加上事件@load来refresh整个DOM  
    - 在任何DOM发生改变的地方（特别是异步加载）都要重新refresh
    - 图片refresh的位置在created或者mounted中都行，目前没有看到bug
    - 监听滚动事件要设置属性probe-type为3（这里耽误了时间···）
    
### router路由
1. <keep-alive>中用exclude来排除某个不维持状态的组件

### Vuex
1. actions中执行异步操作，结合promise的使用，返回给调用函数一个promise实例



## 尚未解决BUG/功能

1. 主页和分类也scroll组件存在冲突，容易导致另一个滑动失效
   - 猜测：有公用变量导致scroll计算出错？在来回切换滑动检测中，主页的scroll易自动回到顶部。
     - 从home的钩子函数actived和deactived可以看出，home保留的saveY属性（即y坐标），在切换到分类栏并滑动时，会被“神秘力量”改成0，但是切换后不滑动分类栏，就不会变为0，可能和这个原因有关。
     - 在这个被保留的y坐标，从分类栏切换回home页面时，显示的是上次保存的y坐标，但是实际却滑回到了顶部
2. Toast.vue中对toast的消失做防抖处理
3. 主页选项卡切换时，回到原来的位置而不是上一个停留的位置

