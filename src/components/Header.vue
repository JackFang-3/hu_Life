<template>
  <div class="header">
    <div class="logo">
      <img src="./images/logo(1).png" alt="" />
    </div>
    <span class="schoolName">海大校园</span>
    <span class="fPage" @click="pushBanner">首页</span>
    <span class="score" @click="pushGrade">学分</span>
    <span class="message" @click="pushInfor">个人信息</span>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "Header",
  setup() {
    const router = useRouter();
    const store = useStore();
    const pushBanner = function () {
      router.push({
        "name": "banner",
      });
    };
    const pushGrade =async function () {
      try {
        await store.dispatch("getTable","119")       
        router.push({
          "name":"grade",
        })  
      } catch (error) {
        alert(error.message)        
      }
    };

    const pushInfor = function () {
      router.push({
        "name": "information",
      });
    };
    return {
      pushBanner,
      pushGrade,
      pushInfor,
    };
  },
};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  width: 97.6%;
  height: 102px;
  border-bottom: 3px #d6d6d6 solid;
  border-top: 3px #d6d6d6 solid;
  background-color:#004098;
  z-index: 9999;
  color: white;
  // box-sizing: border-box;

  .logo,
  span {
    float: left;
    font-weight: bolder;
  }

  span:hover {
    color: orange;
  }

  .schoolName {
    margin-left: 11px;
    margin-top: 35px;
    font-size: 30px;
  }
  .fPage {
    margin-left: 111px;
    margin-top: 45px;
    font-size: 18px;
  }
  .score {
    margin-left: 35px;
    margin-top: 45px;
    font-size: 18px;
  }
  .message {
    margin-left: 40px;
    margin-top: 45px;
    font-size: 18px;
  }
  .logo {
    margin-left: 30px;
    margin-top: 20px;
    width: 60px;
    height: 70px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>