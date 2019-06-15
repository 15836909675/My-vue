<template>
    <div class="main-box" @click="push(itemer)">
    <li><span>Otsdsdas</span><p><i class="iconfont icon-dui"></i> <span>待审批</span></p></li>
    <li><p><font>申请人</font><span>{{itemer.nickname}}</span></p><p><font>加班类型</font><span>{{itemer.describes}}</span></p></li>
     <li><p><font>加班时间</font><span>{{itemer.create_at}}</span></p><p><font>加班时数</font><span>{{itemer.startTime}}</span></p></li>
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
        push(item){
            console.log(item)

            this.$router.push({name:"details",params:{type:item.list_type,id:item.applicationNumber}})
        }
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
        width: 100;
        // padding:rem(5px) rem(10px);
        height: rem(110px); 
        flex-direction: column;
        // padding: rem(5px);
        // margin-top: rem(5px);
        // background: #fff;
        // border-bottom: rem(2px) solid #eee;
        li{width: 100%;
            display: flex;
            height: rem(20px);
            line-height: rem(20px);
            justify-content: space-between;
            p>i{
                padding: rem(5px);
                border-radius: rem(10px);
                background: #F0D03D;
                color: #fff;
            }
        }
        li:nth-child(2),li:nth-child(3){
            // padding:rem(5px) 0;
            >p{
                width: 40%;
                display: flex;
                justify-content: space-between;
                font-size: rem(13px);
                font{
                    // width: rem(30px);
                    color: #C7C7C7;
                }
                // span{
                //     width: rem(60px);
                // }
            }
        }
    }
</style>