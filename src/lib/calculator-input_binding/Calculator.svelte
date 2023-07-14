<script lang="ts">
  export let section: { id: string; title: string };

  let left = 0;
  let right = 0;
  let operation;
  let result = 0;

  function calculate() {
    switch (operation) {
      case "add":
        return (result = left + right);
      case "sub":
        return (result = left - right);
      case "mul":
        return (result = left * right);
      case "div":
        return (result = left / right);
    }
  }
</script>

<section>
  <h1 class="text-center" id={section.id}>{section.title}</h1>
  <div class="card mx-auto w-min">
    <div class="p-4 flex gap-2 mx-auto justify-center">
      <input
        type="number"
        name="left"
        id="left"
        class="w-16 p-2 shadow-md rounded-md border border-slate-300 dark:bg-slate-800"
        bind:value={left}
      />

      <select
        name="math-operation"
        id="operation"
        class="shadow-md rounded-md border border-slate-300 bg-white text-slate-800 dark:bg-slate-800 dark:text-white"
        bind:value={operation}
      >
        <option value="add">Add (+)</option>
        <option value="sub">Subtract (-)</option>
        <option value="mul">Multiply (*)</option>
        <option value="div">Divide (/)</option>
      </select>

      <input
        type="number"
        name="right"
        id="right"
        class="w-16 p-2 shadow-md rounded-md border border-slate-300 dark:bg-slate-800"
        bind:value={right}
      />
    </div>

    <button
      class="bg-sky-500 rounded-md shadow-md text-white hover:bg-sky-300 p-2 block mx-auto"
      on:click={calculate}
    >
      Calculate!
    </button>

    <div
      class="text-xl p-4 bg-white shadow-md rounded-md mx-auto w-min mt-4 dark:bg-slate-800 dark:border text-center"
    >
      Result: {result}
    </div>
  </div>
</section>
