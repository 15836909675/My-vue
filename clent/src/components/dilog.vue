<template>
    <div class="dilog">
        <div class="dilog-con">
            <p>
                <i class="iconfont icon-play1"></i>
                <span>加班</span>
            </p>
            <p>
                <i class="iconfont icon-fenxiang4"></i>
                <span>休假</span>
            </p>
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
@import "../static/icon/iconfont.css";
@import "../static/scss/common.scss";
.dilog{
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba($color: #000000, $alpha: 0.5);
    z-index: 1000;
    .dilog-con{
        width: 100%;
        height: 26%;
        position: absolute;
        background: #fff;
        bottom:0;
        
        display: flex;
        p{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            i{
                width: rem(50px);
                height: rem(50px);
                border-radius: rem(25px);
                background:#FFB03D;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: rem(18px);
            }
           
            span{
                margin-top: rem(10px);
            }
        }
         p:nth-child(2) i{
                background: #73BA6A;
            }
    }
}
</style>