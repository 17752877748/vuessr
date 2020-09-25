<template>
  <!-- 在线申请 -->
  <div class="Mask" v-show="dialogVisible" @click="cancel()" v-loading="loading">
    <div class="dialog" v-if="dialogVisible" @click.stop>
      <div class="logo">
        <img src="../assets/img/logo2.png" alt />
      </div>
      <p>在线申请</p>

      <el-form ref="ruleForm" :model="form" :rules="rules">
        <el-form-item prop="phone">
          <el-input v-model="form.phone" clearable placeholder="请输入手机号码(必填)"></el-input>
        </el-form-item>
        <el-form-item prop="name">
          <el-input v-model="form.name" clearable placeholder="请输入姓名(必填)"></el-input>
        </el-form-item>
        <el-form-item prop="companename">
          <el-input v-model="form.companename" clearable placeholder="请输入企业名称(必填)"></el-input>
        </el-form-item>
        <el-form-item prop="leavemsg">
          <el-input v-model="form.leavemsg" type="textarea" clearable placeholder="请输入企业名称(必填)"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button round @click="submit('ruleForm')">提交申请</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { toMessage } from "../api/home";
export default {
  name: "Apply",
  data() {
    return {
      loading: false,

      // 表单绑定
      form: {
        phone: "",
        name: "",
        companename: "",
        leavemsg: "",
      },
      // 表单验证规则
      rules: {
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          {
            pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
        ],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        companename: [
          { required: true, message: "请输入企业名称", trigger: "blur" },
        ],
        leavemsg: [
          { required: true, message: "请输入企业名称", trigger: "blur" },
        ],
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
      };
      this.$emit("update:dialogVisible", false);
    },
    // 提交
    submit(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.loading = true;
          this.form.channel = "pc";
          let res = await toMessage({ ...this.form });
          if (res.code == 200) {
            this.$emit("update:dialogVisible", false);
            this.$message("申请成功!");
          }
          this.loading = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.Mask {
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
    .el-form {
      /deep/.el-form-item {
        margin-bottom: 20px;
        .el-form-item__content {
          line-height: normal;
        }
        .el-input {
          .el-input__inner {
            height: 48px;
            font-size: 16px;
            border-radius: 0;
          }
        }
        .el-textarea {
          textarea {
            height: 110px;
            max-height: 110px;
            // margin-bottom: 10px;
            font-size: 16px;
            border-radius: 0;
          }
        }
      }
      .el-button {
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