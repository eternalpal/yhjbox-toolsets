// 导入两位主要作者的头像
import avatarYhjbox from '../assets/images/avatar01.jpg';
import avatarPal from '../assets/images/avatar02.jpg';

export const authors = [
  {
    name: 'Yhjbox',
    avatar: avatarYhjbox,
    url: '#',
  },
  {
    name: 'Pal',
    avatar: avatarPal,
    url: '#',
  },
];

export type Author = typeof authors[number];

// 获取作者信息的辅助函数
export function getAuthor(name?: string): Author {
  // 如果没有提供作者名称或名称为空，返回默认作者
  if (!name) {
    return defaultAuthor;
  }
  
  // 尝试根据名称查找作者
  return authors.find(author => author.name === name) || {
    name,
    avatar: avatarYhjbox, // 默认使用Yhjbox的头像
    url: '#',
  };
}

// 获取默认作者
export const defaultAuthor = authors[0]; // 默认作者是Yhjbox


