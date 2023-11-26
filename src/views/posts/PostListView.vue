<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div class="col-4 pointer" v-for="post in posts" :key="post.id">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        ></PostItem>
      </div>
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/posts/PostItem.vue";
import { getPosts } from "@/api/posts";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    PostItem,
  },
  setup() {
    const router = useRouter();
    const posts = ref([]);
    const fetchPosts = () => {
      posts.value = getPosts();
    };
    const goPage = (id) => {
      // router.push(`/posts/${id}`);
      router.push({
        name: 'PostDetail',
        params:{
          id,
        },
        query:{
          searchText: 'hello',
        },
        hash: '#wrold!',
      });
    };
    onMounted(() => {
      fetchPosts();
      console.log("데이터가 미운트 되었습니다.");
    });
    return {
      posts,
      goPage,
    };
  },
};
</script>

<style scoped>
.pointer{
  cursor: pointer;
}
</style>