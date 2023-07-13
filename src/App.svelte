<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/counter/Counter.svelte";
  import Calculator from "./lib/calculator-input-binding/Calculator.svelte";
  import ProgressList from "./lib/progress-list-props/ProgressList.svelte";

  let isDarkThemeEnabled = true;
</script>

<main class={isDarkThemeEnabled ? "dark" : ""}>
  <label for="darkToggle">
    <div
      class="fixed z-50 top-4 left-4 bg-white dark:bg-slate-900 dark:border rounded-md shadow-md p-2 cursor-pointer"
    >
      <span class="text-slate-800 dark:text-white">Dark theme</span>
      <input
        type="checkbox"
        name="dark-theme"
        id="darkToggle"
        class="m-2"
        bind:checked={isDarkThemeEnabled}
      />
    </div>
  </label>

  <div class="lg:flex lg:justify-evenly dark:bg-slate-800 dark:text-white">
    <div class="m-12">
      <div class="flex justify-center p-8">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} class="logo h-72" alt="Vite Logo" />
        </a>
        <a href="https://svelte.dev" target="_blank" rel="noreferrer">
          <img src={svelteLogo} class="logo svelte h-72" alt="Svelte Logo" />
        </a>
      </div>
      <h1 class="text-4xl font-semibold mx-auto text-center">Vite + Svelte</h1>

      <div class="card mx-auto text-center m-4">
        <Counter />
      </div>

      <p class="mx-auto text-center">
        Check out <a
          href="https://github.com/sveltejs/kit#readme"
          target="_blank"
          rel="noreferrer">SvelteKit</a
        >, the official Svelte app framework powered by Vite!
      </p>

      <p class="read-the-docs mx-auto text-center">
        Click on the Vite and Svelte logos to learn more
      </p>
    </div>

    <div class="calculator sm:m-16">
      <Calculator />
    </div>
  </div>

  <!-- Here -->
  <div class="w-full dark:bg-slate-800 py-24 flex">
    <div class="mx-auto">
      <ProgressList />
    </div>
  </div>

  <div class="dark:bg-slate-800 w-full h-[500px]" />
</main>
