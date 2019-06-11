<template>
    <div class="war">
    <header class="hea">
        <p><i class="iconfont icon-fangdajing"></i><input type="text"></p>
        <span>取消</span>
    </header>
    <div class="mai">
        <div class="mai-con">
            <p>搜索制定内容</p>
            <p><span>加班类型</span><span>发起时间</span><span>加班日期</span></p>
            <p><span>申请单号</span><span>加班时数</span></p>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props:{

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
<style  lang="scss">
@import "../static/scss/common.scss";
@import "../static/icon/iconfont.css";
    *{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    html,body,#app{
        width: 100%;
        height: 100%;
    }
    .war{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        /* background: saddlebrown; */
        .hea{
            width: 100%;
            height: rem(44px);
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                width: 76%;
                height: rem(30px);
                line-height: rem(30px);
                background: #F7F7F7;
                border-radius: rem(3px);
            i{
               font-size: rem(20px);
               color: #D8D8D8;
               padding:0 rem(5px);
            }
            }
            span{
                width: 16%;
                color: #076042;
                text-align: center;
            }
        }
    }
    .mai{
        flex: 1;
        .mai-con{
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top: rem(50px);
            p{font-size: rem(13px);
                display: flex;
                justify-content: center;
                color: #076042;
                margin-top: rem(10px);
            }
            p:nth-child(1){
                color: #ccc;
                display: flex;
                span{
                    flex: 1;
                }
            }
            p:nth-child(2){

                display: flex;
                span{
                    flex: 1;
                    text-align: center;
                }
                span:nth-child(2){
                    border-left: 1px solid #ECECEC;
                    border-right: 1px solid #ECECEC;
                }
            }
             p:nth-child(3){
                 span{
                     width: 30%;
                     text-align: center;
                 }
                 span:nth-child(1){
                   
                    border-right: 1px solid #ECECEC;
                }
             }
        }
    }
</style>