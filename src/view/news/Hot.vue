<template>
  <div id="hot">
    <div class="title">
      <span>{{articleTitle}}</span>
    </div>
    <ul>
      <li v-for="(item, i) in articleList" :key="i">
        <span @click="toDetails(item)">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Hot",
  data() {
    return {};
  },
  props: {
    articleList: {
      type: Array,
      default: () => [],
    },
    articleTitle: {
      type: String,
      default: "热门文章",
    },
  },
  methods: {
    toDetails(item) {
      const detialsUrl = this.$router.resolve({
        path: `/details/${item.id}`,
      });
      window.open(detialsUrl.href, "_blank");
      // this.$emit("getDetails", item.id);
    },
  },
};
</script>

<style lang="less" scoped>
#hot {
  margin-bottom: 40px;
  .title {
    height: 26px;
    border-bottom: 4px solid #359b3a;
    span {
      // display: inline-block;
      height: 100%;
      margin-left: 10px;
      font-size: 16px;
      font-weight: bold;
      line-height: 23px;
      color: #333;
      border-bottom: 4px solid #ff5400;
    }
  }
  ul {
    li {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 1; /* 这是两行，多少行自己换个数字就是了 */
      height: 54px;
      font-size: 14px;
      line-height: 54px;
      color: #666;
      border-bottom: 1px dotted #dddddd;
      span {
        cursor: pointer;
      }
    }
  }
}
</style>