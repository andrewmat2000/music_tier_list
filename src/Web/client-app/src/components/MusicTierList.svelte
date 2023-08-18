<script lang="ts" setup>
  import { get } from "svelte/store";
  import { tier_list_store } from "../lib/stores/tier_list_store";
  import TierRow from "./TierRow.svelte";

  let tierList = get(tier_list_store);

  function addRow() {
    tierList.columns.push({ name: "", songs: [] });

    tier_list_store.set(tierList);
  }

  tier_list_store.subscribe(x => {
    if (tierList == undefined) {
      return;
    }
    tierList = x;
  });
</script>

<div id="music-tier-list">
  <table id="tier-table" class="table">
    <tbody>
      {#each tierList.columns as item}
        <TierRow {item} />
      {/each}
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
