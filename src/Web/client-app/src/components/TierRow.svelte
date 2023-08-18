<script lang="ts" setup>
  import type { ITierColumn } from "../lib/stores/tier_list_store";
  import SongView from "./SongView.svelte";

  export let item: ITierColumn;
</script>

<tr>
  <td><input value="{item.name}"></td>
  <td >
    {#each item.songs as song}
        <SongView {song}/>
    {/each}
  </td>
</tr>
