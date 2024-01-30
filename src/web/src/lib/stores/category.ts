import { writable } from "svelte/store";

export interface Category {
  name: string;
}

function createCategoryStore() {
  const P = writable<Category[]>([]);
  const { subscribe, update } = P;

  function create() {
    update(x => {
      x.push({ name: "" });
      return x;
    });
  }

  function remove(category: Category) {
    update(x => {
      const index = x.indexOf(category);

      return [...x.slice(0, index), ...x.slice(index + 1)];
    });
  }

  function updateEntity(func: () => Category) {
    update(x => {
      const category = func();

      // const index = x.indexOf(category);

      return x;
    });
  }

  return {
    subscribe,
    create,
    remove,
    update: updateEntity,
  };
}

export const categoryStore = createCategoryStore();
