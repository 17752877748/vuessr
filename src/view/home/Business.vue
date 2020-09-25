<template>
  <div id="business">
    <div class="warp">
      <h2 data-aos="fade-up">{{businessList.name}}</h2>
      <p data-aos="fade-up">{{businessList.content}}</p>
      <ul>
        <li v-for="(item) in businessList.columnItemList" :key="item.id" data-aos="fade-up">
          <router-link to="/product"></router-link>
          <!-- <a href="#/product" target="_blank"></a> -->
          <div class="ico">
            <img :src="$BASE_OBJ.WEB_URL + item.imgurl" :alt="item.name" />
          </div>
          <h6>{{item.name}}</h6>
          <p>{{item.content}}</p>
          <div class="details">
            <span>查看详情</span>
            <img src="../../assets/img/enter.png" alt="enter" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Business",
  props: {
    businessList: {
      type: Object,
      default: () => {},
    },
  },
  created() {
  },
};
</script>

<style lang="less" sccoped>
#business {
  height: 606px;
  padding-top: 100px;
  background: url("../../assets/img/bg01.png") no-repeat top center;
  background-color: #f7f7f7;
  .warp {
    h2 {
      font-size: 36px;
      font-weight: normal;
      // line-height: 0.18px;
      text-align: center;
      color: #333333;
    }
    > p {
      padding: 20px 0 60px;
      font-size: 15px;
      line-height: 18px;
      text-align: center;
      color: #999999;
    }
    ul {
      display: flex;
      justify-content: space-between;
      li {
        transition: all 0.7s;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
        flex: 1;
        height: 315px;
        padding: 24px;
        margin-right: 35px;
        border-radius: 8px;
        background-color: #fff;
        &:last-child {
          margin-right: 0;
        }
        a {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
        }
        .ico {
          transition: all 0.7s;
          position: relative;
          margin-bottom: 28px;
          text-align: center;
          height: 106px;
          img {
            transition: all 0.7s;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 106px;
            height: 106px;
            border-radius: 50%;
          }
        }
        h6 {
          font-size: 16px;
          margin-bottom: 22px;
          color: #333333;
        }
        p {
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          -webkit-line-clamp: 3; /* 这是两行，多少行自己换个数字就是了 */
          min-height: 58px;
          font-size: 15px;
          line-height: 22px;
          color: #666666;
        }
        .details {
          transition: all 0.7s;
          margin-top: 33px;
          transform: translateY(50px);
          font-size: 14px;
          line-height: 14px;
          color: #ff5400;
          img {
            width: 13px;
            height: 12px;
          }
        }
        &:hover {
          box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
          .ico {
            height: 80px;
            img {
              left: 0;
              transform: translateX(0);
              width: 80px;
              height: 80px;
            }
          }
          .details {
            transform: translateY(0);
          }
        }
      }
    }
  }
}
</style>