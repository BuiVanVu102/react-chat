import { Button, Col, Row, Typography } from 'antd';
import React from 'react';
// import { useHistory } from 'react-router';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/services';

// const fbProvider = new firebase.auth.FacebookAuthProvider();
const ggProvider = new firebase.auth.GoogleAuthProvider();
const { Title } = Typography;
function Login() {
  const handleGgLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(ggProvider);

    if (additionalUserInfo?.isNewUser) {
      addDocument('user', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };
  return (
    <div>
      <Row justify="center">
        <Col span={8}>
          <Title style={{ textAlign: 'center', marginTop: 250 }} level={3}>
            WellCome to React Chat
          </Title>
          <Button
            style={{ width: '100%', marginBottom: 5 }}
            onClick={handleGgLogin}
          >
            Login with Google
          </Button>
          <Button style={{ width: '100%' }} /*onClick={handleFbLogin}*/>
            Login with FaceBook
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
