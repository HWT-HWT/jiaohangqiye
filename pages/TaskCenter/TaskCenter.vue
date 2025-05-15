<template>
	<view class="TaskCenter">
		<view class="navigation">
			<view class="placeholder">
				
			</view>
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
					<view class="ioc" v-for="item in 3" :key='item'>
						<image class="ioc-image" :src='`../../static/jiaohang/Nav_my_${item}.png`' mode=""></image>
					</view>
				</view>
			</view>
		
		</view>
		
		<view class="TaskCenter-titleList">
			<view class="TaskCenter-titleList-Tabs">
				<z-tabs :list="TaskCenter" @change="tabsChange" :activeStyle='color' bg-color='#f1f2f6'></z-tabs>
			</view>
			<view class="TaskCenter-titleList-rigth">
				<view class="text">
					全部类型 <image src="@/static/jiaohang/sanjiaoxing.png" mode=""></image>
				</view>
				<view class="text">
					筛选 <image src="@/static/jiaohang/shanxuan.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="TaskCenter-titleList-bg" v-if="isTrue">
			
		</view>
		<view class="TaskCenter-titleList-bg-1" v-else>
			
		</view>
	</view>
</template>

<script>
	import {gologin} from '@/components/login.js'
	export default {
		data() {
			return {
				account:'',
				TaskCenter:['代办0','已办','关注'],
				color:{color:'#000'},
				isTrue:true,
			}
		},
		methods: {
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
			tabsChange(data){
				console.log(data);
				data >=1 ? this.isTrue = true : this.isTrue = false 
			}
		},
		created() {
			this.account = uni.getStorageSync('account')
			this.account ? '' : uni.navigateTo({
				url:'/pages/login/login'
			})
		}
	}
</script>

<style scoped lang="scss">
	.TaskCenter{
		width: 100vw;
		height: 100vh;
		background-color: #f1f2f6;
		.navigation{
			width: 100%;
			height: 200rpx;
			// background: linear-gradient(#526df2, #79a4ff);
			.placeholder{
				width: 100%;
				height: 50%;
			}
			.navigation-search{
				width: 100%;
				height:40%;
				display: flex;
				// border: 1px solid;
				.search-name{
					padding: 30rpx;
					color: black;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 28rpx;
				}
				.search-search{
					flex: 1;
					height: 100%;
					color: black;
					display: flex;
					align-items: center;
					justify-content: center;
					// border: 1px solid;
					padding-right: 20rpx;
					.uni-mt-10{
						width: 100%;
						height: 20rpx;
						display: flex; 
						align-items: center;
						border: 1px solid;
						border-radius: 50px;
						color: black;
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
			.navigation-ioc{
				width: 100%;
				height: 40%;
				display: flex;
				justify-content: space-between;
				margin-top: 10px;
				.navigation-ioc-name{
					width: 20%;
					height: 80%;
					// border: 1px solid;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					align-items: center;
					.ioc{
						width: 100%;
						// aspect-ratio: 1/1;
						height: 60%;
						display: flex;
						justify-content: center;
						// border: 1px solid;
						align-items: center;
						.ioc-image{
							width: 80rpx;
							height: 75rpx;
							// aspect-ratio: 1/0.5;
						}
					}
					.text{
						width: 100%;
						height: 40%;
						text-align: center;
						color: #fff;
						font-size: 28rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: 5px;
					}
				}
			}
		}
		.TaskCenter-titleList{
			width: 100%;
			height: 70rpx;
			display: flex;
			.TaskCenter-titleList-Tabs{
				width: 50%;
			}
			.TaskCenter-titleList-rigth{
				width: 50%;
				display: flex;
				align-items: center;
				justify-content: space-evenly;
				.text{
					font-size: 28rpx;
					image{
						width: 20rpx;
						height: 20rpx;
						margin-left: 10rpx;
					}
				}
			}
		}
		.TaskCenter-titleList-bg{
			width: 100%;
			height: 1000rpx;
			background: url('../../static/bg-image/bg-T-1.jpg');
			background-size: 100%;
		}
		.TaskCenter-titleList-bg-1{
			width: 100%;
			height: 1000rpx;
			background: url('../../static/bg-image/bg-T.jpg');
			background-size: 100%;
		}
	}
</style>
