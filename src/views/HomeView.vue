<template>
  <div class="home">
    <h2>ref</h2>
    <p>halo nama saya {{ contactOne.name }} umur saya {{ contactOne.umur }} </p>
    <button @click="handleClick1">Click!</button><br>
    <button @click="umur++">tambah umur</button><br>
    <input type="text" v-model="nama"><br>
    <h2>reactive</h2>
    <p>halo nama saya {{ contactTwo.name }} umur saya {{ contactTwo.umur }} </p>
    <button @click="handleClick2">Click!</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

// @ is an alias to /src


export default {
  name: 'HomeView',
  setup() {
    // const paragraf = ref(null)

 const contactOne = ref({
   name: 'ranggakun',
   umur: 24
 })
 const contactTwo = reactive({
   name: 'fu xuan chan',
   umur: 24
 })
    const handleClick1 = () => {
      contactOne.value.name = 'kun'
      contactOne.value.umur = 25
    }
    const handleClick2 = () => {
      contactTwo.name = 'chan'
      contactTwo.umur = 2000
    }

    return  {
      contactOne,
      contactTwo,
      handleClick1,
      handleClick2
    }
  },
  
}
</script>


<style scoped>
.paragraf {
  color: red;
}
</style>