<template>
  <div id="news" v-loading="loading">
    <!-- banner -->
    <div class="banner">
      <FreeTrial
        :title="titleInfo"
        @ondialog="dialogVisible = $event"
      ></FreeTrial>
      <Apply :dialogVisible.sync="dialogVisible"></Apply>
    </div>
    <!-- 标题 -->
    <Title
      @btnChange="btnChange($event)"
      :tabActive="tabActive"
      :titleText="titleText"
    ></Title>
    <!-- 主要内容 -->
    <div class="content warp">
      <!-- 左边盒子 -->
      <div class="left">
        <!-- 新闻简介 -->
        <NewList :articleList="articleList"></NewList>
        <!-- 分页 -->
        <Pagination
          @handleCurrentChange="handleCurrentChange"
          :total="total"
          :pageNum="pageNum"
        ></Pagination>
      </div>
      <!-- 右边盒子 -->
      <div class="right">
        <!-- 热门文章 -->
        <Hot :articleList="hotArticleList" :articleTitle="'热门文章'"></Hot>
        <!-- 近期文章 -->
        <Hot :articleList="nearArticleList" :articleTitle="'近期文章'"></Hot>
      </div>
    </div>
  </div>
</template> 

<script>
import Title from "../../components/Title";
import Apply from "../../components/Apply";
import NewList from "./NewList";
import Hot from "./Hot";
import FreeTrial from "../home/FreeTrial";
import Pagination from "./Pagination";

import {
  getArticleList,
  getArticleHotList,
  getArticleDetails,
} from "../../api/news";
export default {
  name: "news",
  data() {
    return {
      loading: false,
      //
      // titleInfo: {
      //   name: "新闻资讯",
      //   content: "合作与共赢，始终是我们内在的驱动力",
      //   nameStyle: "font-size: 48px",
      //   contentStyle: "font-size: 18px",
      //   margin: "margin-bottom: 65px;",
      // },

      // 标题文字
      // titleText: {
      //   title: "新闻资讯",
      //   column: [
      //     {
      //       name: "公司新闻",
      //       id: 1,
      //     },
      //     {
      //       name: "行业新闻",
      //       id: 2,
      //     },
      //   ],
      // },
      // 公司新闻/行业新闻
      tabActive: 1,

      // 在线申请试用弹窗
      dialogVisible: false,

      // 文章列表/详情
      // isDetails: false,

      // 分页
      // total: 1000,
      pageNum: 1,

      // 文章列表
      // articleList: [],
      // 热门列表
      // hotArticleList: [],
      // 近期列表
      // nearArticleList: [],
      // 文章详情
      // detailsObj: { article: {}, articleUp: {}, articleDown: {} },
    };
  },
  props: ["tab"],
  components: {
    FreeTrial,
    Apply,
    NewList,
    Pagination,
    Hot,
    Title,
  },
  asyncData({ store, route }) {
    console.log("route.params.tab==" + route.params.tab);
    return Promise.all([
      store.dispatch("homeInfo"),
      store.dispatch("getHotNewsList", {
        tabActive: route.params.tab,
        isorder: 1,
      }),
      store.dispatch("getHotNewsList", {
        tabActive: route.params.tab,
        isorder: 2,
      }),
      store.dispatch("getNewsList", {
        tabActive: route.params.tab,
        pageNum: 1,
      }),
    ]);
  },
  created() {},
  computed: {
    // 文章列表
    articleList() {
      return this.$store.state.newsList;
    },
    // 热门列表
    hotArticleList() {
      return this.$store.state.hotNewsList;
    },
    // 近期列表
    nearArticleList() {
      return this.$store.state.nearNewsList;
    },
    // 需要去vuex写方法
    titleText() {
      return {
        title: "新闻资讯",
        column: this.$store.state.column,
      };
    },
    titleInfo() {
      return {
        name: this.$store.state.homeData[7].name,
        content: this.$store.state.homeData[7].content,
        nameStyle: "font-size: 48px",
        contentStyle: "font-size: 18px",
        margin: "margin-bottom: 65px;",
      };
    },
    total() {
      return this.$store.state.total;
    },
  },
  mounted() {
    // console.log(this.articleList);
    // const COLUMN = JSON.parse(localStorage.getItem("column"));
    // this.titleText.column = COLUMN;
    // this.getPageInfo();
  },
  methods: {
    // 优先从本地获取,减少请求
    // getPageInfo() {
    // const PAGE_INFO = JSON.parse(localStorage.getItem("pageInfo"));
    // this.titleInfo.name = PAGE_INFO[7].name;
    // this.titleInfo.content = PAGE_INFO[7].content;
    // },
    // 页码改变
    handleCurrentChange(pageNum) {
      this.pageNum = pageNum;
      this.newsList();
      window.scrollTo(0, 0);
    },
    // 切换公司新闻/行业新闻
    btnChange(tab) {
      this.$router.push({
        path: `/news/${tab}`,
      });
    },
    // 获取新闻列表
    async newsList() {
      this.loading = true;
      let res = await getArticleList({
        status: 0,
        type: this.tabActive,
        pageNum: this.pageNum,
      });
      // console.log(res);
      this.total = res.data.total;
      this.articleList = res.data.list;
      this.loading = false;
    },
    // 获取新闻热门列表
    // async hotNewsList(isorder) {
    //   this.loading = true;
    //   let res = await getArticleHotList({
    //     isorder, // 热门1,近期2
    //     type: this.tabActive,
    //   });
    //   // console.log(res);
    //   if (isorder == 1) {
    //     this.hotArticleList = res.data.list.filter((item, i) => {
    //       return i <= 5;
    //     });
    //   } else {
    //     this.nearArticleList = res.data.list.filter((item, i) => {
    //       return i <= 5;
    //     });
    //   }
    //   this.loading = false;
    // },
  },
  watch: {
    $route: {
      handler(val, oldval) {
        this.tabActive = parseInt(this.tab);
        // this.newsList();
        // this.hotNewsList(1);
        // this.hotNewsList(2);
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
#news {
  .banner {
    position: relative;
    height: 394px;
    background: url("../../assets/img/nei_banner_xw.jpg") no-repeat center;
  }
  .content {
    display: flex;
    padding-top: 60px;
    padding-bottom: 80px;
    .right {
      width: 340px;
    }
    .left {
      flex: 1;
      max-width: 1040px;
      margin-right: 50px;
    }
  }
}
@media screen and (max-width: 1200px) {
  #news {
    .content {
      .right {
        width: 300px;
        padding: 60px 20px 80px;
      }
      .left {
        margin-right: 30px;
      }
    }
  }
}
</style>