<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button
  on:click={increment}
  class="bg-sky-500 rounded-md shadow-md text-white hover:bg-sky-300 p-2"
>
  count is {count}
</button>
