<template>
	<view class="Receipt">
		<view class="ReceiptList" >
			<view class="Receiptli" >
				单笔回单
			</view>
			<view class="Receiptli">
				合并回单
			</view>
			<view class="Receiptli" style="border: none;">
				状态查询
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.Receipt{
		width: 100%;
		height: 100vh;
		background-color: #f2f3f7;
		.ReceiptList{
			width: 100%;
			background-color: #fff;
			font-size: 30rpx;
			.Receiptli{
				width: 90%;
				padding: 20rpx;
				margin: 0 auto;
				border-bottom: 1rpx solid #dcdcdc;
			}
		}
	}
</style>
