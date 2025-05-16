<template>
	<view class="subsidiary">

		<company :value="'活期一般户'"></company>

		<view class="choices">
			<view class="choices-btn" v-for="(item,index) in choicesBtnList" :key="index" @tap="btnIsTrue(index)">
				<company></company>
			</view>
			<view class="choices">
				<view class="choices-btn" v-for="(item,index) in choicesBtnList" :key="index" @tap="btnIsTrue(index)">

					{{item.name}}
					<image class="choices-btn-image" :src="item.icon" mode=""></image>
				</view>
			</view>


			<view class="zzc" v-if="ZzcTrue" @click="close()">
				<view class="zzc-text" v-for="(item,index) in zzc" :key="index">
					<text>{{item}}</text>
				</view>
				<view style="width: 100%; height: 100rpx; background-color: #fff;">

				</view>
			</view>



			<view v-if="Istrue">

				<view class="btnBox">
					<view class="TextBox"
						style=" background-color: #e9eeff;  color: #6f7fcd; border: 1px solid #6f7fcd;">
						全部
					</view>
					<view class="TextBox">
						贷(收)
					</view>
					<view class="TextBox">
						借(支)
					</view>
				</view>


				<view class="list">
					<view class="list-text">
						<text v-if="!hopeBeginTime">2024-11-13 至 2024-11-13</text>
						<text v-else>{{hopeBeginTime[0]+'至'+hopeBeginTime[1]}}</text>
						<br />
						<view v-if="hopeBeginTime">

							支出-1829442.9 &nbsp; 收入<text style="color: red;">+1860002.00</text>

							支出-1213976.78 &nbsp; 收入<text style="color: red;">+1225002.00</text>

							<br />
							<text style="color: #afafaf; font-size: 20rpx;">共 {{datalist.length-3}} 笔</text>

							<text style="color: #afafaf; font-size: 20rpx;margin-left:200rpx;">共 3 笔</text>
						</view>

						<view v-else>
							支出-0 &nbsp; 收入<text style="color: red;">+0</text>
							<br />
							<text style="color: #afafaf; font-size: 20rpx;">共0</text><text
								style="color: #afafaf; font-size: 20rpx; margin-left:100rpx;">共0</text>
						</view>
					</view>

					<view class="list-Money" v-if="hopeBeginTime" v-for="(item,index) in datalist" :key="index">
						<view class="list-Money-left content">
							<p style="font-size: 28rpx; font-weight: bold;">{{item.name}}</p>
							<text style="font-size: 28rpx; font-weight: bold;">{{item.namelist}}</text>
							<p style="font-size: 25rpx;color: #ccc;">{{item.minititle}}</p>
						</view>
						<view class="list-Money-rigth content">

							<p style="width: 100%; ; font-size: 28rpx; font-weight: bold;"><text
									:style="{'color':item.color}">{{item.money}}</text></p>

							<p style="width: 100%; ; font-size: 28rpx; font-weight: bold;">{{item.money}}</p>

							<p style="width: 100%; ; font-size: 23rpx;color: #ccc;">{{item.time}}</p>
						</view>
					</view>

				</view>

			</view>


			<view v-else>
				<view class="Type">
					<view class="type-btnBox">
						<view class="Type-btnBox-title">
							账户类型
						</view>
						<view class="Type-btnBox-btn">
							<view class="tag"
								style=" background-color: #e9eeff;  color: #6f7fcd; border: 1px solid #6f7fcd;">
								全部
							</view>
							<view class="tag">
								贷(收)
							</view>
							<view class="tag">
								借(支)
							</view>
						</view>
					</view>

					<subsidiaryListVue>
						<template #name>
							交易时间
						</template>
						<template #ViewDiv>
							<view class="Type-time" @click="dateOpen()">
								<view class="start-end">
									<text style="color: #7785d3;" v-if="hopeBeginTime[0]">{{hopeBeginTime[0]}}</text>
									<text v-else>请输入起始时间</text>
								</view>
								<text>至</text>
								<view class="start-end">
									<text style="color: #7785d3;" v-if="hopeBeginTime[0]">{{hopeBeginTime[1]}}</text>
									<text v-else>请输入截至时间</text>
								</view>
							</view>
						</template>
					</subsidiaryListVue>

					<subsidiaryListVue>
						<template #name>
							交易金额
						</template>
						<template #ViewDiv>
							<view class="Type-moeny">
								<view class="Type-moeny-mini-max">
									请输入最低金额
								</view>
								<view class="text">
									__
								</view>
								<view class="Type-moeny-mini-max">
									请输入最高金额
								</view>
							</view>
						</template>
					</subsidiaryListVue>

					<subsidiaryListVue>
						<template #name>
							账户名
						</template>
						<template #ViewDiv>
							<view class="Type-input">
								&nbsp;&nbsp;请输入账户名
							</view>
						</template>
					</subsidiaryListVue>


					<subsidiaryListVue>
						<template #name>
							账号
						</template>
						<template #ViewDiv>
							<view class="Type-input">
								&nbsp;&nbsp;请输入账号
							</view>
						</template>
					</subsidiaryListVue>
				</view>
				<view class="btn">
					<view class="btn-Box">
						<view class="btn-Box-uni rigth" @click="rigth">
							确定
						</view>
						<view class="btn-Box-uni">
							重置
						</view>
					</view>
				</view>
			</view>
			<my-datetime ref="dateTimePop" :titleShow='false' :shownum='3' @ok="timeOk"></my-datetime>
		</view>
	</view>
</template>

<script>
	import subsidiaryListVue from "./subsidiaryList.vue";
	import company from "@/components/Company.vue"
	import myDatetime from '@/components/my-datetime/my-datetime'
	export default {
		data() {
			return {
				choicesBtnList: [{
						name: '人民币',
						icon: '../../static/jiaohang/sanjiaoxing.png'
					},
					{
						name: '普通查询',
						icon: '../../static/jiaohang/sanjiaoxing.png'
					},
					{
						name: '筛选',
						icon: '../../static/jiaohang/shanxuan.png'
					},
				],

				datalist: [{
						name: '广州伊玉贸易有限公司',
						namelist: '441899999903000775608',
						minititle: '贷款利息',
						money: '+￥1800000.00',
						time: '2024-05-31 11:11:18',
						color: 'red'
					},
					{
						name: '陈龙',
						namelist: '6228480317112781172',
						minititle: '',
						money: '-￥1000000.00',
						time: '2024-05-31 14:53:49'
					},
					{
						name: '',
						namelist: '',
						minititle: '手续费',
						money: '-￥20.00',
						time: '2024-05-31 14:53:49'
					},
					{
						name: '王森林',
						namelist: '6217582000055633630',
						minititle: '',
						money: '-￥300,000.00',
						time: '2024-05-31 14:55:13'
					},
					{
						name: '',
						namelist: '',
						minititle: '手续费',
						money: '-￥15.00',
						time: '2024-05-31 14:55:13'
					},
					{
						name: '陈承帮',
						namelist: '6230361213005664130',
						minititle: '',
						money: '-￥499,950.00',
						time: '2024-05-31 14:59:37'
					},
					{
						name: '',
						namelist: '',
						minititle: '手续费',
						money: '-￥15.00',
						time: '2024-05-31 14:59:37'
					},
					{
						name: '陈伟权',
						namelist: '622439270002364694',
						minititle: '',
						money: '+￥60,000.00',
						time: '2024-06-21 17:08:51',
						color: 'red'
					},
					{
						name: '广州伊玉贸易有限公司',
						namelist: '441899999903000775608',
						minititle: '贷款利息',
						money: '-￥3,571.40',
						time: '2024-06-21 17:16:38'
					},
					{
						name: '',
						namelist: '',
						minititle: '本行个人账户成功笔数代付收费标准',
						money: '-￥0.70',
						time: '2024-06-22 06:01:34'
					},
					{
						minititle: '20240524开户手续费缓收/205000420240524',
						money: '-￥50.00',
						time: '2024-07-02 06:06:19'
					},
					{
						minititle: '20240524USBKEY费缓收（网银）/2051000420',
						money: '-￥38.00',
						time: '2024-07-02 06:06:21'
					},
					{
						minititle: '2024网银服务年费',
						money: '-￥150.00',
						time: '2024-07-03 04:32:11'
					},
					{
						minititle: '2024网银证书服务年费,用户00002',
						money: '-￥75.00',
						time: '2024-07-03 05:22:08'
					},
					{
						minititle: '2024网银证书服务年费,用户00001',
						money: '-￥75.00',
						time: '2024-07-03 05:50:35'
					},
					{
						name: '广州伊玉贸易有限公司',
						namelist: '441899999903000775608',
						minititle: '贷款利息',
						money: '-￥5,099.56',
						time: '2024-07-22 04:48:31'
					},
					{
						name: '广州伊玉贸易有限公司',
						namelist: '441899999903000775608',
						minititle: '贷款利息',
						money: '-￥5,099.56',
						time: '2024-08-21 04:12:59'
					},
					{
						name: '20240922利息入账',
						namelist: '4411140127010100100001899',
						minititle: '贷款利息',
						money: '+￥2.00',
						time: '2024-09-23 00:00:00',
						color: 'red'
					},
					{
						name: '广州伊玉贸易有限公司',
						namelist: '441899999903000775608',
						minititle: '贷款利息',
						money: '-￥5,099.56',
						time: '2024-09-23 04:16:22'
					},
					{
						name: '广州伊玉贸易有限公司',
						namelist: '441899999903000775608',
						minititle: '贷款利息',
						money: '-￥5,099.56',
						time: '2024-10-21 10:09:56'
					},
					{
						name: '广州伊玉贸易有限公司',
						namelist: '441899999903000775608',
						minititle: '贷款利息',
						money: '-￥5,099.56',
						time: '2024-11-21 13:44:25'
					},
				],
				hopeBeginTime: '',
				dateKey: '',
				Istrue: true,
				ZzcTrue: false,
				zzc: ['人民币'],
				zzcOne: ['人民币'],
				zzcTow: ['普通查询', '正月查询'],
				// 	{name:'广州伊玉贸易有限公司',namelist:'441899999903000775608',minititle:'贷款利息',money:'+￥1200000.00',time:'2024-05-31 11:11:22'},
				// 	{name:'应付代收业务款项-代付业务专户',namelist:'441114012890900100012799',minititle:'代发营销费用-',money:'-￥1200000.00',time:'2024-05-31 11:53:49'},
				// 	{name:'曾凡忠',namelist:'6222033602015955766',money:'+￥25000.00',time:'2024-06-21 17:08:51'},
				// 	{name:'广州伊玉贸易有限公司',namelist:'441899999903000775608',minititle:'贷款利息',money:'-￥2570.40',time:'2024-06-21 17:16:38'},
				// 	{minititle:'本行个人账户成功笔数代收费用标准',money:'-￥0.70',time:'2024-06-22 06:01:34'},
				// 	{minititle:'20240524开户手续费缓收/205000420240524',money:'-￥50.00',time:'2024-07-02 06:06:19'},
				// 	{minititle:'20240524USBKEY费缓收（网银）/2051000420',money:'-￥38.00',time:'2024-07-02 06:06:21'},
				// 	{minititle:'2024网银服务年费',money:'-￥150.00',time:'2024-07-03 16:10:55'},
				// 	{minititle:'2024网银证书服务年费,用户00002',money:'-￥75.00',time:'2024-07-03 17:22:12'},
				// 	{minititle:'2024网银证书服务年费,用户00001',money:'-￥75.00',time:'2024-07-03 17:50:42'},
				// 	{name:'广州伊玉贸易有限公司',namelist:'441899999903000775608',minititle:'贷款利息',money:'-￥3672.56',time:'2024-07-22 16:48:20'},
				// 	{name:'广州伊玉贸易有限公司',namelist:'441899999903000775608',minititle:'贷款利息',money:'-￥3672.56',time:'2024-08-21 16:21:10'},
				// 	{name:'20240922利息入账',namelist:'4411140127010100100001899',minititle:'贷款利息',money:'+￥2.00',time:'2024-08-21 16:21:12'},
				// 	{name:'广州伊玉贸易有限公司',namelist:'441899999903000775608',minititle:'贷款利息',money:'-￥3672.56',time:'2024-09-23 16:16:11'},
				// 	{name:'广州伊玉贸易有限公司',namelist:'441899999903000775608',minititle:'贷款利息',money:'-￥3672.56',time:'2024-10-23 16:15:21'},
				// 	{name:'广州伊玉贸易有限公司',namelist:'441899999903000775608',minititle:'贷款利息',money:'-￥3672.56',time:'2024-11-23 16:15:55'},
				// ],
				hopeBeginTime: '',
				dateKey: '',
				Istrue: true
			};
		},
		components: {
			company,
			'my-datetime': myDatetime,
			subsidiaryListVue
		},
		methods: {
			// 开启弹窗
			dateOpen() {
				this.$refs.dateTimePop.open();
			},
			// 关闭弹窗
			timeOk(str) {
				console.log(str)
				this.hopeBeginTime = str
				this[this.dateKey] = str || ''
			},
			btnIsTrue(index) {
				this.ZzcTrue = false
				if (index === 0) {
					this.ZzcTrue = !this.ZzcTrue
					this.zzc = this.zzcOne
				} else if (index === 1) {
					this.ZzcTrue = !this.ZzcTrue
					this.zzc = this.zzcTow
				}
				index === 2 ? this.Istrue = false : this.Istrue = true
			},
			rigth() {
				this.Istrue = true
			},
			btn(index) {

			},
			close() {
				this.ZzcTrue = false;
			}
		}

	}
</script>

<style lang="scss" scoped>
	.subsidiary {
		width: 100%;
		height: 100vh;
		background-color: #f2f3f7;

		// overflow: hidden;
		.choices {
			width: 100%;
			height: 75rpx;
			background-color: #fff;
			// border: 1px solid;
			font-size: 25rpx;
			display: flex;

			.choices-btn {
				width: 25%;
				height: 100%;
				// border: 1px solid;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;

				.choices-btn-image {
					width: 20rpx;
					height: 20rpx;
					margin-left: 10rpx;
				}
			}

			.choices-btn:hover {
				color: #406fed;
			}
		}

		.zzc {
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.3);
			font-size: 30rpx;
			padding-bottom: 100rpx;
			position: absolute;

			.zzc-text {
				display: flex;
				align-items: center;
				justify-content: space-between;
				background-color: #fff;
				padding: 20rpx 35rpx;
				border-bottom: 1px solid #ccc;
				border-top: 1px solid #ccc;
			}
		}

		.btnBox {
			width: 95%;
			height: 100rpx;
			// border: 1px solid;
			display: flex;
			align-items: center;
			margin: 0 auto;
			font-size: 28rpx;

			.TextBox {
				width: 20%;
				height: 55%;
				background-color: #fff;
				border-radius: 5px;
				display: flex;
				align-items: center;
				justify-content: center;
				border: 1px solid #ccc;
				margin-right: 25rpx;
			}
		}

		.list {
			width: 100%;
			height: 150rpx;
			background-color: #fff;
			font-size: 28rpx;

			.list-text {
				width: 95%;
				height: 100%;
				margin: 0 auto;
				line-height: 50rpx;
			}

			.list-Money {
				width: 100%;
				margin: 0 auto;
				margin-top: 2rpx;
				line-height: 50rpx;
				background-color: #fff;
				display: flex;
				padding: 10rpx 0;

				.content {
					width: 48%;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					margin: 0 auto;
				}

				.list-Money-rigth {
					width: 40%;
					text-align: right;
				}
			}
		}

		.Type {
			width: 100%;
			height: 800rpx;
			background-color: #fff;
			padding-bottom: 80rpx;
			font-size: 25rpx;

			.type-btnBox {
				width: 90%;
				height: 15%;
				margin: 0 auto;
				margin-top: 2rpx;

				.Type-btnBox-title {
					font-size: 28rpx;
					display: flex;
					align-items: center;
					width: 90%;
					height: 50%;
				}

				.Type-btnBox-btn {
					width: 90%;
					height: 50%;
					display: flex;
					// border: 1px solid #ccc;
					align-items: center;

					.tag {
						width: 20%;
						height: 55%;
						background-color: #fff;
						padding: 5rpx;
						border-radius: 5px;
						display: flex;
						align-items: center;
						justify-content: center;
						border: 1px solid #ccc;
						margin-right: 25rpx;
					}
				}
			}

			.Type-title {
				font-size: 28rpx;
				display: flex;
				align-items: center;
				width: 90%;
				height: 50%;
				margin: 0 auto;
			}

			.Type-time {
				width: 90%;
				height: 50rpx;
				border: 1px solid #ccc;
				border-radius: 10rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #aaabb4;
				margin: 0 auto;
				font-size: 25rpx;

				.start-end {
					width: 45%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}

			.Type-moeny {
				width: 100%;
				height: 50%;
				// border: 1px solid;
				display: flex;
				justify-content: center;
				margin: 0 auto;
				color: #ccc;

				.Type-moeny-mini-max {
					width: 40%;
					height: 100%;
					border: 1px solid;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 10rpx;
				}

				.text {
					margin: 0 20rpx;
				}
			}

			.Type-input {
				width: 90%;
				height: 75%;
				border: 1px solid;
				margin: 0 auto;
				color: #ccc;
				border-radius: 10rpx;
				display: flex;
				align-items: center;
			}
		}

		.btn {
			width: 100%;
			height: 400rpx;
			// border: 1px solid;
			font-size: 28rpx;
			background-color: #fff;

			.btn-Box {
				width: 90%;
				height: 100rpx;
				// border: 1px solid;
				margin: 0 auto;

				.btn-Box-uni {
					width: 20%;
					height: 90%;
					border: 1px solid #ccc;
					border-radius: 10rpx;
					float: right;
					text-align: center;
					line-height: 90rpx;
					margin-left: 30rpx;
				}

				.rigth {
					background-color: #3c55ff;
					color: #fff;
					border: none;
				}
			}
		}
	}
</style>