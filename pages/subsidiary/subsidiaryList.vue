<template>
	<view class="type-time">
		<view class="Type-title">
			<slot name="name"></slot>
		</view>
		<slot name="ViewDiv"></slot>	
	</view>
</template>

<script>
	export default {
		name:"subsidiaryList",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.type-time{
		width: 100%;
		height: 15%;
		margin-top:50rpx;
		.Type-title{
			font-size: 28rpx;
			display: flex;
			align-items: center;
			width: 90%;
			height: 50%;
			margin: 0 auto;
		}
		
	}
</style>