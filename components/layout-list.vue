<template>
	<view class="layout-list">
		<view class="list">
			<view class="list-ioc" v-for="(item,index) in value" :key="index" @click="NavGo(index)">
				<view class="ioc">
					<image class="ioc-image" :src="`../../static/jiaohang/list-${index+1}.png`" mode=""></image>
				</view>
				<view class="name">
					{{item}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {gologin} from '@/components/login.js'
	export default {
		name:"layout-list",
		data() {
			return {
				
			};
		},
		props:{
			value:{
				type:Array
			}
		},
		methods:{
			NavGo(index){
				index === 4 ? gologin('/pages/Repayment/Repayment') :'',
				index === 9 ? gologin('/pages/more/more') :''
			},
		}
	}
</script>

<style lang="scss" scoped>
	.layout-list{
		width: 100%;
		.list{
			width: 100%;
			height: 100%;
			margin: 0 auto;
			display: grid;
			grid-template-columns: repeat(5, 1fr); /* 3列，每列占据相同的空间 */  
			.list-ioc{
				width: 80%;
				padding: 10px 0;
				margin: 0 auto;
				.ioc{
					width: 80rpx;
					aspect-ratio: 1/1;
					margin: 0 auto;
					display: flex;
					justify-content: center;
					align-items: center;
					.ioc-image{
						width: 60rpx;
						height: 60rpx;
					}
				}
				.name{
					height: 20%;
					margin: 0 auto;
					display: flex;
					justify-content: center;
					// font-size: 28rpx;
					text-align: center;
				}
			}
		}
	}
</style>