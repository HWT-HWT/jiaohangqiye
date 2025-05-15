<template>
	<view class="Detail">
		
		<company></company>
		
<<<<<<< HEAD
		<view class="DetailSet" @click="GoDefaultSetting">
=======
		<view class="DetailSet">
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
			<view class="DetailSetText">
				默认账户设置
			</view>
			<view class="DetailSetIco">
				<image class="DetailSetIco-Ico" src="../../static/bg-image/ioc.png" mode=""></image>
			</view>
		</view>
		
		<view class="Account">
			<view class="Account-title">
				<view class="Account-title-text">
					活期账户信息
				</view>
<<<<<<< HEAD
				<view class="Account-title-icon" @click="isEye">
					隐藏
					<image class="Account-title-icon-image" src="../../static/jiaohang/ioc_eye.png" mode="" v-if="eye"></image>
					<image class="Account-title-icon-image" src="../../static/jiaohang/eye_hide.png" mode="" v-else></image>
=======
				<view class="Account-title-icon">
					隐藏
					<image class="Account-title-icon-image" src="../../static/jiaohang/ioc_eye.png" mode=""></image>
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
				</view>
			</view>
			<view class="Account-content">
				<view class="Account-content-text">
					<view class="text" style="font-weight: bold; font-size: 28rpx;">
						人民币
					</view>
					
					<view class="text">
<<<<<<< HEAD
						余额:{{eye ? "30,544.10" : '******'}}
					</view>
					
					<view class="text">
						可支付金额:{{eye ? "30,544.10" : '******'}}
=======
						余额:7,352.66
					</view>
					
					<view class="text">
						可支付金额7,352.66
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
					</view>
				</view>
				<view class="Account-content-icon" @click="NavTo">
					明细 
					<image class="Account-content-icon-image" src="../../static/bg-image/ioc.png" mode=""></image>
				</view>
			</view>
			<view class="Account-btn">
<<<<<<< HEAD
				<view class="Account-btn-list" v-for="(item,index) in AccountBtn" :key="index" @click="GoNav(index)">
=======
				<view class="Account-btn-list" v-for="(item,index) in AccountBtn" :key="index">
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
					{{item}}
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import company from "@/components/Company.vue"
	export default {
		data() {
			return {
<<<<<<< HEAD
				AccountBtn:['账户详情','历史余额','银企对账','回单查询'],
				eye:false
=======
				AccountBtn:['账户详情','历史余额','银企对账','回单查询']
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
			};
		},
		components:{
			company
		},
		methods:{
			NavTo(){
				uni.navigateTo({
					url:'/pages/subsidiary/subsidiary'
				})
<<<<<<< HEAD
			},
			GoDefaultSetting(){
				uni.navigateTo({
					url:'/pages/DefaultSetting/DefaultSetting'
				})
			},
			isEye(){
				this.eye = !this.eye
			},
			GoNav(index){
				index === 0 ? uni.navigateTo({url:'/pages/AccountDetali/AccountDetali'}) : ''
				index === 1 ? uni.navigateTo({url:'/pages/HistoricalBalance/HistoricalBalance'}) : ''
=======
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
			}
		}
	}
</script>

<style lang="scss" scoped>
	.Detail{
		width: 100%;
		height: 100vh;
		background-color: #f2f3f7;

		.DetailSet{
			width: 100%;
			height: 75rpx;
			background: #fff;
			margin-top: 20rpx;
			display: flex;
			.DetailSetText{
				width: 85%;
				height: 100%;
				font-size: 30rpx;
				display: flex;
				align-items: center;
				margin: 0 auto;
			}
			.DetailSetIco{
				width: 10%;
				height: 100%;
				// border: 1px solid;
				display: flex;
				justify-content: center;
				align-items: center;
				.DetailSetIco-Ico{
					width: 10rpx;
					height: 20rpx;
				}
			}
		}
		.Account{
			width: 100%;
			height: 350rpx;
			background: #fff;
			margin-top: 20rpx;
			.Account-title{
				width: 100%;
				height: 20%;
				border-bottom: 1px solid #d9d9d9;
				display: flex;
				align-items: center;
				.Account-title-text{
					width: 75%;
					border-left: 4rpx solid;
					height: 50%;
					display: flex;
					font-weight: bold;
					align-items: center;
					margin: 0 auto;
					padding-left: 10rpx;
				}
				.Account-title-icon{
					width: 20%;
					// border: 1px solid;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #0084f7;
					font-size: 25rpx;
					.Account-title-icon-image{
						width: 30rpx;
						height: 30rpx;
						margin-left: 15rpx;
					}
				}
			}
			.Account-content{
				width: 100%;
				height: 58%;
				// border: 1px solid;
				display: flex;
				.Account-content-text{
					width: 80%;
					margin: 35rpx auto;
					.text{
						width: 100%;
						height: 33%;
						// border: 1px solid;
						display: flex;
						align-items: center;
						font-size: 25rpx;
					}
				}
				.Account-content-icon{
					width: 15%;
					height: 100%;
					// border: 1px solid;
					justify-content: center;
					display: flex;
					align-items: center;
					font-size: 25rpx;
					.Account-content-icon-image{
						width: 10rpx;
						height: 20rpx;
						margin-left: 20rpx;
					}
				}
			}
			.Account-btn{
				width: 100%;
				height: 20%;
				// border: 1px solid;
				display: flex;
				align-items: center;
				.Account-btn-list{
					width: 25%;
					// height: 100%
					font-size:25rpx;
					border-right: 1px solid #d9d9d9;
					color: #0084f7;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
</style>
