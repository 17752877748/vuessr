<template>
  <div id="header">
    <div class="warp">
      <!-- logo -->
      <div class="logo">
        <h1>
          <a href="http://www.51hxs.com/">
            <img src="../assets/img/logo1.png" alt="深圳市好鲜生科技有限公司" />
          </a>
        </h1>
      </div>
      <!-- 联系电话 -->
      <div class="phone">
        <div class="ico">
          <img src="../assets/img/phone1.png" alt="phone" />
        </div>
        <span>4008-066-199</span>
        <button
          type="button"
          class="btn btn-default"
          @click="$emit('ondialog', true)"
        >
          产品试用
        </button>
      </div>
      <!-- 导航内容 -->
      <ul class="navBar">
        <li v-for="(item, index) in navList" :key="index">
          <router-link
            :to="
              item.path == '/news' ? `${item.path}/${isNews || 1}` : item.path
            "
            :class="{
              'router-link-active':
                (item.path == '/news' && active) ||
                (item.path == '/aboutUs' && aboutUs),
            }"
          >
            {{ item.title }}
            <i class="underline"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      // isNews: null,
      // 当前nav
      active: false,
      aboutUs: false,
      // nav
      navList: [
        {
          title: "首页",
          path: "/home",
          children: [],
        },
        {
          title: "产品介绍",
          path: "/product",
          children: [],
        },
        {
          title: "客户案例",
          path: "/case",
          children: [],
        },
        {
          title: "运驿多",
          path: "/transit",
          children: [],
        },
        {
          title: "关于我们",
          path: "/aboutUs",
          children: [],
        },
        {
          title: "新闻资讯",
          path: "/news",
          children: [],
        },
      ],
    };
  },
  created() {
    // const COLUMN = JSON.parse(localStorage.getItem("column"));
    // this.isNews = COLUMN[0].id;
  },
  mounted() {
    // const COLUMN = JSON.parse(localStorage.getItem("column"));
    // this.isNews = COLUMN[0].id;
  },
  computed: {
    isNews() {
      // console.log(this.$store.state.column);
      // return this.$store.state.column[0].id || 2;
      return this.$store.state.column[0] ? this.$store.state.column[0].id  : 2;
    },
  },
  watch: {
    $route: {
      handler(val, oldval) {
        this.active =
          val.path.includes("/details") || val.path.includes("/news");
        this.aboutUs =
          val.path.includes("/aboutUs") || val.path.includes("/contactWe");
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
#header {
  .warp {
    position: relative;
    height: 80px;
    line-height: 80px;
    .logo {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 146px;
      height: 139px;
      z-index: 999;
      border-radius: 0 0 50% 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .navBar {
      position: absolute;
      top: 0;
      left: 45%;
      height: 80px;
      transform: translateX(-50%);
      li {
        position: relative;
        float: left;
        margin-right: 40px;
        font-size: 16px;
        &:last-child {
          margin-right: 0;
        }
        a {
          display: block;
          height: 80px;
          color: #444;
          .underline {
            display: block;
            position: absolute;
            bottom: 0px;
            left: 50%;
            width: 0;
            height: 3px;
            opacity: 0;
            transition: all 0.6s ease;
            background-color: #359b3a;
          }
          &:hover {
            color: #359b3a;
            .underline {
              opacity: 1;
              width: 100%;
              left: 0;
            }
          }
        }
      }
      .router-link-active {
        color: #359b3a;
        border-bottom: 3px solid #359b3a;
      }
    }
    @media screen and (max-width: 1200px) {
      .logo {
        width: 116px;
        height: 110px;
      }
      .navBar {
        left: 42%;
        li {
          margin-right: 20px;
        }
      }
    }
    .phone {
      display: flex;
      align-items: center;
      height: 80px;
      float: right;
      .ico {
        width: 30px;
        height: 30px;
        line-height: normal;
        img {
          width: 100%;
          height: 100%;
        }
      }
      span {
        margin: 0 30px 0 10px;
        font-size: 24px;
        color: #359b3a;
      }
      button {
        min-width: 94px;
        min-height: 30px;
        font-size: 14px;
        border: 1px solid #ff5400;
        border-radius: 20px;
        color: #ff5400;
        background-color: #fff;
      }
    }
  }
}
</style>