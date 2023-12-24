<template>
  <AppCard>
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ content }}</p>
      <p class="text-muted">{{ createdAt }}</p>
  </AppCard>
</template>

<script>
import AppCard from "@/components/AppCard.vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    createdAt: {
      type: [String, Date, Number],
    },
  },
  components: {
    AppCard,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>