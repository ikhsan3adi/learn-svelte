<script lang="ts">
  import CircularProgress from "./CircularProgress.svelte";

  export let name: string;
  export let progress: number;
</script>

<div class="card w-full sm:w-min">
  <h1 class="text-2xl font-bold text-center">{name}</h1>
  <div class="p-4 w-48 mx-auto">
    <CircularProgress {progress} />
  </div>
</div>
