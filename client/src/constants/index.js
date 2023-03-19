import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'Home',
    imgUrl: dashboard,
    link: '/',
    isNavElement: true,
  },
  // {
  //   name: 'campaign',
  //   imgUrl: createCampaign,
  //   link: '/create-campaign',
  //   isNavElement: true,
  // },
  // {
  //   name: 'payment',
  //   imgUrl: payment,
  //   link: '/',
  //   disabled: true,
  //   isNavElement: true,
  // },
  // {
  //   name: 'withdraw',
  //   imgUrl: withdraw,
  //   link: '/',
  //   disabled: true,
  //   isNavElement: true,
  // },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
    isNavElement: true,
  },
  // {
  //   name: 'logout',
  //   imgUrl: logout,
  //   link: '/',
  //   disabled: true,
  //   isNavElement: true,
  // },
];
