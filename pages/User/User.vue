<template>
	<view class="User">
		<view class="navigation">
			<view class="placeholder">
				
			</view>
			<view class="navigation-search">
				<view class="search-name" v-if="!account" @click="login">
					登录
				</view>
				<view class="search-name" v-else @click="quit">
					退出
				</view>
				<view class="search-search">
					<uni-search-bar class="uni-mt-10"  radius="50" bg-color="none"  placeholder="搜索" clearButton="auto" cancelButton="none"  />
				</view>
				<view class="search-ioc">
					<view class="ioc" v-for="item in 3" :key='item'>
						<image class="ioc-image" :src='`../../static/jiaohang/Nav_my_${item}.png`' mode=""></image>
					</view>
				</view>
			</view>

		</view>
		
		<view class="business" v-if="account">
			<view class="business-card">
				<view class="business-card-title">
					<view class="business-card-title-left">
						<image style="width: 120rpx; height: 120rpx;" src="../../static/jiaohang/Q9.png" mode=""></image>
					</view>
					<view class="business-card-title-content">
						<view class="name">
							cwq691007
						</view>
						<view class="work">
							广州伊玉贸易有限公司
						</view>
						<view class="num">
							网银客服号 0020216110
						</view>
					</view>
					<view class="business-card-title-rigth">
						<view class="set">
							<view class="setIcon">
								设置
								<image class="setIcon-icon" src="../../static/jiaohang/set.png" mode=""></image>
							</view>
						</view>
						<image class="Refresh" style="width: 30rpx; height: 30rpx;" src="../../static/jiaohang/Refresh.png" mode=""></image>
					</view>
				</view>
				
				<view class="business-card-Icon">
					<view class="business-card-Icon-box" v-for="(item,index) in business" :key='index'>
						<view class="Icon-box-top">
							<image class="top-icon" :src="`../../static/jiaohang/bg_one_ioc_head_${index+1}.png`" mode=""></image>
						</view>
						<view class="Icon-box-bottom">
							{{item}}
						</view>
					</view>
				</view>
			</view>
			
			<view class="outlets" >
				<view class="outlets-title">
					我的网点
				</view>
				<view class="outlets-content">
					<view class="outlets-content-name">
						广州金迪支行
						<uni-tag text="开户行"custom-style="background-color: #ffebed; border-color: #ffebed; color: #c0352c;" style="margin-left: 20rpx; font-weight: bold;"></uni-tag>
					</view>
					
					<view class="outlets-content-text">
						<p>对公: 周一到周五 09:00-12:00 14:00-17:00</p>
						<p>对私: 周一到周五 09:00-17:00</p>
						
						<p style="margin-top: 15rpx;">广州市白云区机场西心谊路100号</p>
					</view>
				</view>
				<view class="outlets-foot">
					<view style="border-right: 2px solid #ccc;" class="outlets-foot-btn">
						附件网点查询
					</view>
					<view class="outlets-foot-btn">
						打电话
					</view>
				</view>
			</view>
		</view>
		
		<view class="UserList" v-for="(item,index) in UserListT" :key="index">
			<view class="UserList-title">
				{{item.title}}
			</view>
			<view class="UserList-IocBox" v-for="(Sum,Num) in item.list" :key="Num">
				<view class="IocBox" >
					<view class="Ioc">
						<image class="Ioc-image" :src="Sum.image" mode=""></image>
					</view>
					<view class="IocText">
						{{Sum.name}}
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
				// 获取登录信息
				account:'',
				
				UserList:['云上交行','电子营业执照','电子渠道签约','SWIFT','智慧记账','利率查询','银行对账'],

				UserListT:[
					{
						title:'金融助手',
						list:[
							{name:'云上交行',image:'../../static/jiaohang/My-List-1.png'},
							{name:'电子营业执照',image:'../../static/jiaohang/My-List-2.png'},
							{name:'电子渠道签约',image:'../../static/jiaohang/My-List-3.png'},
							{name:'SWIFT',image:'../../static/jiaohang/My-List-4.png'},
							{name:'智慧记账',image:'../../static/jiaohang/My-List-5.png'},
							{name:'利率查询',image:'../../static/jiaohang/My-List-6.png'},
							{name:'银行对账',image:'../../static/jiaohang/My-List-7.png'},
						]
						
					},
					{
						title:'增值服务',
						// list:['财务软件','法律质询','出行服务','企业服务','酒店甄选'],
						list:[
							{name:'财务软件',image:'../../static/jiaohang/My-List-one-1.png'},
							{name:'法律质询',image:'../../static/jiaohang/My-List-one-2.png'},
							{name:'出行服务',image:'../../static/jiaohang/My-List-one-3.png'},
							{name:'企业服务',image:'../../static/jiaohang/My-List-one-4.png'},
							{name:'酒店甄选',image:'../../static/jiaohang/My-List-one-5.png'},
						]
					},
					{
						title:'安全中心',
						// list:['版本更新','蓝牙激活','用户名登录设置','隐私协议'],
						list:[
							{name:'版本更新',image:'../../static/jiaohang/My-List-tow-1.png'},
							{name:'蓝牙激活',image:'../../static/jiaohang/My-List-tow-2.png'},
							{name:'用户名登录设置',image:'../../static/jiaohang/My-List-tow-3.png'},
							{name:'隐私协议',image:'../../static/jiaohang/My-List-tow-4.png'},
						]
					},
					],
					
				business:['企业名片','客户经理','常用收款人','单据查验']
			}
		},
		mounted() {
			this.account = uni.getStorageSync('account')
		},
		methods: {
			quit(){
				uni.removeStorage({
					key:'account',
					// 删除用户信息时操作
					success: function (res) {
						this.account='',
						// 跳转到login
						uni.reLaunch({
							url:'/pages/login/login'
						})
						// 弹出提示
						uni.showToast({
							title: '退出成功',
							icon: 'none',
							duration:2000
						})
					}
				})
			},
			login(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.User{
		width: 100%;
		background-color: #f1f2f6;
		.navigation{
			width: 100%;
			height: 200rpx;
			// background: linear-gradient(#526df2, #79a4ff);
			.placeholder{
				width: 100%;
				height: 50%;
			}
			.navigation-search{
				width: 100%;
				height:40%;
				display: flex;
				// border: 1px solid;
				.search-name{
					padding: 30rpx;
					color: black;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 28rpx;
				}
				.search-search{
					flex: 1;
					height: 100%;
					color: black;
					display: flex;
					align-items: center;
					justify-content: center;
					// border: 1px solid;
					padding-right: 20rpx;
					.uni-mt-10{
						width: 100%;
						height: 20rpx;
						display: flex; 
						align-items: center;
						border: 1px solid;
						border-radius: 50px;
						color: black;
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
				width: 100%;
				height: 40%;
				display: flex;
				justify-content: space-between;
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
		
		.business{
			width: 100%;
			height: 800rpx;
			.business-card{
				width: 95%;
				height: 40%;
				// border: 1px solid;
				margin: 0 auto;
				border-radius:10rpx;
				background-color: #fff;
				.business-card-title{
					width: 100%;
					height: 60%;
					// border: 1px solid;
					display: flex;
					.business-card-title-left{
						width: 25%;
						height: 100%;
						// border: 1px solid ;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.business-card-title-content{
						width: 45%;
						height: 100%;
						font-size: 28rpx;
						.name{
							margin-top: 20rpx;
							font-weight: bold;
						}
						.work{
							// font-size: 25rpx;
							margin: 20rpx 0;
						}
						.num{
							font-size: 25rpx;
							color: #ccc;
						}
					}
					.business-card-title-rigth{
						width: 30%;
						height: 100%;
						// border: 1px solid ;
						.set{
							width: 100%;
							height: 70%;
							// border: 1px solid ;
							display: flex;
							justify-content: center;
							align-items: center;
							.setIcon{
								width: 65%;
								height: 40%;
								background-color: #ebf0ff;
								font-size: 25rpx;
								font-weight: bold;
								border-radius:50rpx;
								display: flex;
								justify-content: center;
								align-items: center;
								.setIcon-icon{
									width: 50rpx;
									height: 50rpx;
								}
							}
						}
						.Refresh{
							margin-left: 120rpx;
						}
					}
				}
				.business-card-Icon{
					width: 90%;
					height: 30%;
					// border: 1px solid;
					margin: 0 auto;
					display: flex;
					.business-card-Icon-box{
						width: 25%;
						height: 100%;
						// border: 1px solid;
						.Icon-box-top{
							width: 100%;
							height: 60%;
							// border: 1px solid;
							display: flex;
							justify-content: center;
							align-items: center;
							.top-icon{
								width: 50rpx;
								height: 55rpx;
							}
						}
						.Icon-box-bottom{
							width: 100%;
							height: 40%;
							// border: 1px solid;
							text-align: center;
							margin-top: 10rpx;
							font-size: 28rpx;
						}
					}
				}
			}
			.outlets{
				width: 95%;
				height:57%;
				margin: 0 auto;
				margin-top: 20rpx;
				background-color: #fff;
				border-radius: 20rpx;
				.outlets-title{
					width: 90%;
					height: 20%;
					// border: 1px solid;
					margin: 0 auto;
					font-size: 35rpx;
					font-weight: bold;
					letter-spacing: 1px;
					display: flex;
					align-items: center;
				}
				.outlets-content{
					width: 90%;
					height: 65%;
					// border: 1px solid;
					margin: 0 auto;
					.outlets-content-name{
						width: 100%;
						height: 40%;
						font-size: 33rpx;
						font-weight: bold;
						display: flex;
						align-items: center;
					}
					.outlets-content-text{
						font-size: 25rpx;
						line-height: 40rpx;
					}
				}
				.outlets-foot{
					width: 90%;
					height: 10%;
					margin: 0 auto;
					display: flex;
					// border: 1px solid;
					.outlets-foot-btn{
						width: 50%;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #2d61e8;
						font-size: 30rpx;
						// font-weight: bold;
					}
				}
			}
		}
		
		.UserList{
			width: 95%;
			background-color: #fff;
			margin: 20rpx auto;
			border-radius:10px;
			display: flex;
			flex-wrap: wrap;
			.UserList-title{
				width: 90%;
				margin: 0 auto;
				height: 100rpx;
				// border: 1px solid;
				font-size: 38rpx;
				font-weight: bold;
				letter-spacing: 1px;
				display: flex;
				align-items: center;
			}
			.UserList-IocBox{
				width: 20%;
				height: 150rpx;
				margin-left:25rpx;
				padding:20rpx 0;
				.IocBox{
					width: 90%;
					height: 100%;
					// border: 1px solid;
					margin: 0 auto;
					.Ioc{
						width: 100%;
						height: 60%;
						// border: 1px solid;
						display: flex;
						align-items: center;
						justify-content: center;
						.Ioc-image{
							width: 56rpx;
							height: 56rpx;
						}
					}
					.IocText{
						width: 100%;
						height: 40%;
						// border: 1px solid;
						text-align: center;
						font-size: 28rpx;
						color:#848c97;
					}
				}
			}
		}
	}
</style>
