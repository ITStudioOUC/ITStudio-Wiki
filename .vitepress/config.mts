import { defineConfig } from "vitepress";
import fs from "fs";
import path from "path";

const BASE_PATH = path.join(__dirname, "../src");

function getMarkdownFiles(dirPath: string): { text: string; link: string }[] {
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath)
    .filter(
      (file) =>
        file.endsWith(".md") &&
        !file.startsWith(".") &&
        !file.startsWith("_") &&
        file !== "index.md"
    )
    .sort()
    .map((file) => ({
      text:
        file.replace(/\.md$/, "").charAt(0).toUpperCase() +
        file.replace(/\.md$/, "").slice(1),
      link:
        "/" +
        path
          .relative(BASE_PATH, path.join(dirPath, file))
          .replace(/\.md$/, "")
          .replace(/\\/g, "/"),
    }));
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "爱特工作室（CCF海大学生分会）WIKI",
  description: "Wiki for ITStudio.",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  lang: "zh-CN",
  srcDir: "src",
  lastUpdated: true,

  themeConfig: {
    logo: "/logo.png",
    siteTitle: "ITSTUDIO WIKI",

    // Enable search
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    // Navigation
    nav: [
      { text: "Home", link: "/" },
      { text: "Wiki", link: "/wiki/about/intro" },
      {
        text: "相关链接",
        items: [
          { text: "官方网站", link: "https://www.itstudio.club/" },
          { text: "GitHub", link: "https://github.com/ITStudioOUC" },
        ],
      },
    ],

    sidebar: {
      "/wiki": [
        {
          text: "团队介绍",
          items: [{ text: "爱特工作室简介", link: "/wiki/about/intro" }],
        },
        {
          text: "新闻公告",
          items: [
            {
              text: "近期新闻",
              link: "/wiki/news/recent-news",
              collapsed: false,
              items: getMarkdownFiles(
                path.join(BASE_PATH, "wiki/news/recent-news")
              ),
            },
            {
              text: "活动公告",
              link: "/wiki/news/events",
              collapsed: false,
              items: getMarkdownFiles(path.join(BASE_PATH, "wiki/news/events")),
            },
          ],
        },
        {
          text: "技术与专业领域",
          items: [
            {
              text: "技术博客",
              link: "/wiki/tech/blog",
              collapsed: false,
              items: getMarkdownFiles(path.join(BASE_PATH, "wiki/tech/blog")),
            },
            {
              text: "成员项目",
              link: "/wiki/tech/projects",
              collapsed: false,
              items: getMarkdownFiles(
                path.join(BASE_PATH, "wiki/tech/projects")
              ),
            },
          ],
        },
        {
          text: "生活感悟",
          link: "/wiki/life",
          items: getMarkdownFiles(path.join(BASE_PATH, "wiki/life")),
        },
        {
          text: "联系方式与友情链接",
          items: [
            {
              text: "联系方式",
              link: "/wiki/contact/contatusus",
              collapsed: false,
              items: getMarkdownFiles(
                path.join(BASE_PATH, "wiki/contact/contatusus")
              ),
            },
            {
              text: "友情链接",
              link: "/wiki/contact/link",
              collapsed: false,
              items: getMarkdownFiles(
                path.join(BASE_PATH, "wiki/contact/link")
              ),
            },
          ],
        },
      ],
    },

    // Social links
    socialLinks: [
      { icon: "github", link: "https://github.com/ITStudioOUC/ITStudio-Wiki" },
    ],

    // Footer
    footer: {
      message: "Released under the Apache License 2.0",
      copyright: "Copyright 2002-present ITStudio",
    },

    // Edit link
    editLink: {
      pattern:
        "https://github.com/ITStudioOUC/ITStudio-Wiki/edit/main/src/:path",
      text: "在 GitHub 上编辑此页",
    },

    // Doc footer
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    // Outline
    outline: {
      level: [2, 3],
      label: "目录",
    },
  },
});
