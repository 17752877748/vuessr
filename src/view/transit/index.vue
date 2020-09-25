<template>
  <div id="transit">
    <div class="banner">
      <FreeTrial :title="titleInfo" @ondialog="dialogVisible = $event"></FreeTrial>
      <Apply :dialogVisible.sync="dialogVisible"></Apply>
    </div>
    <div class="content">页面建设中</div>
  </div>
</template>

<script>
// 
// 
// 
// 
// 
// 
// 
// 
// # 此页面未做适配,开放时需再次开发.
// 
// 
// 
// 
// 
// 
// 
import FreeTrial from "../home/FreeTrial";
import Apply from "../../components/Apply";
export default {
  name: "transit",
  data() {
    return {
      titleInfo: {
        title: "运驿多",
        note: "合作与共赢，始终是我们内在的驱动力",
        titleStyle: "font-size: 48px",
        noteStyle: "font-size: 18px",
        pad: "margin-bottom: 65px;",
      },
      dialogVisible: false,
    };
  },
  components: {
    FreeTrial,
    Apply,
  },
};
</script>

<style lang="less" scoped>
#transit {
  .banner {
    position: relative;
    height: 394px;
    background: url("../../assets/img/nei_banner_yyd.jpg") no-repeat center;
  }
  .content {
    height: 580px;
    line-height: 580px;
    font-size: 36px;
    text-align: center;
  }
}
</style>