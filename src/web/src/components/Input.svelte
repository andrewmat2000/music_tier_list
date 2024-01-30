<script lang="ts" generic="T">
  import { createEventDispatcher } from "svelte";

  export let value = "";

  const emit = createEventDispatcher<{ change: string }>();

  function change(ev: any) {
    const input = ev.target as HTMLTextAreaElement;

    emit("change", input.value)
  }
</script>

<textarea on:change={change} bind:value />
