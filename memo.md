### 预留属性设置  
1. 在插入NavBar的时候，可以使用属性bgColor来调整导航栏的颜色

### 注意事项   
1. 一般vue组件的文件名用驼峰表示，并且首字母大写   
2. 路由一不要忘记加上<router-view>   
3. 轮播插件swiper的name不要用swiper本身作名字
4. 静态路径加上~表示完整路径

### 重点学习
1. 网络请求
    - 对服务器的请求获取到的数据是多而杂的 request.vue
    - 对接受数据的处理进行分类，提取每个组件需要的数据 network/home.js
    - 再次将数据进行清理，把有用的数据提取存储在变量中 getHomeMultidata().then()
    - 调整代码逻辑，将home.vue中的create中的网络请求全部迁移到methods中，create中只负责调用
    
2. 知识点：$emit及props的使用  

3. 知识点：v-on中.native关键字的使用
    
### css样式调整
1. flex布局——属性的使用
2. 多利用子元素对父元素width的百分比来调整大小
3. ::before的运用——控制某个元素始终保持在某个元素前面特定距离

### 常用技巧
1. 利用动态绑定class实现元素的变化效果 TabControl中的点击按钮变红
2. 多次传入数组数据到list中时，使用展开运算符