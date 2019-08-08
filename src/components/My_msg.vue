<template>
	<div id="My_msg">
		<div class="wrap">
			<div class="msg">
				<ul>
				<li class="header_img">
					<img src='../assets/d74948e083d65e7cfc6834a44b0a72f8.jpg'>
					 <input type="file" class="files" multiple="multiple" @change='chageImg($event)' ref='inputer'>
				</li>
				<li class="name">
					<span>用户名</span>
					<input type="text" v-model='msg.name'>
				</li>
				<li>
					<span>技术栈</span>
					<input type="text" v-model='msg.skill'>
				</li>
				<li>
					<span>邮箱</span>
					<input type="text" v-model='msg.email'>
				</li>
				<li>
					<span>个性签名</span>
					<input type="text" v-model='msg.personalized_signature'>
				</li>
			</ul>
			<button @click='upMsg'>保 存</button>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			header_img:'../assets/d74948e083d65e7cfc6834a44b0a72f8.jpg',
			user:this.$store.state.user,
			msg:{
				name:null,
				skill:null,
				email:null,
				personalized_signature:null
			}
		}
	},
	methods:{
		upMsg(){
			let that = this
			this.axios.post('user/msgadd',{
				params:{
					name:this.msg.name,
					skill:this.msg.skill,
					email:this.msg.email,
					personalized_signature:this.msg.personalized_signature,
					user:this.user
				}
			})
			.then(response =>{
				if(response.data.code ) {
					console.log(response)
					this.$router.push({path:'/'})
				} else {
					console.log('保存失败'+response.msg)
					alert('保存失败')
				}
			})
			.catch(error => {
				console.log(error)
				//alert(error)
			})
		},
		chageImg(event) {
			  let inputDOM = this.$refs.inputer	
			  console.log(inputDOM.files)
		}
	},
	created(){
		let that = this
		this.axios.post('user/searchmsg',{
			params:{
				user:this.user
			}
		})
		.then(response => {
			if(response.data.code ) {
				console.log(response)
				that.msg = response.data.msg[0]
			}
		})
		.catch(error => {
			console.log(error)
			alert('错误')
		})
	}
}
</script>

<style scoped>
	#My_msg{
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
	.wrap .msg{
		width: 400px;
		background: #fff;
		margin:0 auto;
		border-top: 120px #f4f4f4 solid;
		border-bottom:20px solid #fff;
		box-sizing: border-box; 
	}
	.msg ul,button{
		margin:40px 20px 0;
	}
	ul img{
		width: 50px;
		height: 50px;
		margin:0 auto;
		border-radius: 30px;
		overflow: hidden;
	}
	.files {
		display: inline;
		position:relative;
		top: -20px;
		left: -100px;
		width: 50px;
		opacity: 0;
	}
	ul input{
		display: block;
		width: 180px;
		height: 30px;
		border-radius: 3px;
		border:1px solid #f2f2f2;
		margin-left: 40px;
		margin-top: 10px;
	}
	.msg button {
		width: 180px;
		height: 30px;
		background: #50616d;
		color: #fff;
		cursor: pointer;
		border-radius: 3px;
	}
	.msg button:hover{
		background: #50617a;
	}
</style>