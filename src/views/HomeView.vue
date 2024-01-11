<template>
     <!-- Page Header-->
     <header class="masthead" :style="gambarSaya">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>Clean Blog</h1>
                            <span class="subheading">A Blog Theme by Start Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Main Content-->
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <!-- Post preview-->
                    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"  />
    </div>
    <div v-else>
      <Loading />
    </div>
                    <!-- Divider-->
                    <hr class="my-4" />
                </div>
            </div>
        </div>
</template>

<script>

import PostList from '../components/posts/PostList.vue';
import GetPosts from '../composable/GetPosts.js';
import Loading from '@/components/Loading.vue';
import homeBg from '../../public/img/home-bg.jpg';
export default {
    name: 'HomeView',
    setup() {
       const { posts, error, load } = GetPosts();
        
        load();
      const gambarSaya = { backgroundImage: `url(${homeBg})` };
        return {
            posts,
            error,
            gambarSaya
        };
    },
    components: { PostList, Loading },
    mounted() {
      console.log($('.para').text());
    }
}
</script>


<style scoped>

</style>