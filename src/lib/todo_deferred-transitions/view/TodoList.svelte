<script>
  import { send, receive } from "../logic/transition.js";

  export let store;
  export let done;

  import DeleteIcon from "./DeleteIcon.svelte";
</script>

<ul>
  {#each $store.filter((todo) => todo.done === done) as todo (todo.id)}
    <li class:done in:receive={{ key: todo.id }} out:send={{ key: todo.id }}>
      <div class="p-2 bg-slate-200 dark:bg-slate-600 rounded-md my-2 w-full">
        <label class="flex justify-between flex-nowrap gap-4">
          <div class="flex justify-start flex-grow-0 md:w-9/12">
            <input
              type="checkbox"
              checked={todo.done}
              on:change={(e) => store.mark(todo, e.currentTarget.checked)}
            />

            <span class="ml-3 text-ellipsis overflow-hidden">
              {todo.description}
            </span>
          </div>

          <button
            on:click={() => store.remove(todo)}
            aria-label="Remove"
            class="w-6 h-6 my-auto"
          >
            <DeleteIcon />
          </button>
        </label>
      </div>
    </li>
  {/each}
</ul>
