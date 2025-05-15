<template>
	<view class="HistoricalBalance">
		<company :value='"活期一般户"'></company>
		
		<view class="choices">
			<view class="choices-btn" v-for="(item,index) in choicesBtnList" :key="index" @click="btn(index)">
				{{item.name}}
				<image class="choices-btn-image" :src="item.icon" mode=""></image>
			</view>
		</view>
		
		<view class="zzc" v-if="ZzcTrue" @click="close()">
			<view class="zzc-text" >
				<text>人民币</text>
				<uni-icons type="checkmarkempty" size="15" color="#4063ef"></uni-icons>
			</view>
			<view style="width: 100%; height: 100rpx; background-color: #fff;">
			
			</view>
		</view>
		
		<view class="HistoricalBalance-list">
			<view class="HistoricalBalance-list-box">
				<text>2024-12-12</text>
				<text class="money">￥596.61</text>
			</view>
		</view>
		
		
			
		<view class="HistoricalBalance-footer-text">
			<p>温馨提示:</p>
			<p>日期最早可以到一年半,时间跨度最大3个月。</p>
			<p>历史余额是当日之前的每日日终账户余额。</p>
		</view>
		
		<my-datetime ref="dateTimePop" :titleShow='false' :shownum='3' @ok="timeOk" ></my-datetime>
	</view>
</template>

<script>
	import Company from '../../components/Company.vue';
	import myDatetime from '@/components/my-datetime/my-datetime'
	export default {
		data() {
			return {
				choicesBtnList:[
					{name:'人民币',icon:'../../static/jiaohang/sanjiaoxing.png'},
					{name:'时间',icon:'../../static/jiaohang/sanjiaoxing.png'},
				],
				ZzcTrue:false,
			};
		},
		components:{
			Company,
			myDatetime
		},
		methods:{
			btn(index){
				 if(!index){
					this.ZzcTrue = !this.ZzcTrue
				 }else{
					 this.ZzcTrue = false
					this.$refs.dateTimePop.open()
				 }
			},
			close(){
				this.ZzcTrue = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.HistoricalBalance{
		width: 100vw;
		height: 100vh;
		background-color: #f7f7f7;
		.choices{
			width: 100%;
			height: 75rpx;
			background-color: #fff;
			// border: 1px solid;
			font-size: 25rpx;
			display: flex;
			.choices-btn{
				width: 25%;
				height: 100%;
				// border: 1px solid;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
				.choices-btn-image{
					width:15rpx;
					height: 15rpx;
					margin-left: 10rpx;
				}
				.choices-btn-image:hover{
					transform: scale(-1);
				}
			}
			.choices-btn:hover{
				color: #406fed;
			}
		}
		.zzc{
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.3);
			font-size: 30rpx;
			padding-bottom: 100rpx;
			position: absolute;
			.zzc-text{
				display: flex;
				align-items: center;
				justify-content: space-between;
				background-color: #fff;
				padding:20rpx 35rpx;
				border-bottom: 1px solid #ccc;
				border-top: 1px solid #ccc;
			}
		}
		.HistoricalBalance-list{
			background-color: #fff;
			padding: 20rpx;
			margin-top: 20rpx;
			.HistoricalBalance-list-box{
				width: 95%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 28rpx;
				.money{
					color: #555;
					font-weight: bold;
				}
			}
		}
		.HistoricalBalance-footer-text{
			width: 95%;
			margin: 0 auto;
			font-size: 25rpx;
			color: #666;
			line-height: 43rpx;
			margin-top: 20rpx;
		}
	}
</style>
