<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";

  import type { ComponentType } from "svelte";

  import Navbar from "./lib/navbar_reactivity/Navbar.svelte";

  import Counter from "./lib/counter/Counter.svelte";
  import Calculator from "./lib/calculator-input_binding/Calculator.svelte";
  import ProgressList from "./lib/progress-list_props/ProgressList.svelte";
  import GithubProfile from "./lib/github-profile_promise/GithubProfile.svelte";
  import Todo from "./lib/todo_deferred-transitions/Todo.svelte";
  import PlayingCard from "./lib/playing-card_slot/PlayingCard.svelte";

  interface Sections {
    id: string;
    name: string;
    title: string;
    component: ComponentType;
  }

  const sections: Sections[] = [
    {
      id: "calculator",
      name: "Calculator",
      title: "#1 Simple calculator - Input binding",
      component: Calculator,
    },
    {
      id: "progressList",
      name: "Progress Card",
      title: "#2 Progress list card - Props",
      component: ProgressList,
    },
    {
      id: "githubProfile",
      name: "Github Profile",
      title: "#3 Github profile - API call (promise)",
      component: GithubProfile,
    },
    {
      id: "todo",
      name: "Todo",
      title: "#4 Todo list - Deferred transition",
      component: Todo,
    },
    {
      id: "card",
      name: "Card game",
      title: "#5 Card game - Svelte slots",
      component: PlayingCard,
    },
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
    <Navbar
      sections={[
        {
          id: "home",
          name: "Home",
          title: "Home",
          component: null,
        },
        ...sections,
      ]}
    />

    <!-- Use svelte dynamic component -->
    {#each sections as section}
      <div class="mx-auto">
        <svelte:component this={section.component} {section} />
      </div>
    {/each}
  </div>

  <div class="dark:bg-slate-800 w-full h-[500px]" />
</main>
