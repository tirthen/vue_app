<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <Todoitem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)" />
    </div>
  </div>
</template>

<script>
import Todoitem from "./TodoItem";
export default {
  name: "Todos",
  components: {
    Todoitem
  },
  props: ["todos"],
  data() {
    return {
      test: "test"
    };
  }
};
</script>

<style scoped>
</style>