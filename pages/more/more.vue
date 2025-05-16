<template>
	<view class="more">
		<view class="TitleText">
			<view class="TitleTextBox">
				<view class="MaxText">
					我的服务
				</view>
				<view class="MiniText">
					自定义
				</view>
			</view>
		</view>
		
		<view v-if="ListIsture" class="moreList">
			<view class="layoutList">
				<layoutList :value='listMore'></layoutList>
			</view>
			
			<view class="listMore" @click="ListIsture = !ListIsture">
				展开
			</view>
		</view>
		
		<view v-else class="moreList">
			<view class="layoutList">
				<layoutList :value='list'></layoutList>
			</view>
			<view class="listMore" @click="ListIsture = !ListIsture">
				收起
			</view>
		</view>
		
		
		<z-tabs :list="list" @change="tabsChange"></z-tabs>
		<swiper :current="current" class="swiper" @transitionend="">
		    <swiper-item class="swiper-item" v-for="(item, index) in list" :key="index">
				
		      <view class="swiper-title" >
		      	<view class="title-box" v-for="(sum,num) in titleboxList" :key="num" @click="scrollToText(num)">
		      		{{sum}}
		      	</view>
		      </view>
			  
			  <view class="swiper-title-box">
			  	<scroll-view class="scroll-view" scroll-y="true" :scroll-top="scrollTop" @scroll="scroll">
					
					<view class="scroll-view-box"  v-for="(item,index) in titleboxList" :key="index" >
						<view class="scroll-view-itle" id='targetText'>
							<image :src="`../../static/jiaohang/list-${index+1}.png`" mode=""></image>{{item}}
						</view>
						<view class="scroll-view-text">
							
							<view class="scroll-view-text-box">
								<view class="scroll-view-text-box-image">
									<image :src="`../../static/jiaohang/list-${index+1}.png`" mode=""></image>
								</view>
								<view class="scroll-view-text-box-text">
									账户余额
								</view>
							</view>
							
							<view class="scroll-view-text-box">
								<view class="scroll-view-text-box-image">
									<image :src="`../../static/jiaohang/list-${index+1}.png`" mode=""></image>
								</view>
								<view class="scroll-view-text-box-text">
									账户余额
								</view>
							</view>
							
							<view class="scroll-view-text-box">
								<view class="scroll-view-text-box-image">
									<image :src="`../../static/jiaohang/list-${index+1}.png`" mode=""></image>
								</view>
								<view class="scroll-view-text-box-text">
									账户余额
								</view>
							</view>
							
						</view>
					</view>
					<view class="" style="height: 850rpx;">
						
					</view>
			  	</scroll-view>
			  </view>
		    </swiper-item>
		</swiper>
	</view>
</template>

<script>
	import layoutList from '@/components/layout-list.vue'
	export default {
		data() {
			return {
				list:['代发工资','一键测额','普通查询','电子发票开立','还款申请','持有理财产品','代发查询','秒贴申请','持有票据查询'],
				listMore:['代发工资','一键测额','普通查询','电子发票开立','还款申请'],
				ListIsture:'flase',
				titleMore:['账户','转账业务','代发代扣','电票业务','投资理财','国际业务','企业融资','金融服务','产业链服务','电子商务','数字人民币','企业管家','增值服务','个人设置'],
				current: 0,
				titleboxList:['余额查询','明细查询','电子回单打印','银企对账','企业账户','账号管理','现金','单位账号申请','单位结算卡','子账簿','凭证订购'],
				
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			};
		},
		onNavigationBarButtonTap(e) {
			console.log('自定义按钮被点击')
		},
		components:{
			layoutList
		},
		methods:{
			btnListMore(){
				this.ListIsture = !this.ListIsture
			},
			  //tabs通知swiper切换
			tabsChange(index) {
				this.current = index;
			},
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			scrollToText(index) {
				console.log(index);
				this.$nextTick(function() {
					this.scrollTop = 98*index
				});
			}
		}
	}
</script>

<style lang="scss">
	.more{
		width: 100%;
		background-color: #f2f3f7;
		overflow: hidden;
		.TitleText{
			width:100%;
			height: 75rpx;
			background-color: #fff;
			.TitleTextBox{
				width: 90%;
				height: 100%;
				margin: 0 auto;
				display: flex;
				.MaxText{
					flex: 1;
					height: 100%;
					font-size: 35rpx;
					font-weight: bold;
					display: flex;
					align-items: center;
				}
				.MiniText{
					height: 100%;
					color: blueviolet;
					font-size: 25rpx;
					display: flex;
					align-items: center;
					font-weight: bold;
					font-family: '黑体';
				}
			}
			
		}
		.moreList{
			width: 100%;
			background-color: #fff;
			.layoutList{
				width: 95%;
				margin: 0 auto;
				font-size: 24rpx;
				
			}
			.listMore{
				width: 100%;
				height: 75rpx;
				font-size: 25rpx;
				border-top: 1px solid #e1e1e1;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.swiper{
			width: 100%;
			height: 92vh;
			// border: 1px solid;
			font-size: 28rpx;
			.swiper-item{
				width: 100%;
				height: 100%;
				// border: 1px solid;
				display: flex;
				.swiper-title{
					width: 25%;
					height: 100%;
					.title-box{
						width: 100%;
						height: 8%;
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;
					}
					.title-box:hover{
						background-color: #fff;
						border:none;
						color: #405fff;
					}
				}
				.swiper-title-box{
					flex: 1;
					height: 100%;
					background-color: #fff;
					.scroll-view{
						width: 100%;
						height: 100%;
						.scroll-view-box{
							width: 100%;
							margin: 40rpx auto;
							.scroll-view-itle{
								width: 90%;
								margin: 0 auto;
								border-bottom: 1px solid #ccc;
								display: flex;
								align-items: center;
								padding: 10rpx;
								font-size: 28rpx;
								font-weight: bold;
								// border: 1px solid;
								font-family: '黑体';
								image{
									width:40rpx;
									height: 40rpx;
									margin: 0 15rpx;
								}
							}
							.scroll-view-text{
								width: 100%;
								margin: 0 30rpx;
								display: flex;
								flex-wrap: wrap;
								align-items: center;
								font-size: 28rpx;
								font-family: '黑体';
								.scroll-view-text-box{
									width: 33%;
									// border: 1px solid;
									.scroll-view-text-box-image{
										width: 100%;
										display: flex;
										justify-content: center;
										margin: 10rpx auto;
										image{
											width: 50rpx;
											height: 50rpx;
										}
									}
									.scroll-view-text-box-text{
										width: 100%;
										font-size: 20rpx;
										margin: 10rpx auto;
										display: flex;
										justify-content: center;
									}
								}
								
							}
						}
					}
				}
			}
		}
	}
</style>
