<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          id="title"
        />
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">내용</label>
        <textarea
          v-model="form.content"
          class="form-control"
          id="contents"
          rows="10"
        ></textarea>
      </div>
      <div class="pt-2">
        <button
          type="button"
          class="btn btn-outline-dark me-2"
          @click="goListPage"
        >
          목록
        </button>
        <button type="submit" class="btn btn-primary">
          저장
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createPost } from "@/api/posts";

export default {
  setup() {
    const router = useRouter();

    const form = ref({
      title: null,
      content: null,
    });

    const goListPage = () => router.push({ name: "PostList" });
    const save = () => {
      try {
        createPost({
          ...form.value,
          createdAt: Date.now(),
        });
        router.push({ name: "PostList" });
      } catch (error) {
        console.error(error);
      }
    };

    return {
      form,

      goListPage,
      save,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>