<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="">Title</label>
                <input type="text" v-model="title">
            </div>
            <div>
                <label for="">Body</label>
                <textarea cols="30" rows="10" v-model="body"></textarea>
            </div>
            <div>
                <label for="">Tags</label>
                <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown" />
            </div>
            <button type="submit">Create!</button>
        </form>
        <div v-for="tag in tags" key="tag">
            #{{ tag }}
        </div>
        <h4> {{ title }}</h4>
         <p>{{ body }}</p>
    </div>
</template>


<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup(){
        const router = useRouter();
        const title = ref('');
        const body = ref('');
        const tag = ref('');
        const tags = ref([]);

        const handleSubmit = async () => {
            const post = {
                title: title.value,
                body: body.value,
                tags: tags.value
            }
            await fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(post)
            })
            router.push({ name: 'home' })
        }
        const handleKeydown = () => {
            if(!tags.value.includes(tag.value)){
                tag.value =  tag.value.replace(/\s/g, '');
                tags.value.push(tag.value);
            }
            tag.value = '';
        }

        return { title, body,tag, tags, handleKeydown, handleSubmit };

    }
}
</script>


<style scoped> 

</style>