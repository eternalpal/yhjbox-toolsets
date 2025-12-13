export function slugifyTag(input: string | undefined | null): string {
  // ★★★ 新增：安全检查 ★★★
  // 如果 input 是 undefined、null 或者空字符串，直接返回空串，不再继续执行
  if (!input) return '';

  return encodeURIComponent(
    input
      .toString() // 强制转为字符串（防止传入数字导致报错）
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
  );
}