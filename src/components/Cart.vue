<template>
	<div id="cart_box">
		<router-link :to='{name:"Detailed",params:{"id":blog}}'>
			<div class="wrap">
				<p class="title">{{blog.title}}</p>
				<p class="content">{{blog.content}}</p>
				<p class="time">编辑于:{{format(blog.timer)}}</p>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default{
		props:{
			blog:Object
		},
		data(){
			return{}
		},
		methods:{
			format(shijianchuo) {
				function add0(m){return m<10?'0'+m:m }
				//shijianchuo是整数，否则要parseInt转换
				var time = new Date(shijianchuo);
				var y = time.getFullYear();
				var m = time.getMonth()+1;
				var d = time.getDate();
				var h = time.getHours();
				var mm = time.getMinutes();
				var s = time.getSeconds();
				return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
			}
		}
	}
</script>

<style scoped>
	#cart_box{
		width: 90%;
		height:auto;
		background:#f4f4f4;
		border-radius: 2px;
		margin: 0 auto;
		border: 10px solid #fff;
	}
	.wrap{
		width: 96%;
		margin:0 auto;
		overflow: hidden;
	}
	p{
		color: #444;
		font-size: 15px;
		line-height: 30px;
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
	}
	.title{
		font-size: 18px;
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1; 
	}
	.time{
		float: right;
		font-size: 14px;
		color: #888;
	}
</style>