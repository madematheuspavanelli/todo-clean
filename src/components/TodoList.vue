<script setup lang="ts">
import { useTodoList } from "@/composables/useTodoList";
const useTodos = useTodoList();
const { handleAdd, handleToggle, todoList, newTodo } = useTodos;
</script>

<template>
  <div>
    <h1>Todo List</h1>
    <input type="text" @keyup.enter="handleAdd" v-model="newTodo" />
    <p>Completed: {{ useTodos.completed }} / {{ useTodos.total }}</p>
    <ul>
      <li
        v-for="todo in todoList.todos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        {{ todo.text }}
        <button @click="handleToggle(todo.id)">Toggle</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
li.completed {
  text-decoration: line-through;
}
</style>
