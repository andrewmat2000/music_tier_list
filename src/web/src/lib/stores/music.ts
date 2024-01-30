import { writable } from "svelte/store";

interface Song {}

function createMusicStore() {
  const P = writable<Song>();
}

export const musicStore = createMusicStore();
