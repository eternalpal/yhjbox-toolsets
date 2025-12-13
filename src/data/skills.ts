export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm3-4H7v-2h8v2zm0-4H7V7h8v2z"/></svg>`,
    title: "A3 to 2 x A4 Splitter",
    description: "Split A3 PDF pages in half vertically down the middle to two A4 pages",
    href: "/a3-to-2-a4-splitter"
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm3-4H7v-2h8v2zm0-4H7V7h8v2z"/></svg>`,
    title: "AI Image Clear & Upscaler",
    description: "Enhance and upscale images using AI technology, removing noise and improving details.",
    href: "/ai-image-enhancer"
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`,
    title: "随机字符工具",
    description: "生成指定长度和类型的随机字符，支持字母、数字、符号等组合。",
    href: "/random-generator"
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "字符串反写工具",
    description: "将输入的字符串进行反写处理，支持中英文等多种字符。",
    href: "/reverse-string"
  },

];

export type Skill = (typeof skills)[number];

