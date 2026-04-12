import tailwindcss from "@tailwindcss/vite";
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.yhjtools.top',
  integrations: [mdx(), sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    filter: (page) => {
      // 排除不需要在sitemap中显示的页面
      return !page.includes('/404/') && !page.includes('/page/');
    },
    canonicalURL: 'https://www.yhjtools.top'
  })],
  // 配置sitemap的lastmod
  // 注意：Astro的sitemap集成会自动处理lastmod，不需要手动设置为true
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },
    devToolbar: {
    enabled: false // 禁用开发工具栏
  },
});