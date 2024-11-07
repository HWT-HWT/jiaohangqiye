<template>
	<view class="User">
		
		<view class="navigation">
			<view class="placeholder">
				
			</view>
			<view class="navigation-search">
				<view class="search-name">
					登录
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
			
			<view class="navigation-ioc">
				<view class="navigation-ioc-name" v-for="(item,index) in title" :key="index">
					<view class="ioc">
						<image class="ioc-image" :src="`../../static/jiaohang/title_${index+1}.png`" mode=""></image>
					</view>
					<view class="text">
						{{item}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="UserList" v-for="item in UserListT">
			<view class="UserList-title">
				{{item.title}}
			</view>
			<view class="UserList-IocBox" v-for="(item,index) in item.list" :key="index">
				<view class="IocBox" >
					<view class="Ioc">
						<image class="Ioc-image" :src="item.image" mode=""></image>
					</view>
					<view class="IocText">
						{{item.name}}
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
					]
			}
		},
		methods: {
			
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
						height: 60rpx;
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
		.UserList{
			width: 95%;
			background-color: #fff;
			margin: 20rpx auto;
			border-radius:10px;
			display: flex;
			flex-wrap: wrap;
			// margin-bottom: 200px;
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
