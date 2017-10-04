<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link :to="{path:'/'}" event='mouseover' exact tag="li">home</router-link>
        <router-link active-class="cac" :to="{name:'document'}" tag="li">document</router-link>
        <router-link to="/about" tag="li">about</router-link>
        <router-link tag="li" to="/user">user</router-link>
      </ul>
    </div>
    <button @click='forward'>forward</button>    
    <button @click='back'>back</button>    
    <button @click='push'>push</button>    
    <button @click='replace'>replace</button>
    <router-view name="slider"></router-view>    
    <transition :name='name' mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      name:'left'      
    }
  },
  methods:{
    forward(){
      this.$router.forward();
    },
    back(){
      this.$router.back();
    },
    push(){
      this.$router.push('/');
    },
    replace(){
      this.$router.replace('/user');
    }
  },
  watch:{
    $route(to,from){
      if(to.meta.index > from.meta.index){
        this.name = 'left'
      }else{
        this.name = 'right'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-enter-active{
  transition:2s
}
.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity: 0;
}
.v-leave-active{
  transition: 2s
}
.left-enter{
  transform: translateX(100%);
}
.left-enter-to{
  transform: translateX(0);  
}
.left-enter-active{
  transition: 2s
}
.left-leave{
  transform: translateX(0);  
}
.left-leave-to{
  transform: translateX(-100%);
}
.left-leave-active{
  transition: 2s
}


.right-enter{
  transform: translateX(-100%);
}
.right-enter-to{
  transform: translateX(0);  
}
.right-enter-active{
  transition: 2s
}
.right-leave{
  transform: translateX(0);  
}
.right-leave-to{
  transform: translateX(100%);
}
.right-leave-active{
  transition: 2s
}
</style>
