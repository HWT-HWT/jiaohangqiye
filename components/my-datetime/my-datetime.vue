<template>
	<view>
		<uni-popup ref="popup" type="bottom" :animation="true" @change="change">
			<view class="popup-content">
				<view>
				  <view class="headBox">
						<view @click="close"><text class="text1">取消</text></view>
						<view class="uni-page-head-title" v-if="titleShow"></view>
						<view class="head-title">

							交易时间

							交易日期

						</view>
						<view><text class="text1 blue" @click="ok">确定</text></view>
					</view>
					
					<view class="add-title">
						
						<view style="width: 100%; height: 60rpx;  display: flex; align-items: center; background-color: #fff3cf;">
							<text style="font-size: 28rpx; margin-left: 25rpx;">时间跨度最大3个月</text>
						</view>
							

						<view class="add-title-time">
							<view class="add-title-time-btn">
								最近一周
							</view>
							<view class="add-title-time-btn">
								本月
							</view>
							<view class="add-title-time-btn">
								最近30天
							</view>
							<view class="add-title-time-btn">
								最近60天
							</view>
						</view>
						
						<view class="start-end">

							<view v-model="startTime" class="start-end-input" type="text"  placeholder="开始时间" @click="status">{{startTime}}</view>
							<view v-model="endTime" class="start-end-input" type="text" placeholder="结束时间" @click="end">{{endTime}}</view>

							<input v-model="startTime" class="start-end-input" type="text" disabled placeholder="开始时间" @click="status"/>
							<input v-model="endTime" class="start-end-input" type="text" disabled placeholder="结束时间" @click="end"/>

						</view>
					</view>
					
					<picker-view :indicator-style="indicatorStyle" :value="value" @change="bindChange"  @touchend='setStart()' >
						<picker-view-column v-for="(arr, n) in dateTimeArr" :key="n">
							<view class="item"  v-for="(obj, index) in arr" :key="index">{{obj}}{{ unitArr[n] || '' }}</view>
						</picker-view-column>
						<!-- <picker-view-column>
							<view class="item" v-for="(item, index) in years" :key="index">{{item}}年</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item, index) in months" :key="index">{{item}}月</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item, index) in days" :key="index">{{item}}日</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item, index) in hourArr" :key="index">{{item}}时</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item, index) in minArr" :key="index">{{item}}分</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item, index) in secondArr" :key="index">{{item}}秒</view>
						</picker-view-column> -->
					</picker-view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '../uni-popup/uni-popup.vue'
	
	export default {
		name: 'MyDatetime',
		components: {
			'uni-popup': uniPopup
		},
		props: {
			titleShow: {
				type: Boolean,
				default: true
			},
			timestr: {
				// 是否展开
				type: String,
				default: ''
			},
			// 显示位数
			shownum: {
				type: [String, Number],
				default: 6
			}
		},
		data() {
			const date = new Date()
			const years = []
			const year = date.getFullYear()
			const months = []
			const month = date.getMonth() + 1
			const days = []
			const day = date.getDate()
			for (let i = 1970, len = date.getFullYear() + 100; i <= len; i++) {
					years.push(i)
			}
			for (let i = 1; i <= 12; i++) {
					months.push(i < 10 ? ('0'+ i.toString()) : i)
			}
			for (let i = 1; i <= 31; i++) {
				days.push(i < 10 ? ('0'+ i.toString()) : i)
			}
			const hourArr = []
			for (let i = 0; i < 24; i++) {
				hourArr.push(i < 10 ? ('0'+ i.toString()) : i)
			}
			// 分、秒
			const minSecond = []
			for (let i = 0; i <= 59; i++) {
				minSecond.push(i < 10 ? ('0'+ i.toString()) : i)
			}
			return {
				StarEnd:0,
				//开始时间 
				startTime:'',
				// 结束时间
				endTime:'',
				thirtyOne: days,
				dateArr: [years, months, days, hourArr, minSecond, minSecond ],
				unitArr: [ '年', '月', '日', '时', '分', '秒'],
				obj: { 0: 'year', 1: 'month', 2: 'day', 3: 'hour', 4: 'minute', 5: 'second' },
				years,
				months,
				days,
				hourArr,
				minArr: minSecond,
				secondArr: minSecond,
				year,
				month,
				day,
				hour: '00',
				minute: '00',
				second: '00',
				value: [ year - 1970, month - 1, day - 1],
				visible: true,
				indicatorStyle: `height: 100rpx;`,
				timer: null
			}
		},
		computed: {
			// 时间对象
			dateTimeArr () {
				var num = parseInt(this.shownum) || 6
				if (num <= 6 && num > 0) {
					return this.dateArr.slice(0, num)
				}
				return this.dateArr
			},
			// 时间展示
			timeTitle () {
				var str = ''
				var num = parseInt(this.shownum) || 6
				if ( num > 0 && num < 6 ) {
					for (var i = 0; i < num; i++) {
						str = str + this[this.obj[i]] + this.unitArr[i]
					}
					return str
				}
				return `${this.year}年${this.month}月${this.day}日${this.hour}时${this.minute}分${this.second}秒`
			}
		},
		watch: {
			// 月份
			month () {
				this.countDay()
			},
			year () {
				this.countDay()
			},
			day(){
				
			}
		},
		created() {
			this.countDay();
		},
		destroyed() {
			this.timer && clearTimeout(this.timer)
		},
		methods: {
			// 计算天数
			countDay () {
				var index = new Date(this.year, parseInt(this.month), 0).getDate()
				var days = this.thirtyOne.slice(0, index)
				this.dateArr.splice(2, 1, days)
				this.days = days
			},
			// 时间回填 timeStr: 2020-01-01 00:00:00
			timeFill (timeStr) {
				var dateObj = timeStr ? new Date(timeStr.replace(/-/g,'/')) : new Date();
				var timeObj = {
					year: dateObj.getFullYear(),
					month: dateObj.getMonth() + 1,
					day: dateObj.getDate(),
					h: dateObj.getHours(),
					m: dateObj.getMinutes(),
					s: dateObj.getSeconds()
				}
				
				this.timer = setTimeout(() => {
					this.value = [ (timeObj.year - 1970) || 0, timeObj.month - 1, timeObj.day - 1, timeObj.h, timeObj.m, timeObj.s ]
					
					this.year = this.years[this.value[0]]
					this.month = this.months[this.value[1]]
					this.day = this.days[this.value[2]]
					this.hour = this.hourArr[this.value[3]]
					this.minute = this.minArr[this.value[4]]
					this.second = this.secondArr[this.value[5]]
				}, 100)
				
				
			},
			// 确认
			ok () {
				// var obj = {
				// 	year: this.year,
				// 	month: this.month,
				// 	day: this.day,
				// 	hour: this.hour,
				// 	minute: this.minute,
				// 	second: this.second,
				// 	1: this.year,
				// 	2: `${this.year}-${this.month}`,
				// 	3: `${this.year}-${this.month}-${this.day}`,
				// 	4: `${this.year}-${this.month}-${this.day} ${this.hour}`,
				// 	5: `${this.year}-${this.month}-${this.day} ${this.hour}:${this.minute}`,
				// 	6: `${this.year}-${this.month}-${this.day} ${this.hour}:${this.minute}:${this.second}`,
				// }
				// var num = parseInt(this.shownum) || 6
				// if (num <= 0 || num > 6) {
				// 	num = 6
				// }

				this.$emit('ok', [this.startTime,this.endTime])
				
				this.close()
			},
			// 弹窗
			open (timeStr) {
				this.$nextTick(res => {
					this.timeFill(timeStr || this.timestr || '')
					this.$refs.popup.open()
				})
			},
			/**
			 * 关闭窗口
			 */
			close () {
				// 执行父组件的close事件，关闭弹出层
				this.$refs.popup.close()
			},
			/**
			 * popup 状态发生变化触发
			 * @param {Object} e
			 */
			change (e) {
				// console.log('popup ' + e.type + ' 状态', e.show)
			},
			bindChange: function (e) {
				// console.log(e)
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
				this.hour = this.hourArr[val[3] || 0]
				this.minute = this.minArr[val[4] || 0]
				this.second = this.secondArr[val[5] || 0]
			},
			status(){
				this.StarEnd = 0

				console.log(this.StarEnd);
			},
			end(){
				this.StarEnd = 1
				console.log(this.StarEnd);

			},
			end(){
				this.StarEnd = 1

			},
			setStart(){
				if(this.StarEnd === 0){
					this.startTime = this.timeTitle
				}else{
					this.endTime = this.timeTitle
				}
			},
			
			
			
		}
	}
</script>

<style scoped lang="scss">
	.popup-content{
		background-color: #FFFFFF;
	}
	.text1{
		padding: 0 28rpx;
		font-size: 28rpx;
		line-height: 90rpx;
		color: #888;
		float: left;
	}
	.blue{
		float: right;
		color: #007aff;
	}
	.uni-page-head-title {
		/* display: inline-block;
		padding: 0 20rpx;
		font-size: 26rpx;
		height: 88rpx;
		line-height: 88rpx;
		color: #BEBEBE;
		box-sizing: border-box; */
	}
	.head-title{
		display: flex;
		align-items: center;
		font-size: 28rpx;
	}
	.add-title{
		width: 100%;
		// height: 50rpx;
		// border: 1px solid;
	}
	.add-title-time{
		width: 100%;
		height: 60rpx;
		margin: 10rpx 0;
		display: flex;
	}
	.add-title-time-btn{
		/* width: 15%; */
		/* height: 80%; */
		font-size: 25rpx;
		display: flex;
		align-items: center;
		background-color: #e9eeff;
		color: #6f7fcd;
		border-radius: 10rpx;
		margin-top: 5rpx;
		padding: 10rpx;
		margin-left: 10rpx;
	}
	.start-end{
		width: 100%;
		height: 100rpx;
		display: flex;
		.start-end-input{
			display: flex;

			align-items: center;


			margin: 0 auto;
			margin-top: 10rpx;
			margin-left: 10rpx;
			width: 40%;
			height: 70%;
			padding: 5rpx;
			border-bottom: 2px solid #0055ff;	
			
		}
	}
	.headBox{
		display: flex;
		justify-content: space-between;
		/* border-bottom: 1px solid #e5e5e5; */
	}
	picker-view {
		width: 100%;
		height: 300rpx;
		margin-top:20rpx;
		// border: 1px solid;
		font-size: 20rpx;
	}
	.item {
		height: 100rpx;
		text-align: center;
		font-size: 25rpx;
	}
</style>
