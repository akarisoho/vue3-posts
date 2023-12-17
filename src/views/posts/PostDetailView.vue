<template>
  <div>
    <h2>{{ `제목` }}</h2>
    <p>{{ `내용` }}</p>
    <p class="text-muted">2022-11-11</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-secondary">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-secondary">다음글</button>
      </div>

      <div class="col-auto me-auto"></div>

      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-primary" @click="goEditPage">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-danger">삭제</button>
      </div>
    </div>
    <!-- <h2>게시글 상세</h2>
    <hr class="my-4" />
    <p>{{ $route.params }}</p>
    <p>{{ $route.query.searchText }}</p>
    !--👆 http://localhost:5173/posts/dododo?searchText=Vue3 --
    <p>{{ $route.hash }}</p>
    !--👆 http://localhost:5173/posts/dododo#hashVal -- -->
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    //vue의 내장객체 라우터 인스턴스 접근: 상태나 메소드 접근 가능
    const router = useRouter(); 
    
    // 현재 활성화 된 라우트(@/router/index.js)의 정보(매개변수, 쿼리 등)에 접근 - 라우트 정보를 통해 동적인 컴포넌트 랜더링이나 조건부 랜더링 가능
    const route = useRoute();
    const id = route.params.id;

    const goListPage = () => router.push({ name: "PostList" });
    const goEditPage = () => router.push({ name: "PostEdit", params: { id } });
    return {
      goListPage,
      goEditPage,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>