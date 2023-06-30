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
        icon: "skill-icons:dotnet",
        prefix: "/dotnet-core",
        children: [
          { text: "xUnit Testing", icon: "pen-to-square", link: "/01-xunit-testing"}
        ]
      },
    ],
  },
]);
