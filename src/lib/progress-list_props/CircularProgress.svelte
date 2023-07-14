<script lang="ts">
  import ProgressBar from "@okrad/svelte-progressbar";

  export let progress: number;
</script>

<ProgressBar
  series={[progress]}
  style="radial"
  thickness={10}
  labelColor=""
  thresholds={[
    {
      till: 49,
      color: "#df534e",
    },
    {
      till: 79,
      color: "#ce9d35",
    },
    {
      till: 99,
      color: "#3dc06f",
    },
    {
      till: 100,
      color: "#35c4ce",
    },
  ]}
/>
