<script lang="ts">
  import CircularProgress from "./CircularProgress.svelte";

  export let name: string;
  export let progress: number;
</script>

<div class="dark:bg-slate-700 rounded-md dark:text-white px-8 py-4 shadow-md">
  <h1 class="text-2xl font-bold text-center">{name}</h1>
  <div class="p-4 w-48">
    <CircularProgress {progress} />
  </div>
</div>
