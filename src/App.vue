<template>
	<TheHeader></TheHeader>
	<TheView></TheView>
</template>
<script>
import TheHeader from '@/layouts/TheHeader.vue';
import TheView from '@/layouts/TheView.vue';

export default {
	components: {
		TheHeader,
		TheView,
	},
	setup() {
		return {};
	},
};
</script>
<style scoped></style>
