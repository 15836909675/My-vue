<template>
    <div class="main-box">
    <li><span>Otsdsdas</span><p><i class="iconfont icon-dui"></i> <span>待审批</span></p></li>
    <li><p><font>申请人</font><span>{{itemer.nickname}}</span></p><p><font>加班类型</font><span>{{itemer.describes}}</span></p></li>
     <li><p><font>加班时间</font><span>{{itemer.create_at.slice(0,10)}}</span></p><p><font>加班时数</font><span>{{itemer.startTime.slice(0,10)}}</span></p></li>
    </div>
</template>
<script>
export default {
    props:{
        itemer:Object
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style lang="scss">
@import "../static/scss/common.scss";
@import "../static/icon/iconfont.css";
*{
    list-style: none;
}
    .main-box{
        display: flex;
        width: 94%;
        height: rem(90px); 
        flex-direction: column;
        margin-top: rem(5px);
        // background: #fff;
        // border-bottom: rem(2px) solid #eee;
        li{width: 100%;
            display: flex;
            padding:rem(5px) 0;
            justify-content: space-between;
            p>i{
                padding: rem(5px);
                border-radius: rem(10px);
                background: #F0D03D;
                color: #fff;
            }
        }
        li:nth-child(2),li:nth-child(3){
            padding:rem(5px) 0;
            >p{
                width: 40%;
                display: flex;
                justify-content: space-between;
                font-size: rem(13px);
                font{
                    color: #C7C7C7;
                }
                // span{
                //     width: rem(60px);
                // }
            }
        }
    }
</style>