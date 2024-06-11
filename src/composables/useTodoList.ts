import { reactive, ref, watch } from "vue";
import { TodoList } from "@/core/entities/TodoList";

export function useTodoList() {
  const newTodo = ref("");
  const completed = ref(0);
  const total = ref(0);

  const { todoList } = reactive({
    todoList: new TodoList(),
  });

  function handleAdd() {
    try {
      todoList.add(newTodo.value);
      newTodo.value = "";
    } catch (error) {
      alert(error);
    }
  }

  function handleToggle(todoId: string) {
    todoList.toggleTodo(todoId);
  }

  watch(todoList, (todoList) => {
    completed.value = todoList.completed;
    total.value = todoList.total;
  });

  return {
    newTodo,
    todoList,
    handleAdd,
    handleToggle,
    completed,
    total,
  };
}
