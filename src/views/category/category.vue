<template>
  <div id="category">
    <nav-bar class="navBar">
      <template v-slot:center>
        <div class="title">商品分类</div>
      </template>
    </nav-bar>
    <div class="categoryContent">
      <category-menu
          :category-list="categoryList"
          @selectMenu="selectMenu"/>
      <scroll-category
          class="wrapper"
          ref="scroll"
          :category-data="[categoryData]">
        <div class="categoryLeft">
            <sub-category-menu
                :sub-category-list="showSubCategory"
                @img-load="imgLoad"/>
            <tab-control
                @tab-click="tabClick"/>
            <goods-list :goods="showCategoryGoods"/>
        </div>
      </scroll-category>
    </div>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";
  import CategoryMenu from "@/views/category/childComps/CategoryMenu";
  import SubCategoryMenu from "@/views/category/childComps/SubCategoryMenu";
  import TabControl from "@/components/content/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";

  import ScrollCategory from "@/components/common/scroll/Scroll";

  import { getCategoryMenu, getSubCategoryMenu, getGoods } from "@/network/category";
  import { debounce } from "@/components/common/utils/utils";

  export default {
    name: "category",
    components: {
      NavBar,
      CategoryMenu,
      SubCategoryMenu,
      TabControl,
      GoodsList,

      // 尝试分离scroll，但是依然没有解决滑动bug
      ScrollCategory
    },
    data() {
      return {
        categoryList: [],
        categoryData: [],
        currentIndex: -1,
        currentType: 'pop'
      }
    },
    created() {
      // 请求数据
      this.getCategoryMenu()

      // 不要使用总线bus，有意想不到的问题
      // 监听图片加载完成，作防抖处理
      // const refresh = debounce(this.$refs.scroll.refreshScroll, 100)
      // this.$bus.$on('itemImgLoad', () => {
      //   refresh()
      // })
      // this.$bus.$on('itemImgLoad', () => {
      //   this.$refs.scroll.refreshScroll()
      // })
    },
    mounted() {
      this.$bus.$on('itemImgLoad', () => {
        this.$refs.scroll.refreshScroll()
      })
    },
    computed: {
      showSubCategory() {
        // 初始化未完成时，数据没有挂载完成，会找不到subCategoryList等属性，报错。所以就让未初始化完成时候的currentIndex为-1，初始化完成后自动为0（自动为0的原因是getCategoryMenu方法的调用）
        if (this.currentIndex === -1) return {}
        // console.log(this.currentIndex);
        // console.log(this.categoryData[this.currentIndex].subCategoryList);
        return this.categoryData[this.currentIndex].subCategoryList
      },
      showCategoryGoods() {
        if (this.currentIndex === -1) return []
        // console.log(this.categoryData[this.currentIndex].goodsList[this.currentType]);
        return this.categoryData[this.currentIndex].goodsList[this.currentType]
      }
    },
    methods: {
      // 数据请求方法
      // 左侧菜单栏数据
      getCategoryMenu() {
        getCategoryMenu().then(res => {
          this.categoryList = res.data.category.list;
          // 初始化分类页详情数据
          for (let i = 0; i < this.categoryList.length; i++) {
            this.categoryData[i] = {
              subCategoryList: {},
              goodsList: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          // 请求左侧第一栏的数据，注意：要放在异步函数之内，不要放在外面，否则不能正常获取数据
          this.getSubCategoryMenu(0)
        })
      },
      // 右侧二级菜单栏数据
      getSubCategoryMenu(index) {
        this.currentIndex = index
        const maitKey = this.categoryList[index].maitKey
        // console.log(maitKey);
        getSubCategoryMenu(maitKey).then(res => {
          this.categoryData[index].subCategoryList = res.data
          this.categoryData = {...this.categoryData}
          // console.log(this.categoryData[index].subCategoryList);
          this.getGoods('pop')
          this.getGoods('new')
          this.getGoods('sell')
        })
      },
      // 右侧商品展示信息数据
      getGoods(type) {
        const miniWallkey = this.categoryList[this.currentIndex].miniWallkey
        getGoods(miniWallkey, type).then(res => {
          this.categoryData[this.currentIndex].goodsList[type] = res
          this.categoryData = {...this.categoryData}
        })
      },

      // 左侧主菜单点击监测
      selectMenu(index) {
        this.getSubCategoryMenu(index)
      },

      // tab-control点击事件
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break
          case 1:
            this.currentType = 'new';
            break
          case 2:
            this.currentType = 'sell';
            break
        }
      },
      // 这里没有监测到图片的加载完成，原因？
      imgLoad() {
        console.log('调用了refresh');
        this.$refs.scroll.refreshScroll()
      }
    }
  }
</script>

<style scoped>
  .navBar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .title {
    flex: 1;
    color: #fff;
    font-weight: 550;
  }
  .categoryContent {
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;

    display: flex;
  }
  .wrapper {
    overflow: hidden;
  }
  .categoryLeft {
    /*flex: 1;*/  /*为什么设置flex为1，其宽度会被子元素撑开？*/
    width: 275px;
  }
</style>