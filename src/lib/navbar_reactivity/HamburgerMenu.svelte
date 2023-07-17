<script>
  import menu from "/svg/menu.svg";
  import menuOpen from "/svg/menu_open.svg";

  export let sections;

  let open = false;
</script>

<div class="flex flex-col lg:hidden">
  <button on:click={() => (open = !open)} class="my-auto">
    <div class="relative">
      <img src={open ? menuOpen : menu} alt="menu" class="w-8 h-8" />
    </div>
  </button>

  <div class="relative {open ? '' : 'hidden'} text-slate-800 z-50">
    <div class="absolute w-max card p-0 flex flex-col overflow-hidden">
      {#each sections as section}
        <a
          href="#{section.id}"
          class="dark:hover:bg-slate-500 hover:bg-slate-300 p-2 px-4 group transition-all"
        >
          {section.name}
        </a>
      {/each}
    </div>
  </div>

  <button on:click={() => (open = false)} class="z-40">
    <div class="fixed left-0 right-0 top-0 bottom-0 {open ? '' : 'hidden'}" />
  </button>
</div>
