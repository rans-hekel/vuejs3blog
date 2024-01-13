<template>
    <div>
 
        <!-- Page Header-->
        <header class="masthead" :style="gambarCreate">
          <div class="container position-relative px-4 px-lg-5">
              <div class="row gx-4 gx-lg-5 justify-content-center">
                  <div class="col-md-10 col-lg-8 col-xl-7">
                      <div class="page-heading">
                          <h1>Create New Post</h1>
                          <span class="subheading">You Got Inspired? Create Your Own.</span>
                      </div>
                  </div>
              </div>
          </div>
      </header>
      <!-- Main Content-->
      <main class="mb-4">
          <div class="container px-4 px-lg-5">
              <div class="row gx-4 gx-lg-5 justify-content-center">
                  <div class="col-md-10 col-lg-8 col-xl-7">
                      <blockquote>A great writer can be inspired by small things</blockquote>
                      <div class="my-5">
                          <form @submit.prevent="handleSubmit">
                              <div class="form-floating">
                                  <input class="form-control" v-model="title" type="text" placeholder="Enter Title..." />
                                  <label for="name">Title</label>
                              </div>
                              <div class="form-floating">
                                  <textarea v-model="body" class="form-control" placeholder="Enter your Posts..." style="height: 12rem"></textarea>
                                  <label for="message">Body</label>
                              </div>
                              <div class="form-floating">
                                  <input class="form-control" v-model="tag" @keydown.prevent.enter="handleKeydown"  type="text" placeholder="Enter Tags..." />
                                  <label for="name">Tags</label>
                                  <span v-for="tag in tags" key="tag">
                                      #{{ tag }}
                                  </span>
                              </div>
                              <br />
                              <button class="btn btn-primary text-uppercase" type="submit">Send</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </main>
    </div>
</template>


<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import gambarbuat from '@/assets/img/contact-bg.jpg';
import { db } from '@/firebase/config';

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
            const res = await db.collection('posts').add(post);




            router.push({ name: 'home' })
        }
        const handleKeydown = () => {
            if(!tags.value.includes(tag.value)){
                tag.value =  tag.value.replace(/\s/g, '');
                tags.value.push(tag.value);
            }
            tag.value = '';
        }
        const gambarCreate = { backgroundImage: `url(${gambarbuat})` };
        return { title, body,tag, tags, handleKeydown, handleSubmit,gambarCreate };

    }
}
</script>


<style scoped> 

</style>