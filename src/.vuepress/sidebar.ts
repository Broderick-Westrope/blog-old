import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Demo",
      icon: "fa-solid:laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Vue",
      icon: "logos:vue",
      collapsible: true,
      prefix: "posts/vue",
      children: 'structure'
    },
    {
      text: ".NET Core",
      collapsible: true,
      icon: "skill-icons:dotnet",
      prefix: "posts/dotnet-core",
      children: 'structure'
    },
    "intro",
    "slides",
  ],
});
