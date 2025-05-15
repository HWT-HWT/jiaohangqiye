# cc-pickerView 

##uniapp专属精品组件页面模板（由前端组件开发出品）精品组件页面模板

###●组件模板规划：
由前端组件开发出品的精品组件页面模板，将陆续发布，预计高达约几百种供您使用，是快速快发项目、创业的必备精品。

合集地址： uni-app模板合集地址：(https://ext.dcloud.net.cn/publisher?id=274945) 如查看全部页面模板，请前往上述uniapp插件市场合集地址；

###●组件模板效果图：
可下载项目后预览，效果图见右侧图片；

###●组件模板费用：
学习：免费下载，进行学习，无费用；

使用/商用：本页面地址赞赏10元后，可终身商用；

###●组件模板使用版权/商用：
本组件模板免费下载可供学习，如需使用及商用，请在本组件页面模板进行赞赏10元

（仅需10元获取精品页面模板代码-物有所值，1个组件页面市场价100元 ）

赞赏10元后（当前项目产生赞赏订单可追溯）即可终身商用当前本地址下载的页面模版代码，不同下载地址需进行不同的赞赏。（不赞赏就进行商用使用者，面临侵权！保留追究知识产权法律责任！后果自负！）

### 我的技术公众号(私信可加前端技术交流群)

群内气氛挺不错的，应该或许可能大概，算是为数不多的，专搞技术的前端群，偶尔聊天摸鱼

![图片](https://i.postimg.cc/RZ0sjnYP/front-End-Component.jpg)


#### 使用方法 
```使用方法
	
<!-- leftTitle:左边标题 name： 输入框名称  placeholder: 占位符 @change: 选择事件  value：选择值  range：选择范围  -->
<cc-pickerView leftTitle="房屋朝向" name="orientations" placeholder="请选择房屋朝向" @change="towardPickerChange"
				:value="towardIndex" :range="towardArr"></cc-pickerView>

<cc-pickerView leftTitle="房屋楼层" name="layer" placeholder="请选择房屋朝向" @change="floorPickerChange"
				:value="floorIndex" :range="floorArr"></cc-pickerView>

<cc-pickerView leftTitle="房屋电梯" name="lift" placeholder="请选择房屋电梯" @change="liftPickerChange"
				:value="liftIndex" :range="liftArr"></cc-pickerView>

<cc-pickerView leftTitle="房屋装修" name="decorate" placeholder="请选择房屋装修" @change="decoratePickerChange"
				:value="decorateIndex" :range="decorateArr"></cc-pickerView>


```

#### HTML代码实现部分
```html
<template>
	<view class="content">

		<form @submit="formSubmit" @reset="formReset">

			<!-- leftTitle:左边标题 name： 输入框名称  placeholder: 占位符 @change: 选择事件  value：选择值  range：选择范围  -->
			<cc-pickerView leftTitle="房屋朝向" name="orientations" placeholder="请选择房屋朝向" @change="towardPickerChange"
				:value="towardIndex" :range="towardArr"></cc-pickerView>

			<cc-pickerView leftTitle="房屋楼层" name="layer" placeholder="请选择房屋朝向" @change="floorPickerChange"
				:value="floorIndex" :range="floorArr"></cc-pickerView>

			<cc-pickerView leftTitle="房屋电梯" name="lift" placeholder="请选择房屋电梯" @change="liftPickerChange"
				:value="liftIndex" :range="liftArr"></cc-pickerView>

			<cc-pickerView leftTitle="房屋装修" name="decorate" placeholder="请选择房屋装修" @change="decoratePickerChange"
				:value="decorateIndex" :range="decorateArr"></cc-pickerView>





			<view class="uni-btn-v">
				<button class="botBtn" type="primary" form-type="submit">下一步</button>
				<view class="tipText"> 注意事项: 请确保您填写的房屋信息真实无误 </view>

			</view>
		</form>


	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {

				towardIndex: -1,
				floorIndex: -1,
				liftIndex: -1,
				decorateIndex: -1,



				towardArr: ['东', '南', '西', '北', '南北'],
				floorArr: ['低', '中', '高'],
				liftArr: ['有电梯', '无电梯'],
				decorateArr: ['普通装修', '精装修'],
			}
		},

		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e));
				var formdata = e.detail.value;
				uni.showModal({
					title: '温馨提示',
					content: 'formsubmit事件携带数据为：' + JSON.stringify(e.detail.value)
				})

			},
			towardPickerChange: function(e) {
				this.towardIndex = e.target.value;
				console.log(e.target.value);
			},
			floorPickerChange: function(e) {
				this.floorIndex = e.target.value;
				console.log(e.target.value);
			},
			liftPickerChange: function(e) {
				this.liftIndex = e.target.value;
				console.log(e.target.value);
			},
			decoratePickerChange: function(e) {
				this.decorateIndex = e.target.value;
				console.log(e.target.value);
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}


	.uni-btn-v {
		width: 100%;
		height: auto;
	}

	.botBtn {
		width: 90%;
		margin-top: 36px;
	}

	.tipText {
		width: 100%;
		margin-left: 0px;
		text-align: center;
		color: #666666;
		margin-top: 36px;
		margin-bottom: 36px;
		font-size: 28rpx;
	}
</style>



```
