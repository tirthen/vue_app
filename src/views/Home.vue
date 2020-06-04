<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";
export default {
  name: "Home",
  components: { Todos, AddTodo },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    async deleteTodo(id) {
      let deletedTodo = await axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .catch((err) => console.log(err));
      if (deletedTodo.status == 200) {
        this.todos = this.todos.filter((e) => e.id !== id);
      }
    },
    async addTodo(newTodo) {
      const { title, completed } = newTodo;
      let obj = {
        title,
        completed,
      };
      let result = await axios
        .post("https://jsonplaceholder.typicode.com/todos", obj)
        .catch((err) => console.log(err));

      this.todos = [...this.todos, result.data];
    },
  },
  async created() {
    let todos = await axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .catch((err) => console.log(err));
    this.todos = todos.data;
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
