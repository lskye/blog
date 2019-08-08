<template>
	<div id='log_box'>
		<div class="wrap">
			账号：<input type="text" v-model='user'>
			密码：<input type="password" v-model='pass'>
			<button  @click='reg'>注册</button>
			<button  @click='log'>登陆</button>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			user:null,
			pass:null
		}
	},
	methods:{
		reg(){
			var that = this
			if(this.user.length < 10){
				alert('账号10位以上')
				return
			}
			this.axios.post('/user/adduser',{
				params:{
					name:this.user,
					pass:this.pass
				}
			})
			.then(function (response) {
			    if(response.data.code) {
			    	console.log(response)
			    	that.log()
			    }else{
			    	console.log(response)
			    	alert('账户已存在')
			    }
			})
			.catch(function (error) {
			    console.log(error);
			});
		},
		log(){
			let that = this
			this.axios.post('user/login',{
				params:{
					name:this.user,
					pass:this.pass
				}
			})
			.then(response =>{
				if(response.data.code == 1 && that.pass == response.data.msg[0].password) {
					this.$store.state.logState = true
					this.$store.state.user = that.user
					this.$router.push({path:'/'})
				} else {
					alert('登陆失败'+response.msg)
				}
			})
			.catch(error => {
				alert(error)
			})
		}
	}
}
</script>

<style scoped>
	#log_box{
		width: 100%;
		min-height:calc(91vh - 2px);
	}
	.wrap{
		width: 90%;
		min-width: 600px;
		height: auto;
		margin: 10px auto;
		border:20px solid #fff;
		box-sizing: border-box;
		background: #fff;
		border-radius:3px;
	}
	input{
		display: block;
		width: 300px;
		height:30px;
		margin-left: 30px;
		border:1px solid #f0f0f0;
		border-radius: 3px;
		font-size:15px;
		color: #444;
	}
	button{
		padding: 5px 10px;
		font-size: 15px;
		color: #fff;
		background: #44cef6;
		border:none;
		border-radius: 5px;
		margin: 20px 50px;
		cursor:pointer;
	}
	button:hover{
		background:  #1685a9;
	}
</style>