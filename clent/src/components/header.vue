<template>
    <div class="header" >
        <slot></slot>
        <!-- {{styler}} -->
    </div>
</template>
<script>
export default {
    props:["styler"],
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
        // console.log(this.styler)
    },
    mounted(){

    }
}
</script>
<style  lang="scss">
@import "../static/scss/common.scss";
@import "../static/scss/_minix.scss";
.header{
    height:rem(40px);
    width: 100%;
    font-size: rem(15px);
    display: flex;
    align-items: center;
   
    justify-content: space-between;
    >i{
        font-size: rem(15px);
        padding:0 rem(10px);
    }
    >p{
       i{
            font-size: rem(15px);
             padding:0 rem(5px);
       }
        padding:0 rem(10px);
    }
}
</style>