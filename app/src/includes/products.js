const products = [
  {
    id: 0,
    name: 'Samsung Galaxy Pro New edition',
    // img: '@/assets/Samsung-galaxy.jpg',
    price: '1200',
    discount: '20%',
    available: true,
    image: 'https://stylus.ua/thumbs/640x358/d4/3e/1845505.png', 
    techSpecs: {
      memory: '10GB',
      CPU: '2GHz',
      RAM: '2GB',
      country: 'South Korean',
    },
    rate: "4",
    reviews: [
      {
        id: 0,
        date: '22/03/2020',
        name: 'Joshua Fuke',
        rate: 5,
        text: "lorem  ipsum - it is the best thing I've even seen"
      },
      {
        id: 1,
        date: '22/03/2020',
        name: 'Mary Landrone',
        rate: 3,
        text: "Worse than IPhone and it's price is too high"
      },

    ]
  },
  {
    id: 1,
    name: 'IPhone x11',
    price: '2100',
    discount: '',
    available: true,
    image: 'https://skeddle.com/wp-content/uploads/2017/11/Apple-IPhone-PNG-Clipart.png', 
    techSpecs: {
      memory: '10GB',
      CPU: '2GHz',
      RAM: '3GB',
      country: 'USA',
    },
    rate: "5",
    reviews: [
      {
        id: 0,
        date: '22/03/2020',
        name: 'Joshua Fuke',
        rate: 5,
        text: "lorem  ipsum - it is the best thing I've even seen"
      },
      {
        id: 1,
        date: '22/03/2020',
        name: 'Mary Landrone',
        rate: 4,
        text: "Worse than IPhone and it's price is too high"
      },
      {
        id: 2,
        date: '22/03/2020',
        name: 'Jack Daniels',
        rate: 1,
        text: "Give my money back ****!"
      },
      {
        id: 3,
        date: '22/03/2020',
        name: 'D.Tyvol',
        rate: 2,
        text: "Good for this price"
      },

    ]
  },
  {
    id: 2,
    name: 'Huawei turbo',
    price: '1400',
    discount: '25%',
    available: true,
    image: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p40/p40-silver.png', 
    techSpecs: {
      memory: '10GB',
      CPU: '2GHz',
      RAM: '5GB',
      country: 'China',
    },
    rate: "5",
    reviews: [
      {
        id: 0,
        date: '22/03/2020',
        name: 'Joshua Fuke',
        rate: 5,
        text: "lorem  ipsum - it is the best thing I've even seen"
      },
      {
        id: 1,
        date: '22/03/2020',
        name: 'Mary Landrone',
        rate: 5,
        text: "Worse than IPhone and it's price is too high"
      },
      {
        id: 2,
        date: '22/03/2020',
        name: 'Jack Daniels',
        rate: 4,
        text: "Give my money back ****!"
      },
      {
        id: 3,
        date: '22/03/2020',
        name: 'D.Tyvol',
        rate: 4,
        text: "Good for this price"
      },
      {
        id: 4,
        date: '22/03/2020',
        name: 'D.Tyvol',
        rate: 5,
        text: "Good for this price"
      },

    ]
  },
  {
    id: 3,
    name: 'Motorola blue-ray',
    price: '900',
    discount: '',
    available: false,
    image: 'https://motorolaus.vtexassets.com/arquivos/ids/158148/Moto-G-Power-NA---Smoke-Black---PDP-HERO--1-.png?v=637176373224700000', 
    techSpecs: {
      memory: '10GB',
      CPU: '2GHz',
      RAM: '4GB',
      country: 'USA',
    },
    rate: "4",
    reviews: [
      {
        id: 0,
        date: '22/03/2020',
        name: 'Joshua Fuke',
        rate: 2,
        text: "lorem  ipsum - it is the best thing I've even seen"
      },
      {
        id: 1,
        date: '22/03/2020',
        name: 'Mary Landrone',
        rate: 4,
        text: "Worse than IPhone and it's price is too high"
      },
      {
        id: 2,
        date: '22/03/2020',
        name: 'Jack Daniels',
        rate: 4,
        text: "Give my money back ****!"
      },
      {
        id: 3,
        date: '22/03/2020',
        name: 'D.Tyvol',
        rate: 4,
        text: "Good for this price"
      },

    ]
  },
  {
    id: 4,
    name: 'Nokia 520',
    price: '200',
    discount: '15%',
    available: true,
    image: 'https://andro-news.com/images/content/nokia_150-front_back-cyan.png',
    techSpecs: {
      memory: '10GB',
      CPU: '2GHz',
      RAM: '4GB',
      country: 'Finland',
    },
    rate: "3",
    reviews: [
      {
        id: 0,
        date: '22/03/2020',
        name: 'Joshua Fuke',
        rate: 4,
        text: "lorem  ipsum - it is the best thing I've even seen"
      },
      {
        id: 1,
        date: '22/03/2020',
        name: 'Mary Landrone',
        rate: 3,
        text: "Worse than IPhone and it's price is too high"
      },
      {
        id: 2,
        date: '22/03/2020',
        name: 'Jack Daniels',
        rate: 4,
        text: "Give my money back ****!"
      },

    ] 
  }
];

export default products