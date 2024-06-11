import { describe, expect, it } from "vitest";
import { TodoList } from "./TodoList";

describe("TodoList", () => {
  it("should be defined", () => {
    expect(TodoList).toBeDefined();
  });
  it("should initialize with no todos", () => {
    const todoList = new TodoList();
    expect(todoList.todos).toEqual([]);
    expect(todoList.total).toEqual(0);
    expect(todoList.completed).toEqual(0);
  });
  it("should add a todo", () => {
    const todoList = new TodoList();
    const addedTodo = todoList.add("Test todo");
    expect(todoList.todos).toEqual([addedTodo]);
    expect(todoList.total).toEqual(1);
    expect(todoList.completed).toEqual(0);
  });
  it("should count completed todos", () => {
    const todoList = new TodoList();
    const firstTodo = todoList.add("First");
    todoList.toggleTodo(firstTodo.id);
    expect(todoList.completed).toEqual(1);
    const secondTodo = todoList.add("Second");
    expect(todoList.total).toEqual(2);
    expect(todoList.completed).toEqual(1);
    todoList.toggleTodo(secondTodo.id);
    expect(todoList.total).toEqual(2);
    expect(todoList.completed).toEqual(2);
    todoList.toggleTodo(secondTodo.id);
    expect(todoList.total).toEqual(2);
    expect(todoList.completed).toEqual(1);
  });
  it("should throw an error if try to add more than 5 todos", () => {
    const todoList = new TodoList();
    for (let i = 0; i < 5; i++) {
      todoList.add(`Todo ${i}`);
    }
    expect(() => todoList.add("Another todo")).toThrowError();
  });
});
