<template>
  <div id="case">
    <div class="banner">
      <FreeTrial :title="titleInfo" @ondialog="dialogVisible = $event"></FreeTrial>
      <Apply :dialogVisible.sync="dialogVisible"></Apply>
    </div>
    <Partners :partnersData="partnersData"></Partners>
  </div>
</template>

<script>
import FreeTrial from "../home/FreeTrial";
import Partners from "../home/Partners";
import Apply from "../../components/Apply";
export default {
  name: "case",
  data() {
    return {
      // titleInfo: {
      //   name: "客户案例",
      //   content: "合作与共赢，始终是我们内在的驱动力",
      //   nameStyle: "font-size: 48px",
      //   contentStyle: "font-size: 18px",
      //   margin: "margin-bottom: 65px;",
      // },
      dialogVisible: false,

      // 合作伙伴
      // partnersData: {},
    };
  },
  components: {
    FreeTrial,
    Partners,
    Apply,
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
    partnersData() {
      return this.$store.state.homeData[8];
    },
    titleInfo() {
      return {
        name: this.$store.state.homeData[4].name,
        content: this.$store.state.homeData[4].content,
        nameStyle: "font-size: 48px",
        contentStyle: "font-size: 18px",
        margin: "margin-bottom: 65px;",
      };
    }
  },
  methods: {
    // 优先从本地获取,减少请求
    // getPageInfo() {
      // const PAGE_INFO = JSON.parse(localStorage.getItem("pageInfo"));
      // this.partnersData = PAGE_INFO[8];
      // this.titleInfo.name = PAGE_INFO[4].name;
      // this.titleInfo.content = PAGE_INFO[4].content;
    // },
  },
};
</script>

<style lang="less" scoped>
#case {
  .banner {
    position: relative;
    height: 394px;
    background: url("../../assets/img/bannerCase.jpg") no-repeat center;
  }
}
</style>