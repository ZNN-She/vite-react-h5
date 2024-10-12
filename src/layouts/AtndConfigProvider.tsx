/**
 * antd 全局配置
 */
import { ReactElement } from 'react'
import zhCN from 'antd-mobile/es/locales/zh-CN'
import { ConfigProvider } from 'antd-mobile'

export default function AtndConfigProvider(props: { children: ReactElement }): JSX.Element {
  return (
    <ConfigProvider
      locale={zhCN}
    >
      {props.children}
    </ConfigProvider>
  )
}