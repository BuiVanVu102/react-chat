import { Avatar, Button, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { auth, db } from '../../firebase/config';
import { AuthContext } from '../../context/AuthProvider';
const WrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(240, 240, 240);

  .username {
    color: white;
    margin-left: 5px;
  }
`;
function UserInfor() {
  // React.useEffect(() => {
  //   db.collection('user').onSnapshot((snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //   });
  // }, []);
  const {
    user: { displayName, photoURL },
  } = React.useContext(AuthContext);
  return (
    <WrapperStyle>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className="username">{displayName}</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
        Logout
      </Button>
    </WrapperStyle>
  );
}

export default UserInfor;
