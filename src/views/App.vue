<template>
	<div id="app">
		<keep-alive>
      <router-view v-if="$route.meta.keepAlive">
          <!-- 这里是会被缓存的视图组件，比如 Home！ -->
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
        <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
    </router-view>
	</div>
</template>

<script>
	
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
			
		},
		components: {
		
		}
	}
</script>

<style scoped lang="scss">
 
</style>