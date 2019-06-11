<template>
    <div class="loagin-war">
      <div class="span">
          <span>X</span>
          <h1>欢迎来到西乡俱乐部</h1>
      </div>
        <p><input type="text" placeholder="手机号码" v-model="usname"></p>

        <p><input type="text" placeholder="验证码" v-model="pwd"> <span>获取验证码</span></p>
        <div class="login-con">
            <p><button @click="addfn()">登陆/注册</button></p>
            <p><span>使用</span></p>
        </div> 
    </div>
</template>
<script>
import request from "../utils/request"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            usname:'',
            pwd:''
        }
    },
    computed:{

    },
    methods:{
        addfn(){
            // console.log(this.usname,this.pwd)
            request.post("/api/login",{
                phone:this.usname,
                password:this.pwd
            }).then(re=>{
                // console.log(re.data,"asdassd")
                window.localStorage.token=re.data.token
                console.log(this)
                this.$router.go(-1)
            }).catch(re=>{
                alert(re.response.data.message)
            })
        }
    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style  lang="scss">
@import "../static/scss/common.scss";
*{
    padding: 0;
    margin: 0;
    list-style: none;
}
html,body,#root{
    width: 100%;
    height: 100%;
}
.loagin-war{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // padding-top: rem(50px);
  align-items: center;
  .span{
        width: 100%;
        height: rem(60px);
        padding:rem(5px)  rem(6px);
        span{
            padding: rem(8px);
        }
     h1{
         font-size: rem(28px);
         margin-left: rem(10px);
         font-weight: 700;
     }
  }
  .login-con{
      width: 100%;
      display: flex;
      flex-direction: column;
    //   justify-content: center;
    align-items: center;
      >p{
          width: 60%;
          height: rem(30px);
          button{
              width: 100%;
              height: 100%;
          }
      }
  }
    >p{
    width: 90%;
    height: rem(40px);
    border-bottom: 1px solid #ccc;
    line-height: rem(40px);
    display: flex;
    justify-content: space-between;
    span{
        color: #ABABAB;
    }
    }
}
</style>