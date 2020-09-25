<template>
  <div id="partners">
    <div class="warp">
      <div class="title">
        <h2 data-aos="fade-up">{{partnersData.name}}</h2>
      </div>
      <ul class="content">
        <li
          v-for="(item, i) in partnersData.columnItemList"
          :key="item.id"
          :style="{borderTop: i >= 6 && '0.01px solid #ebeced', borderLeft: i % 6 != 0 && '0.01px solid #ebeced'}"
          data-aos="fade-left"
          :data-aos-delay="i * 50"
        >
          <img :src="$BASE_OBJ.WEB_URL + item.imgurl" :alt="item.name" @click="goPartners()" />
        </li>
        <li
          style="border-top: 0.01px solid #ebeced; border-left: 0.01px solid #ebeced;"
          data-aos="fade-left"
          data-aos-delay="850"
        >
          <span style="cursor: pointer;" @click="goPartners()">期待与您的合作!</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Partners",
  data() {
    return {};
  },
  props: {
    partnersData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    goPartners() {
      window.location.href = "/";
    },
  },
};
</script>

<style lang="less" scoped>
#partners {
  height: 583px;
  .warp {
    .title {
      h2 {
        padding: 100px 0 60px;
        font-size: 36px;
        font-weight: normal;
        text-align: center;
        color: #333;
      }
    }
    .content {
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      padding: 0 55px;
      margin: 0 auto;
      li {
        overflow: hidden;
        // width: 220px;
        width: 16.66%;
        min-width: 100px;
        height: 110px;
        line-height: 110px;
        text-align: center;
        font-size: 16px;
        color: #666666;
        &:hover {
          img {
            transform: scale(1.2);
          }
        }
        img {
          transition: 0.5s;
          cursor: pointer;
          width: 172px;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  #partners {
    // overflow: hidden;
    .warp {
      .content {
        padding: 0;
        li {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>