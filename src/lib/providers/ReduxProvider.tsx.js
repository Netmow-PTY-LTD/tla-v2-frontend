"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { ReduxStore } from "../redux/store";

export default function ReduxProviderWrapper({ children }) {
  const storeRef = useRef(undefined);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = ReduxStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
