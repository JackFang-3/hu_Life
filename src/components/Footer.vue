<template>
    <div class="footer">
            <div class="adress">学校地址：海南省海口市人民大道58号 &nbsp;&nbsp; 邮编：570228</div>
        </div>
</template>

<script>
import {reqGrade} from '@/api/index'
export default {
    name:'Footer',
    setup(){
    }
}
</script>

<style lang="less" scoped>
 .footer{            
            width: 100%;
            height: 60px;
            border-top: 3px #d6d6d6 solid;
            background-color: #004098;
             margin-bottom:0;
             color: white;
            float: left;
            .adress{
                font-size: 20px;
                text-align: center;
                line-height: 60px;
            }
        }
</style>