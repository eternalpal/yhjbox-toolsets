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
      // ❌ 非法 URL
      if (page.includes('%20')) return false;

      // ❌ 低质量页面
      const exclude = [
        '/tag/',
        '/category/',
        '/author/',
        '/page/',
        '/search',
        '/404',
        '/demo'
      ];

      if (exclude.some(p => page.includes(p))) return false;

      return true;
    },
    canonicalURL: 'https://www.yhjtools.top'
  })],
  // 注意：现在sitemap会自动收录所有符合条件的页面，不再需要手动指定
  // 注意：WeChat-GIF-Compressor 页面可能需要添加尾部斜杠，取决于实际生成的URL
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