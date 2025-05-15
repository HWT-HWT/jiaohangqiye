<template>
	<view class="SelectAccount">
		<view class="search">
			<uni-search-bar class="uni-mt-10"  radius="5" bg-color="#eaeaea"  placeholder="请输入账户或户名查询搜索" clearButton="auto" cancelButton="none"  /> 
		</view>
		
		<view class="list" @click="back">
			<view class="">
				<p class="name">4411 6859 6013 0030 494 27</p>
				<p>广州伊玉贸易有限公司</p>
				<view class="div">
					<uni-icons type="checkbox-filled" size="18" style="margin:0 5rpx;" color="#888"></uni-icons>设为默认值
				</view>
			</view>
			<view class="">
				<uni-icons type="checkmarkempty" size="15" color="blue"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	name:'SelectAccount'
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			back(){
				uni.navigateBack()
			}
		},
		onLoad(options){
			uni.setNavigationBarTitle({
				title:options.NavTitle
			})
		}
	}
</script>

<style lang="scss" scoped>
	.SelectAccount{
		width: 100vw;
		height: 100vh;
		background-color: #f7f7f7;
		.search{
			width: 100%;
			background-color: #fff;
			margin: 0 auto;
			border-bottom: 1rpx solid #cacaca;
		}
		.list{
			width: 95%;
			background-color: #fff;
			font-size: 25rpx;
			padding: 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			p{
				color:#4063ef;
				margin: 5rpx auto;
			}
			.name{
				font-size: 30rpx;
				color: #1f57ef;
			}
			.div{
				display: flex;
				align-items: center;
				margin-top: 15rpx;
			}
		}
	}
</style>
