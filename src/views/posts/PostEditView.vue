<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <form @submit.prevent="edit">
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
          class="btn btn-outline-danger me-2"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { getPostById, updatePost } from "@/api/posts";

export default {
  props: {
    id: Number,
  },
  setup(props) {
    //vue의 내장객체 라우터(페이지) 가져오기
    const router = useRouter();

    // @/router/index.js(라우터 페이지 정보)의 routes 객체 가져오기
    const route = useRoute();
    const id = route.params.id;

    const form = ref({
      title: null,
      content: null,
    });

    const fetchPost = async () => {
      try {
        const { data } = await getPostById(id); // 페이지의 아이디값 가져오기
        // const { data } = await getPostById(props.id); //props로 id값 가져오기 -> error
        setForm(data);
      } catch (error) {
        console.error(error);
      }
    };

    const setForm = ({ title, content }) => {
      form.value.title = title;
      form.value.content = content;
    };

    const edit = async () => {
      try {
        await updatePost(id, { ...form.value });
        router.push({ name: "PostDetail", params: { id } });
      } catch (error) {
        console.error(error);
      }
    };
    const goDetailPage = () => {
      router.push({ name: "PostDetail", params: { id } });
    };

    onMounted(() => {
      fetchPost();
    });

    return {
      form,
      fetchPost,
      edit,
      goDetailPage,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>