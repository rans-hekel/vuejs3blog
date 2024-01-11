<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"  />
      <button @click="posts.pop()">DeletePost</button>
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>

import PostList from '../components/PostList.vue';
import GetPosts from '../composable/GetPosts.js';
import Loading from '@/components/Loading.vue';
export default {
    name: 'HomeView',
    components: {
        PostList
    },
    setup() {
       const { posts, error, load } = GetPosts();
        
        load();

        return {
            posts,
            error
        };
    },
    components: { PostList, Loading }
}
</script>


<style scoped>

</style>