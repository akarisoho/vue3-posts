<template>
  <div>
    <h2>게시글 수정</h2>
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
        <button
          type="button"
          class="btn btn-outline-danger me-2"
          @click="goDetailPage"
        >
          취소
        </button>
        <button type="button" class="btn btn-primary" @click="goListPage">
          수정
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    //vue의 내장객체 라우터 가져오기
    const router = useRouter(); 
    
    // @/router/index.js의 routes 객체 가져오기
    const route = useRoute();
    const id = route.params.id;

    const goDetailPage = () => {
      router.push({ name: "PostDetail", params: { id } });
    };
    const goListPage = () => router.push({ name: "PostList" });

    return {
      goDetailPage,
      goListPage,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>