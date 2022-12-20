import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button } from 'antd';

const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() => loginWithRedirect({ redirectUri: 'http://localhost:8000/list' })}
      {...props}
    />
  );
};

export default LoginButton;
