<template>
  <div id="dataDisplay">
    <!-- 背景动画 -->
    <ul class="bg">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <!--  -->
    <div class="warp">
      <div class="title">
        <h2 data-aos="fade-up">{{dataDisplayList.name}}</h2>
        <p data-aos="fade-up">{{dataDisplayList.content}}</p>
      </div>
      <div class="kpi">
        <div v-for="(item, index) in dataDisplayList.columnItemList" :key="item.id" data-aos="fade-up" :data-aos-delay="index * 100">
          <div>
            <p>
              <span>{{item[0].name}}</span>%
            </p>
            <span>{{item[0].content}}</span>
          </div>
          <div>
            <p>
              <span>{{item[1].name}}</span>%
            </p>
            <span>{{item[1].content}}</span>
          </div>
        </div>
      </div>
      <div class="note">
        <span data-aos="fade-up">降本增效</span>
        <span data-aos="fade-up" data-aos-delay="100">KPI绩效监测</span>
        <span data-aos="fade-up" data-aos-delay="200">智慧运营</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    dataDisplayList: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    console.log(this.dataDisplayList);
  },
};
</script>

<style lang="less" scoped>
@keyframes circle {
  0% {
    width: 60px;
    height: 60px;
    opacity: 0;
  }
  1% {
    width: 60px;
    height: 60px;
    opacity: 0.3;
  }
  100% {
    width: 1600px;
    height: 1600px;
    opacity: 0;
  }
}
#dataDisplay {
  position: relative;
  height: 508px;
  background-color: #393939;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 100%;
    height: 1px;
    transform: scaleY(0.4);
    opacity: 0.2;
    background-color: #fff;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 50%;
    transform: scaleX(0.4);
    opacity: 0.2;
    background-color: #fff;
  }
  .bg {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -375px;
    width: 750px;
    height: 100%;
    z-index: 1;
    li {
      position: absolute;
      border-radius: 50%;
      border: 1px solid #fff;
      transform: scale(0.5);
      &:first-child {
        width: 60px;
        height: 60px;
        border: none;
        z-index: 999;
        background: url("../../assets/img/yanjing.png") no-repeat 40% 50%;
        background-size: 80%;
        background-color: #ff5400;
      }
      &:nth-child(2) {
        animation: circle 18s ease-in 0s infinite;
      }
      &:nth-child(3) {
        animation: circle 18s ease-in 3s infinite;
      }
      &:nth-child(4) {
        animation: circle 18s ease-in 6s infinite;
      }
      &:nth-child(5) {
        animation: circle 18s ease-in 9s infinite;
      }
      &:nth-child(6) {
        animation: circle 18s ease-in 12s infinite;
      }
      &:nth-child(7) {
        animation: circle 18s ease-in 15s infinite;
      }
    }
  }
  .warp {
    position: relative;
    z-index: 999;
    height: 100%;
    .title {
      padding-top: 85px;
      text-align: center;
      h2 {
        font-size: 36px;
        font-weight: normal;
        color: #ffffff;
      }
      p {
        padding: 30px 0 106px;
        font-size: 16px;
        line-height: 18px;
        color: #999999;
      }
    }
    .kpi {
      display: flex;
      justify-content: space-between;
      padding: 0 100px;
      > div {
        display: flex;
        justify-content: space-between;
        width: 300px;
        text-align: center;
        color: #ffffff;
        p {
          padding-bottom: 20px;
          font-size: 16px;
          span {
            font-size: 36px;
          }
        }
        span {
          font-size: 14px;
        }
      }
    }
    .note {
      display: flex;
      justify-content: space-around;
      margin-top: 40px;
      span {
        display: inline-block;
        padding: 5px 0;
        font-size: 20px;
        border-bottom: 3px solid #359b3a;
        color: #fff;
      }
    }
  }
}
@media screen and (max-width: 1440px) {
  #dataDisplay {
    .warp {
      .kpi {
        padding: 0;
      }
      .note {
        justify-content: space-between;
        padding: 0 100px;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  #dataDisplay {
    .warp {
      .kpi {
        >div {
          width: 250px;
        }
      }
      .note {
        justify-content: space-between;
        padding: 0 80px;
      }
    }
  }
}
</style>