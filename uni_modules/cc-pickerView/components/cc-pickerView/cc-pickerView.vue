<template>
	<view>
		<view class="inputView">
			<text class="leftTitle">{{leftTitle}}</text>
			<picker class="picker" @change="changeClick" :value="value" :range="range">

				<input class="rightInput" :name="name" v-model="range[value]" :placeholder="placeholder"
					disabled="true" />

			</picker>
			<image class="arrowImg0" mode="aspectFit" src="./arrow_right.png"></image>
		</view>
		<view class="lineV"></view>
		
	</view>
</template>

<script>
	export default {
		name: "ccPickerView",
		props: {
			// 左边标题栏
			leftTitle: {
				type: String,
				default: ""
			},
			// 默认输入占位符
			placeholder: {
				type: String,
				default: ""
			},
			// 输入框name
			name: {
				type: String,
				default: ""
			},
			// 当前index
			value: {
				type: [Number, String],
				default: 0
			},
			// 数据源
			range: {
				type: Array,
				default () {

					return [];
				}
			}

		},
		data() {
			return {

			}
		},
		methods: {

			changeClick(e) {
				
				
				this.$emit("change", e);

			},
		}

	}
</script>

<style>
	.inputView {
		flex-direction: row;
		display: flex;
		height: 50px;
		align-items: center;
		width: 100%;
	}





	.leftTitle {
		margin-left: 20px;
		width: 86px;
		font-size: 28rpx;
		color: #333333;
	}

	.picker {
		margin-left: 0px;
		width: calc(100vw - 144px);
		height: 100rpx;
		font-size: 30rpx;
	}


	.rightInput {
		width: calc(100vw - 120px);
		font-size: 30rpx;
		height: 50px;
	}


	.arrowImg0 {
		margin-right: 22px;
		width: 30rpx;
		height: 30rpx;
	}
	.line {
		width: 90%;
		height: 2rpx;
		margin-left: -2rpx;
		background-color: #f8f8f8;
		margin-left: 5%;
	
	}
</style>