<template>
  <div id="app" >
   
   <keep-alive include="home">
      <router-view/>
   </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
</style>
