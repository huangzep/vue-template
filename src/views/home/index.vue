<template>
	<div class="home" @click="cc">
		hello world
		<img :src="pimg()" alt="">
		<scroll>
			<div class="">dffffffffff</div>
		</scroll>
	</div>
</template>

<script>
	import Scroll from 'components/scroll/scroll'
	
	export default {
		data: () => ({
			
		}),
    computed: {
     
    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
		methods: {
			cc() {
				this.$vux.toast.text('hello')				
			}
		},
		components: {
			Scroll
		}
	}
</script>

<style scoped lang="scss"> 
 @import "~common/scss/mixin.scss";
 .home {
 	@include change-color(red);
 	background: url(~common/imgs/09.jpg);
 }
</style>