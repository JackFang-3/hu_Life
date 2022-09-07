<template>
  <div class="banner">
    <div class="leftbox"></div>
    <div class="centerbox">
      <div class="box1">
        <div class="msg">
          <div class="img">
            <img src="./images/picture.webp" alt="" class="pic" />
          </div>
          <div class="stu">
            <span class="name">{{ student.name }}__ {{ student.id }}</span>

            <span class="grade">学院：{{ student.home }}</span>
          </div>
        </div>
        <div class="maj">专业：{{ student.major }}</div>
        <div class="num">学分120/147</div>
      </div>
      <div class="box2">
        <div class="one">今日课程</div>
        <div class="two">
          <span class="t1">07:30--12:00</span>
          <br />
          <br />
          <span class="m1">高等数学 任教授 58405</span>
        </div>
        <div class="three">
          <span class="t2">14:10--15:30</span>
          <br />
          <br />
          <span class="m2">网络安全 刑教授 48210</span>
        </div>
        <div class="four">
          <span class="t3">19:30--21:30</span>
          <br />
          <br />
          <span class="m3">电子电路 刘教授 信息学院108</span>
        </div>
      </div>
      <div class="box3">
        <div class="a1">
          <a href="#">海大新闻</a>
          <span class="space"></span>
          <a href="#">学术讲座</a>
        </div>
        <div class="B1">
          <div class="b1">
            <div class="c1">
              <span>13</span><br />
              <span>2022-06</span>
            </div>
            <div class="c2">
              南海文明大讲堂第七讲预告：南海外交斗争与维权形式
            </div>
          </div>

          <div class="b2">
            <div class="c1">
              <span>12 </span><br />
              <span>2022-06</span>
            </div>
            <div class="c2">
              图书馆“湖畔讲坛”学术讲座第154期知识产权与创新发展
            </div>
          </div>

          <div class="b3">
            <div class="c1">
              <span>05</span><br />
              <span>2022-06</span>
            </div>
            <div class="c2">
              图书馆“湖畔讲坛”学术讲座第153期《中国梦和新药梦》
            </div>
          </div>

          <div class="b4">
            <div class="c1">
              <span>02</span><br />
              <span>2022-06</span>
            </div>
            <div class="c2">
              【预告】旅琼文艺家大讲坛第十八期11月28日开讲胡世宗：重走长征路
              感受红军魂
            </div>
          </div>
        </div>
      </div>
      <div class="box4">
        <h3>自习室</h3>
        <select class="selectBox">
          <option value="classOne">1号教学楼</option>
          <option value="classTwo">2号教学楼</option>
          <option value="classThree">3号教学楼</option>
          <option value="classFour">4号教学楼</option>
        </select>
        <table>
          <tbody>
            <tr>
              <td>1F</td>
              <td>162479</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2F</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3F</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4F</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="box5">
        <Carousel autoplay loop class="imgs">
          <CarouselItem>
            <div class="demo-carousel">
              <img src="./images/1.jpg" alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="./images/2.jpg" alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="./images/3.jpg" alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="./images/4.jpg" alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="./images/5.jpg" alt="" />
            </div>
          </CarouselItem>
        </Carousel>
      </div>
      <div class="box6">
        <div class="title">
          <a href="#">关注我们</a>
        </div>
        <div class="images">
          <img src="./images/firstimg.gif" alt="" />
          <img src="./images/secondimg.webp" alt="" />
        </div>
      </div>
    </div>
    <div class="rightbox"></div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      student: {},
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.student = this.$store.state.userInformation.userInfo;
    });
  },
};
</script>

<style lang='less' scpoed>
.banner {
  height: 1178px;
  width: 100%;
  margin-top: 105px;
  float: left;
  background-color: white;
  display: flex;
  justify-content: center;
  .centerbox {
    display: flex;
    width: 1043px;
    border-left: 3px solid #d6d6d6;
    border-right: 3px solid #d6d6d6;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    .box1,
    .box2,
    .box3,
    .box4,
    .box5,
    .box6 {
      width: 472px;
      height: 325px;
      border: 18px solid #004098;
      flex-grow: 0;
      padding: 15px;
      box-sizing: border-box;
    }
    .box1 {
      font-size: 14px;
      .img {
        width: 70px;
        height: 60px;
        float: left;
        .pic {
          float: left;
          width: 100%;
          height: 100%;
        }
      }
      .stu {
        float: left;
        .name {
          display: block;
          margin-left: 60px;
        }
        .grade {
          display: block;
          margin-top: 28px;
          margin-left: 60px;
        }
      }
      .maj {
        margin-top: 110px;
      }
      .num {
        margin-top: 24px;
      }
    }
    .box2 {
      font-size: 14px;
      .one {
        font-size: 19px;
        color: black;
        font-weight: bolder;
      }
      .two,
      .three,
      .four {
        margin-top: 10px;
      }
    }
    .box3 {
      .a1 {
        a {
          text-decoration: none;
          color: black;
          font-size: 19px;
          font-weight: bolder;
        }
        .space {
          display: inline-block;
          width: 60px;
        }
      }
      .b1,
      .b2,
      .b3,
      .b4 {
        width: 100%;
        height: 40px;
        margin-top: 18px;
        font-size: 6px;
        .c1 {
          width: 70px;
          height: 40px;
          float: left;
          line-height: 20px;
          text-align: center;
          margin-right: 50px;
          border: #d6d6d6 3px solid;
        }
        .c2 {
          width: 272px;
          height: 40px;
          font-size: 14px;
          float: left;
          line-height: 20px;
          text-align: center;
          text-align: left;
          /* overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis; */
        }
      }
    }
    .box4 {
      font-size: 14px;
      h3 {
        font-size: 19px;
        font-weight: bolder;
        color: black;
      }
      .selectBox {
        width: 416px;
        height: 46px;
        margin: 10px 0;
        border-color: #d6d6d6;
        &:active {
          border: 0px;
        }
      }
      table {
        text-align: center;
        font-size: 10px;
        font-family: Verdana, Tahoma, sans-serif;
        border-color: #d6d6d6;
        border-collapse: separate;
        border-spacing: 0;
        tr {
          background-color: white;
          td {
            width: 85px;
            height: 40px;
            line-height: 40px;
            border: 1px solid #d6d6d6;
          }
          td:first-child {
            background-color: white;
            width: 70px;
          }
          td:hover {
            background-color: #d6d6d6;
          }
        }
      }
    }
    .box5 {
      .imgs {
        height: 100%;
        overflow: hidden;
        img {
          width: 430px;
          height: 283px;
        }
      }
    }
    .box6 {
      .title {
        a {
          display: block;
          width: 100%;
          height: 80px;
          font-size: 20px;
          font-weight:bolder;
          text-align: center;
          line-height: 80px;
          color: black;
        }
        a:hover{
          color:orange;
        }
      }
      .images {
        width: 100%;
        height: 200px;
        img {
          margin-top: 20px;
          width: 140px;
          height: 140px;
          margin-left: 46px;
        }
      }
    }
  }
}
</style>