<template>
  <div class="about">
      <div class="nav-box">
        <ul class='nav'>
            <router-link exact to="/about/" tag="li">work</router-link>
            <router-link to="/about/study" tag="li">study</router-link>
            <router-link to="/about/hobby" tag="li">hobby</router-link>
        </ul>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
.about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 35px;
}
</style>
