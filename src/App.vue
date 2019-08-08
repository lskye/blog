<template>
  <div id="app">
    <com-nav></com-nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components:{
    'com-nav':Nav
  }
}
</script>

<style>
#app {
  width: 100%;
  height: auto;
  min-width: 600px;
  background: #f4f4f4;
  padding-bottom:10px; 
}
*{
  margin: 0;
  padding: 0;
}
button{
  border: none;
}
li{
  list-style-type: none;
}
a{
  text-decoration: none;
  color:#444;
  font-size: 15px;
}
a:hover{
  color: #44cef6;
}
</style>
