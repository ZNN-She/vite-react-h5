import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import mockDevServerPlugin from "vite-plugin-mock-dev-server";
import postcssPxtoRem from "postcss-pxtorem";
import vitePluginFixScript from "./config/vitePluginFixScript";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default (configEnv: any) => {
  const { mode } = configEnv;
  console.log(configEnv.mode);
  return defineConfig({
    base: `/${pkg.name}`,
    plugins: [
      react(),
      ...(mode === "mock" ? [mockDevServerPlugin()] : []),
      vitePluginFixScript(),
    ],
    css: {
      postcss: {
        plugins: [
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          postcssPxtoRem({
            rootValue: 37.5, // 按照自己的设计稿修改
            unitPrecision: 2, // 保留到5位小数
            selectorBlackList: ["ignore", "tab-bar", "tab-bar-item"], // 忽略转换正则匹配项
            propList: ["*"],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
          }),
        ],
      },
      preprocessorOptions: {
        extract: false,
        less: {
          globalVars: {},
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      open: true,
      proxy: {
        "/sys": {
          target: "http://localhost:5317/", // 代理地址
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/sys/, ""),
        },
      },
    },
  });
};
