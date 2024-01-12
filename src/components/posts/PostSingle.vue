<template>
    <router-link :to="{ name: 'showPost', params: { id: post.id } }">

        <h2 class="post-title">{{ post.title }}</h2>
            <h3 class="post-subtitle">{{ snippet }}</h3>
        </router-link>
        <span class="post-meta" v-for="tag in post.tags" :key="tag"><router-link :to="{ name: 'showTag', params: { tag: tag } }" >#{{ tag }}{{ ' ' }}  </router-link>  </span>
</template>

<script>
import router from '@/router';
import { computed } from 'vue';

export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0, 20) + '...';
        });
        return { snippet };
    },
    components: { router }
}
</script>

<style scoped>

</style>