import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import RoomList from './RoomList';
import UserInfor from './UserInfor';

const SidebarStyle = styled.div`
  background: #0984e3;
  color: white;
  height: 100vh;
`;
function Sidebar() {
  return (
    <SidebarStyle>
      <Row>
        <Col span={24}>
          <UserInfor />
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </SidebarStyle>
  );
}

export default Sidebar;
