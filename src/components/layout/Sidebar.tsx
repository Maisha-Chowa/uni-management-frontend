import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarGenerator } from "../../utils/sidebarGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

export default function Sidebar() {
  const role = "student";
  let sidebarItems;
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarGenerator(adminPaths);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarGenerator(facultyPaths);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarGenerator(studentPaths);
      break;
    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        // items={items}
        items={sidebarItems}
      />
    </Sider>
  );
}
