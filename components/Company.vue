<template>
	<view class="title">
		<view class="title-text">
				<view class="DetailName">
					<view class="Name">
						广州伊玉贸易有限公司
					</view>
					<view class="stateName">
						活期
					</view>
					<view class="stateName">
						正常
					</view>
				</view>
				<view class="title-text-num">
					441168596013003049427
				</view>
				<view class="title-text-name">
					交通银行广州金迪支行
				</view>
		</view>
		<view class="title-ioc">
			<image class="image" src="@/static/bg-image/ioc.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Company",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.title{
	width: 100%;
	background: #fff;
	display: flex;
	.title-text{
		width: 90%;
		height: 100%;
		font-size: 35rpx;
		margin-left: 20rpx;
		padding-bottom: 15rpx;
		.DetailName{
			width: 100%;
			display: flex;
			margin: 20rpx auto;
			height: 50%;
			margin-top: 20rpx;
			.Name{
				height: 30%;
				margin-right:15rpx;
				font-size: 35rpx;
				font-weight: bold;
			}
			.stateName{
				width: 15%;
				height: 100%;
				margin-left:15rpx;
				padding: 5rpx;
				text-align: center;
				color: #6f7fcd;
				align-self: center;
				background-color: #e9eeff;
				font-size: 30rpx;
			}
		}
		.title-text-num{
			font-size: 30rpx;
			margin-top: 20rpx;
		}
		.title-text-name{
			font-size: 28rpx;
			margin-top: 10rpx;
			color: #ccc;
		}
	}
	.title-ioc{
		width: 10%;
		height: 100%;
		display: flex; 
		justify-content: center;
		align-self: center;
		.image{
			// border: 1px solid;
			width: 10rpx;
			height: 20rpx;
		}
	}
}
</style>