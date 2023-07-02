import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Code Barrel",
  description: "A blog aimed at helping beginner/intermediate coders gain confidence & direction so they can do more, sooner.",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
