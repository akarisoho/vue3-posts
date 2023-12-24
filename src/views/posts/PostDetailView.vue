<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
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
        <button class="btn btn-danger" @click="remove">삭제</button>
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
import { deletePost, getPostById } from "@/api/posts";
import { ref, onMounted } from "vue";

export default {
  props: {
    id: Number,
  },
  setup(props) {
    //vue의 내장객체 라우터 인스턴스 접근: 페이지 접근
    const router = useRouter();

    // 현재 활성화 된 라우트(@/router/index.js) 페이지의 정보(매개변수, 쿼리 등)에 접근 - 라우트 정보를 통해 동적인 컴포넌트 랜더링이나 조건부 랜더링 가능
    // const id = route.params.id;

    // const form = ref({});
    // const fetchPost = () => {
    //   const data = getPostById(props.id);
    //   form.value = { ...data };
    // };
    /* reactive를 사용할 경우
    import { reactive, toRefs } from 'vue';

    const app = {
      setup() {
        // reactive를 사용하여 객체를 생성
        const form = reactive({
          // 초기값 설정
        });

        // ID에 해당하는 데이터 가져오기
        const fetchPost = () => {
          const data = getPostById(id);

          // 객체의 속성을 업데이트
          Object.assign(form, data);
        };

        // toRefs를 사용하여 form 객체를 ref 형태로 반환
        return {
          ...toRefs(form),
          fetchPost,
        };
      },
    };

    **장점: 
      - 직관성 향상
        : reactive를 사용하면 객체의 모든 속성이 반응성을 가지기 때문에, 객체 내부의 어떤 속성이 변경되었는지 추적하기 쉽습니다.
      - 간결한 코드
        : reactive를 사용하면 form.value가 아닌 직접적으로 form 객체에 접근할 수 있으므로 코드가 더 간결해집니다.

    **단점:
      - 초기화 필요
        : reactive 객체를 사용할 때 초기값을 명시적으로 설정해야 합니다. ref는 초기값을 지정하지 않아도 빈 객체를 생성할 수 있습니다.
      - 객체 비구조화 어려움
        : ref를 사용하면 비구조화 할당을 통해 객체의 일부 속성에 직접적으로 접근할 수 있지만, reactive를 사용할 경우 toRefs를 통해 ref로 변환해야 하므로 코드가 다소 복잡해질 수 있습니다.
    */
    const post = ref({
      title: null,
      content: null,
      createdAt: null,
    });

    const fetchPost = async () => {
      try {
        const { data } = await getPostById(props.id);
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };

    const setPost = ({ title, content, createdAt }) => {
      post.value.title = title;
      post.value.content = content;
      post.value.createdAt = createdAt;
    };

    const goListPage = () => router.push({ name: "PostList" });
    const goEditPage = () => {
      router.push({ name: "PostEdit", params: { id: props.id } });
    };
    const remove = async () => {
      try {
        if (confirm('삭제하시겠습니까?') === false) {
          return;
        }
        await deletePost(props.id);
        router.push({name:'PostList'});
      } catch (error) {
        console.error(errpr);
      }
    };
    onMounted(() => {
      fetchPost();
    });
    return {
      // form,
      post,
      fetchPost,
      goListPage,
      goEditPage,
      remove,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>