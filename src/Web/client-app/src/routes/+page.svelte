<script lang="ts" setup>
  import Header from "../components/Header.svelte";
  import MusicCache from "../components/MusicCache.svelte";
  import MusicTierList from "../components/MusicTierList.svelte";
  import Navigation from "../components/Navigation.svelte";
</script>

<div>
  <Header />
  <div id="body">
    <Navigation />
    <div id="tier-list-content">
      <MusicTierList />
      <MusicCache />
    </div>
  </div>
</div>

<style setup>
  #body {
    display: grid;
    grid-template-columns: var(--navigation-width) 1fr;
    height: calc(100vh - var(--header-height));
  }
  #tier-list-content {
    display: grid;
    grid-template-rows: 1fr 30%;
  }
</style>
