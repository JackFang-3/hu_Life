<template>
  <div class="infor">
    <div class="centerInfo">
      <div class="demo-login">
        <Login @on-submit="handleSubmit">
          <UserName name="username"  />
          <Password name="password"  />
          <Captcha
            class="demo-login-captcha"
            name="captcha"
            :count-down="0"
            @on-get-captcha="handleGetCaptcha"
          >
            <template #text>
              <img :src="'https://file.iviewui.com/iview-pro/' + captcha" />
            </template>
          </Captcha>
          <Submit />
        </Login>
      </div>
    </div>
  </div>
</template>

<script>
import {reqLogin} from '@/api'
export default {
  name: "Information",
  data() {
    return {
      captcha: "captcha1.png",
    };
  },
  methods: {
    async handleSubmit(valid, { username, password, captcha }) {
      if (valid) {
        if(captcha==="A68T"||captcha==="78UL"){
          try {
            let result=await reqLogin(username,password)
            if(result.code===200){
              this.$store.dispatch("getUserInfo",result.userInfo)
              localStorage.setItem("id",result.userInfo.id)
              this.$router.push({
                name:"logined"
              })
            }
            else{
              alert(result)
            }
          } catch (error) {
            alert(error.message)
          }
        }
        else{
          alert("验证码输入错误，请重新输入")
        }

      }
    },

    handleGetCaptcha() {
      // 这里只是模拟切换图形验证码
      if (this.captcha === "captcha1.png") {
        this.captcha = "captcha2.png";
      } else {
        this.captcha = "captcha1.png";
      }
    }

  },
};
</script>

<style lang="less" scoped>
.infor {
  height: 580px;
  width: 100%;
  margin-top: 105px;
  float: left;
  background-color: white;
  display: flex;
  justify-content: center;
  .centerInfo {
    display: flex;
    width: 1043px;
    border-left: 3px solid #d6d6d6;
    border-right: 3px solid #d6d6d6;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    .demo-login {
      width: 400px !important;
      margin: 0 auto;
    }
    .demo-login-captcha .ivu-btn {
      padding: 0;
    }
    .demo-login-captcha .ivu-btn img {
      height: 28px;
      position: relative;
      top: 4px;
    }
  }
}
</style>