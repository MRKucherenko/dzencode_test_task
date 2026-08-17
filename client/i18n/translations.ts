export const translations = {
  ru: {
    nav: {
      orders: 'Приход',
      groups: 'Группы',
      products: 'Продукты',
      users: 'Пользователи',
      settings: 'Настройки' 
    },
    common: {
      delete: 'Удалить',
      cancel: 'Отменить',
      loading: 'Загрузка',
      loadError: 'Ошибка загрузки',
      add: 'Добавить' 
    },
    orders: {
      price: 'Цена',
      productsCount: 'Продукта',
      selectFromList: 'Выберите позицию из списка слева',
      confirmDelete: 'Вы уверены, что хотите удалить приход' 
    },
    products: {
      from: 'с',
      to: 'по',
      allTypes: 'Все типы',
      serialNumber: 'Серийный номер:',
      allSpecifications: 'Все спецификации',
      confirmDelete: 'Вы уверены, что хотите удалить продукт',
      addProduct: 'Добавить продукт' 
    },
    types: {
      Monitors: 'Мониторы',
      Laptops: 'Ноутбуки',
      Keyboards: 'Клавиатуры',
    },
    specifications: {
      Specification1: 'Спецификация 1',
      Specification2: 'Спецификация 2',
      Specification3: 'Спецификация 3',
    },
  },
  en: {
    nav: {
      orders: 'Orders',
      groups: 'Groups',
      products: 'Products',
      users: 'Users',
      settings: 'Settings'
    },
    common: {
      delete: 'Delete',
      cancel: 'Cancel',
      loading: 'Loading',
      loadError: 'Failed to load',
      add: 'Add' 
    },
    orders: {
      price: 'Price',
      productsCount: 'Products',
      selectFromList: 'Select an item from the list',
      confirmDelete: 'Are you sure you want to delete order'
    },
    products: {
      from: 'from',
      to: 'to',
      allTypes: 'All types',
      serialNumber: 'Serial number:',
      allSpecifications: 'All specifications',
      confirmDelete: 'Are you sure you want to delete product',
      addProduct: 'Add product' 
    },
    types: {
      Monitors: 'Monitors',
      Laptops: 'Laptops',
      Keyboards: 'Keyboards',
},
    specifications: {
      Specification1: 'Specification 1',
      Specification2: 'Specification 2',
      Specification3: 'Specification 3',
},
  },
};

export type Language = keyof typeof translations;
