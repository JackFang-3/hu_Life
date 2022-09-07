<template>
  <div class="logined">
    <div class="centerLogin">
      <div class="person">
        <img class="title" v-if="student.images=='machao'" src="./images/title.jpg" alt="" />
        <img class="title" v-if="student.images=='hanxin'" src="./images/hanxin.webp" alt="" />
        <img class="title" v-if="student.images=='jvzi'" src="./images/jvzi.webp" alt="" />
      </div>
      <List class="msg" border size="large">
        <ListItem>姓名：{{ student.name }}</ListItem>
        <ListItem>学号：{{ student.id }}</ListItem>
        <ListItem>学院：{{ student.home }}</ListItem>
        <ListItem>专业：{{ student.major }}</ListItem>
        <ListItem>联系方式：{{ student.phone }}</ListItem>
      </List>
      <div class="footerbox">个人信息详情请登录海南大学教务系统查看</div>
    </div>
  </div>
</template>

<script>
import { reqLogin } from "@/api";
import { useStore } from "vuex";
import { onMounted, reactive, computed, nextTick } from "vue";
import "animate.css";
export default {
  name: "Logined",
  setup() {
    const store = useStore();
    const userInfo = reactive({
      user: {},
    });
    onMounted(() => {
      let username = localStorage.getItem("id");
      let password = username.slice(8, 14);
      console.log(username, password);
      nextTick(async () => {
        try {
          let result = await reqLogin(username, password);
          if (result.code === 200) {
            store.dispatch("getUserInfo", result.userInfo);
          } else {
            alert(result);
          }
        } catch (error) {
          alert(error.message);
        }
        userInfo.user = store.state.userInformation.userInfo;
      });
      console.log(userInfo.user);
    });
    const student = computed(() => {
      return userInfo.user;
    });
    return {
      student,
    };
  },
};
</script>

<style lang="less" scoped>
.logined {
  height: 580px;
  width: 100%;
  margin-top: 105px;
  float: left;
  background-color: white;
  display: flex;
  justify-content: center;
  .centerLogin {
    display: flex;
    width: 1043px;
    border-left: 3px solid #d6d6d6;
    background: no-repeat url("./images/yejing.webp");
    background-size: 100%;
    border-right: 3px solid #d6d6d6;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    .person {
      width: 200px;
      height: 200px;
      background-color: transparent;
      border-radius: 50%;
      box-shadow: 5px 5px 5px #d6d6d6;
      overflow: hidden;
      .title {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .msg {
      width: 600px;
      color: white;
      font-weight: bolder;
      font-stretch: wider;
    }
    .footerbox {
      width: 100%;
      height: 100px;
      font-size: 20px;
      line-height: 100px;
      text-align: center;
      color: white;
      display: inline-block;
      margin: 0 0.5rem;
      animation: backInDown; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 2s; /* don't forget to set a duration! */
    }
  }
}
</style>