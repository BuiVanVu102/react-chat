import { Avatar, Button, Input, Tooltip, Form } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { UserAddOutlined } from '@ant-design/icons';
import { SendOutlined } from '@ant-design/icons';
import Message from './Message';

//style
const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
    }
    &__title {
      margin: 0;
      font-weight: bold;
    }
    &__description {
      font-size: 12px;
    }
  }
`;
const ButtonFormGroup = styled.div`
  display: flex;
  align-items: center;
`;
const WrapperStyled = styled.div`
  height: 100vh;
`;
const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;
  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  over-flow-y: auto;
`;
function ChatWindow() {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className="header__info">
          <p className="header__title">Room1</p>
          <span className="header__description"> This is room 1</span>
        </div>
        <ButtonFormGroup>
          <Button icon={<UserAddOutlined />}>Invite</Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonFormGroup>
      </HeaderStyled>

      <ContentStyled>
        <MessageListStyled>
          <Message
            text="Hello World This is Test"
            photoURL={null}
            createdAt="9:00"
            displayName="Bui Van Vu"
          ></Message>
          <Message
            text="Hello World This is Test"
            photoURL={null}
            createdAt="9:00"
            displayName="Bui Van Vu"
          ></Message>
          <Message
            text="Hello World This is Test"
            photoURL={null}
            createdAt="9:00"
            displayName="Bui Van Vu"
          ></Message>
          <Message
            text="Hello World This is Test"
            photoURL={null}
            createdAt="9:00"
            displayName="Bui Van Vu"
          ></Message>
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input
              placeholder="Enter a message"
              bordered={false}
              autoComplete="off"
            />
          </Form.Item>
          <Button type="primary" icon={<SendOutlined />}>
            {' '}
          </Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  );
}

export default ChatWindow;
