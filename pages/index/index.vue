<template>
	<view class="layout">
		<view class="navigation">
			<view class="placeholder">
				
			</view>
			
			<SearchBox></SearchBox>

			<view class="navigation-ioc">
				<view class="navigation-ioc-name" v-for="(item,index) in title" :key="index">
					<view class="ioc" @click="NavToDetail(index)">
						<image class="ioc-image" :src="`../../static/jiaohang/title_${index+1}.png`" mode=""></image>
					</view>
					<view class="text">
						{{item}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="layout-list">
			<view class="list">
				<view class="list-ioc" v-for="(item,index) in list" :key="index" @click="NavGo(index)">
					<view class="ioc">
						<image class="ioc-image" :src="`../../static/jiaohang/list-${index+1}.png`" mode=""></image>
					</view>
					<view class="name">
						{{item}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="announcement">
			<view class="announcement-ioc">
				<image class="ioc-image" src="../../static/jiaohang/gong_g.png" mode=""></image>
			</view>
			<view class="announcement-title">
				<text style="border-right: 1px solid #ccc; padding: 3px; ">关于交通银行部分国际业务服务收费表...</text>
			</view>
			<view class="announcement-image">
				<image class="announcement-ioc" src="../../static/jiaohang/6Q.png" mode=""></image>
			</view>
		</view>
		
		<view class="banner">
			<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" indicator-color='#b1b6ff' indicator-active-color='#fff' >
				<swiper-item v-for="item in 3" :key="item">
					<image class="swiper-iamge" src="../../static/jiaohang/bg_1.png" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="finance">
			<view class="finance-title">
				惠普金融
			</view>
			<view class="finance-content">
				<view class="bj-bt">
					<image src="../../static/jiaohang/bg_2.png" mode=""></image>
				</view>
				<view class="bj-image">
					<view class="image-top">
						<image src='../../static/jiaohang/ioc_1.png' mode=""></image>
					</view>
					<view class="image-bottom">
						<image src="../../static/jiaohang/bg_4.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="Zone">
			<view class="Zone-title">
				小微专区
			</view>
			
			<view class="Zone-image">
				<view class="images" v-for="item in ZoneImage" :key="item">
					<image :src="item" mode=""></image>
				</view>
			</view>
			
			<view class="Zone-ioc">
				<view class="ioc" v-for="(item,index) in financeIoc" :key="index">
					<view class="ioc-image">
						<image class="image" :src="item.images" mode=""></image>
					</view>
					<view class="ioc-text">
						{{item.name}}
					</view>
				</view>
			</view>
			
		</view>
		
		<view class="Zone">
			<view class="Zone-title">
				财务管理专区
			</view>
			
			<view class="Zone-image">
				<view class="images" v-for="item in financeImage" :key="item">
					<image :src="item" mode=""></image>
				</view>
			</view>
			
			<view class="Zone-ioc">
				<view class="ioc" v-for="(item,index) in ZoneIoc" :key="index">
					<view class="ioc-image">
						<image class="image" :src="item.images" mode=""></image>
					</view>
					<view class="ioc-text">
						{{item.name}}
					</view>
				</view>
			</view>
			
		</view>
		
		
		<view class="videoo">
			<view class="video-title">
				精彩视频
			</view>
			
			<view style="width: 100%;height: 60%;">
				<videoVue>
					<template #image>
						<image style="width: 100%; height: 100%;" src="@/static/jiaohang/bj_1.png" mode=""></image>
					</template>
					<template #title>
						科创小微企业融资不再难
					</template>
					<template #text>
						535人观看
					</template>
				</videoVue>
			</view>
			
			<view class="mini-video">
				<view class="mini-video-box">
					<view class="mini-video-one">
						<videoVue>
							<template #image>
								<image style="width: 100%; height: 100%;" src="@/static/jiaohang/bj_2.png" mode=""></image>
							</template>
							<template #title>
								专家发声|我们该如何养...
							</template>
							<template #text>
								502人观看
							</template>
						</videoVue>
					</view>
					<view class="mini-video-one">
						<videoVue>
							<template #image>
								<image style="width: 100%; height: 100%;" src="@/static/jiaohang/bj_3.png" mode=""></image>
							</template>
							<template #title>
								未来AI发展的挑战与趋势
							</template>
							<template #text>
								502人观看
							</template>
						</videoVue>
					</view>
				</view>
			</view>
			
			
		</view>
		
		<view class="customer">
			<view class="customer-title">
				云上交行
			</view>
			<view class="customer-banner">
				<image class="banner-image" src="@/static/jiaohang/bg_7.png" mode=""></image>
			</view>
			<view class="customer-ioc" >
				
				<view class="customer-ioc-content"  v-for="(item,index) in customer" :key="index">
					<view class="ioc">
						<image class="image-ioc" :src="item.ioc" mode=""></image>
					</view>
					<view class="text">
						{{item.name}}
					</view>
				</view>
					
			</view>
		</view>
		
		<view class="foreign-exchange">
			<view class="foreign-exchange-title">
				外汇牌价&nbsp; <text style="font-size: 32rpx;font-weight: normal;">{{currentTime}}</text>
			</view>
			<view class="title">
				<view class="title-one">
					币种
				</view>
				<view class="title-one">
					银行现汇买入价
				</view>
				<view class="title-one">
					银行现汇卖出价
				</view>
			</view>
			<view class="content" v-for="(item,index) in money" :key="index">
				<view class="title-one">
					{{item.name}}
				</view>
				<view class="title-one">
					{{item.BuyPrice}}
				</view>
				<view class="title-one">
					{{item.SellPrice}}
				</view>
			</view>
		</view>
		
		<view class="Hot">
			<view class="Hot-title">
				<text class="headline">
					热门资讯
				</text>
				<text class="headline-btn">
					更多
				</text>
			</view>
			<view class="Hot-content" v-for="(item,index) in Hot" :key="index">
				<view class="content">
					<view class="contentTitle">
						{{item.title}}
					</view>
					<view class="FontContent">
						<text>{{item.data}}</text>
						<text>{{item.time}}</text>
					</view>
				</view>
				<view class="content-image">
					<image class="image" :src='item.bgImage' mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Zone from '@/components/Zone.vue'
	import videoVue from '@/components/videoVue.vue'
	import SearchBox from '@/components/navigationSearch.vue'
	import {gologin} from'@/components/login.js'
	export default {
		data() {
			return {
				title:['账户','转账','对账','回单'],
				list:['代发工资','一键测额','普通查询','电子发票开立','还款申请','持有理财产品','代发查询','秒贴申请','持有票据查询','全部'],
				ZoneImage:['../../static/jiaohang/bg_5.png','../../static/jiaohang/bg_6.png'],
				ZoneIoc:[
					{name:'财务软件',images:'../../static/jiaohang/ioc-1.png'},
					{name:'法律咨询',images:'../../static/jiaohang/ioc-2.png'},
					{name:'出行服务',images:'../../static/jiaohang/ioc-3.png'},
					{name:'企业服务',images:'../../static/jiaohang/ioc-4.png'},
					],
				financeImage:['../../static/jiaohang/bg_one_1.png','../../static/jiaohang/bg_one_2.png'],
				financeIoc:[
					{name:'补录管理',images:'../../static/jiaohang/bg_one_ioc_1.png'},
					{name:'账务核销管理',images:'../../static/jiaohang/bg_one_ioc_2.png'},
					{name:'业务核销管理',images:'../../static/jiaohang/bg_one_ioc_3.png'},
					{name:'日历模式',images:'../../static/jiaohang/bg_one_ioc_4.png'},
					],
				customer:[
					{name:'资信证明',ioc:'/static/jiaohang/ioc_one_1.png'},
					{name:'钱包升级',ioc:'/static/jiaohang/ioc_one_2.png'},
					{name:'预填办理',ioc:'/static/jiaohang/ioc_one_3.png'},
					{name:'更多服务',ioc:'/static/jiaohang/ioc_one_4.png'},
					],
				currentTime: '',
				money:[
					{name:'美元',BuyPrice:'715.29',SellPrice:'718.22'},
					{name:'港币',BuyPrice:'91.98',SellPrice:'92.34'},
					{name:'欧元',BuyPrice:'765.92',SellPrice:'771.30'},
					{name:'英镑',BuyPrice:'918.79',SellPrice:'925.23'},
					{name:'日元',BuyPrice:'4638.49',SellPrice:'4671.07'}
				],
				Hot:[
					{
						title:'【收市点评】三大股指冲高回落，全球经济恢复态势仍然偏弱',data:'交硬基金 147看过',time:'08:28',bgImage:'../../static/jiaohang/hot_1.png',
					},
					{
						title:'【债市必看】11.06债市播报',data:'中欧基金 255看过',time:'11-06',bgImage:'../../static/jiaohang/hot_2.png',
					},
					{
						title:'从债市发展讲起,聊聊利率债的配置价值|多知产周记',data:'中欧基金 94看过',time:'11-06',bgImage:'../../static/jiaohang/hot_3.png',
					}
				]
			}
		},
		
		mounted() {
		    // 在组件挂载后获取当前时间
		    this.updateCurrentTime();
		    // 每隔一秒更新一次时间
		    setInterval(this.updateCurrentTime, 1000);
		},
		methods: {
			updateCurrentTime() {
			  const now = new Date();
			  const hours = String(now.getHours()).padStart(2, '0');
			  const minutes = String(now.getMinutes()).padStart(2, '0');
			  const seconds = String(now.getSeconds()).padStart(2, '0');
			  this.currentTime = `${hours}:${minutes}:${seconds}`;
			},
			NavToDetail(index){
				console.log(index);
				index === 0 ? gologin('/pages/Detail/Detail') : ''
				index === 1 ? gologin('/pages/transfer/transfer') : ''
				index === 2 ? gologin('/pages/Reconciliation/Reconciliation') : ''
				index === 3 ? gologin('/pages/Receipt/Receipt') : ''
			},
			NavGo(index){
				index === 4 ? gologin('/pages/Repayment/Repayment') :'',
				index === 9 ? gologin('/pages/more/more') :''
			},
			
			
		  },
		components:{
			Zone,
			videoVue,
			SearchBox
		}
	}
</script>

<style lang="scss" scoped>
	.layout{
		width: 100%;
		background-color: #f2f3f7;
		overflow: hidden;
		.navigation{
			width: 100%;
			height: 450rpx;
			background: linear-gradient(#526df2, #79a4ff);
			.placeholder{
				width: 100%;
				height: 15%;
			}
			.navigation-search{
				width: 100%;
				height:30%;
				display: flex;
				// border: 1px solid;
				.search-name{
					padding: 30rpx;
					color: white;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 28rpx;
				}
				.search-search{
					flex: 1;
					height: 100%;
					color: white;
					display: flex;
					align-items: center;
					justify-content: center;
					padding-right: 20rpx;
					.uni-mt-10{
						width: 100%;
						height: 20rpx;
						display: flex; 
						align-items: center;
						border: 1px solid;
						border-radius: 50px;
						color: #fff;
					}
				}
				.search-ioc{
					width: 25%;
					// flex: 1;
					height: 100%;
					color: white;
					// border: 1px solid;
					display: flex;
					align-items: center;
					justify-content:space-between;
					.ioc{
						padding:0 10rpx;
						display: flex;
						align-items: center;
						.ioc-image{
							width: 40rpx;
							height: 40rpx;
						}
					}
				}
			}
			.navigation-ioc{
				width: 95%;
				height: 30%;
				display: flex;
				justify-content: space-between;
				margin: 0 auto;
				margin-top: 10px;
				.navigation-ioc-name{
					width: 20%;
					height: 80%;
					// border: 1px solid;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					align-items: center;
					.ioc{
						width: 100%;
						// aspect-ratio: 1/1;
						height: 60%;
						display: flex;
						justify-content: center;
						// border: 1px solid;
						align-items: center;
						.ioc-image{
							width: 80rpx;
							height: 75rpx;
							// aspect-ratio: 1/0.5;
						}
					}
					.text{
						width: 100%;
						height: 40%;
						text-align: center;
						color: #fff;
						font-size: 28rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: 5px;
					}
				}
			}
		}
		
		.layout-list{
			width: 100%;
			// height: 300rpx;
			// background: #fff;
			margin-top: 10px;
			.list{
				width: 100%;
				height: 100%;
				// border: 1px solid;
				margin: 0 auto;
				display: grid;
				grid-template-columns: repeat(5, 1fr); /* 3列，每列占据相同的空间 */  
				.list-ioc{
					width: 80%;
					padding: 10px 0;
					margin: 0 auto;
					// border: 1px solid;
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
						font-size: 28rpx;
						text-align: center;
					}
				}
			}
		}
		
		.announcement{
			width: 95%;
			height: 100rpx;
			// border: 1px solid;
			margin: 0 auto;
			border-radius: 5px;
			margin-top: 10px;
			display: flex;
			background-color: #fff;
			.announcement-ioc{
				width: 15%;
				height: 100%;
				// border: 1px solid;
				display: flex;
				align-items: center;
				.ioc-image{
					width: 100%;
					height: 100rpx;
				}
			}
			.announcement-title{
				flex: 1;
				font-size:28rpx;
				display: flex;
				align-items: center;
			}
			.announcement-image{
				width: 15%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				.announcement-ioc{
					// width: 40%;
					width: 60rpx;
					height: 70rpx;
					// height: 70%;
					// padding: 20px;
				}
			}
		}
		.banner{
			width: 95%;
			height: 200rpx;
			// border: 1px solid red;
			margin: 10px auto;
			.swiper{
				width: 100%;
				height: 100%;
				.swiper-iamge{
					width: 100%;
					height: 100%;
					border-radius:10px;
				}
			}
		}
		.finance{
			width: 95%;
			height: 500rpx;
			// border: 1px solid;
			background-color: white;
			margin: 0 auto;
			.finance-title{
				width: 100%;
				height: 20%;
				// border: 1px solid;
				font-size: 38rpx;
				display: flex;
				align-items: center;
				font-weight: bold;
				letter-spacing:1px;
				padding-left: 35rpx;
			}
			.finance-content{
				height: 70%;
				display: flex;
				justify-content: center;
				// border: 1px solid;
				image{
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
				.bj-bt{
					width: 45%;
					height: 100%;
					margin-right: 10rpx;
				}
				.bj-image{
					width: 47%;
					height: 100%;
					.image-top{
						width: 100%;
						height: 49%;
					}
					.image-bottom{
						margin-top: 10rpx;
						width: 100%;
						height: 49%;
					}
				}
			}
		}
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
		.videoo{
			width: 95%;
			height: 650rpx;
			margin-top: 20rpx;
			background-color: #fff;
			padding-bottom:80rpx;
			margin: 20rpx auto;
			border-radius: 10px;
			.video-title{
				width: 85%;
				height: 10%;
				// border: 1px solid;
				padding: 15rpx 0;
				display: flex;
				align-items: center;
				font-size: 38rpx;
				font-weight: bold;
				margin: 0 auto;
				letter-spacing: 1px;
			}
			.mini-video{
				width: 100%;
				height: 30%;
				.mini-video-box{
					width: 95%;
					height: 100%;
					margin: 0 auto;
					display: flex;
					.mini-video-one{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.customer{
			width: 95%;
			height: 400rpx;
			margin-bottom: 20rpx;
			padding-bottom: 40rpx;
			background-color: #fff;
			margin: 0 auto;
			border-radius: 10px;
			.customer-title{
				width: 85%;
				height: 20%;
				display: flex;
				font-size: 38rpx;
				font-weight: bold;
				align-items: center;
				margin: 0 auto;
			}
			.customer-banner{
				width: 90%;
				height: 40%;
				margin: 20rpx auto;
				.banner-image{
					width: 100%;
					height: 100%;
				}
			}
			.customer-ioc{
				width: 85%;
				height: 30%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				.customer-ioc-content{
					.ioc{
						width: 100%;
						padding: 10rpx 0;
						display: flex;
						justify-content: center;
						align-items: center;
						.image-ioc{
							width: 55rpx;
							height: 55rpx;
						}
					}
					.text{
						width: 100%;
						font-size: 28rpx;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}
		}
		.foreign-exchange{
			width: 95%;
			height: 100%;
			margin-bottom: 20rpx;
			padding-bottom: 40rpx;
			background-color: #fff;
			margin: 0 auto;
			border-radius: 10px;
			.foreign-exchange-title{
				width: 85%;
				height: 20%;
				display: flex;
				font-size: 38rpx;
				font-weight: bold;
				align-items: center;
				margin: 20rpx auto;
				padding: 30rpx 0 10rpx 0;
			}
			.title{
				width: 95%;
				height: 80rpx;
				background: #f7f8fa;
				margin: 20rpx auto;
				display: flex;
				justify-content: space-between;
				.title-one{
					width: 32%;
					height: 100%;
					// border: 1px solid;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 30rpx;
				}
			}
			.content{
				width: 95%;
				height: 120rpx;
				background: #fff;
				border-bottom:1px solid #ecedf0 ;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				.title-one{
					width: 32%;
					height: 100%;
					// border: 1px solid;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 30rpx;
				}
			}
		}
		.Hot{
			width: 95%;
			height: 800rpx;
			// border: 1px solid;
			background-color: #fff;
			margin: 20rpx auto;
			border-radius: 10px;
			.Hot-title{
				width: 90%;
				height: 15%;
				// border: 1px solid;
				display: flex;
				margin:0 auto;
				justify-content: space-between;
				align-items: center;
				.headline{
					font-size: 38rpx;
					font-weight: bold;
					letter-spacing: 1px;
				}
				.headline-btn{
					font-size: 25rpx;
					color: #4563fc;
				}
			}
			.Hot-content{
				width: 90%;
				height: 23%;
				border-bottom: 1px solid #ccc;
				margin: 0 auto;
				padding:20rpx 0;
				display: flex;
				.content{
					flex: 1;
					height: 100%;
					.contentTitle{
						width: 95%;
						height: 75%;
						margin: 0 auto;
						font-size: 28rpx;
						font-weight: bold;
					}
					.FontContent{
						width: 95%;
						margin: 0 auto;
						height: 25%;
						display: flex;
						justify-content: space-between;
						font-size: 24rpx;
						color: #ccc;
						align-items: center;
					}
				}
				.content-image{
					width: 40%;
					height: 100%;
					.image{
						width: 100%;
						height: 100%;
						
					}
				}
			}
		}
	}
</style>
