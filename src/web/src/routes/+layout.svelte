<main>
  <header></header>

  <div id="content">
    <div id="left-panel"></div>
    <slot />
  </div>
  <footer></footer>
</main>

<style>
  :root {
    --header-height: 57px;
    --footer-height: 57px;
  }
  main {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    display: grid;
    grid-template-rows: var(--header-height) 1fr var(--footer-height);
  }

  header {
    background-color: red;
  }

  #content {
    display: grid;
    grid-template-columns: 200px 1fr;
    max-height: 100%;
    overflow-y: auto;
  }

  #left-panel {
    background-color: blue;
  }

  footer {
    height: 100px;
    background-color: aqua;
    width: 100%;
  }
</style>
