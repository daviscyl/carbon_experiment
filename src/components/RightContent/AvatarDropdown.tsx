import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { history } from '@umijs/max';
import { Avatar, Spin } from 'antd';
import { setAlpha } from '@ant-design/pro-components';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback } from 'react';
import HeaderDropdown from '../HeaderDropdown';
import { useAuth0 } from '@auth0/auth0-react';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const Name = () => {
  const { user } = useAuth0();

  const nameClassName = useEmotionCss(({ token }) => {
    return {
      width: '70px',
      height: '48px',
      overflow: 'hidden',
      lineHeight: '48px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      [`@media only screen and (max-width: ${token.screenMD}px)`]: {
        display: 'none',
      },
    };
  });

  return <span className={`${nameClassName} anticon`}>{user?.name}</span>;
};

const AvatarLogo = () => {
  const { user } = useAuth0();

  const avatarClassName = useEmotionCss(({ token }) => {
    return {
      marginRight: '8px',
      color: token.colorPrimary,
      verticalAlign: 'top',
      background: setAlpha(token.colorBgContainer, 0.85),
      [`@media only screen and (max-width: ${token.screenMD}px)`]: {
        margin: 0,
      },
    };
  });

  return <Avatar size="small" className={avatarClassName} src={user?.picture} alt="avatar" />;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  const { isLoading, logout } = useAuth0();

  const actionClassName = useEmotionCss(({ token }) => {
    return {
      display: 'flex',
      height: '48px',
      marginLeft: 'auto',
      overflow: 'hidden',
      alignItems: 'center',
      padding: '0 8px',
      cursor: 'pointer',
      borderRadius: token.borderRadius,
      '&:hover': {
        backgroundColor: token.colorBgTextHover,
      },
    };
  });

  const onMenuClick = useCallback((event: MenuInfo) => {
    const { key } = event;
    if (key === 'logout') {
      logout({ returnTo: window.location.origin + DEPLOYMENT_BASE });
      return;
    }
    history.push(`/account/${key}`);
  }, []);

  const loading = (
    <span className={actionClassName}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (isLoading) {
    return loading;
  }

  const menuItems = [
    ...(menu
      ? [
          {
            key: 'center',
            icon: <UserOutlined />,
            label: 'View Profile',
          },
          {
            key: 'settings',
            icon: <SettingOutlined />,
            label: 'Personal Settings',
          },
          {
            type: 'divider' as const,
          },
        ]
      : []),
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Log Out',
    },
  ];

  return (
    <HeaderDropdown
      menu={{
        selectedKeys: [],
        onClick: onMenuClick,
        items: menuItems,
      }}
    >
      <span className={actionClassName}>
        <AvatarLogo />
        <Name />
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
