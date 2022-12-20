import React from 'react';
export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper jzih1dpqqrg-editor_css' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo jzjgnya1gmn-editor_css',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-J8NSLj9rbsAAAAAAAAAAABkARQnAQ',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#',
          children: [{ children: <p>Get Help</p>, name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      { name: 'title', children: 'Carbon Experiment', className: 'banner5-title' },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: 'One-Stop solution to crate, manage, and review experiment data',
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: 'Created with love for beautiful Dr. Xirui Wang, by Davis Oh-So-Genius Chan',
      },
      {
        name: 'login_button',
        className: 'banner5-button-wrapper',
        children: {
          href: '#',
          className: 'banner5-button',
          type: 'primary',
          children: 'Go To Data',
        },
      },
    ],
  },
  image: {
    className: 'banner5-image',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ',
  },
};
