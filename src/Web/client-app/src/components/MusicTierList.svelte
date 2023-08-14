<script lang="ts" setup>
  import { get } from "svelte/store";
  import { tier_list_store } from "../lib/stores/tier_list_store";

  let tierList = get(tier_list_store);
  tierList = tierList == undefined ? { cached: [], columns: [] } : tierList;
  console.log(tierList);

  function addRow() {
    console.log(tierList);
    tierList.columns.push({});
  }

  tier_list_store.subscribe(x => {
    if (tierList == undefined) {
      return;
    }
    tierList = x;
  });
</script>

<div id="music-tier-list">
  <table id="tier-table">
    <tbody>
      {#if tierList != undefined}
        {#each tierList.columns as item}
          <div>{item}</div>
        {/each}
      {/if}
      <tr>
        <td><button on:click={() => addRow()}>+</button></td>
        <td />
      </tr>
    </tbody>
  </table>
</div>

<style lang="css" setup>
  #music-tier-list {
    background-color: red;
    width: 100%;
    height: 100%;
    display: grid;
  }
  table,
  th,
  td {
    border: 1px solid #a0a0a0;
    border-collapse: collapse;
  }
  #tier-table {
    color: white;
    text-align: center;
  }
  #tier-table > tbody > tr > td:first-child {
    width: 40px;
  }
  button {
    border: none;
    width: 25px;
    height: 25px;
  }
</style>
