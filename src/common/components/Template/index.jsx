import {
  DesktopOutlined,
  FileOutlined,
  HddOutlined,
  InsertRowBelowOutlined,
  LaptopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "assets/img/Logo-light.png";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import styles from "./style.module.css";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<img src={logo} alt="logo" width={160} />),
  getItem(<NavLink to="/">Dashboard</NavLink>, "1", <PieChartOutlined />),
  getItem("Notications", "2", <DesktopOutlined />),
  getItem("Quản lý người dùng", "sub1", <UserOutlined />, [
    getItem(<NavLink to="/admin/list-user">Danh Sách Người Dùng</NavLink>, "3"),
  ]),
  getItem("Quản lý phim", "sub2", <InsertRowBelowOutlined />, [
    getItem(<NavLink to="/admin/list-movie">Danh Sách Phim</NavLink>, "4"),
  ]),
  getItem("Quản lý phòng vé ", "sub3", <LaptopOutlined />, [
    getItem(<NavLink to="/admin/movie-shedule">Lịch Chiếu Phim</NavLink>, "5"),
  ]),
  getItem("Quản lý rạp ", "sub4", <HddOutlined />, [
    getItem(<NavLink to="/admin/list-cinema">Thông Tin Cụm Rạp</NavLink>, "6"),
    getItem(
      <NavLink to="/admin/shedule-cinema">Thông Tin Lịch Chiếu</NavLink>,
      "7"
    ),
    getItem("File", "8", <FileOutlined />),
  ]),
];

function Template(props) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Route
      path={props.path}
      exact
      render={(propsRoute) => {
        return (
          <Layout
            style={{
              minHeight: "100vh",
            }}
          >
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
              width={250}
            >
              <div className="logo" />
              <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
              />
              {/* <Menu.Item>
                  <img src={logo} alt="" width={100} />
                  <span>CINEMA</span>
                </Menu.Item>
                <Menu.Item>item 2</Menu.Item>
                <Menu.SubMenu title="sub menu">
                  <Menu.Item>item 3</Menu.Item>
                </Menu.SubMenu> */}
              {/* </Menu> */}
            </Sider>
            <Layout className="site-layout">
              <Header
                className="site-layout-background"
                style={{
                  padding: 0,
                }}
              />
              <Content
                style={{
                  margin: "0 16px",
                }}
              >
                <Breadcrumb
                  style={{
                    margin: "16px 0",
                  }}
                >
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    minHeight: 360,
                  }}
                >
                  <props.component {...propsRoute} />
                </div>
              </Content>
              <Footer
                style={{
                  textAlign: "center",
                }}
              >
                ©2022 Created by chauct02
              </Footer>
            </Layout>
          </Layout>
        );
      }}
    />
  );
}

export default Template;
