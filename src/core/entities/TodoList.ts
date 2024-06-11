import { Todo } from "@/core/types/Todo";

export class TodoList {
  private _todos: Todo[] = [];

  get todos() {
    return [...this._todos];
  }

  get completed() {
    return this._todos.filter((todo) => todo.completed).length;
  }

  get total() {
    return this._todos.length;
  }

  add(text: string) {
    if (this._todos.length >= 5) {
      throw new Error("You can't add more than 5 todos");
    }
    const id = Math.random().toString(36).substr(2, 9);
    const newTodo = { id, text, completed: false };
    this._todos.push(newTodo);
    return newTodo;
  }

  toggleTodo(todoId: string) {
    const todo = this._todos.find((todo) => todo.id === todoId);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
