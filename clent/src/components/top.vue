<template>
   <div class="laun-con">
        <div class="bun">
        <span></span>
        <div><span :class="{'active':flag}" @click="addfn('overtime')">加班</span>
        <span :class="{'active':!flag}" @click="addfn('vacation')">休假</span></div>
        <p><i class="iconfont icon-shouqi-01"></i><i class="iconfont icon-tijiaodingdan"></i></p>
     </div>
      <div class="laun-mian">
          <Item v-for="(item,index) in res" :key="index" :itemer='item'/>
           <!-- <Item v-for="(item,index) in res" :key="index" :itemer='item'/> -->
     </div>
     </div>
</template>
<script>
import Item from "./item"
export default {
    props:["res","flag"],
    components:{
Item
    },
    data(){
        return {
            // flag:true
        }
    },
    computed:{
    },
    methods:{
        addfn(value){
           
            this.$emit("resd",value)
        }
    },
    created(){
// console.log(res,"es")
    },
    mounted(){

    }
}
</script>
<style  lang="scss">
 @import "../static/scss/common.scss";
 @import "../static/icon/iconfont.css";
 .laun-con{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
    
 }
 .laun-mian{
     flex: 1;
     width: 100%;
     height: 100%;
    //  box-sizing: border-box;
    overflow: auto;
     width: 100%;
     height: 100%;
       margin-top: rem(15px);
    //  display: flex;
    //  flex-direction: column;
    // align-items: center;
    text-align: center;
    position: relative;
    // background: #eee;
   
   
 }
    .bun{
        width: 100%;
        height: rem(34px);
        display: flex;
        justify-content: space-between;
        margin-top: rem(15px);
        div{
         flex: 5; 
         border-radius: rem(17px); 
         
         overflow: hidden;
         display: flex;
         justify-content: space-between;
         span{
             flex: 1;
             display: flex;
             justify-content: center;
             align-items: center;
         }
         .active{
             background: #0B6242;
             color: #fff
         }
        }
        span{
            flex: 2;
        }
        p{
            flex: 2;
            display: flex;
            i{
                flex: 1;
                font-size: rem(13px);
               display: flex;
               justify-content: center;
               align-items: center;

            }
        }
    }

</style>