export const menuList = [
  {
    label: "Dashboard",
    menu: "DASHBOARD",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
  {
    label: "User",
    menu: "USER",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
  {
    label: "Slider",
    menu: "SLIDER",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
  {
    label: "Category",
    menu: "CATEGORY",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
  {
    label: "Sub Category",
    menu: "SUB_CATEGORY",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
  {
    label: "Sub Category Child",
    menu: "SUB_CATEGORY_CHILD",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
  {
    label: "Products",
    menu: "PRODUCTS",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
  {
    label: "Blog",
    menu: "BLOG",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
  {
    label: "Order",
    menu: "ORDER",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
  {
    label: "Order Status",
    menu: "ORDER_STATUS",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
  {
    label: "Shipping",
    menu: "SHIPPING",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
  {
    label: "Coupon",
    menu: "COUPON",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
  {
    label: "Setting",
    menu: "SETTING",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
  {
    label: "Team",
    menu: "TEAM",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
  {
    label: "Role",
    menu: "ROLE",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
  {
    label: "Admin",
    menu: "ADMIN",
    CREATE: 1,
    READ: 1,
    UPDATE: 1,
    DELETE: 1,
  },
];

// edit
export const checkPermission = (auth, name, action) => {
  const { user } = auth;
  const { permissionList } = user;
  if (permissionList === null) {
    return true;
  } else {
    var findArray = permissionList.find((x) => x.menu === name && x[action]);
    if (findArray) {
      return true;
    } else {
      return false;
    }
  }

  // edit
  //   var findArray = permissionList.find((x) => x.menu === name && x[action]);
  //   if (findArray) {
  //     return true;
  //   }
};
