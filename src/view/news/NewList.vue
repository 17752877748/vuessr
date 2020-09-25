<template>
  <div id="newList">
    <div class="list" v-for="(item, i) in articleList" :key="i">
      <div class="text">
        <h3 @click="getDetails(item)">{{item.name}}</h3>
        <p @click="getDetails(item)">{{item.content}}</p>
        <div>
          <span>{{item.releasetime}}</span>
          <span>
            &nbsp;&nbsp;&nbsp;已有
            <span class="color">{{item.readcount}}</span>
            人阅读此文
          </span>
        </div>
      </div>
      <div class="pic" @click="getDetails(item)">
        <img :src="$BASE_OBJ.WEB_URL + item.imgurl" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewList",
  props: {
    articleList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getDetails(item) {
      const detailsUrl = this.$router.resolve({
        path: `/details/${item.id}`,
      });
      window.open(detailsUrl.href, "_blank");
    },
  },
};
</script>

<style lang="less" scoped>
#newList {
  min-height: 800px;
  .list {
    box-sizing: border-box;
    display: flex;
    height: 211px;
    padding: 10px 10px 20px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #eeeeee;
    .pic {
      cursor: pointer;
      overflow: hidden;
      width: 274px;
      height: 100%;
      margin-left: 60px;
      text-align: center;
      // background-color: #000;
      img {
        // max-width: 274px;
        width: 100%;
        height: 100%;
        // max-height: 180px;
        // line-height: 180px;
      }
    }
    .text {
      flex: 1;
      h3 {
        cursor: pointer;
        font-size: 22px;
        padding-top: 12px;
        font-weight: normal;
        color: #333333;
      }
      p {
        cursor: pointer;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        -webkit-line-clamp: 3; /* 这是两行，多少行自己换个数字就是了 */
        min-height: 60px;
        margin: 30px 0;
        font-size: 16px;
        line-height: 24px;
        color: #666666;
      }
      span {
        font-size: 14px;
        color: #999;
        .color {
          color: #ff5400;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  #newList {
    .list {
      .pic {
        margin-left: 30px;
      }
    }
  }
}
</style>