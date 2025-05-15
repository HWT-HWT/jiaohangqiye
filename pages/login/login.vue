<template>
	<view class="login">
		<view class="title">
			<view class="op-title">
				
			</view>
			<view class="Nav-title">
				<view class="Nav-title-icon" @click="loginQuit">
					<uni-icons type="left" size="20" color='#fff'></uni-icons>
				</view>
				<view class="Nav-title-icon">
					<image src="../../static/jiaohang/Nav_1.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="MaxTitle">
			您好,
			<br />欢迎使用企业手机银行
		</view>
		
		<view class="login-input">
			<view class="login-input-title">
				<view class="uni-padding-wrap uni-common-mt">
					<uni-segmented-control :current="current" :values="items" :style-type="'text'"
						:active-color="activeColor" @clickItem="onClickItem" />
				</view>
			</view>
			<view class="login-input-text">
					<view v-if="current === 0">
							<view class="name-input">
								<view class="input-text">
									<input type="text" value="" v-model='account' placeholder="c****7" placeholder-style='color:#fff' />
								</view>
								<view class="text">
									<image style="width: 25rpx; height: 25rpx;" src="@/static/bg-image/jtx.png" mode=""></image>
								</view>
							</view>
							
							<view class="name-input">
								<view class="input-text">
									<input type="safe-password" password  value="" v-model="password" placeholder-style='color:#fff' placeholder="请输入密码"  />
								</view>
							</view>	
					</view>
					
					<view v-if="current === 1">
						<view class="name-input">
							<view class="input-text">
								<input type="text" value="" v-model="account" placeholder="请输入手机号" placeholder-style='color:#fff' />
							</view>
						</view>
						
						<view class="name-input">
							<view class="input-text">
								<input type="safe-password" value="" v-model='password' placeholder-style='color:#fff' placeholder="6位短信数字密码"  />
							</view>
							<view class="text">
								获取验证码
							</view>
						</view>	
					</view>
					
					<view class="title-checkbox">
						<view class="checkbox-left">
							<uni-data-checkbox multiple v-model="checkbox6" :localdata="hobby" selectedTextColor="#fff" selected-text-color="#fff"></uni-data-checkbox>
						</view>
						<view class="checkbox-text">
							忘记用户名/密码
						</view>
					</view>
					
					<view class="buttom">
						<button class="active" type="primary" v-if="gologin">登录</button>
						<button v-else type="primary" @click="Quindex">登录</button>
					</view>
					
					<view class="footText">
						更多登录方式
					</view>
					
					<view class="footList">
						<view class="list">
							用户激活
						</view>
						<view class="list">
							在线办理
						</view>
						<view class="list" style="border: none;">
							登录指南
						</view>
					</view>
					
					<view class="log">
						<image src="../../static/bg-image/log.png" mode=""></image>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account:'',
				password:'',
				items: ['用户名登录', '手机号登录'],
				current: 0,
				activeColor: '#fff',
				styleType: 'button',
				checkbox6: 0,
				hobby: [{
					text: '记住登录信息',
					value: 0
				},],
				gologin:true
			}
		},
		methods: {
			onClickItem(e) {
				this.account = ''
				this.password = ''
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			colorChange(e) {
				if (this.styleType !== e.detail.value) {
					// console.log(e.detail.value);
					this.activeColor = e.detail.value
				}
			},
			// 允许点击登录框/不允许点击登录框
			login(){
				this.gologin=true
				if(this.account.length >= 6 && this.password.length >= 6){
					if(this.checkbox6.length === 1){
						this.gologin=false
					}
				}
			},
			// 跳转登录 配置账户密码
			Quindex(){
				if(this.account =='cwq691107' && this.password =="cwq21092"){
					setTimeout(()=>{
						uni.reLaunch({
							url:'/pages/index/index'
						})
					},500)
					uni.setStorageSync('account',{account:this.account,pasw:this.password})
					uni.showToast({
						title:'登录成功',
						icon:'none',
						duration:1500
					})
				}else{
					uni.showToast({
						title:'账号或密码错误',
						icon:"none"
					})
				}
			},
			// 不登陆
			loginQuit(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			}
		},
		watch:{
			account(){
				this.login()
			},
			password(){
				this.login()
			},
			checkbox6(old,neww){
				this.login()
			}
		}
	}
</script>

<style lang="scss">
.login{
	width: 100%;
	height: 100vh;
	background: url('@/static/bg-image/PE_1.png');
	background-size: 100%;
	.title{
		width: 100%;
		height: 180rpx;
		.op-title{
			width: 100%;
			height: 49%;
		}
		.Nav-title{
			width: 90%;
			height: 50%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			.Nav-title-icon{
				width: 10%;
				display: flex;
				align-items: center;
				justify-content: center;
				image{
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
	}
	.MaxTitle{
		width: 85%;
		height: 100rpx;
		margin: 0 auto;
		font-size: 48rpx;
		color: #fff;
		font-family: '黑体';
		font-weight: bold;
	}
	.login-input{
		width: 90%;
		font-weight: bold;
		margin: 0 auto;
		margin-top: 100rpx;
		.login-input-title{
			width: 60%;
		}
		.login-input-text{
			width: 95%;
			height: 90%;
			margin: 0 auto;
			.name-input{
				width: 100%;
				height: 100rpx;
				display: flex;
				justify-content: space-between;
				margin-top: 40rpx;
				border: 1px solid #fff;
				background-color: rgba(255, 255, 255,0.2);
				border-radius: 10rpx;
				color: #fff;
				.input-text{
					flex: 1;
					height: 100rpx;
					input{
						width: 100%;
						height: 100%;
						margin-left: 20rpx;
					}
				}
				.text{
					padding: 0 20rpx;
					height: 100%;
					display: flex;
					align-items: center;
				}
			}
			.title-checkbox{
				width: 100%;
				height: 75rpx;
				margin-top: 30rpx;
				display: flex;
				color: #fff;
				.checkbox-left{
					flex: 1;
					height: 100%;
					// border: 1px solid;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #fff;
				}
				.checkbox-text{
					padding: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 28rpx;
					height: 100%;
				}
			}
			.buttom{
				width: 90%;
				height: 75rpx;
				margin: 100rpx auto;
				.active{
					width: 100%;
					height: 100%;
					background-color: rgba(255, 255, 255, 0.5);
					color: #ccc;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 25rpx;
				}
				button{
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 25rpx;
				};
			}
			.footText{
				color: #fff;
				font-size: 30rpx;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 35rpx;
				margin-bottom: 100rpx;
			}
			.footList{
				width: 90%;
				height: 55rpx;
				margin: 0 auto;
				border-radius:10rpx;
				display: flex;
				align-items: center;
				background-color:rgba(0, 0, 0, 0.2);
				.list{
					width: 33%;
					height: 30rpx;
					border-right:1rpx solid #fff;
					color: #fff;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 25rpx;
				}
			}
		}
	}
	.log{
		width: 120rpx;
		height: 80rpx;
		margin: 50rpx auto;
		margin-top: 50rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
}
</style>
