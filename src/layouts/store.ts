/**
 * layout store
 */
import { NavBarProps } from "antd-mobile";
import { atom } from "jotai";

/**
 * 用户信息
 */
const useInfo = atom();

/**
 * 系统名称
 */
const systemName = atom("应用名称-v1.0");

const navBarInfo = atom<NavBarProps & {
  title: string;
}>({
  title: "应用名称-v1.0",
  back: null
});

/**
 * layoutStore
 */
const layoutStore = { useInfo, systemName, navBarInfo };

export default layoutStore;
