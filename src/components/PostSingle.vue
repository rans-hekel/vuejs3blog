<template>
    <div>
        <h3>{{ post.title }} </h3>
        <p>{{ snippet }}</p>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0, 20) + '...';
        }) 
        return { snippet }
    }
}
</script>

<style scoped>

</style>