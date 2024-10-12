/**
 * json url参数 params.get('name')
 * @param url 默认当前网页地址
 * @returns URLSearchParams
 */
export function urlSearchParams(urlStr?: string): URLSearchParams {
  const url = new URL(urlStr || window.location.href);
  const params = new URLSearchParams(url.search);
  return params;
}

/**
 * px 转rem
 * @param px 
 * @returns 
 */
export function transformPxToRem(px: number): string {
  return (px / 37.5).toFixed(3) + 'rem'
}

// px根据比例换算成不同屏幕尺寸下的px数据
export function transformPxToPx(px: number): string {
  return (px * ((document.documentElement.clientWidth / 375))).toFixed(3) + 'px'
}

// px根据比例换算成不同屏幕尺寸下的px数据
export function transformPxToPxNum(px: number): number {
  return (px * ((document.documentElement.clientWidth / 375)))
}