import React from "react";
import { Avatar, List } from "antd-mobile";
import { RightOutline } from "antd-mobile-icons";
import { transformPxToRem } from "@/utils";

export default function Home() {
  return (
    <div>
      <div style={{
        padding: `${transformPxToRem(12)} ${transformPxToRem(20)}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Avatar src='' />
        <div style={{ width: transformPxToRem(12) }}></div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: transformPxToRem(16), fontWeight: 'bold' }}>用户名</div>
          <div>邮箱</div>
        </div>
        <div>
          <RightOutline style={{fontSize: transformPxToRem(20)}} />
        </div>
      </div>
    </div>
  );
};