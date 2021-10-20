import { Spin } from 'antd';
import react from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { auth } from '../firebase/config';
export const AuthContext = react.createContext();

const LoadingStyled = styled(Spin)`
  display: flex;
  padding-top: 350px;
  justify-content: center;
  align-items: center;
`;
function AuthProvider({ children }) {
  const [user, setUser] = react.useState({});
  const history = useHistory();
  const [isLoading, setIsLoading] = react.useState(true);

  react.useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        setIsLoading(false);
        history.push('/');
        return;
      } else {
        setIsLoading(false);
        history.push('/login');
      }
    });
    //clean
    return () => {
      unsubscibed();
    };
  }, [history]);

  return (
    <div>
      <AuthContext.Provider value={{ user }}>
        {isLoading ? <LoadingStyled /> : children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
