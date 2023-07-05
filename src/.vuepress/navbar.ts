import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Starred",
    icon: "tabler:star",
    link: "/star"
  },
  {
    text: ".NET Core",
    prefix: "/posts/dotnet-core",
    icon: "skill-icons:dotnet",
    children: [
      { text: "Basic Testing", icon: "fluent-mdl2:test-case", link:"/basic-unit-tests-with-xUnit"}
    ]
  },
  {
    text: "Vue",
    prefix: "/posts/vue",
    icon: "logos:vue",
    children: []
  },
  {
    text: "Other",
    prefix: "/posts/other",
    icon: "tabler:folder",
    children: []
  },
  {
    text: "Author",
    icon: "akar-icons:info",
    link: "/author",
  },
]);
