import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts",
    children: [
      {
        text: ".NET Core",
        icon: "skill-icons:dotnet",
        prefix: "/dotnet-core",
        children: [
          { text: "xUnit Testing", icon: "pen-to-square", link: "/01-xunit-testing"}
        ]
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
