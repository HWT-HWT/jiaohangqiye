<template>
	<view class="more">
		<view class="TitleText">
			<view class="TitleTextBox">
				<view class="MaxText">
					我的服务
				</view>
				<view class="MiniText">
					自定义
				</view>
			</view>
		</view>
		
		<view v-if="ListIsture" class="moreList">
			<view class="layoutList">
				<layoutList :value='listMore'></layoutList>
			</view>
			
			<view class="listMore" @click="ListIsture = !ListIsture">
				展开
			</view>
		</view>
		
		<view v-else class="moreList">
			<view class="layoutList">
				<layoutList :value='list'></layoutList>
			</view>
			<view class="listMore" @click="ListIsture = !ListIsture">
				收起
			</view>
		</view>
		
		
<<<<<<< HEAD
		<z-tabs :list="AllList" @change="tabsChange"></z-tabs>
		<swiper :current="current" class="swiper" @transitionend="" >
		    <swiper-item v-for="(item,index) in AllList" :key="index" >
				<view class="swiper-item">
				  <view class="swiper-title" >
					<view class="title-box" @click="scrollToText(num)" v-for="(sum,num) in item.AllListContent" :key="num">
						{{sum.name}}
					</view>
				  </view>
				  <view class="swiper-title-box">
					<scroll-view class="scroll-view" scroll-y="true" :scroll-top="scrollTop" @scroll="scroll">
						
						<view class="scroll-view-box" v-for="(it,ind) in item.AllListContent" :key="ind">
							<view class="scroll-view-itle" id='targetText'>
							 <image :src="it.NameIcon"></image>	{{it.name}}
							</view>
							<view class="scroll-view-text" v-for="(i,f) in it.chlist" :key="f">
								<view class="scroll-view-text-box">
									<view class="scroll-view-text-box-image">
										<image :src="i.icon"></image>
									</view>
									<view class="scroll-view-text-box-text">
										{{i.name}}
									</view>
								</view>
							</view>
						</view>
						
						<view class="" style="height: 850rpx;">
							
						</view>
						
					</scroll-view>
				  </view>	
			  </view>
		    </swiper-item>
			
=======
		<z-tabs :list="list" @change="tabsChange"></z-tabs>
		<swiper :current="current" class="swiper" @transitionend="">
		    <swiper-item class="swiper-item" v-for="(item, index) in list" :key="index">
				
		      <view class="swiper-title" >
		      	<view class="title-box" v-for="(sum,num) in titleboxList" :key="num" @click="scrollToText(num)">
		      		{{sum}}
		      	</view>
		      </view>
			  
			  <view class="swiper-title-box">
			  	<scroll-view class="scroll-view" scroll-y="true" :scroll-top="scrollTop" @scroll="scroll">
					
					<view class="scroll-view-box"  v-for="(item,index) in titleboxList" :key="index" >
						<view class="scroll-view-itle" id='targetText'>
							<image :src="`../../static/jiaohang/list-${index+1}.png`" mode=""></image>{{item}}
						</view>
						<view class="scroll-view-text">
							
							<view class="scroll-view-text-box">
								<view class="scroll-view-text-box-image">
									<image :src="`../../static/jiaohang/list-${index+1}.png`" mode=""></image>
								</view>
								<view class="scroll-view-text-box-text">
									账户余额
								</view>
							</view>
							
							<view class="scroll-view-text-box">
								<view class="scroll-view-text-box-image">
									<image :src="`../../static/jiaohang/list-${index+1}.png`" mode=""></image>
								</view>
								<view class="scroll-view-text-box-text">
									账户余额
								</view>
							</view>
							
							<view class="scroll-view-text-box">
								<view class="scroll-view-text-box-image">
									<image :src="`../../static/jiaohang/list-${index+1}.png`" mode=""></image>
								</view>
								<view class="scroll-view-text-box-text">
									账户余额
								</view>
							</view>
							
						</view>
					</view>
					<view class="" style="height: 850rpx;">
						
					</view>
			  	</scroll-view>
			  </view>
		    </swiper-item>
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
		</swiper>
	</view>
</template>

<script>
	import layoutList from '@/components/layout-list.vue'
	export default {
		data() {
			return {
<<<<<<< HEAD
				list:['代发薪资','一键测额','普通查询','电子发票开立','还款申请','持有理财产品','代发查询','秒贴申请','持有票据查询'],
				listMore:['代发薪资','一键测额','普通查询','电子发票开立','还款申请'],
=======
				list:['代发工资','一键测额','普通查询','电子发票开立','还款申请','持有理财产品','代发查询','秒贴申请','持有票据查询'],
				listMore:['代发工资','一键测额','普通查询','电子发票开立','还款申请'],
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
				ListIsture:'flase',
				titleMore:['账户','转账业务','代发代扣','电票业务','投资理财','国际业务','企业融资','金融服务','产业链服务','电子商务','数字人民币','企业管家','增值服务','个人设置'],
				current: 0,
				titleboxList:['余额查询','明细查询','电子回单打印','银企对账','企业账户','账号管理','现金','单位账号申请','单位结算卡','子账簿','凭证订购'],
				
<<<<<<< HEAD
				AllList:[
					{
						name:'配置管理',
						AllListContent:[
									{
										name:'设置',
										NameIcon:'../../static/Allicon/Allicon1.png',
										chlist:[
											{
												name:'新客户设置',
												icon:'../../static/Allicon/Allicon1-1.png'
											},
											{
												name:'模式修改',
												icon:'../../static/Allicon/Allicon1-2.png'
											},
											{
												name:'授权选项',
												icon:'../../static/Allicon/Allicon1-3.png'
											},
										],
									},
									{
										name:'用户',
										NameIcon:'../../static/Allicon/Allicon2.png',
										chlist:[
											{
												name:'新客户设置',
												icon:'../../static/Allicon/Allicon2-1.png'
											},
											{
												name:'模式修改',
												icon:'../../static/Allicon/Allicon2-2.png'
											},
											{
												name:'授权选项',
												icon:'../../static/Allicon/Allicon2-3.png'
											},
										],
									},
									{
										name:'账户',
										NameIcon:'../../static/Allicon/Allicon3.png',
										chlist:[
											{
												name:'新客户设置',
												icon:'../../static/Allicon/Allicon3-1.png'
											},
										],
									},
									{
										name:'服务',
										NameIcon:'../../static/Allicon/Allicon4.png',
										chlist:[
											{
												name:'新客户设置',
												icon:'../../static/Allicon/Allicon4-1.png'
											},
											{
												name:'模式修改',
												icon:'../../static/Allicon/Allicon4-2.png'
											},
											{
												name:'授权选项',
												icon:'../../static/Allicon/Allicon4-3.png'
											},
										],
									},
									{
										name:'安全',
										NameIcon:'../../static/Allicon/Allicon5.png',
										chlist:[
											{
												name:'新客户设置',
												icon:'../../static/Allicon/Allicon5-1.png'
											},
											{
												name:'模式修改',
												icon:'../../static/Allicon/Allicon5-2.png'
											},
											{
												name:'授权选项',
												icon:'../../static/Allicon/Allicon5-3.png'
											},
										],
									},
									{
										name:'用户',
										NameIcon:'../../static/Allicon/Allicon6.png',
										chlist:[
											{
												name:'企业信息',
												icon:'../../static/Allicon/Allicon6-1.png'
											},
											{
												name:'更变关系合伙人',
												icon:'../../static/Allicon/Allicon6-2.png'
											},
										],
									},
									{
										name:'一key多用',
										NameIcon:'../../static/Allicon/Allicon7.png',
										chlist:[
											{
												name:'主公司UKey',
												icon:'../../static/Allicon/Allicon7-1.png'
											},
											{
												name:'子公司UKey',
												icon:'../../static/Allicon/Allicon7-2.png'
											},
										],
									},
							]
					},
					{
						name:'签约中心',
						AllListContent:[
									{
										name:'国际业务',
										NameIcon:'../../static/Allicon/Allicon12.png',
										chlist:[
											{
												name:'国际电子单证协议签约',
												icon:'../../static/Allicon/Allicon12-1.png'
											},
											{
												name:'即期结售汇签约',
												icon:'../../static/Allicon/Allicon12-2.png'
											},
											{
												name:'风险中性声明函签署',
												icon:'../../static/Allicon/Allicon12-3.png'
											},
											{
												name:'衍生品适合度评估',
												icon:'../../static/Allicon/Allicon12-4.png'
											},
										],
									},
									{
										name:'投资理财',
										NameIcon:'../../static/Allicon/Allicon13.png',
										chlist:[
											{
												name:'第三方存管签约',
												icon:'../../static/Allicon/Allicon13-1.png'
											},
											{
												name:'银期转账',
												icon:'../../static/Allicon/Allicon13-2.png'
											},
											{
												name:'银衍转账',
												icon:'../../static/Allicon/Allicon13-3.png'
											},
											{
												name:'托管银衍转账',
												icon:'../../static/Allicon/Allicon13-4.png'
											},
											{
												name:'银商转账',
												icon:'../../static/Allicon/Allicon13-5.png'
											},
										],
									},
									{
										name:'电票业务',
										NameIcon:'../../static/Allicon/Allicon8.png',
										chlist:[
											{
												name:'可拆分票据签约',
												icon:'../../static/Allicon/Allicon8-1.png'
											},
										],
									},
									{
										name:'代发代扣',
										NameIcon:'../../static/Allicon/Allicon9.png',
										chlist:[
											{
												name:'滴灌通签约',
												icon:'../../static/Allicon/Allicon9-1.png'
											},
											{
												name:'移企付签约',
												icon:'../../static/Allicon/Allicon9-2.png'
											},
											{
												name:'银联委托扣款签约',
												icon:'../../static/Allicon/Allicon9-3.png'
											},
										],
									},
									{
										name:'金融服务',
										NameIcon:'../../static/Allicon/Allicon10.png',
										chlist:[
											{
												name:'信用报告查询签约',
												icon:'../../static/Allicon/Allicon10-1.png'
											},
											{
												name:'信用报告查询解约',
												icon:'../../static/Allicon/Allicon10-2.png'
											},
											{
												name:'三方协议缴税签约',
												icon:'../../static/Allicon/Allicon10-3.png'
											},
											{
												name:'三方协议缴税签约查..',
												icon:'../../static/Allicon/Allicon10-4.png'
											},
										],
									},
									{
										name:'电子渠道',
										NameIcon:'../../static/Allicon/Allicon11.png',
										chlist:[
											{
												name:'企业信息',
												icon:'../../static/Allicon/Allicon11-1.png'
											},
										],
									},
							]
					},
					{
						name:'账户服务',
						AllListContent:[
									{
										name:'余额查询',
										NameIcon:'../../static/Allicon/Allicon14.png',
										chlist:[
											{
												name:'账户余额',
												icon:'../../static/Allicon/Allicon14-1.png'
											},
										],
									},
									{
										name:'明细查询',
										NameIcon:'../../static/Allicon/Allicon15.png',
										chlist:[
											{
												name:'活期账户明细',
												icon:'../../static/Allicon/Allicon15-1.png'
											},
										],
									},
									{
										name:'电子回单打印',
										NameIcon:'../../static/Allicon/Allicon16.png',
										chlist:[
											{
												name:'电子回单打印',
												icon:'../../static/Allicon/Allicon16-1.png'
											},
											{
												name:'电子回单维护',
												icon:'../../static/Allicon/Allicon16-2.png'
											},
										],
									},
									{
										name:'银企对账',
										NameIcon:'../../static/Allicon/Allicon17.png',
										chlist:[
											{
												name:'余额对账单',
												icon:'../../static/Allicon/Allicon17-1.png'
											},
											{
												name:'明细对账单',
												icon:'../../static/Allicon/Allicon17-2.png'
											},
											{
												name:'对账维护录入',
												icon:'../../static/Allicon/Allicon17-3.png'
											},
										],
									},
									{
										name:'企业账户',
										NameIcon:'../../static/Allicon/Allicon18.png',
										chlist:[
											{
												name:'下挂账户列表',
												icon:'../../static/Allicon/Allicon18-1.png'
											},
										],
									},
									{
										name:'账户管理',
										NameIcon:'../../static/Allicon/Allicon19.png',
										chlist:[
											{
												name:'法人声明',
												icon:'../../static/Allicon/Allicon19-1.png'
											},
										],
									},
									{
										name:'现金',
										NameIcon:'../../static/Allicon/Allicon20.png',
										chlist:[
											{
												name:'无卡取现',
												icon:'../../static/Allicon/Allicon20-1.png'
											},
										],
									},
									{
										name:'单位账户申请',
										NameIcon:'../../static/Allicon/Allicon21.png',
										chlist:[
											{
												name:'账户申请',
												icon:'../../static/Allicon/Allicon21-1.png'
											},
											{
												name:'流程跟踪',
												icon:'../../static/Allicon/Allicon21-2.png'
											},
											{
												name:'门户申请证照上传',
												icon:'../../static/Allicon/Allicon21-3.png'
											},
										],
									},
									{
										name:'单位结算卡',
										NameIcon:'../../static/Allicon/Allicon22.png',
										chlist:[
											{
												name:'结算卡查询',
												icon:'../../static/Allicon/Allicon22-1.png'
											},
											{
												name:'已领取结算卡绑定持..',
												icon:'../../static/Allicon/Allicon22-2.png'
											},
										],
									},
									{
										name:'子账簿',
										NameIcon:'../../static/Allicon/Allicon23.png',
										chlist:[
											{
												name:'子账簿查询',
												icon:'../../static/Allicon/Allicon23-1.png'
											},
											{
												name:'交易凭证和账单打印',
												icon:'../../static/Allicon/Allicon23-2.png'
											},
										],
									},
									{
										name:'凭证订购',
										NameIcon:'../../static/Allicon/Allicon24.png',
										chlist:[
											{
												name:'凭证订购',
												icon:'../../static/Allicon/Allicon24-1.png'
											},
											{
												name:'订单管理',
												icon:'../../static/Allicon/Allicon24-2.png'
											},
										],
									},
							]
					},
					{
						name:'转账业务',
						AllListContent:[
									{
										name:'转账',
										NameIcon:'../../static/Allicon/Allicon25.png',
										chlist:[
											{
												name:'单笔转账',
												icon:'../../static/Allicon/Allicon25-1.png'
											},
											{
												name:'慈善捐款',
												icon:'../../static/Allicon/Allicon25-2.png'
											},
										],
									},
									{
										name:'转账记录查询',
										NameIcon:'../../static/Allicon/Allicon26.png',
										chlist:[
											{
												name:'普通查询',
												icon:'../../static/Allicon/Allicon26-1.png'
											},
										],
									},
									{
										name:'预约取消/转账撤销',
										NameIcon:'../../static/Allicon/Allicon27.png',
										chlist:[
											{
												name:'单笔转账取消',
												icon:'../../static/Allicon/Allicon27-1.png'
											},
											{
												name:'批量转账取消',
												icon:'../../static/Allicon/Allicon27-2.png'
											},
										],
									},
									{
										name:'交银监管',
										NameIcon:'../../static/Allicon/Allicon28.png',
										chlist:[
											{
												name:'跨单位支付申请',
												icon:'../../static/Allicon/Allicon28-1.png'
											},
											{
												name:'监管单位初审',
												icon:'../../static/Allicon/Allicon28-2.png'
											},
											{
												name:'跨单位支付申请查询',
												icon:'../../static/Allicon/Allicon28-3.png'
											},
											{
												name:'银行代收付初审',
												icon:'../../static/Allicon/Allicon28-4.png'
											},
											{
												name:'银校通退款初审',
												icon:'../../static/Allicon/Allicon28-5.png'
											},
											{
												name:'慧校退款初审被监管.',
												icon:'../../static/Allicon/Allicon28-6.png'
											},
											{
												name:'慧校退款初审监管单位',
												icon:'../../static/Allicon/Allicon28-7.png'
											},
											{
												name:'交银惠养退款初审',
												icon:'../../static/Allicon/Allicon28-8.png'
											},
											{
												name:'银校通支付授权被监...',
												icon:'../../static/Allicon/Allicon28-9.png'
											},
											{
												name:'交银e监管支付初审',
												icon:'../../static/Allicon/Allicon28-10.png'
											},
											{
												name:'交银惠养退款初审',
												icon:'../../static/Allicon/Allicon28-11.png'
											},
											{
												name:'慧校自动划转初审',
												icon:'../../static/Allicon/Allicon28-12.png'
											},
											{
												name:'POS终端资金清分...',
												icon:'../../static/Allicon/Allicon28-13.png'
											},
										],
									},
									{
										name:'海关电子支付',
										NameIcon:'../../static/Allicon/Allicon29.png',
										chlist:[
											{
												name:'海关缴税',
												icon:'../../static/Allicon/Allicon29-1.png'
											},
										],
									},
							]
					},
					{
						name:'代发代扣',
						AllListContent:[
									{
										name:'代发业务',
										NameIcon:'../../static/Allicon/Allicon30.png',
										chlist:[
											{
												name:'代发薪资',
												icon:'../../static/Allicon/Allicon30-1.png'
											},
											{
												name:'代发其他',
												icon:'../../static/Allicon/Allicon30-2.png'
											},
											{
												name:'代发查询',
												icon:'../../static/Allicon/Allicon30-3.png'
											},
											{
												name:'密薪设置',
												icon:'../../static/Allicon/Allicon30-4.png'
											},
										],
									},
									{
										name:'批量开户',
										NameIcon:'../../static/Allicon/Allicon31.png',
										chlist:[
											{
												name:'员工信息采集',
												icon:'../../static/Allicon/Allicon31-1.png'
											},
											{
												name:'员工信息查询',
												icon:'../../static/Allicon/Allicon31-2.png'
											},
											{
												name:'开户查询提交',
												icon:'../../static/Allicon/Allicon31-3.png'
											},
										],
									},
								]
					},
					{
						name:'电票业务',
						AllListContent:[
									{
										name:'电票收付',
										NameIcon:'../../static/Allicon/Allicon32.png',
										chlist:[
											{
												name:'背书转让',
												icon:'../../static/Allicon/Allicon32-1.png'
											},
											{
												name:'批量背书转让',
												icon:'../../static/Allicon/Allicon32-2.png'
											},
										],
									},
									{
										name:'电票秒贴',
										NameIcon:'../../static/Allicon/Allicon33.png',
										chlist:[
											{
												name:'电票秒贴',
												icon:'../../static/Allicon/Allicon33-1.png'
											},
											{
												name:'历史付息记录查询',
												icon:'../../static/Allicon/Allicon33-2.png'
											},
											{
												name:'电子合同查询',
												icon:'../../static/Allicon/Allicon33-3.png'
											},
											{
												name:'申请书查询',
												icon:'../../static/Allicon/Allicon33-4.png'
											},
										],
									},
									{
										name:'电票撤回',
										NameIcon:'../../static/Allicon/Allicon34.png',
										chlist:[
											{
												name:'撤销票据',
												icon:'../../static/Allicon/Allicon34-1.png'
											},
											
										],
									},
									{
										name:'提示付款',
										NameIcon:'../../static/Allicon/Allicon35.png',
										chlist:[
											{
												name:'发起提示付款',
												icon:'../../static/Allicon/Allicon35-1.png'
											},
										],
									},
									{
										name:'票据综合查询及下载',
										NameIcon:'../../static/Allicon/Allicon36.png',
										chlist:[
											{
												name:'持有票据查询',
												icon:'../../static/Allicon/Allicon36-1.png'
											},
											{
												name:'交易明细查询',
												icon:'../../static/Allicon/Allicon36-2.png'
											},
										],
									},
									{
										name:'电子合同管理',
										NameIcon:'../../static/Allicon/Allicon37.png',
										chlist:[
											{
												name:'电子合同查询',
												icon:'../../static/Allicon/Allicon37-1.png'
											},
											{
												name:'申请书查询',
												icon:'../../static/Allicon/Allicon37-2.png'
											},
										],
									},
							]
					},
					{
						name:'投资理财',
						AllListContent:[
									{
										name:'理财产品',
										NameIcon:'../../static/Allicon/Allicon38.png',
										chlist:[
											{
												name:'购买理财产品',
												icon:'../../static/Allicon/Allicon38-1.png'
											},
											{
												name:'持有理财产品',
												icon:'../../static/Allicon/Allicon38-2.png'
											},
											{
												name:'理财合格投资者认证',
												icon:'../../static/Allicon/Allicon38-3.png'
											},
										],
									},
									{
										name:'定期/通知存款(离在岸)',
										NameIcon:'../../static/Allicon/Allicon39.png',
										chlist:[
											{
												name:'存入定期/通知',
												icon:'../../static/Allicon/Allicon39-1.png'
											},
											{
												name:'存款交易查询',
												icon:'../../static/Allicon/Allicon39-2.png'
											},
											{
												name:'定期账户开立申请',
												icon:'../../static/Allicon/Allicon39-3.png'
											},
											{
												name:'非结算账户查询',
												icon:'../../static/Allicon/Allicon39-4.png'
											},
										],
									},
									{
										name:'第三方存管',
										NameIcon:'../../static/Allicon/Allicon40.png',
										chlist:[
											{
												name:'银转证',
												icon:'../../static/Allicon/Allicon40-1.png'
											},
											{
												name:'证转银',
												icon:'../../static/Allicon/Allicon40-2.png'
											},
											{
												name:'证券账户余额查询',
												icon:'../../static/Allicon/Allicon40-3.png'
											},
											{
												name:'交易明细查询',
												icon:'../../static/Allicon/Allicon40-4.png'
											},
										],
									},
									// 没有图标
									{
										name:'结构性存款',
										NameIcon:'../../static/Allicon/Allicon41.png',
										chlist:[
											{
												name:'购买结构性存款',
												icon:'../../static/Allicon/Allicon41-1.png'
											},
											{
												name:'持有结构性存款',
												icon:'../../static/Allicon/Allicon41-2.png'
											},
										],
									},
									{
										name:'基金买卖',
										NameIcon:'../../static/Allicon/Allicon42.png',
										chlist:[
											{
												name:'买基金',
												icon:'../../static/Allicon/Allicon42-1.png'
											},
											{
												name:'基金查询',
												icon:'../../static/Allicon/Allicon42-2.png'
											},
										],
									},
									{
										name:'银期转账',
										NameIcon:'../../static/Allicon/Allicon43.png',
										chlist:[
											{
												name:'银转期',
												icon:'../../static/Allicon/Allicon43-1.png'
											},
											{
												name:'期转银',
												icon:'../../static/Allicon/Allicon43-2.png'
											},
											{
												name:'余额及明细查询',
												icon:'../../static/Allicon/Allicon43-3.png'
											},
										],
									},
									{
										name:'银衍转账',
										NameIcon:'../../static/Allicon/Allicon44.png',
										chlist:[
											{
												name:'银转衍',
												icon:'../../static/Allicon/Allicon44-1.png'
											},
											{
												name:'衍转银',
												icon:'../../static/Allicon/Allicon44-2.png'
											},
											{
												name:'余额及明细查询',
												icon:'../../static/Allicon/Allicon43-3.png'
											},
										],
									},
									{
										name:'银商转账',
										NameIcon:'../../static/Allicon/Allicon45.png',
										chlist:[
											{
												name:'银转市场',
												icon:'../../static/Allicon/Allicon45-1.png'
											},
											{
												name:'市场转银',
												icon:'../../static/Allicon/Allicon45-2.png'
											},
											{
												name:'余额及明细查询',
												icon:'../../static/Allicon/Allicon43-3.png'
											},

										],
									},
							]
					},
					{
						name:'国际业务',
						AllListContent:[
									{
										name:'汇款',
										NameIcon:'../../static/Allicon/Allicon46.png',
										chlist:[
											{
												name:'汇出汇款',
												icon:'../../static/Allicon/Allicon46-1.png'
											},
											{
												name:'汇出汇款维护',
												icon:'../../static/Allicon/Allicon46-2.png'
											},
											{
												name:'汇入汇款确认',
												icon:'../../static/Allicon/Allicon46-3.png'
											},
											{
												name:'单一窗口汇出汇款',
												icon:'../../static/Allicon/Allicon46-4.png'
											},
											{
												name:'单一窗口汇出汇款维护',
												icon:'../../static/Allicon/Allicon46-5.png'
											},
											{
												name:'汇款查询',
												icon:'../../static/Allicon/Allicon46-6.png'
											},
										],
									},
									{
										name:'结售汇',
										NameIcon:'../../static/Allicon/Allicon47.png',
										chlist:[
											{
												name:'即期交易',
												icon:'../../static/Allicon/Allicon47-1.png'
											},
											{
												name:'交易查询及维护',
												icon:'../../static/Allicon/Allicon47-2.png'
											},
											{
												name:'汇率查询',
												icon:'../../static/Allicon/Allicon47-3.png'
											},
										],
									},
									{
										name:'贸易外汇收支企业名录登记',
										NameIcon:'../../static/Allicon/Allicon48.png',
										chlist:[
											{
												name:'名录登记',
												icon:'../../static/Allicon/Allicon48-1.png'
											},
											{
												name:'名录登记信息修改',
												icon:'../../static/Allicon/Allicon48-2.png'
											},
										],
									},
							]
					},
					{
						name:'企业融资',
						AllListContent:[
									{
										name:'申请书管理',
										NameIcon:'../../static/Allicon/Allicon49.png',
										chlist:[
											{
												name:'借款申请书维护',
												icon:'../../static/Allicon/Allicon49-1.png'
											},
										],
									},
									{
										name:'一键测额',
										NameIcon:'../../static/Allicon/Allicon50.png',
										chlist:[
											{
												name:'一键测额',
												icon:'../../static/Allicon/Allicon50-1.png'
											},
										],
									},
									{
										name:'自助提款退汇',
										NameIcon:'../../static/Allicon/Allicon51.png',
										chlist:[
											{
												name:'自助提款退汇',
												icon:'../../static/Allicon/Allicon51-1.png'
											},
										],
									},
									{
										name:'无还本续贷',
										NameIcon:'../../static/Allicon/Allicon52.png',
										chlist:[
											{
												name:'无还本续贷',
												icon:'../../static/Allicon/Allicon52-1.png'
											},
										],
									},
									{
										name:'还款申请',
										NameIcon:'../../static/Allicon/Allicon53.png',
										chlist:[
											{
												name:'还款申请',
												icon:'../../static/Allicon/Allicon53-1.png'
											},
										],
									},
									{
										name:'保证金管理',
										NameIcon:'../../static/Allicon/Allicon54.png',
										chlist:[
											{
												name:'保证金查询',
												icon:'../../static/Allicon/Allicon54-1.png'
											},
											{
												name:'保证金存入',
												icon:'../../static/Allicon/Allicon54-2.png'
											},
											{
												name:'保证金续存',
												icon:'../../static/Allicon/Allicon54-3.png'
											},
											{
												name:'保证金转出',
												icon:'../../static/Allicon/Allicon54-4.png'
											},
										],
									},
									{
										name:'贷款查询',
										NameIcon:'../../static/Allicon/Allicon55.png',
										chlist:[
											{
												name:'电子合同查询',
												icon:'../../static/Allicon/Allicon55-1.png'
											},
											{
												name:'申请书查询',
												icon:'../../static/Allicon/Allicon55-2.png'
											},
											{
												name:'还款查询',
												icon:'../../static/Allicon/Allicon55-3.png'
											},
										],
									},
									{
										name:'小企业贷后资料上传',
										NameIcon:'../../static/Allicon/Allicon56.png',
										chlist:[
											{
												name:'调查配合上传',
												icon:'../../static/Allicon/Allicon56-1.png'
											},
										],
									},
									{
										name:'受托支付管理',
										NameIcon:'../../static/Allicon/Allicon57.png',
										chlist:[
											{
												name:'支付委托书维护',
												icon:'../../static/Allicon/Allicon57-1.png'
											},
											{
												name:'支付委托书更正',
												icon:'../../static/Allicon/Allicon57-2.png'
											},
											{
												name:'支付委托书查询',
												icon:'../../static/Allicon/Allicon57-3.png'
											},
										],
									},
							]
					},
					{
						name:'金融服务',
						AllListContent:[
									{
										name:'资信证明',
										NameIcon:'../../static/Allicon/Allicon58.png',
										chlist:[
											{
												name:'资信证明',
												icon:'../../static/Allicon/Allicon58-1.png'
											},
											
										],
									},
									{
										name:'信用报告查询',
										NameIcon:'../../static/Allicon/Allicon59.png',
										chlist:[
											{
												name:'信用报告查询',
												icon:'../../static/Allicon/Allicon59-1.png'
											},
										],
									},
									{
										name:'缴税通',
										NameIcon:'../../static/Allicon/Allicon60.png',
										chlist:[
											{
												name:'已申报缴税',
												icon:'../../static/Allicon/Allicon60-1.png'
											},
											{
												name:'雄安缴税',
												icon:'../../static/Allicon/Allicon60-2.png'
											},
											{
												name:'电子缴税凭证',
												icon:'../../static/Allicon/Allicon60-3.png'
											},
										],
									},
									{
										name:'非税缴费',
										NameIcon:'../../static/Allicon/Allicon61.png',
										chlist:[
											{
												name:'非税缴费录入',
												icon:'../../static/Allicon/Allicon61-1.png'
											},
										],
									},
									{
										name:'询证函',
										NameIcon:'../../static/Allicon/Allicon62.png',
										chlist:[
											{
												name:'询证函审核录入',
												icon:'../../static/Allicon/Allicon62-1.png'
											},
										],
									},
									{
										name:'本汇票',
										NameIcon:'../../static/Allicon/Allicon63.png',
										chlist:[
											{
												name:'本汇票签票申请',
												icon:'../../static/Allicon/Allicon63-1.png'
											},
											{
												name:'本汇票票据信息查询',
												icon:'../../static/Allicon/Allicon63-2.png'
											},
										],
									},
									{
										name:'票据状态查询',
										NameIcon:'../../static/Allicon/Allicon64.png',
										chlist:[
											{
												name:'本汇票查询',
												icon:'../../static/Allicon/Allicon64-1.png'
											},
											{
												name:'银行承兑汇票查询',
												icon:'../../static/Allicon/Allicon64-2.png'
											},
										],
									},
									{
										name:'我的优惠',
										NameIcon:'../../static/Allicon/Allicon65.png',
										chlist:[
											{
												name:'话费券查询',
												icon:'../../static/Allicon/Allicon65-1.png'
											},
										],
									},
							]
					},
					{
						name:'产业链服务',
						AllListContent:[
									{
										name:'应收账款(保理)',
										NameIcon:'../../static/Allicon/Allicon66.png',
										chlist:[
											{
												name:'应收账款管理',
												icon:'../../static/Allicon/Allicon66-1.png'
											},
											{
												name:'保理电子合同维护',
												icon:'../../static/Allicon/Allicon66-2.png'
											},
											{
												name:'保理电子合同查询',
												icon:'../../static/Allicon/Allicon66-3.png'
											},
											{
												name:'保理申请书查询',
												icon:'../../static/Allicon/Allicon66-4.png'
											},
											{
												name:'应收账款确认查询',
												icon:'../../static/Allicon/Allicon66-5.png'
											},
										],
									},
							]
					},
					{
						name:'电子商务',
						AllListContent:[
									{
										name:'银企付',
										NameIcon:'../../static/Allicon/Allicon67.png',
										chlist:[
											{
												name:'银企付签约查询及维护',
												icon:'../../static/Allicon/Allicon67-1.png'
											},
											{
												name:'银企付支付查询',
												icon:'../../static/Allicon/Allicon67-2.png'
											},
										],
									},
									{
										name:'便捷支付',
										NameIcon:'../../static/Allicon/Allicon68.png',
										chlist:[
											{
												name:'便捷支付查询',
												icon:'../../static/Allicon/Allicon68-1.png'
											},
										],
									},
									{
										name:'推单支付',
										NameIcon:'../../static/Allicon/Allicon69.png',
										chlist:[
											{
												name:'推单支付录入',
												icon:'../../static/Allicon/Allicon69-1.png'
											},
											{
												name:'推单支付查询',
												icon:'../../static/Allicon/Allicon69-2.png'
											},
										],
									},
							]
					},
					{
						name:'数字人民币',
						AllListContent:[
									{
										name:'数字人民币',
										NameIcon:'../../static/Allicon/Allicon70.png',
										chlist:[
											{
												name:'新客户设置',
												icon:'../../static/Allicon/Allicon70-1.png'
											},
										],
									},
							]
					},
					{
						name:'企业管家',
						AllListContent:[
									{
										name:'增值税发票服务',
										NameIcon:'../../static/Allicon/Allicon71.png',
										chlist:[
											{
												name:'电子发票开立',
												icon:'../../static/Allicon/Allicon71-1.png'
											},
											{
												name:'电子发票下载',
												icon:'../../static/Allicon/Allicon71-2.png'
											},
											{
												name:'纸质发票申请',
												icon:'../../static/Allicon/Allicon71-3.png'
											},
											{
												name:'纸质发票申请查询',
												icon:'../../static/Allicon/Allicon71-4.png'
											},
										],
									},
									{
										name:'材料上传',
										NameIcon:'../../static/Allicon/Allicon72.png',
										chlist:[
											{
												name:'辅助材料上传',
												icon:'../../static/Allicon/Allicon72-1.png'
											},
										],
									},
							]
					},
					{
						name:'增值服务',
						AllListContent:[
									{
										name:'网点信息',
										NameIcon:'../../static/Allicon/Allicon73.png',
										chlist:[
											{
												name:'网点查询',
												icon:'../../static/Allicon/Allicon73-1.png'
											},
										],
									},
									{
										name:'金融助手',
										NameIcon:'../../static/Allicon/Allicon74.png',
										chlist:[
											{
												name:'云上交行',
												icon:'../../static/Allicon/Allicon74-1.png'
											},
											{
												name:'电子营业执照',
												icon:'../../static/Allicon/Allicon74-2.png'
											},
											{
												name:'电子渠道签约',
												icon:'../../static/Allicon/Allicon74-3.png'
											},
											{
												name:'SWIFT信息查询',
												icon:'../../static/Allicon/Allicon74-4.png'
											},
											{
												name:'智慧记账',
												icon:'../../static/Allicon/Allicon74-5.png'
											},
											{
												name:'利率查询',
												icon:'../../static/Allicon/Allicon74-6.png'
											},	
											{
												name:'银企对账',
												icon:'../../static/Allicon/Allicon74-7.png'
											},
											{
												name:'线上抵押贷(个人版)',
												icon:'../../static/Allicon/Allicon74-8.png'
											},
										],
									},
									{
										name:'特色服务',
										NameIcon:'../../static/Allicon/Allicon75.png',
										chlist:[
											{
												name:'财务软件',
												icon:'../../static/Allicon/Allicon75-1.png'
											},
											{
												name:'法律咨询',
												icon:'../../static/Allicon/Allicon75-2.png'
											},
											{
												name:'出行服务',
												icon:'../../static/Allicon/Allicon75-3.png'
											},
											{
												name:'企业服务',
												icon:'../../static/Allicon/Allicon75-4.png'
											},
											{
												name:'酒店甄选',
												icon:'../../static/Allicon/Allicon75-5.png'
											},
										],
									}
							]
					},
					{
						name:'个人设置',
						AllListContent:[
									{
										name:'限额查询',
										NameIcon:'../../static/Allicon/Allicon76.png',
										chlist:[
											{
												name:'限额查询',
												icon:'../../static/Allicon/Allicon76-1.png'
											},
										],
									},
									{
										name:'安全中心',
										NameIcon:'../../static/Allicon/Allicon77.png',
										chlist:[
											{
												name:'渠道协议',
												icon:'../../static/Allicon/Allicon77-1.png'
											},
											{
												name:'隐私协议',
												icon:'../../static/Allicon/Allicon77-2.png'
											},
											{
												name:'人脸识别授权书',
												icon:'../../static/Allicon/Allicon77-3.png'
											},
											{
												name:'版本查询/更新',
												icon:'../../static/Allicon/Allicon77-4.png'
											},
											{
												name:'蓝牙key激活',
												icon:'../../static/Allicon/Allicon77-5.png'
											},
											{
												name:'证书更新',
												icon:'../../static/Allicon/Allicon77-6.png'
											},
											{
												name:'蓝牙Key解锁',
												icon:'../../static/Allicon/Allicon77-7.png'
											},
										],
									},
									{
										name:'他人收件箱维护',
										NameIcon:'../../static/Allicon/Allicon78.png',
										chlist:[
											{
												name:'他人收件箱维护',
												icon:'../../static/Allicon/Allicon78-1.png'
											},
										],
									},
									{
										name:'登录及个人信息管理',
										NameIcon:'../../static/Allicon/Allicon79.png',
										chlist:[
											{
												name:'密码管理',
												icon:'../../static/Allicon/Allicon79-1.png'
											},
											{
												name:'手机号及邮箱变更',
												icon:'../../static/Allicon/Allicon79-2.png'
											},
											{
												name:'用户名登录设置',
												icon:'../../static/Allicon/Allicon79-3.png'
											},
											{
												name:'手机号登录设置',
												icon:'../../static/Allicon/Allicon79-4.png'
											},
											{
												name:'多用户关联设置',
												icon:'../../static/Allicon/Allicon79-5.png'
											},
										],
									},
									{
										name:'常用收款人名册',
										NameIcon:'../../static/Allicon/Allicon80.png',
										chlist:[
											{
												name:'常用收款人名册',
												icon:'../../static/Allicon/Allicon80-1.png'
											},
										],
									},
									{
										name:'临柜维护申请',
										NameIcon:'../../static/Allicon/Allicon81.png',
										chlist:[
											{
												name:'维护电子渠道',
												icon:'../../static/Allicon/Allicon81-1.png'
											},
											{
												name:'申请查询',
												icon:'../../static/Allicon/Allicon81-2.png'
											},
										],
									},
							]
					}
				],
				
				
				
=======
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			};
		},
		onNavigationBarButtonTap(e) {
			console.log('自定义按钮被点击')
		},
<<<<<<< HEAD
		created() {
			
		},
=======
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
		components:{
			layoutList
		},
		methods:{
			btnListMore(){
				this.ListIsture = !this.ListIsture
			},
			  //tabs通知swiper切换
			tabsChange(index) {
				this.current = index;
			},
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			scrollToText(index) {
				console.log(index);
				this.$nextTick(function() {
					this.scrollTop = 98*index
				});
			}
		}
	}
</script>

<style lang="scss">
	.more{
		width: 100%;
		background-color: #f2f3f7;
		overflow: hidden;
		.TitleText{
			width:100%;
			height: 75rpx;
			background-color: #fff;
			.TitleTextBox{
				width: 90%;
				height: 100%;
				margin: 0 auto;
				display: flex;
				.MaxText{
					flex: 1;
					height: 100%;
					font-size: 35rpx;
					font-weight: bold;
					display: flex;
					align-items: center;
				}
				.MiniText{
					height: 100%;
					color: blueviolet;
					font-size: 25rpx;
					display: flex;
					align-items: center;
					font-weight: bold;
					font-family: '黑体';
				}
			}
			
		}
		.moreList{
			width: 100%;
			background-color: #fff;
			.layoutList{
				width: 95%;
				margin: 0 auto;
				font-size: 24rpx;
				
			}
			.listMore{
				width: 100%;
				height: 75rpx;
				font-size: 25rpx;
				border-top: 1px solid #e1e1e1;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.swiper{
			width: 100%;
			height: 92vh;
			// border: 1px solid;
			font-size: 28rpx;
			.swiper-item{
				width: 100%;
				height: 100%;
				// border: 1px solid;
				display: flex;
				.swiper-title{
					width: 25%;
					height: 100%;
					.title-box{
						width: 100%;
						height: 8%;
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;
					}
					.title-box:hover{
						background-color: #fff;
						border:none;
						color: #405fff;
					}
				}
				.swiper-title-box{
					flex: 1;
					height: 100%;
					background-color: #fff;
					.scroll-view{
						width: 100%;
						height: 100%;
						.scroll-view-box{
<<<<<<< HEAD
							margin: 40rpx auto;
							display: flex;
							flex-wrap: wrap;
							align-items: center;
							// margin-left: 10rpx;
							.scroll-view-itle{
								width: 100%;
								margin: 0 auto;
								border-bottom: 1px solid #ccc;
								display: flex;
								align-items: center;	
								padding: 10rpx;
								font-size: 28rpx;
								font-weight: bold;
								font-family: '黑体';
								image{
									width:45rpx;
									height: 45rpx;
=======
							width: 100%;
							margin: 40rpx auto;
							.scroll-view-itle{
								width: 90%;
								margin: 0 auto;
								border-bottom: 1px solid #ccc;
								display: flex;
								align-items: center;
								padding: 10rpx;
								font-size: 28rpx;
								font-weight: bold;
								// border: 1px solid;
								font-family: '黑体';
								image{
									width:40rpx;
									height: 40rpx;
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
									margin: 0 15rpx;
								}
							}
							.scroll-view-text{
<<<<<<< HEAD
								display: flex;
								font-size: 28rpx;
								font-family: '黑体';
								width: 33%;
								margin: 20rpx 0;
								align-items: center;
								.scroll-view-text-box{
									display: flex;
									flex-wrap: wrap;
									align-items: center;
									padding: 0 30rpx;
									text-align: center;
=======
								width: 100%;
								margin: 0 30rpx;
								display: flex;
								flex-wrap: wrap;
								align-items: center;
								font-size: 28rpx;
								font-family: '黑体';
								.scroll-view-text-box{
									width: 33%;
									// border: 1px solid;
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
									.scroll-view-text-box-image{
										width: 100%;
										display: flex;
										justify-content: center;
<<<<<<< HEAD
										align-items: center;
										image{
												width: 50rpx;
												height: 50rpx;
											}
									}
									.scroll-view-text-box-text{
										width: 100%;
										height: 50rpx;
										display: flex;
										justify-content: center;
										align-items: center;
										font-size: 24rpx;
										margin-top: 5rpx;
									}
								}
=======
										margin: 10rpx auto;
										image{
											width: 50rpx;
											height: 50rpx;
										}
									}
									.scroll-view-text-box-text{
										width: 100%;
										font-size: 20rpx;
										margin: 10rpx auto;
										display: flex;
										justify-content: center;
									}
								}
								
>>>>>>> 55b46b4b74daf86d01e862d1951a0c956191f667
							}
						}
					}
				}
			}
		}
	}
</style>
