<script lang="ts">
  export let sectionTitle;

  import ProgressCard from "./ProgressCard.svelte";

  interface Progress {
    name: string;
    progress: number;
  }

  let progressList: Progress[] = [
    { name: "HTML", progress: 95 },
    { name: "Flutter", progress: 60 },
    { name: "PHP", progress: 60 },
    { name: "Unity C#", progress: 10 },
    { name: "TailwindCSS", progress: 50 },
    { name: "Svelte", progress: 25 },
    { name: "TypeScript", progress: 5 },
    { name: "NodeJS", progress: 65 },
    { name: "Figma", progress: 45 },
    { name: "Sigma", progress: 100 },
  ];
</script>

<section>
  <h1 class="text-center">{sectionTitle}</h1>
  <div class="flex flex-wrap gap-2 justify-center">
    {#each progressList as progress}
      <ProgressCard {...progress} />
    {/each}
  </div>
</section>
