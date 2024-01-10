<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts"  />
    <button @click="showPosts = !showPosts">UnMounted</button>
    <button @click="posts.pop()">DeletePost</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import PostList from '../components/PostList.vue';

export default {
    name: 'HomeView',
    components: {
        PostList
    },
    setup() {
        const posts = ref([
            {
                id: 1,
                title: 'My journey with Vue',
                body: 'Vue is a great framework to learn'
            },
            {
                id: 2,
                title: 'My journey with React',
                body: 'React is a great framework to learn'
            },
            {
                id: 3,
                title: 'My journey with Angular',
                body: 'Angular is a great framework to learn'
            }
        ]);

        const showPosts = ref(true);


        return {
            posts,
            showPosts
        };
    },
    components: { PostList }
}
</script>


<style scoped>

</style>