import { Button, Collapse, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';
const PanelStyle = styled(Collapse.Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: 'white';
`;
function RoomList() {
  return (
    <div>
      <Collapse ghost defaultActiveKey={[1]}>
        <PanelStyle header="Room List" key="1">
          <LinkStyled style={{ color: 'white' }}>Room 1</LinkStyled>
          <LinkStyled style={{ color: 'white' }}>Room 2</LinkStyled>
          <LinkStyled style={{ color: 'white' }}>Room 3</LinkStyled>
          <Button
            type="text"
            icon={<PlusSquareOutlined />}
            className="add-room"
          >
            Add The Room
          </Button>
        </PanelStyle>
      </Collapse>
    </div>
  );
}

export default RoomList;
