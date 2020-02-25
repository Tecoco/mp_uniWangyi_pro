<template>
	<view class="header-search-login">
		<image class="logo" src="../../static/images/logo.png"></image>
		<view class="search-input">
			<i class='iconfont icon-sousuo'></i>
			<input type="text" placeholder="搜索商品" placeholder-class="placeholder" />
		</view>
		<button class="btn-login">登录</button>
	</view>
</template>

<script>
</script>

<style lang="stylus">
	.header-search-login
		display flex
		width 100%
		height 60upx
		padding 10upx 0
		.logo
			width 140upx
			height 40upx
			margin 10upx 30upx
		.search-input
			width 440upx
			height 60upx
			background #ededed
			position relative
			border-radius 10upx
			.iconfont
				position absolute
				left 10upx 
				top 25%
				font-size 30upx
			input
				border-radius 10upx
				height 60upx
				width 390upx
				margin-left 50upx
			.placeholder
				font-size 24upx
				color #666
		.btn-login
			width 124upx
			height 60upx
			color #D43C33
			line-height 56upx
			text-align center
			font-size 24upx
			margin 0 20upx
			
			
</style>
