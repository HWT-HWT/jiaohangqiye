<template>
	<view class="AccountDetali">
		<view class="AccountDetali-copy">
			<view class="AccountDetali-copy-list" v-for="(item,index) in copyList" :key="index">
				<text>{{item.name}}</text>
				<view>{{item.content}}</view>
				<text class="copy"  @click="copy(item.content)">{{item.copy}}</text>
			</view>
			<view class="copy-Btn">
				一键复制
			</view>
		</view>
		
		<view class="AccountDetali-datali">
			<view class="AccountDetali-datali-list" v-for="(item,index) in dateList" :key="index">
				<text>{{item.name}}</text>
				<text>{{item.copy}}</text>
			</view>
		</view>
		
		<view class="AccountDetali-Btn">
			<view class="query">
				<button @click="query">余额查询</button>
			</view>
			<view class="DetailQuery">
				<button @click='DetailQuery'>明细查询</button>
			</view>
			<view class="update" @click="update">
				<button>更新户名</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				copyList:[
					{
						name:'账号',content:'441168596013003049427',copy:'复制'
					},
					{
						name:'户名',content:'广州伊玉贸易有限公司',copy:'复制'
					},
					{
						name:'开户行',content:'交通银行广州金迪支行',copy:'复制'
					},
					{
						name:'支付行号',content:'302581000779',copy:'复制'
					}
				],
				dateList:[
					{
						name:'账号性质',copy:'活期一般户	'
					},
					{
						name:'账号状态',copy:'正常'
					},
					{
						name:'币种',copy:'人民币'
					},
					{
						name:'开户时间',copy:'2024-05-24 11:40:10'
					},
				]
			};
		},
		methods:{
			query(){
				uni.navigateTo({
					url:'/pages/Detail/Detail'
				})
			},
			DetailQuery(){
				uni.navigateTo({
					url:'/pages/subsidiary/subsidiary'
				})
			},
			update(){
				uni.showToast({
					title:'更新成功',
					icon:'none',
				})
			},
			copy(text){
				uni.setClipboardData({
					data: `${text}`,
					showToast:false,
					success: function () {
						uni.showToast({
							title:"复制成功",
							icon:'none',
						})
					}
				});

			}
		}
	}
</script>

<style lang="scss" scoped>
	.AccountDetali {
		width: 100vw;
		height: 100vh;
		background-color: #f7f7f7;
		.AccountDetali-copy{
			width: 100%;
			background-color: #fff;
			margin-top: 20rpx;
			.AccountDetali-copy-list {
				display: flex;
				padding:20rpx 30rpx;
				font-size: 30rpx;
				align-items: center;
				view{
					flex: 1;
					text-align: right;
					padding: 0 30rpx;
				}
				.copy{
					color: blueviolet;
				}
			}
			.copy-Btn{
				width: 100%;
				height: 70rpx;
				text-align: center;
				margin-top: 20rpx;
				color: blueviolet;
			}
		}
		
		.AccountDetali-datali{
			width: 100%;
			background-color: #fff;
			margin-top: 20rpx;
			.AccountDetali-datali-list {
				display: flex;
				padding:20rpx 30rpx;
				font-size: 30rpx;
				justify-content: space-between;
				align-items: center;
				.copy{
					color: blueviolet;
				}
			}
			.copy-Btn{
				width: 100%;
				height: 70rpx;
				text-align: center;
				margin-top: 20rpx;
				color: blueviolet;
			}
		}
		.AccountDetali-Btn{
			width: 100%;
			position: absolute;
			bottom: 20rpx;
			background-color: #fff;
			display: flex;
			align-items: center;
			padding: 10rpx;
			justify-content: space-evenly;
			button{
				font-size: 28rpx;
			}
			.update{
				width: 40%;
				button{
					background-color: #1f57ef;
					color: #fff;
				}
			}
			
		}
	}
</style>