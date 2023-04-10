import React from "react";
import { Layout, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 1440,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "white",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

const HomeLayout: React.FC = () => (
  <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>
        <div className="flex justify-between">
          <ul className="flex">
            <li className="mx-3">
              <a href="#">Sản phẩm</a>
            </li>
            <li className="mx-3">
              <a href="#">Liên hệ</a>
            </li>
            <li className="mx-3">
              <a href="#">Tìm kiếm</a>
            </li>
            <li className="mx-3">
              <a href="#">Sản phẩm 1</a>
            </li>
            <li className="mx-3">
              <a href="#">Sản phẩm 1</a>
            </li>
          </ul>
          <div>
            <button className="mx-3">Đăng nhập</button>
            <button className="mx-3">Đăng ký</button>
          </div>
        </div>
      </Header>
      <Content style={contentStyle}></Content>
      <Footer style={footerStyle}>2023 thaivh</Footer>
    </Layout>
  </Space>
);

export default HomeLayout;
