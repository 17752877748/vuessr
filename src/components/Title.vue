<template>
  <div id="title">
    <div class="warp">
      <h2>{{titleText.title}}</h2>
      <div class="right">
        <span
          v-for="item in titleText.column"
          :key="item.id"
          :class="{current: tabActive == item.id}"
          @click="$emit('btnChange', item.id)"
        >{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {};
  },
  props: {
    titleText: {
      type: Object,
      default: () => {},
    },
    tabActive: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="less" scoped>
#title {
  background-color: #f6f6f6;
  .warp {
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333333;
    h2 {
      font-size: 24px;
      font-weight: normal;
    }
    .right {
      height: 100%;
      span {
        cursor: pointer;
        display: inline-block;
        width: 102px;
        height: 100%;
        line-height: 68px;
        text-align: center;
        font-size: 16px;
        color: #333;
      }
      .current {
        color: #fff;
        background-color: #359b3a;
      }
    }
  }
}
</style>