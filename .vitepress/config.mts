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

    // Last updated
    lastUpdated: {
      text: "上次更新",
    },

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
      { text: "主页", link: "/" },
      { text: "Wiki", link: "/wiki/about/intro" },
      { text: "爱特展示网", link: "https://www.itstudio.club/" },
      { text: "Github", link: "https://github.com/ITStudioOUC" },
    ],

    // Sidebar
    sidebarMenuLabel: "菜单",

    sidebar: {
      "/wiki": [
        {
          text: "爱特工作室简介",
          link: "/wiki/about/intro",
        },
        {
          text: "OUC生存指北",
          link: "/wiki/ouc",
          items: getMarkdownFiles(path.join(BASE_PATH, "wiki/ouc")),
        },
        {
          text: "大学该如何度过",
          items: [  
            {text:"01大学该如何度过", link: "wiki/ouc/CollegeLifeHowTo/01howto"},
            {text:"02早做规划", link: "wiki/ouc/CollegeLifeHowTo/02planning"},
            {text:"03各方向建议", link: "wiki/ouc/CollegeLifeHowTo/03suggestion"},
            {text:"04学习建议和一些争论", link: "wiki/ouc/CollegeLifeHowTo/04studyhowto"},
          ]
        },
        {
          text: "本科科研之旅",
          items: [  
            {text:"理性科研", link: "wiki/ouc/howto_research/RationalResearch"},
            {text:"科研经历分享", link: "wiki/ouc/howto_research/Research01"},
          ]
        },
        {
          text: "联系方式与友情链接",
          items: [
            {
              text: "联系方式",
              link: "/wiki/about/contact",
            },
            {
              text: "友情链接",
              link: "/wiki/about/link",
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
      copyright: "Copyright © 2024 ITStudio Opensource Community",
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

    // Light and dark mode
    darkModeSwitchLabel: "切换主题",

    lightModeSwitchTitle: "切换到浅色主题",
    darkModeSwitchTitle: "切换到深色主题",

    // Return to top
    returnToTopLabel: "返回顶部",

    // Show external link icon in markdown links(only external)
    externalLinkIcon: true,

    // Outline
    outline: {
      level: [2, 3],
      label: "目录",
    },
  },
});
