import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "爱特工作室（CCF海大学生分会）WIKI",
  description: "Wiki for ITStudio.",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lang: "zh-CN",
  srcDir: "src",
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "ITSTUDIO WIKI",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Wiki", link: "/wiki/about/intro" }
    ],

    sidebar: {
      "/wiki": [
        // {
        //   text: "ITStudio Wiki",
        //   link: "/wiki",
        // },
        {
          text: "团队介绍",
          // link: "/wiki/about",
          items: [{ text: "爱特工作室简介", link: "/wiki/about/intro" }],
        },
        {
          text: "新闻公告",
          // link: "/wiki/news",
          items: [
            {
              text: "近期新闻",
              link: "/wiki/news/recent-news",
              collapsed: false,
              items: [],
            },
            {
              text: "活动公告",
              link: "/wiki/news/events",
              collapsed: false,
              items: [],
            },
          ],
        },
        {
          text: "技术与专业领域",
          // link: "/wiki/tech",
          items: [
            {
              text: "技术博客",
              link: "/wiki/tech/blog",
              collapsed: false,
              items: [],
            },
            {
              text: "成员项目",
              link: "/wiki/tech/projects",
              collapsed: false,
              items: [],
            },
          ],
        },
        {
          text: "生活感悟",
          link: "/wiki/life",
        },
        {
          text: "联系方式与友情链接",
          items: [
            {
              text: "联系方式",
              link: "/wiki/contact/contatusus",
              collapsed: false,
              items: [],
            },
            {
              text: "友情链接",
              link: "/wiki/contact/link",
              collapsed: false,
              items: [],
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "googlehome", link: "https://www.itstudio.club/" },
      { icon: "github", link: "https://github.com/ITStudioOUC" },
    ],
  },
});
