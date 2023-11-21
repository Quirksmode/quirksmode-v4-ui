"use client";

import { useRef } from "react";

import { AppStoreUtilityType, useAppStore } from "./App.store";

function AppStoreInit({ utility }: { utility: AppStoreUtilityType }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useAppStore.setState({ utility });
    initialized.current = true;
  }
  return null;
}

export default AppStoreInit;
