export const getLeftMenuData: any[] = [
  // {
  //   title: 'Settings',
  //   key: 'settings',
  //   icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
  // },
  // {
  //   title: 'Documentation',
  //   key: 'documentation',
  //   url: 'https://docs.cleanuitemplate.com',
  //   target: '_blank',
  //   icon: 'icmn icmn-books',
  // },
  // {
  //   divider: true,
  // },
  // {
  //   title: 'Dashboard Alpha',
  //   key: 'dashboardAlpha',
  //   url: '/dashboard/alpha',
  //   icon: 'icmn icmn-home',
  // },
  {
    title: 'Patient',
    key: 'patient',
    children: [
      {
        title: 'List',
        key: 'dashboard',
        url: '/admin/list',
        pro: true,
      },
      // {
      //   title: 'Products Catalog',
      //   key: 'productsCatalog',
      //   url: '/admin/all-subscriptions',
      //   pro: true,
      // },
      // {
      //   title: 'Products Details',
      //   key: 'productsDetails',
      //   url: '/ecommerce/product-details',
      //   pro: true,
      // },
      // {
      //   title: 'Products Edit',
      //   key: 'productsEdit',
      //   url: '/ecommerce/product-edit',
      //   pro: true,
      // },
      // {
      //   title: 'Products List',
      //   key: 'productsList',
      //   url: '/ecommerce/products-list',
      //   pro: true,
      // },
      // {
      //   title: 'Orders',
      //   key: 'orders',
      //   url: '/ecommerce/orders',
      //   pro: true,
      // },
      // {
      //   title: 'Cart',
      //   key: 'cart',
      //   url: '/ecommerce/cart',
      //   pro: true,
      // },
    ],
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
