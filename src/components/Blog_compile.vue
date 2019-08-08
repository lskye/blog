<template>
	<div id="blog_compile">
		<div class="wrap">
			<input placeholder="标题字数10字以上" v-model='title'>
			<textarea cols="50" rows="10" v-model='content'>在这里输入内容...</textarea>
			<input type="button" value="发 布" @click='submit'>
		</div>
	</div>
</template>

<script>
import {formation_data} from '../public.js'
export default{
	data(){
		return{
			title:null,
			content:null
		}
	},
	methods:{
		submit(){
			if(this.title.length < 10) {
				alert('标题字数过低')
				return false;
			}
			const time = Date.parse(new Date())
			this.axios.post('blog/writebloge',{
				params:{
					title:this.title,
					content:this.content,
					time:time,
					user:this.$store.state.user
				}
			})
			.then(respons => {
				this.$router.push({path:'/'})
			})
			.catch(error => {
				console.log(error)
			})
		}
	}
}
</script>

<style scoped>
	#blog_compile{
		width: 100%;
	}
	.wrap{
		width: 90%;
		height: auto;
		margin: 10px auto;
		background: #fff;
		border-radius: 3px;
	}
	input:nth-child(1),textarea{
		width: 90%;
		height: 30px;
    	border: none;
    	resize: none;
		box-shadow: 0 0 2px rgba(60,60,60,.5);
		font-size: 14px;
    	word-break: break-word;
    	display: inline-block;
	    margin: 10px 5%;
	    font-size: 14px;
	    line-height: 20px;
	    color: #555;
	    vertical-align: middle;
	    border-radius: 4px;
	    text-indent: 10px;
	}
	textarea{
		height: 550px; 
		text-indent: 10px; 
	}
	input:nth-child(3){
		font-size: 16px;
		color: #fff;
		background: #44cef6;
		border: none;
		border-radius: 3px;
		padding:5px 10px;
		margin:10px 5% 20px;
		cursor: pointer;
	}
	input:nth-child(3):hover{
		background: #1685a9;
	}
</style>