<template>
  <view class="transfer">
		<view class="transfer-title" >
			
			<transferTitleVue :BorderColor="'limegreen'">
				<template #text>
					付方信息
				</template>
				<template #icon>
					<image style="width: 35rpx;height: 35rpx;margin-left: 20rpx;" src="@/static/jiaohang/ioc_eye.png" mode=""></image>
				</template>
			</transferTitleVue>
			
			<view class="content">
				<view class="TextLfet">
					<text>4411 6859 6013 0030 4942 7</text>
					<p style="margin-top: 20rpx;">广州伊玉贸易有限公司</p>
					<p>可用余额: ￥7,352.66</p>
				</view>
				<view class="iconRigth">
					<image src="@/static/bg-image/ioc.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="transfer-Body">
			
			<transferTitleVue :BorderColor="'blue'">
				<template #text>
					交易信息
				</template>
				<template #rigth>
					额度查询
				</template>
			</transferTitleVue>
			
			<view v-for="(item,index) in transferBodyList" :key="index">
				<transferBodyVue :placeholder='item.placeholder' :value='item.value' >
					<template #text>
						{{item.name}} <image v-if='item.gthIstrue' style="width: 30rpx;height: 30rpx; margin-left: 10rpx;" src="../../static/bg-image/gth.svg" mode=""></image>
					</template>
					<template #icon>
						<image style="width: 30rpx;height: 30rpx;" :src="item.imageIcon" mode=""></image>
					</template>
				</transferBodyVue>
				
				<view class="isChecked" v-if="item.Ischebox">
					<uni-data-checkbox multiple :value="item.Ischebox.value" :localdata="item.CheckText" :selectedTextColor='"color:#fff"' ></uni-data-checkbox>
				</view>
			</view>

		</view>
		
		<view class="footBox">
			<transferTitleVue :BorderColor="'blue'">
				<template #text>
					高级功能
				</template>
				<template #rigth>
					<text style="color: #999;">收起</text><image style="width:30rpx; height: 30rpx; margin-left: 10rpx;" src="@/static/bg-image/shangjiantou.svg" mode=""></image>
				</template>
			</transferTitleVue>
			
			<transferBodyVue :placeholder='"仅付款方回单可见,最多20个字符选择(选填)"'>
				<template #text>
					企业制作凭证号
				</template>
			</transferBodyVue>
			
			<view class="inform">
				<view class="informLeft">
					通知收款人
				</view>
				<view class="informRigth">
					功能未开通<image style="width:20rpx; height: 20rpx; margin-left: 10rpx;" src="@/static/bg-image/youbianjiantou.svg" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="foot-btn">
			<view class="btn">
				<button type="primary" plain="true" >清空</button>
			</view>
			<view class="btn">
				<button type="primary" plain="true" style="background:#eeeeee; color:#999;">暂存</button>
			</view>
			
			<view class="Maxbtn">
				<button type="primary" plain="true">下一步</button>
			</view>
		</view>
		
		<view class="lianxitext">
			温馨提示:为了您的资金安全，请谨慎操作，注意防范电信网络诈骗。<br>
			1、交行内转账及跨行小额100万元(含)及以下转账支持7*24小时服务;100万以上的跨行交易，请在工作日17:00前完成交易，以确保当天到账，具体以中国人民银行支付系统及收款行入账时间为准。<br>
			2、因支付系统暂停、收款行信息不完整或需要人工审核等情况，实际汇划时间可能延迟。<br>
			3、在交易授权完成后，可通过“转账记录查询”菜单功能核实该笔转账业务的处理结果，避免重复提交支付指令所造成的损失。当交易状态处于“处理中”时，请耐心等待处理结果。<br>
			4、常用账号为贵司认可的经常性交易对手，上海地区客户添加常用账号后，贵司向该类账户转账不必另外通过短信等方式进行验证。<br>
		</view>
  </view>
</template>

<script>
	import transferTitleVue from '@/components/transfer-title.vue';
	import transferBodyVue from '@/components/transfer-Body.vue';
export default {
	data(){
		return{
			transferBodyList:[
				{
					placeholder:'请输入收款账号(必填)',name:'收款方账户',imageIcon:'../../static/bg-image/saoyisao.svg'
				},
				{
					placeholder:'请输入收款方户名(必填)',name:'收款方户名',imageIcon:'../../static/bg-image/xingming.svg'
				},
				{
					placeholder:'￥请输入金额(必填)',name:'金额'
				},
				{
					value:'实时',name:'转账方式',imageIcon:'../../static/bg-image/youbianjiantou.svg',gthIstrue:true,
				},
				{
					placeholder:'请选择收款方银行(必填)',name:'收款方银行',imageIcon:'../../static/bg-image/youbianjiantou.svg',Ischebox:true,CheckText:[{text: '保持常用收款人',value: 0}]
				},
				{
					placeholder:'最多66个中文(必填)',name:'用途',imageIcon:'../../static/bg-image/youbianjiantou.svg',gthIstrue:true,Ischebox:true,CheckText:[{text: '保存用途',value: 0}]
				}
			],
			hobby: [{
					text: '保持常用收款人',
					value: 0
				}],
		};
	},
	components:{
		transferTitleVue,
		transferBodyVue
	}
	
}
</script>

<style lang="scss" scoped>
	.transfer{
		width: 100%;
		background-color: #f2f3f7;
		padding-bottom: 80rpx;
		.transfer-title{
			width: 100%;
			background-color: #fff;
			.content{
				width: 90%;
				margin: 0 auto;
				padding: 20rpx 0;
				display: flex;
				align-items: center;
				.TextLfet{
					// width: 90%;
					flex: 1;
					height: 100%;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					text{
						font-weight: bold;
						font-size: 35rpx;
					}
					p{
						width: 100%;
						font-size: 30rpx;
						color: #999;
						font-weight: 500;
					}
				}
				.iconRigth{
					width: 10%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					image{
						width: 12rpx;
						height: 20rpx;
					}
				}
			}
		}
		.transfer-Body{
			width: 100%;
			margin-top: 20rpx;
			padding-top: 5rpx;
			background-color: #fff;
			padding-bottom: 20rpx;
			.isChecked{
				width: 90%;
				margin: 20rpx auto;
				display: flex;
			}
		}
		.footBox{
			padding:10rpx 0;
			width: 100%;
			background-color: #fff;
			margin-top: 20rpx;
			.inform{
				width: 90%;
				font-size: 30rpx;
				display: flex;
				margin: 0 auto;
				font-weight: bold;
				padding: 20rpx 0;
				.informLeft{
					flex: 1;
				}
				.informRigth{
					font-size: 28rpx;
					color: red;
					text-align: right;
					display: flex;
					align-items: center;
				}
			}
		}
		.foot-btn{
			width: 95%;
			height: 80rpx;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			margin-top: 60rpx;
			font-size: 28rpx;
			.btn{
				width: 25%;
				height: 100%;
				border-radius: 10rpx;
				display: flex;
				button{
						width: 100%;
						color: #000;
						border: 1px solid #e1e1e1;
						background-color:#fff ;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 28rpx;
				}
			}
			.Maxbtn{
				width: 35%;
				height: 100%;
				display: flex;
				button{
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					color: #fff;
					border: 1px solid #e1e1e1;
					font-size: 28rpx;
					background-color:#4c6cfb;
				}
			}
		}
		.lianxitext{
			width: 95%;
			font-size: 28rpx;
			margin: 0 auto;
			margin-top: 40rpx;
			color: #888;
			letter-spacing: 1px;
			line-height: 45rpx;
		}
	}
</style>