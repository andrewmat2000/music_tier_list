<script lang="ts">
  import Input from "@components/Input.svelte";
  import { categoryStore } from "@stores/category";
  import type { Category } from "@stores/category";

  function create() {
    categoryStore.create();
  }

  function remove(category: Category) {
    categoryStore.remove(category);
  }

  function updateName(name: string, category: Category) {
    categoryStore.update(() => {
      category.name = name;

      return category;
    });
  }
</script>

<div id="tier-table-root">
  {#each $categoryStore as category}
    <div class="row">
      <div>
        <span>
          <Input on:change={e => updateName(e.detail, category)} value={category.name} />
        </span>
      </div>
      <div></div>
      <div>
        <span>
          <button on:click={() => remove(category)}>-</button>
        </span>
      </div>
    </div>
  {/each}
  <div class="row">
    <div>
      <span>
        <button on:click={create}>+</button>
      </span>
    </div>
    <div></div>
    <div></div>
  </div>
</div>

<style>

  .row {
    display: grid;
    grid-template-columns: 100px 1fr 50px;
    height: 100px;
  }

  .row > div {
    text-align: center;
    display: table;
  }

  .row > div {
    border: 1px solid black;
  }

  .row > div > * {
    display: table-cell;
    vertical-align: middle;
  }

  button {
    background: none;
    border: none;
    font-size: 50px;
    cursor: pointer;
  }

  :global(#tier-table-root > .row > div:first-child textarea) {
    margin: 0;
    padding: 0;
    border: 0;
    word-wrap: break-word;
    word-break: break-all;
    height: 100px;
    width: 100%;
    resize: none;
    outline: none;
  }
</style>
