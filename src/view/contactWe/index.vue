<template>
  <div id="aboutUs">
    <div class="banner">
      <FreeTrial :title="titleInfo" @ondialog="dialogVisible = $event" :btnShow="true"></FreeTrial>
      <Apply :dialogVisible.sync="dialogVisible"></Apply>
    </div>
    <Title @btnChange="btnChange" :tabActive="tabActive" :titleText="titleText"></Title>

    <!-- 联系我们 -->
    <div class="warp lianxi">
      <div class="top">
        <div class="code">
          <img src="../../assets/img/lxwm_erweima.png" alt="好鲜生" />
        </div>
        <div class="contact">
          <h5>全国服务热线</h5>
          <p>如有任何疑问请联系我们，我们7*24小时竭诚为您服务</p>
          <div class="phone">4008-066-199</div>
          <div>
            <p>地址：深圳市龙华区清祥路23号德信昌大厦</p>
            <p>网址：http://www.51hxs.com</p>
            <p>客户：0755-85247605 / 13342951777</p>
            <p>邮编：518000</p>
            <p>邮箱：jiangyongheng@szdexinchang.com</p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <h5>全国子公司分布</h5>
        <div class="banner2">
          <div>
            <span>北京</span>
          </div>
          <div>
            <span>上海</span>
          </div>
          <div>
            <span>武汉</span>
          </div>
          <div>
            <span>广州</span>
          </div>
          <div>
            <span>成都</span>
          </div>
          <div>
            <span>福州</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/Title";
import FreeTrial from "../home/FreeTrial";
import Apply from "../../components/Apply";
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
      tabActive: 2,
      // banner区内容
      titleInfo: {
        name: "联系我们",
        content: "",
        nameStyle: "font-size: 48px",
        contentStyle: "font-size: 18px",
        margin: "margin-bottom: 65px;",
      },
      dialogVisible: false,
    };
  },
  components: {
    Title,
    FreeTrial,
    Apply,
  },
  methods: {
    btnChange(e) {
      if (e == 2) return;
      this.$router.push({
        path: "/aboutUs",
      });
    },
  },
};
</script>

<style lang="less" scoped>
#aboutUs {
  .banner {
    position: relative;
    height: 394px;
    background: url("../../assets/img/nei_banner_gy2.jpg") no-repeat center;
  }
  .lianxi {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 94px;
    min-height: 820px;
    .top {
      display: flex;
      width: 788px;
      height: 449px;
      .code {
        width: 284px;
        height: 343px;
        margin: -11px 94px 0 -11px;
        img {
          width: 100%;
        }
      }
      .contact {
        flex: 1;
        h5 {
          font-size: 24px;
          font-weight: normal;
          color: #333;
        }
        > p {
          padding: 30px 0 24px;
          font-size: 14px;
          color: #999999;
        }
        .phone {
          margin-bottom: 31px;
          font-size: 48px;
          color: #333333;
        }
        > div {
          > p {
            font-size: 16px;
            line-height: 36px;
            color: #666666;
          }
        }
      }
    }
    .bottom {
      width: 100%;
      flex: 1;
      height: 100px;
      h5 {
        font-size: 24px;
        font-weight: normal;
        text-align: center;
        color: #333333;
      }
      .banner2 {
        display: flex;
        justify-content: space-between;
        margin-top: 60px;
        > div {
          position: relative;
          // width: 214px;
          width: 14.8%;
          height: 114px;
          span {
            position: absolute;
            left: 50%;
            bottom: 22px;
            transform: translateX(-50%);
            font-size: 18px;
            font-weight: bold;
            color: #ffffff;
          }
          &:first-child {
            background: url("../../assets/img/c_bj.jpg") no-repeat center;
          }
          &:nth-child(2) {
            background: url("../../assets/img/c_sh.jpg") no-repeat center;
          }
          &:nth-child(3) {
            background: url("../../assets/img/c_wh.jpg") no-repeat center;
          }
          &:nth-child(4) {
            background: url("../../assets/img/c_gz.jpg") no-repeat center;
          }
          &:nth-child(5) {
            background: url("../../assets/img/c_cd.jpg") no-repeat center;
          }
          &:last-child {
            background: url("../../assets/img/c_fz.jpg") no-repeat center;
          }
        }
      }
    }
  }
}
</style>