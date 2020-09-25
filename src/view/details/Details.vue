<template>
  <div id="details">
    <h3>{{detailsObj.article.name || ''}}</h3>
    <p class="date">
      <span>{{detailsObj.article.releasetime || ''}}</span>
      <span>
        &nbsp;&nbsp;&nbsp;已有
        <span class="color">{{detailsObj.article.readcount || ''}}</span>
        人阅读此文
      </span>
    </p>
    <div class="contentDetails" v-html="detailsObj.article.newscontent || ''"></div>
    <div class="other">
      <p v-if="detailsObj.articleUp.id" class="prev">
        上一篇:
        <span
          @click="$router.push(`/details/${detailsObj.articleUp.id}`)"
        >{{detailsObj.articleUp.name || ''}}</span>
      </p>
      <p v-if="detailsObj.articleDown.id" class="next">
        下一篇:
        <span
          @click="$router.push(`/details/${detailsObj.articleDown.id}`)"
        >{{detailsObj.articleDown.name || ''}}</span>
      </p>
      <button
        type="button"
        class="btn btn-default"
        @click="$router.push(`/news/${detailsObj.article.type}`)"
      >返回列表</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {};
  },
  props: {
    detailsObj: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="less" scoped>
#details {
  h3 {
    font-size: 22px;
    padding-bottom: 20px;
    font-weight: normal;
    color: #333333;
  }
  .date {
    span {
      font-size: 14px;
      color: #999;
      .color {
        color: #ff5400;
      }
    }
  }
  .contentDetails {
    min-height: 300px;
    padding: 44px 0 80px;
    margin-bottom: 48px;
    border-bottom: 1px solid #eeeeee;
  }
  .other {
    p {
      margin-bottom: 32px;
      font-size: 16px;
      span {
        cursor: pointer;
      }
    }
    .prev {
      color: #666;
    }
    .next {
      color: #359b3a;
    }
    .el-button {
      width: 114px;
      height: 38px;
      padding: 0;
      font-size: 14px;
      color: #999;
    }
  }
}
</style>
<style lang="less">
#details {
  .contentDetails {
    overflow: hidden;
    img {
      max-width: 100% !important;
    }
    div {
      max-width: 1030px !important;
    }
  }
}
@media screen and (max-width: 1440px) {
  #details {
    .contentDetails {
      div {
        max-width: 810px !important;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  #details {
    .contentDetails {
      div {
        max-width: 660px !important;
      }
    }
  }
}
</style>
