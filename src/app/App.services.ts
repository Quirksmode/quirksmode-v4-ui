import { AppData } from "./App.types";

export const fetchAppData = async () => {
  const res = await fetch(`${process.env.CMS_URL}/wp-json/quirksmode/v1/app`);

  const appData: AppData = await res.json();

  return appData;
};
