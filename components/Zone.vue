<template>
	<view class="Zone">
		<view class="Zone-title">
			<slot></slot>
		</view>
		
		<view class="Zone-image">
			<view class="images" v-for="item in Image" :key="item">
				<image :src="item" mode=""></image>
			</view>
		</view>
		
		<view class="Zone-ioc">
			<view class="ioc" v-for="(item,index) in Ioc" :key="index">
				<view class="ioc-image">
					<image class="image" :src="item.images" mode=""></image>
				</view>
				<view class="ioc-text">
					{{item.name}}
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"Zone",
		data() {
			return {

			};
		},
		props:{
			Image:{
				type:Array
			},
			Ioc:{
				type:[Array,Object]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.Zone{
		width: 95%;
		height: 400rpx;
		// border: 1px solid;
		margin: 0 auto;
		margin-top: 20rpx;
		border-radius:10px;
		background-color: #fff;
		image{
			width: 100%;
			height: 100%;
			border-radius:10px;
		}
		.Zone-title{
			width: 100%;
			height: 20%;
			margin-left: 40rpx;
			display: flex;
			align-items: center;
			font-size: 38rpx;
			font-weight: bold;
			letter-spacing: 1px;
		}
		.Zone-image{
			width: 100%;
			height: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			.images{
				width: 45%;
				height: 85%;
				margin-left: 5rpx;
				image{
					border-radius: 10px;
				}
			}
		}
		.Zone-ioc{
			width: 100%;
			display: flex;
			.ioc{
				width: 25%;
				height: 100%;
				.ioc-image{
					width: 100%;
					height: 70%;
					margin-top: 10rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					.image{
						width: 60rpx;
						height: 65rpx;
					}
				}
				.ioc-text{
					margin-top: 10rpx;
					width: 100%;
					height: 30%;
					font-size: 20rpx;
					text-align: center;
				}
			}
		}
	}
</style>