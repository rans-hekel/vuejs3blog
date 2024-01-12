<template>
    <div v-if="error">{{ error }}</div> 
    <div v-if="post">
        
  
      <!-- Page Header-->
      <header class="masthead" :style="gambarAku">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{{ post.title }}</h1>
                         <span class="meta-post" v-for="tag in post.tags" :key="tag">#{{ tag }}{{ ' ' }} </span> 
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Post Content-->
        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>{{ post.body }}</p>
                           
                    </div>
                </div>
            </div>
        </article>
        <hr>

    </div>
    <div v-else>
        <Loading />
    </div>
</template>

<script>
import getPost from '@/composable/getPost';
import Loading from '@/components/Loading.vue'
import PostGambar from "@/assets/img/post-bg.jpg";
export default {
    props: ['id'],
    setup(props) {
        const { post, error, load } = getPost(props.id);

        load()
        const gambarAku = { backgroundImage: `url(${PostGambar})` };

        return { post, error,gambarAku }
    },
    components: { Loading }
}
</script>

<style scoped>

</style>