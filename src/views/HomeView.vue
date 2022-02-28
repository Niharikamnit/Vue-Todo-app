<template>
  <div id="home">
    <TodoList> </TodoList>
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>
<style scoped>
#home {
  margin: 40px;
}
</style>
