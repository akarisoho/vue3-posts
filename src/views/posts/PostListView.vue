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
    <hr class="my-4" />
    <AppCard>
      <PostDetailView :id="1"></PostDetailView>
    </AppCard>
  </div>
</template>

<script>
import PostItem from "@/components/posts/PostItem.vue";
import AppCard from "@/components/AppCard.vue";
import PostDetailView from "@/views/posts/PostDetailView.vue";
import { getPosts } from "@/api/posts";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    AppCard,
    PostItem,
    PostDetailView,
  },
  setup() {
    const router = useRouter();
    const posts = ref([]);
    // const fetchPosts = () => {
    //   // posts.value = getPosts();
    //   // const response = getPosts();
    //   getPosts()
    //     .then((response) => {   // (1)await을 사용하면 then으로 받은것과 같음
    //       console.log("response", response);
    //     })
    //     .catch((error) => {
    //       console.log("error", error);
    //     });
    // };

    // (2) await을 사용하려면 async를 사용해야 함
    const fetchPosts = async () => {
      // const response = await getPosts();
      // console.dir(response); 객체의 속성과 값 조회시 dir을 사용하면 편함

      // const {data}는 getPosts()의 객체 중 구조분해할당으로 data속성만 가져오기 위함
      try {
        const { data } = await getPosts();
        posts.value = data;
        //위 두 줄을 아래와 같이 사용할 수 있음
        // ({ data: posts.value } = await getPosts());
      } catch (error) {
        console.error(error);
      }
    };
    const goPage = (id) => {
      // router.push(`/posts/${id}`);
      router.push({
        name: "PostDetail",
        params: {
          id,
        },
        // 참고: query 또는 hash 속성으로도 이동 가능
        // query:{
        //   searchText: 'hello',
        // },
        // hash: '#wrold!',
      });
    };
    onMounted(() => {
      fetchPosts();
    });
    return {
      posts,
      goPage,
    };
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>