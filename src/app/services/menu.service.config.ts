export const getLeftMenuData: any[] = [
  // {
  //   title: 'Settings',
  //   key: 'settings',
  //   icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
  // },
  {
    title: 'Dashboard',
    key: 'dashboard',
    url: '/dashboard',
    icon: 'icmn icmn-home',
  },
  {
    divider: true,
  },
  {
    title: 'Doctor',
    key: 'doctor',
    url: '/doctor',
    icon: 'icmn icmn-plus',
  },
  {
    divider: true,
  },

  {
    title: 'Patient',
    key: 'patient',
    icon: 'icmn icmn-accessibility',
    children: [
      {
        title: 'List',
        key: 'Patient',
        url: '/patient/list',
        pro: true,
      },

    ],
  },
  {
    divider: true,
  },
  {
    title: 'Adminstration',
    key: 'admin',
    url: '/admin',
    icon: 'icmn icmn-office',
  },
]
export const getTopMenuData: any[] = [
  {
    title: 'Settings',
    key: 'settings',
    icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
  },
  {
    title: 'Docs',
    key: 'documentation',
    url: 'https://docs.cleanuitemplate.com',
    target: '_blank',
    icon: 'icmn icmn-books',
  },
  {
    title: 'Dashboard Alpha',
    key: 'dashboardAlpha',
    url: '/admin/alpha',
    icon: 'icmn icmn-home',
  },

]
