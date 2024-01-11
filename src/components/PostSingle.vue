<template>
    <div>
        <router-link :to="{ name: 'showPost', params: { id: post.id } }">
            <h3>{{ post.title }} </h3>
        </router-link>
        <p>{{ snippet }}</p>
        <p>Tags : <span v-for="tag in post.tags" :key="tag">#{{ tag }} </span> </p>
    </div>
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