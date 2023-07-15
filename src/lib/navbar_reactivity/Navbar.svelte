<script>
  import { fly } from "svelte/transition";

  export let sections = [{ id: "#home", name: "Home" }];

  let isDarkThemeEnabled = true;

  const html = document.querySelector("html");

  $: isDarkThemeEnabled
    ? html.classList.add("dark")
    : html.classList.remove("dark");
</script>

<div
  class="fixed w-full top-0 left-0 right-0 bg-orange-500 z-50 py-2 px-2 sm:px-4 inline-flex justify-between text-white"
>
  <!-- Logo -->
  <div class="h-auto flex">
    <a
      href="https://github.com/ikhsan3adi/Learn-Svelte"
      class="uppercase tracking-widest my-auto">Learn Svelte</a
    >
  </div>

  <!-- Links -->
  <div class="inline-flex gap-4 h-auto my-auto">
    {#each sections as section}
      <div class="">
        <a
          href={section.id}
          class="hover:tracking-wide hover:text-blue-500 hover:underline transition-all"
        >
          {section.name}
        </a>
      </div>
    {/each}
  </div>

  <!-- Dark theme toggle -->
  <div class="w-max">
    <label for="toggle" class="cursor-pointer">
      <div
        class="py-2 px-4 cursor-pointer rounded-xl bg-slate-50 text-slate-800 dark:text-white dark:bg-slate-700"
      >
        <div class="flex justify-center my-auto w-full">
          <p class="uppercase tracking-widest">Dark theme</p>
          <input
            type="checkbox"
            id="toggle"
            class="hidden"
            bind:checked={isDarkThemeEnabled}
          />
          <div
            class="w-10 h-6 bg-orange-400 rounded-full flex items-center p-0.5 my-auto ml-4 dark:bg-sky-600 duration-300"
            id="theme-toogle-bg"
          >
            <div
              class="w-5 h-5 rounded-full bg-white my-auto dark:translate-x-4 duration-300"
            />
          </div>
        </div>
      </div>
    </label>
  </div>
</div>
