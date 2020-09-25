<template>
  <div id="aboutUs">
    <div class="banner">
      <FreeTrial :title="titleInfo"></FreeTrial>
    </div>
    <Title @btnChange="btnChange" :tabActive="tabActive" :titleText="titleText"></Title>
    <!-- 公司介绍 -->
    <div class="warp jieshao">
      <div class="content">
        <div class="pic">
          <img :src="$BASE_OBJ.WEB_URL + paragraph[0].imgurl" alt="清湖冷链" />
        </div>
        <div class="txt">
          <p v-for="(item, index) in paragraph" :key="index">{{item.content}}</p>
        </div>
      </div>
      <div class="relation">
        <h3>{{connectQIYE.name}}</h3>
        <div v-for="item in connectQIYE.columnItemList" :key="item.id">
          <!-- 左边图片 -->
          <div class="pic">
            <a :href="item.changeurl" target="_brank">
              <img :src="$BASE_OBJ.WEB_URL + item.imgurl" :alt="item.name" />
            </a>
          </div>
          <!-- 右边文字 -->
          <div class="txt">
            <h4>{{item.name}}</h4>
            <p>{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/Title";
import FreeTrial from "../home/FreeTrial";
export default {
  name: "aboutUs",
  data() {
    return {
      // 标题文字
      titleText: {
        title: "关于我们",
        column: [
          {
            name: "公司介绍",
            id: 1,
          },
          {
            name: "联系我们",
            id: 2,
          },
        ],
      },
      // 公司介绍/联系我们
      tabActive: 1,

      // titleInfo: {
      //   name: "关于我们",
      //   content: "",
      //   nameStyle: "font-size: 48px",
      //   contentStyle: "font-size: 18px",
      //   margin: "margin-bottom: 65px;",
      // },

      // 公司介绍段落
      // paragraph: [
      //   {
      //     content:
      //       "深圳市好鲜生科技有限公司（以下简称：好鲜生）是国内领先的冷链物流运输、仓储企业，以国际化的视野引领冷链物流商业模式与技术创新，结合物联网及智能硬件技术方案和产品，依托云计算、大数据、区块链等技术，励志为冷链物流客户提供世界级的专业服务。",
      //   },
      //   {
      //     content:
      //       "好鲜生结合20多年的冷链物流运输经验，汇聚一批知名互联网企业的技术团队，20年磨一剑，推出“冷链物流运输管理平台”。平台实现冷链物流管理全链条覆盖，手机端电脑端数据打通，单单清晰，完善全程追踪可视系统， 车辆与货物精准定位，温控预警实时掌握、运费一键结算，财务自动核销，完整的一站式解决方案，为冷链物流运输管理降本增效。",
      //   },
      //   {
      //     content:
      //       "好鲜生已经为沃尔玛、晨光、赛诺菲、华润万家、中国医药集团、本来生活、联合利华、永和大王、小肥羊等提供业界领先的数字化冷链物流服务。",
      //   },
      //   { content: "引领商业模式与技术创新，成就非凡，让企业大有不同！" },
      // ],

      // connectQIYE: {},
    };
  },
  components: {
    FreeTrial,
    Title,
  },
  asyncData({ store, route }) {
    // console.log("asyncData请求数据");
    return store.dispatch("homeInfo");
    // console.log("请求完毕");
  },
  created() {
    // this.getPageInfo();
  },
  mounted() {
    // this.getPageInfo();
  },
  computed: {
    paragraph() {
      return this.$store.state.homeData[5].columnItemList;
    },
    connectQIYE() {
      return this.$store.state.homeData[6];
    },
    titleInfo() {
      return {
        name: this.$store.state.homeData[5].name || '',
        content: this.$store.state.homeData[5].content,
        nameStyle: "font-size: 48px",
        contentStyle: "font-size: 18px",
        margin: "margin-bottom: 65px;",
      };
    },
  },
  methods: {
    btnChange(e) {
      if (e == 1) return;
      this.$router.push({
        path: "/contactWe",
      });
    },
    // 优先从本地获取,减少请求
    // getPageInfo() {
      // const PAGE_INFO = JSON.parse(localStorage.getItem("pageInfo"));
      // this.titleInfo.name = PAGE_INFO[5].name;
      // this.titleInfo.content = PAGE_INFO[5].content;
      // this.paragraph = PAGE_INFO[5].columnItemList;
      // this.connectQIYE = PAGE_INFO[6];
    // },
  },
};
</script>

<style lang="less" scoped>
#aboutUs {
  .banner {
    position: relative;
    height: 394px;
    background: url("../../assets/img/nei_banner_gy1.jpg") no-repeat center;
  }
  .jieshao {
    min-height: 820px;
    .content {
      display: flex;
      overflow: hidden;
      margin-bottom: 45px;
      padding-top: 66px;
      min-height: 348px;
      border-bottom: 1px solid #ddd;
      .pic {
        width: 482px;
        // height: 314px;
        text-align: center;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      .txt {
        flex: 1;
        // width: 927px;
        padding-left: 31px;
        p {
          padding-bottom: 15px;
          // display: -webkit-box;
          // overflow: hidden;
          // text-overflow: ellipsis;
          /*! autoprefixer: off */
          // -webkit-box-orient: vertical;
          /* autoprefixer: on */
          // -webkit-line-clamp: 11; /* 这是两行，多少行自己换个数字就是了 */

          font-size: 16px;
          line-height: 30px;
          color: #666;
        }
      }
    }
    .relation {
      h3 {
        margin-bottom: 28px;
        font-size: 24px;
        font-weight: normal;
        color: #444444;
      }
      > div {
        display: flex;
        margin-bottom: 40px;
        .pic {
          width: 190px;
          min-width: 190px;
          height: 76px;
          margin-right: 21px;
          text-align: center;
          border: solid 1px #eeeeee;
          img {
            max-width: 190px;
            max-height: 76px;
          }
        }
        .txt {
          h4 {
            font-size: 16px;
            line-height: 22px;
            margin-bottom: 5px;
            color: #444444;
          }
          p {
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
            -webkit-line-clamp: 2; /* 这是两行，多少行自己换个数字就是了 */
            font-size: 14px;
            line-height: 24px;
            color: #666666;
          }
        }
      }
    }
  }
}
</style>