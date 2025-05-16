<template>
	<view class="navigation-search">
		<view class="search-name" v-if="!account" @click="login">
			登录
		</view>
		<view class="search-name" v-else @click="quit">
			退出
		</view>
		<view class="search-search">
			<uni-search-bar class="uni-mt-10"  radius="50" bg-color="none"  placeholder="搜索" clearButton="auto" cancelButton="none"  />
		</view>
		<view class="search-ioc">
			<view class="ioc" v-for="(item,index) in 3" :key='item'>
				<image class="ioc-image" :src='`../../static/jiaohang/Nav_${index+1}.png`' mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"navigationSearch",
		data() {
			return {
				account:'',
			};
		},
		mounted(){
			this.account = uni.getStorageSync('account')
		},
		methods:{
			quit(){
				uni.removeStorage({
					key:'account',
					// 删除用户信息时操作
					success: function (res) {
						this.account='',
						// 跳转到login
						uni.reLaunch({
							url:'/pages/login/login'
						})
						// 弹出提示
						uni.showToast({
							title: '退出成功',
							icon: 'none',
							duration:2000
						})
					}
				})
			},
			login(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.navigation-search{
		width:100vw;
		height:30%;
		display: flex;
		// border: 1px solid;
		.search-name{
			padding: 30rpx;
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 30rpx;
		}
		.search-search{
			flex: 1;
			height: 100%;
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;
			padding-right: 20rpx;
			.uni-mt-10{
				width: 100%;
				height: 20rpx;
				display: flex; 
				align-items: center;
				border: 1px solid;
				border-radius: 50px;
				color: #fff;
			}
		}
		.search-ioc{
			width: 25%;
			// flex: 1;
			height: 100%;
			color: white;
			// border: 1px solid;
			display: flex;
			align-items: center;
			justify-content:space-between;
			.ioc{
				padding:0 10rpx;
				display: flex;
				align-items: center;
				.ioc-image{
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
	}
</style>