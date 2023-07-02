import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: ".NET Core",
    prefix: "/posts/dotnet-core",
    icon: "skill-icons:dotnet",
    children: [
      { text: "xUnit Testing", icon: "pen-to-square", link: "/01-xunit-testing"}
    ]
  },
  {
    text: "Vue",
    prefix: "/posts/vue",
    icon: "logos:vue",
    children: [
      { text: "State Management", icon: "pen-to-square", link: "/02-state-management"}
    ]
  },
  {
    text: "Author",
    icon: "akar-icons:info",
    link: "/author",
  },
]);
