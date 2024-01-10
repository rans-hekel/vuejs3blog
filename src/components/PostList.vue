<template>
<div class="post-list">
    <div v-for="post in posts" :key="post.id">
        <PostSingle :post="post" />
    </div>
</div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import PostSingle from './PostSingle.vue';
export default {
    
    props: ['posts'],
    components: { PostSingle },
    setup(props) {
        onMounted(() => {
            console.log('component onMounted');
        })
        onUnmounted(() => {
            console.log('component onUnmounted');
        })
        onUpdated(() => {
            console.log('component onUpdated');
        })
    }
}
</script>

<style scoped>

</style>