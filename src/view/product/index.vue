<template>
  <div id="product" v-loading="loading">
    <div class="banner">
      <FreeTrial
        :title="titleInfo"
        @ondialog="dialogVisible = $event"
      ></FreeTrial>
      <Apply :dialogVisible.sync="dialogVisible"></Apply>
    </div>
    <div
      :class="index % 2 == 0 ? 'content1' : 'content2'"
      v-for="(item, index) in productList"
      :key="index"
    >
      <div class="warp" :style="index % 2 != 0 && 'flex-flow: row-reverse;'">
        <div
          class="text"
          :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'"
        >
          <h5>{{ item.name }}</h5>
          <p>{{ item.content }}</p>
          <button
            type="button"
            class="btn btn-default"
            @click="dialogVisible = true"
          >
            免费试用
          </button>
        </div>
        <div
          class="pic"
          :data-aos="index % 2 != 0 ? 'fade-right' : 'fade-left'"
        >
          <img :src="$BASE_OBJ.WEB_URL + item.imgurl" :alt="item.name" />
        </div>
      </div>
    </div>
    <Core :coreList="coreList"></Core>
  </div>
</template>

<script>
import FreeTrial from "../home/FreeTrial";
import Apply from "../../components/Apply";
import Core from "../home/Core";

// import { getHomeInfo } from "../../api/home";
export default {
  data() {
    return {
      loading: false,

      // titleInfo: {
      //   name: "产品介绍",
      //   content: "合作与共赢，始终是我们内在的驱动力",
      //   nameStyle: "font-size: 48px",
      //   contentStyle: "font-size: 18px",
      //   margin: "margin-bottom: 65px;",
      // },
      dialogVisible: false,
      // 核心模块
      // coreList: {},

      // 产品介绍
      // productList: []
    };
  },
  components: {
    FreeTrial,
    Apply,
    Core,
  },
  asyncData({ store, route }) {
    // console.log("asyncData请求数据");
    return store.dispatch("homeInfo");
    // console.log("请求完毕");
  },
  created() {
    // this.$AOS.init();
    // this.getPageInfo();
  },
  mounted() {
    const AOS = require("aos");
    AOS.init();
    // this.getPageInfo();
  },
  computed: {
    coreList() {
      return this.$store.state.homeData[1];
    },
    productList() {
      return this.$store.state.homeData[3].columnItemList;
    },
    titleInfo() {
      return {
        name: this.$store.state.homeData[3].name,
        content: this.$store.state.homeData[3].content,
        nameStyle: "font-size: 48px",
        contentStyle: "font-size: 18px",
        margin: "margin-bottom: 65px;",
      };
    },
  },
  methods: {
    // getPageInfo() {
    // this.loading = true;
    // let res = await getHomeInfo({ cid: 59 });
    // const PAGE_INFO = JSON.parse(localStorage.getItem("pageInfo"));
    // console.log(res);
    // this.coreList = PAGE_INFO[1];
    // this.titleInfo.name = PAGE_INFO[3].name;
    // this.titleInfo.content = PAGE_INFO[3].content;
    // this.productList = PAGE_INFO[3].columnItemList;
    // this.loading = false;
    // },
  },
};
</script>

<style lang="less" scoped>
#product {
  .banner {
    position: relative;
    height: 394px;
    background: url("../../assets/img/nei_banner_cp.jpg") no-repeat center;
  }
  .content1,
  .content2 {
    height: 666px;
    .warp {
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      padding-top: 100px;
      .pic {
        width: 514px;
        // height: 484px;
        img {
          width: 100%;
        }
      }
      .text {
        // width: 656px;
        flex: 1;
        h5 {
          margin: 80px 0 48px;
          font-size: 24px;
          color: #333333;
        }
        p {
          margin-bottom: 13px;
          height: 130px;
          font-size: 16px;
          line-height: 30px;
          color: #666666;
        }
        button {
          padding: 0;
          width: 122px;
          height: 38px;
          font-size: 16px;
          color: #fff;
          border-radius: 20px;
          background-color: #ff5400;
        }
      }
    }
  }
  .content1 {
    .warp {
      padding-right: 100px;
      .text {
        margin-right: 170px;
      }
    }
  }
  .content2 {
    background-color: #f7f7f7;
    .warp {
      padding-left: 100px;
      .text {
        margin-left: 170px;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  #product {
    .content1,
    .content2 {
      .warp {
        .pic {
          width: 400px;
        }
      }
    }
  }
}
</style>