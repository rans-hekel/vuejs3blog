<template>
  <div class="home">
    <input type="text" v-model="search">
     <div v-for="(name, index) in resultSearch" key="index">
      <p>Hello {{ name }}</p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';


export default {
  name: 'HomeView',
  setup() {
    const search = ref('')
    const names = ref(['John', 'Jane', 'Joe', 'Jill', 'Jack', 'Judy', 'Jude', 'Jenna', 'Jenifer', 'Jen', 'Jenin']) ;
    const resultSearch = computed(() => {
      return names.value.filter(name => name.toLowerCase().includes(search.value.toLowerCase()))
    })

    return {
      names,
      search,
      resultSearch
    }

  }
}
</script>


<style scoped>

</style>