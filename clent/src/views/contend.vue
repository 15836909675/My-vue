<template>
    
      <div class="warp">
    <Hra>
      <i class="iconfont icon-arrow-left" @click="$router.history.go(-1)"></i>
      <span v-if="type=='overtime'">加班申请表</span>
      <span v-else>休假申请表</span>
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
            <font> </font>
          </p>
          <p>
            <span>发起时间</span>
            <font ></font>
          </p>
        </div>
      </div>
      <div class="main-cont">
        <h1><span>申请信息</span></h1>
        <ul>
          <li>
            <span>{{type=='overtime'?'加班申请表':'休假申请表'}}</span>
            <font ></font>
          </li>
          <li>
            <span>{{type=='overtime'?'加班类型':'休假类型'}}</span>
            <select name="" id="">
              <option value="">请选择</option>
              <option value="" v-for="(item,key) in datatime" :key="key">{{item.name}}</option>
            </select>
          </li>
          <li>
            <span>{{type=='overtime'?'加班起始时间':'休假起始时间'}}</span>
            <font>
              <el-time-select
             
  v-model="startvalue"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="选择时间">
</el-time-select>
               </font>
          </li>
          <li>
            <span>{{type=='overtime'?'加班截止时间':'休假截止时间'}}</span>
            <font>
    <el-time-select
      v-model="endvalue"
      :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="选择时间">
</el-time-select>

            </font>
          </li>
          <li>
            <span>共计时数</span>
            <font></font>
          </li>
        </ul>
      </div>
      <div class="main-bottom">
          <h1><span>{{type=='overtime'?'加班事由':'休假事由'}}</span></h1>
          <p></p>
      </div>
      <div class="main-bottom">
          <p><input type="file" v-if="res.length<3"  @change="change($event)" ><font>+</font><span>上传附件</span></p>
            <div class="file">
                <img :src="`http://localhost:3000${item}`" alt="" v-for="(item,index) in res" :key="index">    
            </div>
      </div>
    </div>
    <footer class="footer">
       
        <p>取消</p>
        <p @click="addfn">提交</p>
    </footer>
    </div>
</template>
<script>
import Hra from "../components/header";
import iflile from "../utils/index"
import request from "../utils/request"
import api from "../api/index"
export default {
   name: 'conter',
    props:{

    },
    components:{
      Hra
    },
    data(){
        return {
          type:"",
          starttime:"",
          data:"",
          startvalue:"",
          endvalue:"123",
          endtime:"",
          res:[],
          datatime:[
            {
              type:0,
              name:"节假日"
            },
            {
              type:1,
              name:"工作日"
            },
            {
              type:2,
              name:"双休日"
            }
          ],
          obj:{
            annex:[], 
        describe:"wqeqw", 
        endTime:"2019-06-16", 
        startTime:"2019-06-16", 
        type:0 

          }
        }
    },
    computed:{

    },
    methods:{
      addfn(){
        // const arr=[1,2,3,4,5]
        // arr.filter(it=>it>3)
        // console.log(arr)
       const arr=[1,2,3,4,5,6,7,8,9,10]
        function rem(page,Size){
          return arr.filter((item,index)=>(page-1)*Size<=index&&index<page*Size)
        }
        console.log(rem(1,5))
        // let time=new Date(this.endvalue)*1-new Date(this.startvalue)*1
        // console.log(time)
        //   let hose=time/3000/60%60
        //   console.log(hose)
        // this.obj.annex=this.res
        //     request.post("/api/apply/"+this.type,this.obj).then(re=>{
        //     console.log(re.data)
          
           
        //   })
      },
      change(e){
        // console.log(e.target.files[0].type.slice(e.target.files[0].type.indexOf("/")))
       let filter= new iflile(e.target.files[0],{
          type:["/jpg","/gif","/png"],
          sizi:2
        })
        let file=e.target.files[0];
       
        
        if(filter.init()){
           let parmo=new FormData();
          parmo.append("file",file)
          request.post("/api/upload",parmo).then(re=>{
            console.log(re.data.url)
            if(this.res.length<=3){
               this.res.push(re.data.url)
            }
           
          })
        }else{
          alert("格式错误")
        }
  
      }
    },
    created(){
     this.type=this.$router.history.current.params.type
    api.getdata(window.localStorage.token).then(re=>{
      console.log(re.data.data)
      this.data=re.data.data
    })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../static/icon/iconfont.css";
@import "../static/scss/common.scss";
@import "../static/scss/style.scss";
.footer{
  >p:nth-child(1){
    color: seagreen;
    background: #fff;
    flex: 2;
  }
  >p:nth-child(2){
    color: #ffff;
    background:seagreen;
    flex: 6;
  }
}
.main-bottom{
  >p{
    position: relative;
    input{
      left:0;
      opacity: 0;
      position: absolute;
    }
  }
}
</style>