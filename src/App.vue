<template>
<div class="hnu">
  <Header/>
  <router-view></router-view>
  <Footer/>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components:{
    Header,
    Footer,
  }
}
</script>
<style lang="less" scoped>
.hnu{
          width: 98%;
          border: 3px #d6d6d6 solid;
          border-top: 0px;
          margin: 0 auto;
          margin-bottom: 10px;
          &::after{
              content:'';
              clear: both;
              display: block;
          }
}
</style>
