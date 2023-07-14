<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";

  import Navbar from "./lib/navbar_reactivity/Navbar.svelte";

  import Counter from "./lib/counter/Counter.svelte";
  import Calculator from "./lib/calculator-input_binding/Calculator.svelte";
  import ProgressList from "./lib/progress-list_props/ProgressList.svelte";
  import GithubProfile from "./lib/github-profile_promise/GithubProfile.svelte";

  interface Sections {
    id: string;
    name: string;
  }

  const sections: Sections[] = [
    { id: "#home", name: "Home" },
    { id: "#calculator", name: "Calculator" },
    { id: "#progressList", name: "Progress Card" },
    { id: "#githubProfile", name: "Github Profile" },
  ];
</script>

<main>
  <!-- Svelte + Vite logo -->
  <div
    class="lg:flex lg:justify-evenly dark:bg-slate-800 dark:text-white mt-16"
    id="home"
  >
    <div class="m-8">
      <div class="flex justify-center p-8">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} class="logo h-72" alt="Vite Logo" />
        </a>
        <a href="https://svelte.dev" target="_blank" rel="noreferrer">
          <img src={svelteLogo} class="logo svelte h-72" alt="Svelte Logo" />
        </a>
      </div>
      <h1 class="text-4xl font-semibold mx-auto text-center">Vite + Svelte</h1>

      <div class="mx-auto text-center m-4">
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
  </div>

  <!-- Exercises -->
  <div class="w-full dark:bg-slate-800 py-8">
    <!-- Navbar -->
    <Navbar {sections} />

    <!-- Input Bindings -->
    <div class="mx-auto">
      <Calculator
        section={{
          id: "calculator",
          title: "#1 Simple calculator - Input binding",
        }}
      />
    </div>

    <!-- Props -->
    <div class="mx-auto">
      <ProgressList
        section={{ id: "progressList", title: "#2 Progress list card - Props" }}
      />
    </div>

    <!-- Async -->
    <div class="mx-auto">
      <GithubProfile
        section={{
          id: "githubProfile",
          title: "#3 Github profile - API call (promise)",
        }}
      />
    </div>
  </div>

  <div class="dark:bg-slate-800 w-full h-[500px]" />
</main>
