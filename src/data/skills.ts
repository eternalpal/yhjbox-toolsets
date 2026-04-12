export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm3-4H7v-2h8v2zm0-4H7V7h8v2z"/></svg>`,
    title: "A3 to 2 x A4 Splitter",
    title_zh: "A3 转 2 x A4 切分工具",
    description: "Split A3 PDF pages in half vertically down the middle to two A4 pages",
    description_zh: "将 A3 PDF 页面垂直切分为两个 A4 页面",
    href: "/a3-to-2-a4-splitter",
    href_zh: "/a3-to-2-a4-splitter"
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm3-4H7v-2h8v2zm0-4H7V7h8v2z"/></svg>`,
    title: "AI Image Clear & Upscaler",
    title_zh: "AI 图片清晰与放大工具",
    description: "Enhance and upscale images using AI technology, removing noise and improving details.",
    description_zh: "使用 AI 技术增强和放大图片，去除噪点并改善细节",
    href: "/ai-image-enhancer",
    href_zh: "/ai-image-enhancer"
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm3-4H7v-2h8v2zm0-4H7V7h8v2z"/></svg>`,
    title: "WeChat GIF Compressor",
    title_zh: "微信公众号 GIF 瘦身助手",
    description: "Optimize GIFs for WeChat with professional FFmpeg commands.",
    description_zh: "为微信公众号优化 GIF 文件大小，生成专业的 FFmpeg 命令",
    href: "/WeChat-GIF-Compressor",
    href_zh: "/WeChat-GIF-Compressor"
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm3-4H7v-2h8v2zm0-4H7V7h8v2z"/></svg>`,
    title: "Online Essay Grid Layout Generator",
    title_zh: "在线作文格子排版生成器",
    description: "Create composition grid paper layouts with automatic formatting and export options.",
    description_zh: "创建作文格子纸排版，支持自动格式化和导出功能",
    href: "/Online-Essay-Grid-Layout-Generator",
    href_zh: "/Online-Essay-Grid-Layout-Generator"
  }

];

export type Skill = (typeof skills)[number];

