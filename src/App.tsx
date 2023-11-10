import { useState } from "react";
import { Button, Card, Layout, Menu, Space, Typography } from "antd";
import "./styles/dashboard.css";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { HiOutlineHome, HiUserAdd } from "react-icons/hi";
import { GrMenu } from "react-icons/gr";
import { FaUsers, FaMoneyCheckAlt } from "react-icons/fa";
import { AiOutlineTrophy } from "react-icons/ai";
import { BsFillInboxesFill } from "react-icons/bs";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import E_RESUME from './Emmanuel_Mensah_Resume_October2023.pdf'

function App() {
  const docs = [
    // {
    //   uri: "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf",
    // },
    // {
    //   uri: E_RESUME
    // },
  ];
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="container">
      <Header className="header">
        <div
          onClick={() => setCollapsed(!collapsed)}
          style={{ display: "flex", alignItems: "center" }}
        >
          <GrMenu size={20} style={{ marginRight: 20 }} />
          <div className="brand">Weart Inc</div>
        </div>
      </Header>
      <Layout>
        <Sider className="" theme="light" collapsed={collapsed}>
          <Menu
            className=""
            mode="inline"
            items={[
              {
                label: "Home",
                key: "home",
                icon: <HiOutlineHome />,
                children: [
                  {
                    label: "Add Profile",
                    key: "add-profile",
                    icon: <HiUserAdd />,
                  },
                  { label: "All Users", key: "all-users", icon: <FaUsers /> },
                ],
              },
              {
                label: "Sculpture",
                key: "scuplture",
                icon: <AiOutlineTrophy />,
              },
              {
                label: "Archives",
                key: "archives",
                icon: <BsFillInboxesFill />,
              },

              {
                label: "User",
                key: "user",
                icon: <HiUserAdd />,
              },
            ]}
          ></Menu>
        </Sider>
        <Content className="content">
          <Button>Add PDF</Button>
          <DocViewer
            pluginRenderers={DocViewerRenderers}
            documents={docs}
            config={{
              header: {
                disableHeader: false,
                disableFileName: false,
                retainURLParams: false,
              },
            }}
          />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
