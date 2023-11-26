<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <form>
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input type="text" class="form-control" id="title" />
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">내용</label>
        <textarea class="form-control" id="contents" rows="10"></textarea>
      </div>
      <div class="pt-2">
        <button type="button" class="btn btn-outline-dark me-2" @click="goListPage">목록</button>
        <button type="button" class="btn btn-primary" @click="goListPage">저장</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter(); 
    const goListPage = () => router.push({ name: "PostList" });

    return {
      goListPage,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>