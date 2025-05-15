<template>
	<view class="TransferAccounts">
		<view class="TransferAccounts-content">
			
			<view class="TransferAccounts-datali">
				<view class="MyTransferAccounts">
					<view class="MyTransferAccounts-title">
						付款方账号
					</view>
					<view class="MyTransferAccounts-content">
						<view class="MyTransferAccounts-content-left">
							<p>账户</p>
							<p>户名</p>
						</view>
						<view class="MyTransferAccounts-content-rigth">
							<p>4411 6859 6013 0030 4942 7</p>
							<p class="name">广州伊玉贸易有限公司</p>
						</view>
					</view>
				</view>
				<view class="jiantou">
					<image src="@/static/Allicon/jiantou.png" mode=""></image>
				</view>
				<view class="HeTransferAccounts">
					<view class="HeTransferAccounts-title">
						收款方账号
					</view>
					<view class="HeTransferAccounts-content">
						<view class="HeTransferAccounts-content-left">
							<p>账户</p>
							<p>户名</p>
							<p>银行</p>
						</view>
						<view class="HeTransferAccounts-content-rigth">
							<p>{{datali[0].value}}</p>
							<p class="name">{{datali[1].value}}</p>
							<p class="name">{{datali[4].value}}</p>
							<p class="name">支付系统行号:314581000011</p>
						</view>
					</view>
				</view>
			</view>
			
			<view class="datali">
				<transferTitleVue :BorderColor="'blue'">
					<template #text>
						交易信息
					</template>
				</transferTitleVue>
				
				<TransferDateliVue>
					<template #left >
						金额
					</template>
					<template #rigth>
						<text style="color: #4e65ea; margin-left: 20rpx; font-weight: bold;">￥{{datali[2].value}}</text>
					</template>
				</TransferDateliVue>
				
				<TransferDateliVue>
					<template #left >
						大写金额
					</template>
					<template #rigth>
						<text>人民币壹拾元整</text>
					</template>
				</TransferDateliVue>
				
				<TransferDateliVue>
					<template #left >
						转账方式
					</template>
					<template #rigth>
						<text>他行转账({{datali[3].array[index] || '实时'}})</text>
					</template>
				</TransferDateliVue>
				
				<TransferDateliVue>
					<template #left >
						用途
					</template>
					<template #rigth>
						<text>货款</text>
					</template>
				</TransferDateliVue>
				
				<TransferDateliVue>
					<template #left >
						试算手续费
					</template>
					<template #rigth>
						<text>￥0.00</text><text style="color: #4e65ea; margin-left: 20rpx;">收费标准</text>
					</template>
				</TransferDateliVue>
			</view>
		</view>
		
		
		
		<view class="message">
			<view class="datali-list">
				<view class="left">
					录入员留言
				</view>
				<view class="rigth">
					<input type="text" placeholder="请输入留言(选填)"/>
				</view>
			</view>
		</view>
		
		<view class="btn">
			<button style="height: 100%; width: 150rpx; margin-right: 30rpx;">暂存</button>
			<button style="flex: 1; background-color: #3f5ffe; color: #fff;" @click="push" >提交</button>
		</view>
	</view>
</template>

<script>
	import transferTitleVue from '../../components/transfer-title.vue';
	import TransferDateliVue from '../../components/TransferDateli.vue';
	export default {
		data() {
			return {
				datali:'',
				index:''
			};
		},
		components:{
			transferTitleVue,
			TransferDateliVue
		},
		methods:{
			 getObjectEntries(obj) {
			  return Object.entries(obj);
			},
			push(){
				uni.showToast({
					title:'提交成功',
					icon:'none'
				})
				setTimeout(()=>{
					uni.reLaunch({
						url:'/pages/index/index'
					})
				},500)
			}
		},
		created(){
			this.datali = uni.getStorageSync('datali')
			this.index = uni.getStorageSync('index')
		}
	}
</script>

<style lang="scss" scoped>
	.TransferAccounts{
		width: 100vw;
		height: 100vh;
		background-color: #f7f7f7;
		.TransferAccounts-content{
			background-color: #fff;
			.TransferAccounts-datali{
				width: 95%;
				padding-bottom:20rpx;
				margin: 0 auto;
				border-bottom: 1rpx solid #dfdfdf;
				background-color: #fff;
				padding: 20rpx 0;
				margin-bottom: 40rpx;
				.MyTransferAccounts{
					width: 100%;
					padding-bottom: 30rpx;
					margin: 0 auto;
					background-color: #e4ecf9;
					border-radius:10rpx;
					.MyTransferAccounts-title{
						width: 95%;
						margin: 0 auto;
						padding: 20rpx;
						font-size: 30rpx;
						font-weight: bold;
					}
					.MyTransferAccounts-content{
						width: 95%;
						margin: 0 auto;
						background-color: #f7f8fa;
						display: flex;
						// align-items: center;
						line-height: 50rpx;
						.MyTransferAccounts-content-left{
							font-size: 25rpx;
							margin-top: 12rpx;
							margin-left: 80rpx;
							margin-right: 20rpx;
							color: #898b8a;
						}
						.MyTransferAccounts-content-rigth{
							flex: 1;
							height: 100%;
							background-color: #fff;
							font-size: 28rpx;
							padding: 10rpx;
							.name{
								font-size: 25rpx;
							}
						}
					}
				}
				.jiantou{
					width: 95%;
					height: 5rpx;
					position: relative;
					margin: 0 auto;
					display: flex;
					justify-content: center;
					align-items: center;
					z-index: 999;
					text-align: center;
					// border: 1px solid;
					image{
						width: 50rpx;
						height: 50rpx;
						border: 1px solid #ccc;
						border-radius: 50rpx;
						margin-top: 20rpx;
					}
				}
				.HeTransferAccounts{
					width: 100%;
					padding-bottom: 30rpx;
					margin: 0 auto;
					background-color: #fce2c9;
					border-radius:10rpx;
					margin-top: 20rpx;
					.HeTransferAccounts-title{
						width: 95%;
						margin: 0 auto;
						padding: 20rpx;
						font-size: 30rpx;
						font-weight: bold;
					}
					.HeTransferAccounts-content{
						width: 95%;
						margin: 0 auto;
						background-color: #f7f8fa;
						display: flex;
						// align-items: center;
						line-height: 50rpx;
						.HeTransferAccounts-content-left{
							font-size: 25rpx;
							// margin: 10rpx 20rpx 10rpx 100rpx;
							margin-top: 10rpx;
							margin-left: 80rpx;
							margin-right: 20rpx;
							color: #898b8a;
						}
						.HeTransferAccounts-content-rigth{
							flex: 1;
							height: 100%;
							background-color: #fff;
							font-size: 28rpx;
							padding: 10rpx;
							.name{
								font-size: 25rpx;
								color: #525355;
							}
						}
					}
				}
			}
			.datali{
				width: 95%;
				padding-bottom: 20rpx;
				margin: 0 auto;
				margin-top: 30rpx;
				line-height: 45rpx;
			}
		}
		
		.message{
			width: 95%;
			margin: 0 auto;
			background-color: #fff;
			margin-top: 20rpx;
			padding: 20rpx;
			.datali-list{
				width: 90%;
				display: flex;
				justify-content: space-between;
				margin: 0 auto;
				align-items: center;
				.left{
					font-size: 30rpx;
					margin-right: 40rpx;
				}
				.rigth{
					flex:1;
					font-size: 28rpx;
				}
			}
		}
	
		.btn{
			width: 90%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			margin-left: 5%;
			bottom:100rpx;
			button{
				
				padding: 5rpx;
				font-size: 28rpx;
			}
		}
	}
</style>
