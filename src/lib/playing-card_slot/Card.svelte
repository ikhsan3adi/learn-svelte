<script>
  import questionMark from "/svg/question.svg";
  import svelteLogo from "../../assets/svelte.svg";

  let flipped = true;
</script>

<div class="w-4/12 md:w-1/4 lg:w-[12.5%] flex">
  <button id="container" on:click={() => (flipped = !flipped)} class="w-full">
    <div
      id="card"
      class="{flipped ? 'flipped' : ''} aspect-[2/3] relative w-full"
    >
      <div
        id="front"
        class="absolute w-full h-full flex card border border-slate-800 dark:bg-slate-100 dark:text-slate-800 rounded-xl"
      >
        <div class="absolute top-0 left-0 p-2 text-4xl font-bold font-serif">
          <slot name="type">
            <span class="text-blue-500">?</span>
          </slot>
        </div>

        <div class="m-auto w-8 sm:w-16 h-8 sm:h-16">
          <slot name="symbol">
            <img src={questionMark} alt="unknown" class="m-auto" />
          </slot>
        </div>

        <div
          class="absolute bottom-0 right-0 p-2 text-4xl font-bold font-serif"
        >
          <slot name="type">
            <span class="text-blue-500">?</span>
          </slot>
        </div>
      </div>
      <div
        id="back"
        class="absolute w-full h-full flex card border border-slate-800 dark:bg-slate-100 dark:text-slate-800 p-5 rounded-xl"
      >
        <div
          class="w-full h-full flex rounded-xl outline outline-4 outline-orange-400"
        >
          <img
            src={svelteLogo}
            alt="svelte"
            class="m-auto w-8 sm:w-16 h-8 sm:h-16"
          />
        </div>
      </div>
    </div>
  </button>
</div>

<style>
  #container {
    perspective: 62vh;
  }

  #card {
    transition: transform 0.4s;
    transform-style: preserve-3d;
  }

  #front,
  #back {
    backface-visibility: hidden;
  }

  #back {
    transform: rotateY(180deg);
  }

  #card.flipped {
    transform: rotateY(180deg);
  }
</style>
