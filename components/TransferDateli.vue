<template>
	<view class="datali-list">
		<view class="left">
			<slot name="left"></slot>
		</view>
		<view class="rigth">
			<slot name="rigth"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"TransferDateli",
		data() {
			return {
				
			};
		},
	}
</script>

<style lang="scss" scoped>
	.datali-list{
		width: 90%;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		margin-top: 20rpx;
		align-items: center;
		.left{
			flex: 1;
			font-size: 28rpx;
		}
		.rigth{
			flex:1;
			text-align: right;
			font-size: 28rpx;
		}
	}
</style>