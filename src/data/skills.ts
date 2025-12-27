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


];

export type Skill = (typeof skills)[number];

