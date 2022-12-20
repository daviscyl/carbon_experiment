import React from 'react';
import LoginButton from './LoginButton';

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;
export const getChildrenToRender = (item, i) => {
  let tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
  tag = item.href ? 'a' : tag;
  let children =
    typeof item.children === 'string' && item.children.match(isImg)
      ? React.createElement('img', { src: item.children, alt: 'img' })
      : item.children;
  if (item.name.indexOf('login_button') === 0 && typeof item.children === 'object') {
    children = React.createElement(LoginButton, {
      ...item.children,
    });
  }
  return React.createElement(tag, { key: i.toString(), ...item }, children);
};
