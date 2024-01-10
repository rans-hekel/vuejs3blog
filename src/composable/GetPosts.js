import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      if (!response.ok) {
        throw Error("data Tidak Ada");
      }
      posts.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, load };
};

export default getPosts;
