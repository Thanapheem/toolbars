import { Avatar, Col, Row, Select, Space } from "antd";
import React from "react";
import Icon from "@ant-design/icons";
import { MenuIcon } from "./Icon/Icon";
export type IToolProp = {
  showProfile?: true | false;
  profileName?: string;
  email?: string;
  showLanguageSwitcher?: true | false;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Tool = ({
  showProfile = true,
  showLanguageSwitcher,
  onClick,
  profileName,
  email,
}: IToolProp) => {
  return (
    <div>
      <section hidden={showProfile}>
        <span>
          <Row align={"middle"} justify={"space-between"}>
            <Col style={{ marginRight: 10 }}>
              <Select
                options={[{ label: "EN", value: "en" }]}
                style={{ width: 100 }}
              />
            </Col>
            <Col style={{ marginRight: 10 }}>
              <Icon
                component={() => {
                  return <MenuIcon />;
                }}
                rev={undefined}
              />
            </Col>
            <Col>
              <Avatar
                onClick={() => {
                  console.log("dsad");
                }}
                src={
                  "https://vetaar-anchor.com/Anchor_Project/images/avatar_0.png"
                }
                size={40}
              />
            </Col>
            <Col>
              <p style={{ marginLeft: 10 }}>
                {profileName}
                <br />
                {email}
              </p>
            </Col>
          </Row>
        </span>
      </section>
    </div>
  );
};

export default Tool;
