/**
 * 页面整体布局
 */
import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import layoutStore from './store';
import styles from './index.module.less';
import { useAtom, useAtomValue } from 'jotai';
import { Badge, NavBar, TabBar } from 'antd-mobile';
import { AppOutline, MessageFill, MessageOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';


const BasicLayout: React.FC = () => {
  const systemName = useAtomValue(layoutStore.systemName);
  const navBarInfo = useAtomValue(layoutStore.navBarInfo);
  const nav = useNavigate();

  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: 'page1',
      title: '待办',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: 'page2',
      title: '消息',
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: '99+',
    },
    {
      key: 'user-center',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  function onChangeTabBar(key: string) {
    console.log('change', key);
    nav(key)
  }


  return (
    <div className={styles.basicLayout}>
      <div className={styles.header}>
        <NavBar
          {...navBarInfo}
        >
          {navBarInfo.title || systemName}
        </NavBar>
      </div>
      <div className={styles.content}>
        <Outlet></Outlet>
      </div>
      <div className={styles.footer}>
        <TabBar
        onChange={onChangeTabBar}
        >
          {tabs.map(item => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </TabBar>
      </div>
    </div>
  );
};

function LayoutPage() {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/register') {
    return <Outlet></Outlet>;
  }

  return <BasicLayout />;
}

export default LayoutPage;