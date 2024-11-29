<template>
		<view class="video-cover">
			<view class="cover">
				<slot  name="image"></slot>
			</view>
			<view class="name">
				<p style="font-size: 25rpx; margin: 5rpx 0;"><slot name="title"></slot></p>
				<p style="font-size: 20rpx; color: #ccc;"><slot name="text"></slot></p>
			</view>
		</view>
</template>

<script>
	export default {
		name:"videoo",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
		.video-cover{
			width: 100%;
			height: 100%;
			margin: 0 auto;
			.cover{
				width: 90%;
				height: 80%;
				margin: 0 auto;
			}
			.name{
				width: 90%;
				height: 20%;
				margin: 0 auto;
			}
		}

</style>