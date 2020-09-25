<template>
  <div id="home" v-loading="loading">
    <div class="banner">
      <!-- 轮播图 -->
      <div id="swiper" class="container-fuild">
        <div class="swiper-container banner-swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in swiperList"
              :key="index"
            >
              <img
                class="swiper-lazy"
                :src="$BASE_OBJ.WEB_URL + item.imgurl"
                alt="轮播图"
              />
              <!-- :data-src="item.img" -->
              <!-- <div class="swiper-lazy-preloader"></div> -->
              <div class="swiper-slide-title">
                <!-- swiper-animate-effect="fadeInDown" -->
                <h1>{{ item.name }}</h1>
                <p>{{ item.content }}</p>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>-->
        </div>
      </div>

      <!-- 标题+按钮 -->
      <FreeTrial @ondialog="dialogVisible = $event" :btnShow="true"></FreeTrial>
      <!-- 留言弹窗 -->
      <Apply :dialogVisible.sync="dialogVisible"></Apply>
    </div>
    <!-- 业务场景 -->
    <Business :businessList="businessList"></Business>
    <!-- 核心模块 -->
    <Core :coreList="coreList"></Core>
    <!-- 数据展示 -->
    <DataDisplay :dataDisplayList="dataDisplayList"></DataDisplay>
    <!-- 合作伙伴 -->
    <Partners :partnersData="partnersData"></Partners>
  </div>
</template>

<script>
import Business from "./Business";
import Core from "./Core";
import DataDisplay from "./DataDisplay";
import Partners from "./Partners";
import FreeTrial from "./FreeTrial";
import Apply from "../../components/Apply";
// import Swiper from "swiper";
export default {
  name: "home",
  data() {
    return {
      loading: false,
      // 设置当前轮播动画
      flag: 1,
      // 在线申请
      dialogVisible: false,

      // 业务场景
      // businessList: {
      //   content: "20年业务实践应运而生的TMS运输管理平台",
      //   name: "业务场景",
      //   columnItemList: [
      //     {
      //       id: 2,
      //       imgurl: "/file/2020/8/24/58836311.png",
      //       name: "全流程智能追踪",
      //       content:
      //         "以NB-IoT窄带物联网技术，精准定位追踪车辆，实时上报位置、时效、温控异常等信息，实现“一单到底”。",
      //     },
      //     {
      //       id: 3,
      //       imgurl: "/file/2020/8/24/56840424.png",
      //       name: "智能运输调度",
      //       content:
      //         "基于预设规则，结合路径优化引擎，自动匹配车源，优化运输路线，实现智能物流配送等能力。",
      //     },
      //     {
      //       id: 13,
      //       imgurl: "/file/2020/8/24/88040131.png",
      //       name: "自动化结算",
      //       content:
      //         "上下游承运商运费分段管理，利用强力的计算引擎，自动生成对账单，批量自动结算，大幅减少财务压力，提升效率，节省成本。",
      //     },
      //     {
      //       id: 14,
      //       imgurl: "/file/2020/8/24/24603781.png",
      //       name: "数据可视化分析",
      //       content:
      //         "完善的数据管理体系，各类报表多维度关联分析，并通过数据看板以可视化动态图文的形式实时呈现，为企业决策提供有力依据。",
      //     },
      //   ],
      // },
      // 核心模块
      // coreList: {
      //   name: "核心模块",
      //   content: "高体验的核心功能模块，让你的企业立即迈入互联网物流生态时代",
      //   columnItemList: [
      //     {
      //       id: 5,
      //       imgurl: "/file/2020/8/24/74856613.png",
      //       name: "订单管理",
      //       content: "支持手动导入及模板导入，支持多种业务系统的数据接口集成",
      //     },
      //     {
      //       id: 7,
      //       imgurl: "/file/2020/8/24/72688137.png",
      //       name: "订单管理",
      //       content: "支持手动导入及模板导入，支持多种业务系统的数据接口集成",
      //     },
      //     {
      //       id: 15,
      //       imgurl: "/file/2020/8/24/41111006.png",
      //       name: "订单管理",
      //       content: "支持手动导入及模板导入，支持多种业务系统的数据接口集成",
      //     },
      //     {
      //       id: 16,
      //       imgurl: "/file/2020/8/24/05576033.png",
      //       name: "订单管理",
      //       content: "支持手动导入及模板导入，支持多种业务系统的数据接口集成",
      //     },
      //     {
      //       id: 17,
      //       imgurl: "/file/2020/8/24/70431432.png",
      //       name: "订单管理",
      //       content: "支持手动导入及模板导入，支持多种业务系统的数据接口集成",
      //     },
      //     {
      //       id: 26,
      //       imgurl: "/file/2020/8/24/14304021.png",
      //       name: "订单管理",
      //       content: "支持手动导入及模板导入，支持多种业务系统的数据接口集成",
      //     },
      //     {
      //       id: 27,
      //       imgurl: "/file/2020/8/24/17040643.png",
      //       name: "订单管理",
      //       content: "支持手动导入及模板导入，支持多种业务系统的数据接口集成",
      //     },
      //     {
      //       id: 28,
      //       imgurl: "/file/2020/8/24/44685135.png",
      //       name: "订单管理",
      //       content: "支持手动导入及模板导入，支持多种业务系统的数据接口集成",
      //     },
      //     {
      //       id: 29,
      //       imgurl: "/file/2020/8/24/46163346.png",
      //       name: "订单管理",
      //       content: "支持手动导入及模板导入，支持多种业务系统的数据接口集成",
      //     },
      //   ],
      // },
      // 数据百分比
      // dataDisplayList: {},
      // 合作伙伴
      // partnersData: {},

      // swiperList: [],
    };
  },
  components: {
    Business,
    Core,
    DataDisplay,
    Partners,
    FreeTrial,
    Apply,
  },
  asyncData({ store, route }) {
    // console.log("asyncData请求数据");
    return store.dispatch("homeInfo");
    // console.log("请求完毕");
  },
  computed: {
    swiperList() {
      return this.$store.state.homeData[9].columnItemList;
    },
    partnersData() {
      return this.$store.state.homeData[8];
    },
    coreList() {
      return this.$store.state.homeData[1];
    },
    businessList() {
      return this.$store.state.homeData[0];
    },
    dataDisplayList() {
      let dataDisplayList = Object.assign({}, this.$store.state.homeData[2]);
      let arr = this.$store.state.homeData[2].columnItemList;
      let newArr = [
        [arr[0], arr[1]],
        [arr[2], arr[3]],
        [arr[4], arr[5]],
      ];
      dataDisplayList.columnItemList = newArr;
      return dataDisplayList;
    },
  },
  created() {
    // this.getPageInfo();
  },
  mounted() {
    console.log(this.$store.state);

    const AOS = require("aos");
    AOS.init();

    const Swiper = require("swiper");
    const _this = this;
    /* swiper-container */
    new Swiper(".swiper-container", {
      // direction: 'horizontal',
      loop: true, // 循环模式选项
      // effect: "fade",
      //自动播放
      autoplay: 3000, // 可选选项，自动滑动
      autoplayDisableOnInteraction: false, // 用户操作后是否禁止autoplay
      // 如果需要分页器
      pagination: ".swiper-pagination",
      paginationType: "bullets",
      paginationClickable: true,
      lazyPreloaderClass: "my-lazy-preloader",
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
    });
  },
  methods: {
    // 获取首页信息
    // getPageInfo() {
    //   this.loading = true;
    //   const PAGE_INFO = JSON.parse(localStorage.getItem("pageInfo"));
    // let res = await getHomeInfo({ cid: 59 });
    // console.log(res);
    //   this.businessList = PAGE_INFO[0];
    //   this.coreList = PAGE_INFO[1];
    //   this.partnersData = PAGE_INFO[8];
    //   this.swiperList = PAGE_INFO[9].columnItemList;
    //   this.dataDisplayList = PAGE_INFO[2];
    //   let arr = PAGE_INFO[2].columnItemList;
    //   // console.log(arr);
    //   arr = [
    //     [].concat(arr[0], arr[1]),
    //     [].concat(arr[2], arr[3]),
    //     [].concat(arr[4], arr[5]),
    //   ];
    //   this.dataDisplayList.columnItemList = arr;
    //   this.loading = false;
    //   // console.log(arr);
    // },
  },
};
</script>

<style lang="less" scoped>
#home {
  min-height: 100%;
  .banner {
    position: relative;
    height: 600px;
    background-color: #ddd;
    /* 轮播图 */
    #swiper {
      height: 600px;
    }
    #swiper .banner-swiper {
      width: 100%;
      height: 100%;
    }
    // #swiper .banner-swiper .swiper-slide img {
    //   width: 100%;
    //   height: 100%;
    // }
    #swiper .banner-swiper .swiper-slide {
      position: relative;
    }
    #swiper .banner-swiper .swiper-slide-title {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999999999;
      width: 100%;
      height: 100%;
      color: #fff;
      background: rgba(51, 51, 51, 0.534);
      text-align: center;
      // line-height: 80px;
    }
    #swiper .banner-swiper .swiper-slide-title > h1 {
      font-size: 72px;
      font-weight: bold;
      margin-top: 200px;
    }
    #swiper .banner-swiper .swiper-slide-title > p {
      font-size: 30px;
      margin-top: 2%;
    }
    /deep/#swiper {
      .swiper-container {
        .swiper-pagination {
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background-color: #ffffff;
            opacity: 0.8;
            margin: 0 5px;
          }
          .swiper-pagination-bullet-active {
            background-color: #ff5400;
          }
        }
        .swiper-slide {
          text-align: center;
          opacity: 0;
        }
        .swiper-slide.swiper-slide-active {
          opacity: 1;
          h1,
          p {
            // animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
            animation: fadeInDown; /* referring directly to the animation's @keyframe declaration */
          }
          p {
            animation-duration: 1s;
          }
          h1 {
            animation-duration: 1.5s;
          }
        }
      }
    }
  }
}
</style>