<template>
  <!-- 在线申请 -->
  <div class="mask" v-show="dialogVisible" @click="cancel()">
    <div class="dialog" v-if="dialogVisible" @click.stop>
      <div class="logo">
        <img src="../assets/img/logo2.png" alt />
      </div>
      <p>在线申请</p>

      <form>
        <div class="form-group">
          <input type="text" class="form-control" v-model="form.phone" placeholder="请输入手机号码(必填)" />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" v-model="form.name" placeholder="请输入姓名(必填)" />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="form.companename"
            placeholder="请输入企业名称(必填)"
          />
        </div>
        <div class="form-group">
          <textarea class="form-control" v-model="form.leavemsg" placeholder="请输入企业名称(必填)"></textarea>
        </div>
        <button type="submit" class="btn btn-default" @click="submit('ruleForm')">提交申请</button>
      </form>
    </div>
  </div>
</template>

<script>
// 此文件表单无验证,请求无loading,
import { toMessage } from "../api/home";
export default {
  name: "Apply",
  data() {
    return {
      // 表单绑定
      form: {
        phone: "",
        name: "",
        companename: "",
        leavemsg: "",
        channel: "pc",
      },
    };
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // this.resetForm("ruleForm");
    this.$refs.ruleForm && this.$refs.ruleForm.resetFields();
  },
  methods: {
    // 关闭
    cancel() {
      this.form = {
        phone: "",
        name: "",
        companename: "",
        leavemsg: "",
        channel: "pc",
      };
      this.$emit("update:dialogVisible", false);
    },
    // 提交
    async submit() {
      let res = await toMessage({ ...this.form });
      // if (res.code == 200) {
      this.$emit("update:dialogVisible", false);
      // this.$message.info("申请成功!");
      // }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    height: 574px;
    box-sizing: border-box;
    padding: 72px 30px 0;
    border-radius: 8px;
    background-color: #fff;
    .logo {
      position: absolute;
      top: -25px;
      left: 50%;
      transform: translateX(-50%);
      img {
        width: 114px;
        height: 89px;
      }
    }
    p {
      margin-bottom: 33px;
      font-size: 24px;
      text-align: center;
      color: #333333;
    }
    form {
      .form-group {
        margin-bottom: 20px;
        input {
          height: 48px;
          font-size: 16px;
          border-radius: 0;
          border: 1px solid #ddd;
        }
        textarea {
          // width: 100%;
          // height: 110px;
          max-width: 100%;
          max-height: 110px;
          min-width: 100%;
          min-height: 110px;
        }
      }
      button {
        width: 100%;
        height: 46px;
        padding: 0;
        margin-top: 10px;
        font-size: 18px;
        color: #fff;
        border-radius: 25px;
        background: #ff5400;
      }
    }
  }
}
</style>