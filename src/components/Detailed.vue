<template>
	<div id="details_box">
		<div class="wrap">
			<p class="title">{{data.title}}</p>
			<p class="content">{{data.content}}</p>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			data:null
		}
	},
	created(){
		this.data = this.$route.params.id
	}
}
</script>

<style scoped>
	#details_box{
		width: 100%;
		min-height:calc(91vh - 2px);
	}
	.wrap{
		width: 90%;
		min-height: 600px;
		margin: 20px auto;
		background: #fff;
		border:20px solid #fff;
		border-radius:3px;
		box-sizing: border-box;
	}
	.title{
		font-size: 20px;
		color: #222;
		text-align: center;
		line-height: 30px;
		margin: 10px 0;
		font-weight: 1000;
	}
	.content{
		font-size: 15px;
		color: #444;
		line-height: 30px;
	}
</style>