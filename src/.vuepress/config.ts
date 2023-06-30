import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Code Barrel",
  description: "Another software engineering blog. By Broderick Westrope.",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
