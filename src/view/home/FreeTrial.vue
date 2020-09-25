<template>
  <div id="freeTrial">
    <div class="title" :style="title.margin">
      <h2 v-if="title.name" :style="title.nameStyle">{{title.name}}</h2>
      <p v-if="title.content" :style="title.contentStyle">{{title.content}}</p>
    </div>
    <div class="btns" v-if="btnShow">
      <button type="button" class="btn btn-default" @click="$emit('ondialog', true)">免费试用</button>
      <button type="button" class="btn btn-default" @click="details()">了解详情</button>
    </div>
  </div>
</template>

<script>
export default {
  naem: "FreeTrial",
  data() {
    return {
      dialogVisible: false,
    };
  },
  props: {
    // 文字
    title: {
      type: Object,
      default: () => {
        return {
          name: "",
          content: "",
          nameStyle: "",
          contentStyle: "",
          margin: "",
        };
      },
    },
    // 按钮显示
    btnShow: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    details() {
      if (this.$router.currentRoute.path == "/product") return;
      this.$router.push({
        path: "/product",
      });
    },
  },
};
</script>

<style lang="less" scoped>
#freeTrial {
  position: absolute;
  //   top: 196px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  .title {
    min-height: 136px;
    margin-bottom: 92px;
    text-align: center;
    color: #ffffff;
    h2 {
      font-size: 72px;
    }
    p {
      padding-top: 38px;
      font-size: 30px;
    }
  }
  .btns {
    text-align: center;
    button {
      min-width: 142px;
      height: 40px;
      padding: 0;
      font-size: 18px;
      color: #fff;
      border-radius: 20px;
      border: none;
      &:first-child {
        background-color: #ff5400;
      }
      &:last-child {
        margin-left: 20px;
        background-color: #359b3a;
      }
    }
  }
}
</style>