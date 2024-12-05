import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "爱特工作室（CCF海大学生分会）WIKI",
  description: "Wiki for ITStudio.",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lang: "zh-CN",
  srcDir: "src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    siteTitle: "ITSTUDIO WIKI",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Wiki", link: "/wiki/about/intro" },
      { text: "Contact", link: "/contact/contactus" },
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
          text: "生活与感悟",
          // link: "/wiki/life",
          items: [
            {
              text: "生活感悟",
              link: "/wiki/life/reflections",
              collapsed: false,
              items: [],
            },
          ],
        },
      ],
      "/contact": [
        {
          text: "联系我们",
          // link: "/contact",
          items: [
            { text: "联系方式", link: "/contact/contactus" },
            { text: "加入我们", link: "/contact/joinus" },
            { text: "问题反馈", link: "/contact/feedback" },
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
