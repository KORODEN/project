<template>
  <div class="v-table">
    <div class="v-table-header">
      <p>Место</p>
      <p>ФИО</p>
      <p>Статус</p>
      <p>Опыт</p>
      <p>Монеты</p>
    </div>
    <div class="v-table-body">
      <TodoItem
          v-for="(todo, i) in sortedList"
          v-bind:todo="todo"
          v-bind:key="todo.idNode"
          v-bind:index="i"
          v-bind:indexes="indexes[i]"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodoList",
  data() {
    return {
      indexes: []
    }
  },
  props: ['todos', 'top'],
  components: {
    TodoItem
  },
  computed: {
    sortedList() {
      this.todos = this.todos.sort(sortHelper)

      let helpIndex = 0;

      for (let i = 0; i < this.todos.length - 1; i++) {
        let a0 = this.todos[i].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[0]
        let a1 = this.todos[i].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[1]
        let a2 = this.todos[i].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[2]

        let b0 = this.todos[i + 1].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[0]
        let b1 = this.todos[i + 1].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[1]
        let b2 = this.todos[i + 1].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[2]

        if ((a0 + a1 + a2) === (b0 + b1 + b2)) {
          helpIndex++
          this.indexes.push(helpIndex)
          this.indexes.push(helpIndex)

          i++

          a0 = this.todos[i].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[0]
          a1 = this.todos[i].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[1]
          a2 = this.todos[i].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[2]

          b0 = this.todos[i + 1].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[0]
          b1 = this.todos[i + 1].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[1]
          b2 = this.todos[i + 1].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[2]

          while((a0 + a1 + a2) === (b0 + b1 + b2) && (i < this.todos.length - 2)) {
            helpIndex++
            this.indexes.push(helpIndex)

            i++

            a0 = this.todos[i].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[0]
            a1 = this.todos[i].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[1]
            a2 = this.todos[i].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[2]

            b0 = this.todos[i + 1].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[0]
            b1 = this.todos[i + 1].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[1]
            b2 = this.todos[i + 1].resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[2]

          }

        }
        else {
          helpIndex++
          this.indexes.push(helpIndex)
        }
      }

      if (this.top)
        return this.todos.slice(0, this.indexes.indexOf(6))
      else
        return this.todos
    }
  }
}

let sortHelper = function (a, b) {
  let a0 = a.resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[0]
  let a1 = a.resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[1]
  let a2 = a.resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[2]

  let b0 = b.resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[0]
  let b1 = b.resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[1]
  let b2 = b.resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[2]

  if ((a0 + a1 + a2) < (b0 + b1 + b2))
    return 1
  else
    return -1;
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .v-table-header {
    display: flex;
    justify-content: space-around;
    border-bottom: solid 2px #2c3e50;
    padding: .5rem;
    margin: 1rem 2rem;
  }

  .v-table-header p{
    flex-basis: 20%;
    text-align: center;;
  }

  .pointer {
    cursor: pointer;
  }
</style>