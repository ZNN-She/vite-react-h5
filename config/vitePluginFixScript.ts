// 修复vite开启manualChunks后，script脚本在head加载导致的问题
const vitePluginFixScript = () => {
  return {
    name: "vite-plugin-fix-script",
    transformIndexHtml(html: string) {
      // css
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const res2 = [...html.matchAll(/<link rel="stylesheet" .*?>/gi)].map(
        (item) => item?.[0]
      ); // css
      res2.forEach((link) => {
        html = html.replace(link, "");
      });
      html = html.replace(/<\/body>/gi, `${res2.join("\n\r")}\n\r</body>`);

      // js
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const res = [
        ...html.matchAll(/<script type="module" .*?<\/script>/gi),
      ].map((item) => item?.[0]); // js

      res.forEach((link) => {
        html = html.replace(link, "");
      });
      html = html.replace(/<\/body>/gi, `${res.join("\n\r")}\n\r</body>`);

      return html;
    },
  };
};
export default vitePluginFixScript;
