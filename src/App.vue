<template>
  <div id="app">
    <Header @ondialog="dialogVisible = $event"></Header>
    <router-view />
    <Footer @ondialog="dialogVisible = $event"></Footer>
    <Apply :dialogVisible.sync="dialogVisible"></Apply>
  </div>
</template>

<script>
import Apply from "./components/Apply";
// import { getHomeInfo } from "./api/home";
export default {
  name: "App",
  data() {
    return {
      dialogVisible: false,
    };
  },
  components: {
    Apply,
  },
  created() {
    // this.pageInfo();
  },
  methods: {
    // async pageInfo() {
    //   let res = await getHomeInfo({ cid: 59 });
    //   localStorage.setItem("pageInfo", JSON.stringify(res.data));
    // },
  },
};
</script>

<style>
</style>
