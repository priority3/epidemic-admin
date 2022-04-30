<template>
	<div class="container"></div>
</template>

<script setup>
import SingIn from './components/signin.vue'
import Register from './components/register.vue'
// 做切换
const boxPanel = reactive([
	{
		name: 'SingIn'
	},
	{
		name: 'Register'
	}
])

const curPanel = boxPanel[0].name
console.log(curPanel)
</script>

<style lang="scss" scoped>
.container {
	height: 100vh;
	widows: 100vw;
	background-image: url(@/assets/login-bgc.png);
	background-position: 100%;
	background-repeat: no-repeat;
	// background-size: auto 100%;
}
</style>
