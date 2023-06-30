import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts",
    children: [
      {
        text: ".NET Core",
        prefix: "/dotnet-core",
        children: [
          { text: "xUnit Testing", icon: "pen-to-square", link: "/01-xunit-testing"}
        ]
      },
      {
        text: "Vue",
        prefix: "/vue",
        children: [
          { text: "State Management", icon: "pen-to-square", link: "/02-state-management"}
        ]
      },  
    ],
  },
]);
