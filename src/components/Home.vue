<template>
	<div id="box">
		<div class='wrap'>
			<div class="left" v-if='this.$store.state.logState'>
				<p>
					<img src="" alt="">
				</p>
				<p>{{user_msg.name||'无'}}</p>
				<p>{{user_msg.skill||'无'}}</p>
				<p>{{user_msg.email||'无'}}</p>
				<p>{{user_msg.personalized_signature||'无'}}</p>
			</div>
			<div class="main">
				<com-cart v-for='data in blogs' :blog='data' class='cart'></com-cart>
			</div>
			<div class="write" v-if='this.$store.state.logState'>
				<img src="../assets/write_blog.png" title="写博客" @click='writeBlog'>
			</div>
		</div>
	</div>
</template>

<script>
import Cart from '../components/Cart'
export default {
	data(){
		return{
			blogs:Array,
			user_msg:null,
		}
	},
	methods: {
		handleScroll () { //改变元素#searchBar的top值
		    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

		    if(scrollTop<=60){
		    	document.querySelector('.left').style.top = 60-scrollTop+'px'
		    }else{
		    	document.querySelector('.left').style.top = '0px'
		    }
		},
		writeBlog(){
			this.$router.push({path:'/write'})
		}
	},
	components:{
		'com-cart':Cart
	},
	created(){
		let that = this
		
		this.axios.post('user/searchmsg',{
			params:{
				user:this.$store.state.user
			}
		})
		.then(response => {
			if(response.data.code ) {
				console.log(response)
				that.user_msg = response.data.msg[0]
			}
		})
		.catch(error => {
			console.log(error)
			alert('错误')
		})

		this.axios.post('blog/getblogs',{
			params:{
				user:this.$store.state.user
			}
		})
		.then(response => {
			if(response.data.code ){ 
				that.blogs = response.data.msg
				console.log(response)
			}
		})
		.catch(error => {
			console.log(error)
			alert('错误')
		})
	},
	mounted () {//给window添加一个滚动滚动监听事件
  		window.addEventListener('scroll', this.handleScroll)
	},
	destroyed () {//离开该页面需要移除这个监听的事件
	    window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>

<style scoped>
@media screen and (max-width:980px) {
    .left{
        display: none;
    }
    .wrap .main{
    	width: 100%;
    	margin-left: 0;
    }
}
	#box{
		width: 100%;
		min-height:calc(91vh - 2px);
	}
	.wrap{
		position: relative;
		width: 90%;
		height: auto;
		min-width: 600px;
		margin: 20px auto 0;
	}
	.main{
		width: calc(100% - 360px);
		height: auto;
		margin-left: 350px;
		background: #fff;
		border-radius: 3px;
	}
	.left{
		position:fixed;
		width: 330px;
		height:calc(100% - 20px);
		background: url(../assets/d74948e083d65e7cfc6834a44b0a72f8.jpg) no-repeat 20% 100%;
		border-radius: 3px;
		color:#fff;
	}
	.write{
		position: fixed;
		width: 55px;
		height: 55px;
		top: 500px;
		right: 20px;
		cursor:pointer;
	}
	.write img{
		width: 100%;
		height: 100%;
	}
</style>