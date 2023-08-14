import { writable, derived, get } from "svelte/store";

interface ISong {
  url?: string;
}

interface ITierList {
  columns: ISong[];
  cached: ISong[];
}

function createTierListStore() {
  const P = writable<ITierList>();
  const { subscribe, set, update } = P;

  return {
    subscribe,
    set,
    update,
  };
}

export const tier_list_store = createTierListStore();
