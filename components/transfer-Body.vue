<template>
		<view class="transfer-Body-list">
			
			<view class="name">
				<slot name="text"></slot>
			</view>
			
			<view class="input-text">
				 <textarea
				      :placeholder="placeholder"
				      :value="value"
				      rows="2"
				      placeholder-style="color: #ccc; font-weight:normal"
				      style="width: 100%; height: auto; font-sizi:25rpx;"
				    ></textarea>
			</view>
			
			<view class="icon">
				<slot name="icon"></slot>
			</view>
			
		</view>
</template>

<script>
	export default {
		name:"transfer-Body",
		data() {
			return {
				
			};
		},
		props:{
			placeholder:{
				type:String
			},
			value:{
				type:String
			}
		}
	}
</script>

<style lang="scss" scoped>
		.transfer-Body-list{
			width: 96%;
			border-bottom: 1px solid #e6e6e6;
			display: flex;
			font-size: 32rpx;
			font-weight: bold;
			margin: 10rpx auto;
			.name{
				width: 25%;
				padding: 20rpx;
				font-weight: bold;
				display: flex;
				align-items: center;
			}
			
			.input-text{
				padding: 20rpx;
				flex: 1;
				display: flex;
				align-items: center;
			}
			
			.icon{
				display: flex;
				align-items: center;
				margin-right: 20rpx;
			}
		}
</style>