<template>
  <div class="user">
      我是user(用户)页面
      <div class="nav-box">
        <ul class="nav">
            <router-link tag="li" v-for="item in userList" :key='item.id' :to="'/user/'+item.id">{{item.name}}</router-link>
        </ul>
      </div>
      <div>
          <p>姓名 : {{userInfo.name}}</p>
          <p>性别 : {{userInfo.sex}}</p>
          <p>爱好 : {{userInfo.hobby}}</p>
          <p>身高 : {{userInfo.height}}</p>
          <p>体重 : {{userInfo.weight}}</p>
      </div>
      <div>
          <router-link exact :to="{path:'',query:{info:'follow',a:1}}">他的关注</router-link>
          <router-link exact to="?info=share&a=2">他的分享</router-link>
      </div>
  </div>
</template>

<script>
var userList = [{
            id : 1,
            name: 'yjc',
            sex:'male',
            hobby:'female',
            weight: '65kg',
            height: '175cm'        
        },{
            id : 2,
            name: 'zjx',
            sex:'male',
            hobby:'female',
            weight: '73kg',
            height: '175cm'        
        },{
            id : 3,
            name: 'zzq',
            sex:'male',
            hobby:'female',
            weight: '79kg',
            height: '180cm'        
        },{
            id : 4,
            name: 'zwb',
            sex:'male',
            hobby:'female',
            weight: '76kg',
            height: '186cm'            
        },{
            id : 5,
            name: 'wd',
            sex:'male',
            hobby:'female',
            weight: '78kg',
            height: '192cm'
        }]
export default {
    data(){
        return {
            userList,
            userInfo : {}
        }
    },
    created(){
        var id = this.$route.params.id;
        if(id) {
            var userlist = this.userList.filter(function(item){
                return id == item.id
            })[0];
            this.userInfo = userlist;
        }else{
            this.userInfo = {}
        }
    },
    watch:{
        $route(){
            var id = this.$route.params.id;
            if(id) {
                var userlist = this.userList.filter(function(item){
                    return id == item.id
                })[0];
                this.userInfo = userlist;
            }else{
                this.userInfo = {}
            }
        }
    }
}

</script>
    
<style>
.user {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 35px;
}
</style>
