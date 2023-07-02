import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
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
    {
      text: "Other",
      collapsible: true,
      icon: "tabler:folder",
      prefix: "posts/other",
      children: 'structure'
    },
    "author",
  ],
});
