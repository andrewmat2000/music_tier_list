import { writable, derived, get } from "svelte/store";

export interface ISong {
  url?: string;
}

export interface ITierColumn {
  name: string;
  songs: ISong[];
}

export interface ITierList {
  columns: ITierColumn[];
  cached: ITierColumn[];
}

function createTierListStore() {
  const P = writable({ cached: [], columns: [] } as ITierList);
  const { subscribe, set, update } = P;

  return {
    subscribe,
    set,
    update,
  };
}

export const tier_list_store = createTierListStore();
