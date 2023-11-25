<template>
	<div>
		<h2>Home View</h2>
		<p>{{ $route.path }}</p>
		<p>{{ $route.name }}</p>
		<button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
	</div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
	setup() {
		const router = useRouter();
		const goAboutPage = () => {
			router.push('/about');
		};
		return {
			goAboutPage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
