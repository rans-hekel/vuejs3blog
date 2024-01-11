import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      let response = await fetch(`http://localhost:3000/posts/${id}`);
      if (!response.ok) {
        throw Error("Not Found");
      }
      post.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};

export default getPost;
