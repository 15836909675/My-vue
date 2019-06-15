<template>
  <div class="warp">
    <Hra>
      <i class="iconfont icon-arrow-left" @click="$router.history.go(-1)"></i>
      <span v-if="type=='overtime'">加班</span>
      <span v-else>休假</span>
      <p></p>
    </Hra>
    <div class="main">
      <div class="main-header">
        <div class="left">
          <img :src="data.avatar" alt="">
        </div>
        <div class="right">
          <p>
            <span>申请人姓名</span>
            <font>{{data.nickname}}</font>
          </p>
          <p>
            <span>直接主管</span>
            <font></font>
          </p>
          <p>
            <span>申请单号</span>
            <font>{{data.applicationNumber}}</font>
          </p>
          <p>
            <span>发起时间</span>
            <font v-if="data">{{data.create_at}}</font>
          </p>
        </div>
      </div>
      <div class="main-cont">
        <h1><span>申请信息</span></h1>
        <ul>
          <li>
            <span>加班日期</span>
            <font v-if="data">{{Time}}</font>
          </li>
          <li>
            <span>加班类型</span>
            <font>{{data.describes}}</font>
          </li>
          <li>
            <span>加班起始时间</span>
            <font v-if="data">{{data.startTime}}</font>
          </li>
          <li>
            <span>加班截止时间</span>
            <font></font>
          </li>
          <li>
            <span>共计时数</span>
            <font></font>
          </li>
        </ul>
      </div>
      <div class="main-bottom">
          <h1><span>加班事由</span></h1>
          <p>{{data.describes}}</p>
      </div>
      <div class="main-bottom">
          <h2><span>附件</span><font>共4个 ></font></h2>
            <div>
                <img :src="`http://localhost:3000/${item}`" alt="" v-for="(item,index) 
                in data.annex" :key="index">    
            </div>
      </div>
    </div>
    <footer class="footer">
        <div>
            <i class="iconfont icon-xiaoxi"></i>
            <span>审批历史</span>
        </div>
        <p>退回</p>
        <p>同意</p>
    </footer>
  </div>
</template>
<script>
import request from "../utils/request";
import Hra from "../components/header";
export default {
  props: {},
  components: {
    Hra
  },
  data() {
    return {
      type: "",
      data:""
    }
  },
  computed: {
    Time(){
      return new Date(this.data.startTime).toLocaleString()
    }
  },
  methods: {},
  created() {
    let { type, id } = this.$router.history.current.params;
    console.log(type, id);
    this.type = type;
    request.get("/api/apply/" + type, {
        applicationNumber: id
      })
      .then(re => {
        console.log(re.data);
        this.data=re.data.data
        // console.log(re.data.data.startTime.slice(0,re.data.data.startTime.indexOf("T")))
      });
      // request.get("/ua62.jpg")
      // .then(re => {
      //   console.log(re.data);
      //   // this.data=re.data.dat
      //   // console.log(re.data.data.startTime.slice(0,re.data.data.startTime.indexOf("T")))vbhnjk l [].\/142
 
      // });

  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../static/icon/iconfont.css";
@import "../static/scss/common.scss";
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
.header {
  background: seagreen;
  font-size: rem(13px);
//   border-bottom: 1px solid seagreen;
  color: #fff;
  i {
    font-size: rem(13px);
  }
}
.warp {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: seagreen;
}
.main {
  // flex: 1;
  position: relative;
  // top:1px;
  display: flex;
  flex-direction: column;
  background: #eee;
  align-items: center;
  .main-header {
    width: 100%;
     margin-top: rem(-2px);
    height: rem(100px);
    border-radius: 0 0 rem(20px) rem(20px);
    background: seagreen;
    display: flex;
    .left {
      width: 20%;
      text-align: center;
      img {
        width: rem(50px);
        height: rem(50px);
        border-radius: rem(25px);
      }
    }
    .right {
      width: 80%;
      p {
        display: flex;
        font{
            width:60% ;
        }
        justify-content: space-between;
        color:#fff;
      }
    }
  }
  .main-cont {
    width: 92%;
    height: rem(210px);
    background: #fff;
    position: relative;
    top: rem(-20px);
    border-radius: rem(8px);
    display: flex;
    flex-direction: column;
    h1{width: 100%;
        height: rem(40px);
        line-height: rem(40px);
        border-bottom: 1px solid #eee;
        span{
            padding:0 rem(8px);
            font-size: rem(14px);
            font-weight: 500;
        }
    }
    ul{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span{
                padding: 0 rem(10px);
                font-size: rem(12px);
                color: #ccc;
            }
            font{
                 padding: 0 rem(10px);
            }
        }
    }
  }
  .main-bottom{
      width: 92%;
      height: rem(120px);
      background: #fff;
      border-radius: rem(8px);
      display: flex;
      flex-direction: column;
      margin-bottom: rem(20px);
      h1{width: 100%;
        height: rem(40px);
        line-height: rem(40px);
        border-bottom: 1px solid #eee;
        span{
            padding:0 rem(8px);
            font-size: rem(14px);
            font-weight: 500;
        }
    }
    h2{
       width: 100%;
        height: rem(40px);
        line-height: rem(40px);
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        span{
            padding:0 rem(8px);
            font-size: rem(14px);
            font-weight: 500;
        } 
        font{
            color: #ccc;
        }
       
    }
     div{
            flex: 1;
            padding:rem(5px) rem(6px);
            display: flex;
            img{
               width: 30%;
              height: 100%;
              margin:0 rem(5px);
            }
        }
    p{
        flex: 1;
        padding:rem(5px) rem(8px);
    }
  }
}
.footer{
    width: 100%;
    height: rem(44px);
    display: flex;
    p:nth-child(2){
        background: rgb(49, 48, 48);
    }
    p{
       flex: 4;
       display: flex;
       justify-content: center;
       align-items: center ;
       color: #fff;
        background: seagreen;
    }
    
    div{
        flex: 3;
        display: flex;
    flex-direction: column;
       justify-content: center;
       align-items: center; 
       color:#ccc;
       background: #fff;
    }
}
</style>