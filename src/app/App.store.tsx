import { create } from "zustand";

export type AppStoreUtilityType = {
  isNavToggled: boolean;
  isSearchToggled: boolean;
  isMenuBtnToggled: boolean;
}

export const useAppStore = create<{
  utility: AppStoreUtilityType;
  setUtility: (utility: AppStoreUtilityType) => void
}>((set) => ({
  utility: {
    isNavToggled: false,
    isSearchToggled: false,
    isMenuBtnToggled: false,
  },
  setUtility: (utility: AppStoreUtilityType) => set(() => ({ utility })),
}));
