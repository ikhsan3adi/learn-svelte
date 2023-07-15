import { writable, readable, get } from "svelte/store";
import { nanoid } from "nanoid";

interface Todo {
  id?: string;
  done: boolean;
  description: string;
}

const initial = [
  { done: false, description: "write some docs" },
  { done: false, description: "start writing blog post" },
  { done: false, description: "buy some milk" },
  { done: true, description: "feed the cat" },
  { done: false, description: "fix some bugs" },
  { done: true, description: "create bugs" },
];

function createTodoStore() {
  const todos: Array<any> = initial.map(({ done, description }) => {
    return {
      id: nanoid(16),
      done,
      description,
    };
  });

  const { subscribe, update } = writable(todos);

  return {
    subscribe,
    add: (description: string) => {
      const todo = {
        id: nanoid(16),
        done: false,
        description,
      };

      update(($todos) => [...$todos, todo]);
    },
    remove: (todo: any) => {
      update(($todos) => $todos.filter((t: any) => t !== todo));
    },
    mark: (todo: any, done: any) => {
      update(($todos) => [
        ...$todos.filter((t: any) => t !== todo),
        { ...todo, done },
      ]);
    },
  };
}

export { createTodoStore, Todo };
