<script lang="ts">
  export let section: { id: string; title: string };

  import Card from "./Card.svelte";

  import spade from "/svg/spade.svg";
  import club from "/svg/club.svg";
  import heart from "/svg/heart.svg";
  import diamond from "/svg/diamond.svg";

  let cards = [
    { type: "A", symbol: spade, color: "black" },
    { type: "7", symbol: heart, color: "red" },
    { type: "4", symbol: club, color: "black" },
    { type: "5", symbol: diamond, color: "red" },
    { type: "4", symbol: spade, color: "black" },
    null,
  ];
</script>

<section>
  <h1 class="text-center" id={section.id}>{section.title}</h1>
  <div class="flex flex-wrap gap-2 justify-center">
    {#each cards as card}
      {#if card}
        <Card>
          <span slot="type" style="color: {card.color};">{card.type}</span>
          <img src={card.symbol} alt="symbol" slot="symbol" />
        </Card>
      {:else}
        <!-- use fallback slot -->
        <Card />
      {/if}
    {/each}
  </div>
</section>
