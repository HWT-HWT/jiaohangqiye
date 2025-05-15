<template>
		<view class="transfer-Body-list">
			
			<view class="name">
				<slot name="text"></slot>
			</view>
			
			<view class="input-text">
<<<<<<< HEAD
				{{value && input ? '￥' :''}}
				
				<textarea
				      v-if="!array.length"
=======
				 <textarea
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
				      :placeholder="placeholder"
				      :value="value"
				      rows="2"
				      placeholder-style="color: #ccc; font-weight:normal"
<<<<<<< HEAD
				      style="width: 100%; height: auto; font-size:28rpx;"
					  @input="$emit('input', $event.target.value)"
				    ></textarea>
				<view class="uni-list-cell-db" v-else >
					<picker  @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
=======
				      style="width: 100%; height: auto; font-sizi:25rpx;"
				    ></textarea>
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
			</view>
			
			<view class="icon">
				<slot name="icon"></slot>
			</view>
			
		</view>
</template>

<script>
	export default {
		name:"transfer-Body",
		data() {
			return {
<<<<<<< HEAD
				 index: 0,
=======
				
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
			};
		},
		props:{
			placeholder:{
				type:String
			},
			value:{
				type:String
<<<<<<< HEAD
			},
			array:{
				type:[String,Array],
			},
			input:{
				type:Boolean
			}
			
		},
		methods:{
			bindPickerChange: function(e) {
				// console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value
				uni.setStorageSync('index',e.detail.value)
			},
		},
		created() {
			// console.log(this.$props.array);
=======
			}
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
		}
	}
</script>

<style lang="scss" scoped>
		.transfer-Body-list{
			width: 96%;
			border-bottom: 1px solid #e6e6e6;
			display: flex;
			font-size: 32rpx;
			font-weight: bold;
			margin: 10rpx auto;
			.name{
				width: 25%;
				padding: 20rpx;
				font-weight: bold;
				display: flex;
				align-items: center;
			}
			
			.input-text{
				padding: 20rpx;
				flex: 1;
				display: flex;
				align-items: center;
			}
			
			.icon{
				display: flex;
				align-items: center;
				margin-right: 20rpx;
			}
		}
</style>