<template>
	<div id="indexWrap">
		<!-- 头部区域 -->
		<div class="header-wrap">
			<!-- 头部的搜索、登录 -->
			<IndexHeader />
			<!-- 导航栏 -->
			<view class="nav-list">
				<scroll-view scroll-x="true">
					<view @click="changeNavIndex(0)" class="nav-item" :class="{active: 0 === navIndex}"><text>推荐</text></view>
					<view @click="changeNavIndex(index+1)" class="nav-item" v-for="(navItem, index) in navList" :key="index" :class="{active: (index+1) === navIndex}"><text>{{navItem.text}}</text></view>
				</scroll-view>
			</view>
		</div>
		<!-- 内容区域 -->
		<div class="content-wrap">
			<!-- 轮播图 -->
			<swiper class="swiper" indicator-dots :indicator-active-color="'#D43C33'" autoplay circular>
				<swiper-item v-for="(item, index) in focusList" :key="index">
					<image :src="item.picUrl"></image>
				</swiper-item>
			</swiper>
			<!-- 服务政策 -->
			<div class='service-policy'>
				<div class='policy-item' v-for='(item, index) in policyDescList' :key='index'>
					<img :src="item.icon" alt="">
					<span>{{item.desc}}</span>
				</div>
			</div>
			<!-- 商品列表导航 -->
			<div class="shopList-nav">
				 <ul>
					<li v-for="(kingKongItem, index) in navList" :key="index">
						<img :src="kingKongItem.picUrl" alt="">
						<span>{{kingKongItem.text}}</span>
					</li>
				 </ul>
			</div>
			<!-- 促销模块 -->
			<div class="promotion-module">
			  <div class="floor-top">
				<img src="https://yanxuan.nosdn.127.net/0b3485a20e21d26f419147d0b6341528.gif?imageView&quality=75" alt="">
			  </div>
			  <div class="floor-first">
				<img src="https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75" alt="">
			  </div>
			  <div class="floor-list">
				<ul>
				  <li><img src="https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
				  <li><img src="https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
				  <li><img src="https://yanxuan.nosdn.127.net/83b35324b02e31aa202a12971fa7f8c3.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
				  <li><img src="https://yanxuan.nosdn.127.net/2c98b2002572ec4cd0824bc810d7d31f.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
				</ul>
			  </div>
			</div>

		</div>
		
	</div>
</template>

<script>
	import { request } from '../../utils/request.js';
	import IndexHeader from '../../components/indexHeader/indexHeader.vue';
	export default {
		components: { //注册组件
			IndexHeader
		},
		data() {
			return {
				navList: [], //初始化导航栏的数据
				focusList: [], //轮播图
				policyDescList: [], //服务政策
				kingKongList: [], //商品列表导航
				navIndex: 0, //标识导航下标值
			}
		},
		async mounted(){
			let result = await request('/getIndex');
			const {kingKongModule, focusList, policyDescList, categoryModule} = result.data;
			this.navList = kingKongModule.kingKongList;
			this.focusList = focusList;
			this.policyDescList = policyDescList;
			
		},
		onLoad() {

		},
		methods: {
			//导航栏高亮显示
			changeNavIndex(index){
				this.navIndex = index;
			}
		}
	}
</script>

<style lang="stylus">
	#indexWrap
		width 100%
		height 100%
		//头部区域
		.header-wrap
			width 100%
			position fixed
			left 0
			top 0
			z-index 99
			background-color #fff
			// 导航栏
			.nav-list
				width 100%
				height 80upx
				border-bottom 1upx solid #eee
				white-space nowrap
				.nav-item
					width 140upx
					height 100%
					margin 0 10upx
					display inline-block 
					line-height 80upx
					text-align center
					font-size 28upx
					position relative
					&.active
						color #D43C33
						text
							&::after
								content ''
								display block
								position absolute
								left 0
								bottom 0
								width 100%
								height 4upx
								background-color #D43C33
		//内容区域
		.content-wrap
			width 100%
			margin-top 164upx
			//轮播图
			.swiper
				width 100%
				height 370upx
				swiper-item
					>image
						width 100%
						height 100%
			//服务政策
			.service-policy
				width 100%
				display flex
				.policy-item
					flex 1
					text-align center
					img 
						width 32upx
						height 32upx
						vertical-align middle
						margin-right 6upx
					span 	
						font-size 24upx
						vertical-align middle
			//商品列表导航
			.shopList-nav
				width 100%
				height 340upx
				padding-bottom 32upx
				background-color #fff
				>ul
					width 100%
					height 100%
					>li
						margin 10upx 0
						display flex
						flex-direction column
						align-items center
						width 20%
						height 156upx
						float left
						>img 
							width 110upx
							height 110upx
							border-radius 30upx
						span 
							margin-top 10upx
							font-size 24upx
			//促销模块
			.promotion-module
				width 100%
				background-color #fff
				.floor-top
				    position relative
				    img 
						width 100% 
						height 240upx
				.floor-first
					img
						width 100%
						height 160upx
				.floor-first, .floor-list
					padding 0 20upx
					background-color #67a560
				.floor-list
					width 100%
					overflow hidden
					padding-bottom 20upx
					ul
						width 100%
						li
							width 350upx
							height 186upx
							margin-top 10upx
							float left
							img
								width 100%  
								height 100%
							&:nth-child(2n+1)
								margin-right 10upx
					
							
						
					
				     
				       

				

				
			
				
			
					
		
</style>
