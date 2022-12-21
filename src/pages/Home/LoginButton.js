import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button } from 'antd';

const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() =>
        loginWithRedirect({ redirectUri: window.location.origin + DEPLOYMENT_BASE + '/list' })
      }
      {...props}
    />
  );
};

export default LoginButton;
