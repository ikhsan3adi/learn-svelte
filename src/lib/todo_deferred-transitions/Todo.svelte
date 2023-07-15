<script lang="ts">
  import { createTodoStore, type Todo } from "./data/todos";
  import TodoList from "./view/TodoList.svelte";

  export let section: { id: string; title: string };

  const todos = createTodoStore();

  let newTodo = "";
</script>

<section>
  <h1 class="text-center" id={section.id}>{section.title}</h1>

  <div class="card sm:mx-auto md:w-max h-max duration-500">
    <div class="flex gap-2">
      <input
        placeholder="what needs to be done?"
        class="w-full my-2 p-2 shadow-md rounded-md border border-slate-300 dark:bg-slate-800"
        on:keydown={(e) => {
          if (e.key === "Enter" && newTodo) {
            todos.add(newTodo);
            newTodo = "";
          }
        }}
        bind:value={newTodo}
      />
      <button
        on:click={() => {
          if (newTodo) {
            todos.add(newTodo);
            newTodo = "";
          }
        }}
        class="bg-sky-500 rounded-md shadow-md text-white hover:bg-sky-300 border border-sky-500 px-8 py-2 h-min block m-auto"
      >
        Save
      </button>
    </div>

    <div class="md:flex md:justify-center md:gap-4 my-4">
      <div class="w-full md:w-72 mx-auto max-md:mb-4">
        <h2>Todo</h2>
        <TodoList store={todos} done={false} />
      </div>

      <div class="w-full md:w-72 mx-auto max-md:mb-4">
        <h2>Done</h2>
        <TodoList store={todos} done={true} />
      </div>
    </div>
  </div>
</section>
