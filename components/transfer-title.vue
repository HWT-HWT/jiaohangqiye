<template>
	<view class="title" :style="{'border-left':'2px solid '+BorderColor}">
		<view class="left">
			<slot name="text"></slot>
			<slot name='icon'></slot>
		</view>
		<view class="rigth">
			<slot name='rigth'></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "transfer-title",
		data() {
			return {
				
			};
		},
		props: {
			BorderColor: {
				type: String,
				default: 'red' // 提供一个默认值
			}
		},
	}
</script>

<style lang="scss" scoped>
	.title {
		width: 90%;
		margin: 20rpx auto;
		font-size: 35rpx;
		font-weight: bold;
		padding-left: 20rpx;
		display: flex;
		align-items: center;
		.left{
			flex: 1;
			display: flex;
			align-items: center;
		}
		.rigth{
			display: flex;
			align-items: center;
			font-size: 28rpx;
			color: #4c6cfb;
		}
	}
</style>