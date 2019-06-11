<template>
  <div class="warper">
    <Dilog v-show="flag"/>
    <Head>
      <i class="iconfont icon-arrow-left"></i>
      <span>加班/休假</span>
      <p>
        <i class="iconfont icon-gongzuojilu"></i>
        <i @click="$router.push('/seach')" class="iconfont icon-fangdajing"></i>
      </p>
    </Head>
      <Nav @addfn="addfn"/>
    <div class="main">
      <Bun :res="res" @resd="resd" :flag="value"/>
      <div class="pice">
        <p @click="add()">
          <i class="iconfont icon-jia"></i>
          <span>发起任务</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Head from "../components/header.vue";
import Dilog from "../components/dilog";
import reqyest from "../utils/request";
import Bun from "../components/top";
import Nav from "../components/Nav"
export default {
  props: {},
  components: {
    Head,
    Dilog,
    Bun,
    Nav 
  },
  data() {
    return {
      flag: false,
      ind: 0,
      value:true,
      res:[],
     
    obj : {
        page:1,
        pageSize: 5,
        create_at: 1,
        type: "overtime",
        status: 0
      }
    };
  },
  computed: {},
  methods: {
    add(){
      this.flag=true
    },
    addfn(con){
      // console.log(con,"home")
      this.obj.status=con
      this.obj.type="overtime"
      this.value=true
      this.getdata()
    },
    resd(val){
      // console.log(val)
      this.value=!this.value
      this.obj.type=val
      this.getdata()
    },
    getdata(){
       reqyest.get("/api/task/list", {
    ...this.obj
    }).then(re=>{
      this.res=re.data.data
      // console.log(re.data.data)
    });
    }
   
  },
  created() {
    reqyest.get("/api/user/info", {
      token: window.localStorage.getItem("token")
    });
   this.getdata()
  },
  mounted() {},
   
};
</script>
<style   lang="scss">
@import "../static/scss/common.scss";
@import "../static/scss/_minix.scss";
@import "../static/icon/iconfont.css";
.warper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  .pice {
    width: 30%;
    height: rem(40px);
    border-radius: rem(20px);
    background: #0b6242;
    color: #fff;
    position: absolute;
    bottom: rem(25px);
    right: rem(30px);
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      i {
        padding: rem(5px);
        font-size: rem(12px);
      }
    }
  }
}
.header-top {
  width: 100%;
  height: rem(80px);
  display: flex;
  align-items: center;
  margin-top: rem(15px);
  .active {
    color: #0f5f42;
    dd {
      color: #7db09f;
    }
  }
  dl {
    font-size: rem(14px);
    color: #dcdcdc;
    dt,
    dd {
      display: flex;

      // flex-direction: column;
      justify-content: center;
    }
    i {
      font-size: rem(28px);
    }
    flex: 1;
  }
}
</style>