import { FEATURES_LIKED } from "../constants/localStorage.contant";

export interface ISet {
  items: number | number[]
}

export interface ISave {
  featureToSave: number
}

export interface IDelete {
  featureToRemove: number
}

const storageManager = {

  set: ({ items }: ISet) => {
    return localStorage.setItem(FEATURES_LIKED, JSON.stringify(items));
  },

  get: () => {
    return localStorage.getItem(FEATURES_LIKED)
  },

  save: ({ featureToSave }: ISave) => {
    let savedItems: any = storageManager.get()

    if (savedItems) {
      savedItems = JSON.parse(savedItems)
      if (!savedItems.includes(featureToSave)) {
        savedItems.push(featureToSave)
        storageManager.set({ items: savedItems })
      }
    } else {
      savedItems = [featureToSave]
      storageManager.set({ items: savedItems })
    }
  },

  delete: ({ featureToRemove }: IDelete) => {
    let savedItems: any = storageManager.get();

    if (savedItems) {
      savedItems = JSON.parse(savedItems);

      const index = savedItems.indexOf(featureToRemove);

      if (index !== -1) {
        savedItems.splice(index, 1);
        storageManager.set({ items: savedItems });
      }

    } else {
      console.error("Feature not deleted.")
    }
  },

}

export default storageManager;
