<template>	
	<div id="box">	
		<div class="wrap">
			<ul>
				<li @click='activeOption(1)'>
					<router-link to='/' :class='active==1?"current_option":""'>首页</router-link>
				</li>
				<template v-if='this.$store.state.logState'>
					<li @click='activeOption(2)'>
						<router-link to='/msg' :class='active==2?"current_option":""'>我的信息</router-link>
					</li>
					<li @click='outLog'>
						<router-link to='/' :class='active==3?"current_option":""'>退出</router-link>
					</li>
				</template>
				<li @click='activeOption(3)' v-else>
					<router-link to='/log' :class='active==3?"current_option":""'>登陆</router-link>
				</li>
			</ul>
		</div>
	</div>	
</template>

<script>
export default {
	data(){
		return{
			active:1,
		}
	},
	methods:{
		activeOption(e){
			this.active = e
		},
		outLog(){
			this.$store.state.logState = false
			this.active = 1
		}
	}
}
</script>

<style scoped>
	#box{
		position: sticky; 
		width: 100%;
		height: auto;
		background: #50616d;
		border-radius: 3px;
		z-index: 99;
	}
	.wrap{
		width: 90%;
		min-width: 600px;
		margin: 0 auto;
		overflow: hidden;
	}
	.wrap ul {
		float: right;
	}
	.wrap li{
		float: left;
		line-height: 40px;
		margin: 0 10px;
	}
	.wrap a{
		color: #fff;
	}
	.wrap a:hover{
		color: #44cef6
	}
	.wrap .current_option{
		color: #44cef6
	}
</style>