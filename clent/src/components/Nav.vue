<template>
    <header class="header-top">
      <dl
        v-for="(item,index) in data"
        :key="index"
        @click="table(index,item.status)"
        :class="{'active':index==ind}"
      >
        <dt>
          <i class="iconfont icon-guangpan"></i>
        </dt>
        <dd>{{item.name}}</dd>
      </dl>
    </header>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            ind:0,
             data: [
        {
          name: "待处理",
          status: 0
        },
        {
          name: "已发起",
          status: 1
        },
        {
          name: "已处理",
          status: 2
        }
      ],
        }
    },
    computed:{

    },
    methods:{
        table(index,conde) {
      this.ind = index;
      this.$emit("addfn",conde)
    },
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>