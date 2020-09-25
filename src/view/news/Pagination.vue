<template>
  <div id="pagination">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="pageNum"
      :pager-count="5"
      :hide-on-single-page="true"
      prev-text="上一页"
      next-text="下一页"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 1,
    },
    pageNum: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    },
  },
};
</script>

<style lang="less" scoped>
#pagination {
  padding-top: 10px;
  text-align: right;
  /deep/.el-pagination {
    .btn-prev,
    .btn-next {
      min-width: 72px;
      height: 34px;
      padding: 0 15px;
      border-radius: 0;
      border: 1px solid #eeeeee;
      background-color: #fff;
      span {
        height: auto;
        line-height: 34px;
        font-size: 14px;
        color: #666;
      }
    }
    .el-pager {
      li {
        width: 42px;
        height: 34px;
        line-height: 34px;
        font-size: 14px;
        color: #333;
        border-radius: 0;
        border: 1px solid #eeeeee;
        background-color: #fff;
      }
      .more::before {
        line-height: normal;
      }
      li.active {
        color: #fff;
        background-color: #359b3a;
      }
    }
  }
}
</style>