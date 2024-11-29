<template>
	<view class="repayment">
		<view class="repayment-list">
			<view class="chebox">
				<checkbox @click="btncheck()" style="transform: scale(0.7)"/>贷款编号: 4412024000159586 
				 <view style="color: #5b6eb7; border-radius:5rpx ; margin-left: 40rpx;width: 100rpx;height: 40rpx;  background-color: #edf0ff; display: flex; justify-content: center; align-items: center; font-size: 25rpx;">正常</view>
			</view>
			<view class="repayment-list-text">
				<text class="text">贷款余额: </text><text> ￥1,200,000.00</text>
			</view>
			<view class="repayment-list-text">
				<text class="text">贷款种类: </text><text> 普通贷款</text>
			</view>
			<view class="repayment-list-text">
				<text class="text">贷款期限: </text> <text> 2024-05-31 至 2025-05-31</text>
			</view>
			<view class="repayment-list-text">
				<text class="text">贷款金额: </text> <text> ￥1,200,000.00</text>
			</view>
		</view>
		
		<view class="foot">
			<view class="foot-left">
				<view style="width: 100%; margin-top: 20rpx; margin-left: 30rpx; line-height: 50rpx;"v-if="value">
					选中 <text style="color: #4f7199;">1笔</text>
					<br />
					合计 <text style="color: #4f7199;">1笔</text>
				</view>
				<view style="width: 100%; margin-top: 20rpx; margin-left: 30rpx; line-height: 50rpx;" v-else>
					选中 <text style="color: #4f7199;">0笔</text>
					<br />
					合计 <text style="color: #4f7199;">0笔</text>
				</view>
			</view>
			<view class="foot-right">
				<view class="btn">
					到期还款
				</view>
				<view class="btn" :style="{background: value ? '#739bfd' : '', color: value ? '#fff' : ''}">
					提前还款
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:false,
			};
		},
		methods:{
			btncheck(){
				this.value=!this.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.repayment{
		width: 100%;
		height: 100vh;
		background-color: #f3f4f8;
		.repayment-list{
			width: 100%;
			height: 300rpx;
			background-color: #fff;
			.chebox{
				width: 100%;
				height: 20%;
				// border: 1px solid;
				padding: 10rpx 20rpx;
				display: flex;
				align-items: center;
				font-size: 25rpx;
			}
			.repayment-list-text{
				margin-top: 10rpx;
				font-size: 28rpx;
				margin-left: 20rpx;
				.text{
					font-size: 25rpx;
					color: #999999;
				}
			}
		}
		.foot{
			width: 100%;
			height: 200rpx;
			background-color: #fff;
			position: fixed;
			bottom: 0;
			display: flex;
			.foot-left{
				display: flex;
				width: 35%;
				height: 100%;
				font-size: 28rpx;
			}
			.foot-right{
				flex: 1;
				height: 100%;
				// border: 1px solid;
				display: flex;
				
				.btn{
					width: 200rpx;
					height: 90rpx;
					// border: 1px solid;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius:10rpx;
					margin-top: 20rpx;
					margin-left: 20rpx;
					font-size: 28rpx;
					background-color: #e6e6ea;
					color: #aeafb3;
				}
			}
		}
	}
</style>
