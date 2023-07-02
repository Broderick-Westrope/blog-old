import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://bwestrope.netlify.app/",

  author: {
    name: "Broderick Westrope",
    url: "https://github.com/Broderick-Westrope",
  },

  iconAssets: "iconify",

  logo: "/logo.svg",
  logoDark: '/logo-dark.svg',

  repo: "Broderick-Westrope/blog",

  docsDir: "src",

  fullscreen: true,

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "Made using VuePress Hope with the help of a barrel of monkeys :)",

  displayFooter: true,

  encrypt: {
    config: {
      "/demo/encrypt": ["1234"],
    },
  },

  blog: {
    description: "A full stack software engineer in training. 🤞",
    intro: "/intro",
    avatar: '/monkey.svg',
    medias: {
      GitHub: "https://github.com/Broderick-Westrope",
      Email: "mailto:broderickwestrope@gmail.com",
      Discord: "https://discordapp.com/users/672675303629520897",
      Rss: "https://bwestrope.netlify.app/rss.xml",
      Linkedin: "https://www.linkedin.com/in/broderick-westrope",
      Instagram: "https://www.instagram.com/the.broderick",
      Facebook: "https://www.facebook.com/brodie.westrope",
    },
  },

  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  plugins: {
    blog: true,

    comment: {
      // TODO: You should generate and use your own comment service
      provider: "Giscus",
      repo: "Broderick-Westrope/blog",
      repoId: "R_kgDOJ1cVgg",
      category: "Announcements",
      categoryId: "DIC_kwDOJ1cVgs4CXlEX"
    },

    feed: {
      rss: true,
      channel: {
        pubDate: new Date(2023, 5, 30),
        ttl: 60,
        image: "https://images.unsplash.com/photo-1604292477525-8645ef04b21f?ixid=M3w0MDA1ODR8MHwxfHNlYXJjaHwyfHxiYXJyZWwlMjBvZiUyMG1vbmtleXN8ZW58MHwwfHx8MTY4ODA4MjY0NHww&ixlib=rb-4.0.3",
        icon: "game-icons:barrel",
        author: {
          name: "Broderick Westrope",
          email: "brodie.westrope@gmail.com",
          url: "https://bwestrope.netlify.app/",
        }
      }
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
