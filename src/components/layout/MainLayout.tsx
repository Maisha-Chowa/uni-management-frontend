import { Layout, theme } from "antd";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const { Header, Content, Footer } = Layout;
// const items: MenuProps["items"] = [
//   {
//     key: "dashboard",
//     label: <NavLink to="/admin">Dashboard </NavLink>,
//   },
//   {
//     key: "profile",
//     label: "Profile",
//   },
//   {
//     key: "user management",
//     label: "User Management",
//     children: [
//       {
//         key: "create-student",
//         label: <NavLink to="/admin/create-student">Create Student</NavLink>,
//       },
//       {
//         key: "create-faculty",
//         label: <NavLink to="/admin/create-faculty">Create Faculty </NavLink>,
//       },
//       {
//         key: "create-admin",
//         label: <NavLink to="/admin/create-admin">Create Admin </NavLink>,
//       },
//     ],
//   },
// ];

export default function MainLayout() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
