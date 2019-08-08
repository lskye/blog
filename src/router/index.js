import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Log from '../components/Log'
import Write_blog from '../components/Blog_compile'
import Detailed from '../components/Detailed'
import My_msg from '../components/My_msg'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
    	path:'/log',
    	name:'Log',
    	component:Log
    },
    {
    	path:'/msg',
    	name:'My_msg',
    	component:My_msg
    },
    {
    	path:'/write',
    	name:'Write_blog',
    	component:Write_blog
    },
    {
    	path:'/blog/:id',
    	name:'Detailed',
    	component:Detailed
    }
  ]
})
