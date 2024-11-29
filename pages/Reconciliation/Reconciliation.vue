<template>
	<view class="Reconciliation">
		<view class="choices">
			<view class="choices-btn" v-for="(item,index) in choicesBtnList" :key="index" >
				{{item.name}}
				{{item.time}}
				
				<view style="display: flex; align-content: ;">
					<image class="choices-btn-image" :src="item.icon" mode=""></image>
				</view>
			</view>
		</view>
		
		<view style="margin-top: 10rpx;" v-for="(item,index) in transferBodyList" :key="index">
			<view class="Reconciliation-title">
				<view class="Reconciliation-title-box">
					<view class="MaxTitle">
						{{item.title}}
					</view>
					<view class="text">
						{{item.num}}
					</view>
				</view>
			</view>
			
			<view class="transfer-Body" >
				<view class="transfer-Body-list" v-for="(sum,unmber) in item.list" :key="unmber">
					<view class="name">
						{{sum.name}}
					</view>
					<view class="input-text">
						{{sum.text}}
					</view>
					<view class="icon">
						<image src="@/static/bg-image/youbianjiantou.svg" mode=""></image>
					</view>
					
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				choicesBtnList:[
					{name:'全部账户',icon:'../../static/jiaohang/sanjiaoxing.png'},
					{name:'2024-06-01',icon:'../../static/jiaohang/sanjiaoxing.png',time:'2024-11-30'},
				],
				transferBodyList:[
					{
						title:'广州伊玉贸易有限公司',
						num:'441168596013003049427',
						list:[
							{name:'账单编号',text:'44111401120241031000133 2024-10-31'},
							{name:'账单编号',text:'44111401120240930000135 2024-09-30'},
							{name:'账单编号',text:'44111401120240731000143 2024-08-31'},
							{name:'账单编号',text:'44111401120240731000143 2024-07-31'},
							{name:'账单编号',text:'44111401120240630000200 2024-06-30'},
						]
					},
					{
						title:'广州伊玉贸易有限公司',
						num:'44189999990300775608',
						list:[
							{name:'账单编号',text:'K4411101120241031001323 2024-10-31'},
							{name:'账单编号',text:'K4411101120240930001309 2024-09-30'},
							{name:'账单编号',text:'K4411101120240831001311 2024-08-31'},
							{name:'账单编号',text:'K4411101120240731001308 2024-07-31'},
							{name:'账单编号',text:'K4411101120240630001311 2024-06-30'},
						]
					}
					
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.Reconciliation{
		width: 100%;
		height: 100vh;
		background-color: #f2f3f7;
		.choices{
			width: 100%;
			height: 75rpx;
			background-color: #fff;
			font-size: 25rpx;
			display: flex;
			border-top: 1px solid #dfdfdf;
			border-bottom: 1px solid #dfdfdf;
			.choices-btn{
				width: 25%;
				height: 100%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				.choices-btn-image{
					width:15rpx;
					height: 15rpx;
					margin-left:10rpx;
				}
			}
			.choices-btn:hover{
				color: #406fed;
			}
		}
		.Reconciliation-title{
			width: 100%;
			background-color: #fff;
			padding: 25rpx 10rpx;
			border-bottom: 1rpx solid #dfdfdf;
			.Reconciliation-title-box{
				width: 95%;
				margin: 0 auto;
				.MaxTitle{
					font-size: 30rpx;
					font-weight: bold;
				}
				.text{
					font-size: 30rpx;
				}
			}
		}
		.transfer-Body{
			width: 100%;
			background-color: #fff;
			.transfer-Body-list{
				width: 96%;
				border-bottom: 1px solid #e6e6e6;
				display: flex;
				margin: 0 auto;
				.name{
					width: 25%;
					padding: 20rpx;
					display: flex;
					align-items: center;
					font-size: 30rpx;
				}
				
				.input-text{
					padding: 20rpx;
					flex: 1;
					display: flex;
					align-items: center;
					font-size: 28rpx;
				}
				
				.icon{
					display: flex;
					align-items: center;
					margin-right: 20rpx;
					image{
						width: 20rpx;
						height: 20rpx;
					}
				}
			}
		}
		
	}
</style>
