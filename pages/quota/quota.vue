<template>
	<view class="quota">
		<view class="quota-box" v-for="(item,index) in quotaList" :key="index">
			<view class="quota-title">
				{{item.title}}
			</view>
			<view class="message">
				<view class="datali-list" v-for="(sum,num) in getObjectEntries(item.list)">
					<view class="left">
						{{sum[0]}}
					</view>
					<view class="rigth">
						{{sum[1]}}
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import transferTitleVue from '@/components/transfer-title.vue'
	export default {
		data() {
			return {
				quotaList:[
					{
						title:'非柜面转账限额',
						list:{
							'日累计转账笔数':'10笔',
							'剩余日累计笔数':'10笔',
							'日累计限额':'￥80,000.00',
							'剩余日累计限额':'￥80,000.00',
							'年累计限额':'￥500,000.00',
							'剩余年累计限额':'￥500,000.00',
						}
					},
					{
						title:'操作员转账限额',
						list:{
							'交易名称':'单笔转账',
							'单笔限额':'￥999,999,999,9999.00',
							'日累计限额':'￥999,999,999,9999.00',
							'剩余日累计限额':'￥999,999,999,9999.00',
						}
					}
				]
			};
		},
		components:{
			transferTitleVue
		},
		methods:{
			getObjectEntries(obj) {
			  return Object.entries(obj);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.quota{
		width: 100vw;
		height: 100vh;
		background-color: #f7f7f7;
		.quota-box{
			width: 100%;
			background-color: #fff;
			margin-top: 20rpx;
			.quota-title{
				width: 90%;
				margin: 0 auto;
				font-size: 34rpx;
				font-weight: bold;
				padding: 15rpx;
			}
			.message{
				width: 100%;
				margin: 0 auto;
				padding: 10rpx 0;
				.datali-list{
					width: 90%;
					display: flex;
					justify-content: space-between;
					margin: 0 auto;
					line-height: 70rpx;
					align-items: center;
					color: #3a3a3a;
					.left{
						font-size: 30rpx;
						margin-right: 40rpx;
					}
					.rigth{
						flex:1;
						text-align: right;
						font-size: 28rpx;
					}
				}
			}
		}
		
	}
</style>
