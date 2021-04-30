<template>
  <div>
    <h2>Топ 5</h2>
    <Loader v-if="loading"/>
    <TodoList
        v-else-if="todos.length"
        v-bind:todos="todos"
        v-bind:top="top"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import Loader from "@/components/Loader";
export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
      top: true
    }
  },
  mounted() {
    fetch('http://localhost:3000/players')
        .then(response => response.json())
        .then(json => {
          this.todos = json
          this.loading = false
        })
  },
  components: {
    TodoList,
    Loader
  }
}
</script>