<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <PostList :posts="posts"  />
    <button @click="posts.pop()">DeletePost</button>
  </div>
</template>

<script>

import PostList from '../components/PostList.vue';
import GetPosts from '../composables/GetPosts.js';
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
    components: { PostList }
}
</script>


<style scoped>

</style>