<template>
  <div id="core">
    <div class="warp">
      <h2 data-aos="fade-up">{{coreList.name}}</h2>
      <p data-aos="fade-up">{{coreList.content}}</p>
      <div class="content">
        <div
          v-for="(item, index) in coreList.columnItemList"
          :key="item.id"
          data-aos="fade-right"
          :data-aos-delay="index * 100"
        >
          <div class="ico">
            <img :src="$BASE_OBJ.WEB_URL + item.imgurl" :alt="item.name" />
          </div>
          <h6>{{item.name}}</h6>
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Core",
  props: {
    coreList: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="less" scoped>
#core {
  height: 947px;
  padding-top: 100px;
  .warp {
    h2 {
      font-size: 36px;
      font-weight: normal;
      // line-height: 0.18px;
      text-align: center;
      color: #333333;
    }
    > p {
      padding: 20px 0 50px;
      font-size: 15px;
      line-height: 18px;
      text-align: center;
      color: #999999;
    }
    .content {
      max-width: 1440px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-right: -100px;
      > div {
        width: 346px;
        height: 180px;
        margin-right: 100px;
        margin-bottom: 60px;
        text-align: center;
        .ico {
          height: 100px;
          line-height: 100px;
          img {
            height: 48px;
          }
        }
        h6 {
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 14px;
          color: #333333;
        }
        p {
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          -webkit-line-clamp: 2; /* 这是两行，多少行自己换个数字就是了 */
          font-size: 15px;
          line-height: 22px;
          color: #666666;
        }
      }
    }
  }
}
@media screen and (max-width: 1440px) {
  #core {
    .warp {
      .content {
        margin-right: 0;
        > div {
          margin-right: 0;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  #core {
    .warp {
      .content {
        > div {
          width: 270px;
        }
      }
    }
  }
}
</style>