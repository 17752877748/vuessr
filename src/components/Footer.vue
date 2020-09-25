<template>
  <div id="footer" v-loading="loading">
    <!-- 标题 -->
    <div class="title">
      <div class="warp">
        <h3>智慧运输管理云平台</h3>
        <button
          type="button"
          class="btn btn-default"
          @click="$emit('ondialog', true)"
        >
          免费试用
        </button>
      </div>
    </div>
    <!-- 主要内容 -->
    <div class="content">
      <div class="warp">
        <div class="left">
          <h6>中国 · 深圳</h6>
          <p>广东省•深圳市•龙华区•清祥路23号</p>
          <h6>联系电话</h6>
          <p>4008-066-199</p>
          <p>133-4295-1777</p>
        </div>
        <div class="right">
          <div class="ico">
            <img src="../assets/img/erweima1.jpg" alt="好鲜生" />
          </div>
          <p>关注好鲜生公众号</p>
        </div>
        <div class="center">
          <ul>
            <li>产品介绍</li>
            <li>
              <router-link to="/product">产品介绍</router-link>
            </li>
          </ul>
          <!-- <ul>
            <li>运驿多</li>
            <li @click="onOpen('/transit')">运驿多</li>
          </ul>-->
          <ul>
            <li>新闻资讯</li>
            <li v-for="item in newsColumn" :key="item.id">
              <router-link :to="`/news/${item.id}`">{{
                item.name
              }}</router-link>
            </li>
          </ul>
          <ul>
            <li>关于我们</li>
            <li>
              <router-link to="/aboutUs">公司简介</router-link>
            </li>
            <li>
              <router-link to="/contactWe">联系我们</router-link>
            </li>
            <!-- <li @click="onOpen('/aboutUs', 1)">企业文化</li> -->
          </ul>
        </div>
      </div>
    </div>
    <!-- 版权栏 -->
    <p class="copyRight">
      粤ICP备18029822号-3 ©好鲜生 Corp., Inc
      版权所属：深圳市好鲜生科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="http://tms.szdexinchang.com:86/becms/#/" target="_brank"
        >网站后台</a
      >
    </p>
  </div>
</template>
<script>
import { getNewsColumn } from "../api/news";
export default {
  name: "Footer",
  data() {
    return {
      // 新闻栏目
      // newsColumn: [],
      // loading
      loading: false,
    };
  },
  asyncData({ store, route }) {
    console.log("footer");
    return store.dispatch("NewsColumn");
  },
  created() {
    // this.fnNewsColumn();
  },
  computed: {
    newsColumn() {
      return this.$store.state.column || [];
    },
  },
  methods: {
    // onOpen(str, index) {
    //   this.$router.push({
    //     path: str,
    //     query: {
    //       tabActive: index,
    //     },
    //   });
    //   window.scroll(0, 0);
    // },
    // 获取新闻栏目
    // async fnNewsColumn() {
    //   this.loading = true;
    //   let res = await getNewsColumn({ isPage: 0 });
    //   this.newsColumn = res.data.list;
    //   localStorage.setItem("column", JSON.stringify(this.newsColumn));
    //   // console.log(res);
    //   this.loading = false;
    // },
  },
};
</script>

<style lang="less" scoped>
#footer {
  .title {
    background-color: #ccc;
    background: url("../assets/img/liuyanbg.jpg") no-repeat center;
    .warp {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 183px;
      h3 {
        font-weight: normal;
        font-size: 30px;
        color: #eeeeee;
      }
      button {
        width: 134px;
        height: 38px;
        margin-top: 30px;
        font-size: 18px;
        padding: 0;
        color: #eeeeee;
        border: none;
        border-radius: 20px;
        background-color: #359b3a;
      }
    }
  }
  .content {
    background-color: #434343;
    .warp {
      padding-top: 50px;
      min-height: 236px;
      .right {
        float: right;
        .ico {
          width: 120px;
          height: 120px;
          margin: 0 auto;
          img {
            width: 100%;
          }
        }
        p {
          font-size: 14px;
          line-height: 32px;
          text-align: center;
          color: #98989e;
        }
      }
      .left {
        float: left;
        h6 {
          font-size: 14px;
          line-height: 26px;
          color: #c0c0cb;
        }
        p {
          font-size: 14px;
          line-height: 24px;
          color: #98989e;
          &:nth-child(2) {
            margin-bottom: 20px;
          }
        }
      }
      .center {
        display: flex;
        justify-content: space-around;
        max-width: 900px;
        margin: 0 auto;
        ul {
          li {
            cursor: pointer;
            font-size: 14px;
            line-height: 26px;
            &:first-child {
              cursor: default;
              margin-bottom: 15px;
              font-size: 16px;
              font-weight: bold;
              color: #c0c0cb;
            }
            a {
              color: #98989e;
            }
          }
        }
      }
    }
  }
  .copyRight {
    height: 62px;
    line-height: 62px;
    font-size: 14px;
    color: #98989e;
    text-align: center;
    background-color: #2d2d2d;
    a {
      color: #98989e;
    }
  }
}
</style>
