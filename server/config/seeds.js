const db = require('./connection');

//import models to use
const User = require('../models/User');
const Product = require('../models/Product');
const Category = require('../models/Category');


//create default products in store
db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Shoes' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  //products default
  const products = await Product.insertMany([
    {
      name: 'Cookies',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://www.ionos.mx/digitalguide/fileadmin/DigitalGuide/Teaser/cookies-laptop-t.jpg',
      category: categories[0]._id,
      price: 1.89,
      quantity: 32
    },
    {
      name: 'Coffee',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 120
    },
    {
      name: 'Computer',
      category: categories[1]._id,
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://pcredcom.com/blog/wp-content/uploads/2020/05/Elegir-computadora-ideal-2.jpeg',
      price: 750.01,
      quantity: 45
    },
    {
      name: 'Camera',
      category: categories[1]._id,
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://www.dzoom.org.es/wp-content/uploads/2017/08/live-view-fotografia-810x540.jpg',
      price: 320.00,
      quantity: 50
    },
    {
      name: 'Cellphone',
      category: categories[1]._id,
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311__480.jpg',
      price: 149.99,
      quantity: 100
    },
    {
      name: 'Go pro',
      category: categories[1]._id,
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://i.blogs.es/b44142/gopro-hero-10-black-2-/1366_2000.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Harry Potter Book Cover',
      category: categories[2]._id,
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/32f5d032287113.567b95f352e56.jpg',
      price: 654.00,
      quantity: 30
    },
    {
      name: 'Jules Verne Book Cover',
      category: categories[2]._id,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: 'https://i.pinimg.com/736x/a6/0f/34/a60f3435af27a7079a06e3892908385e--book-cover-art-book-covers.jpg',
      price: 609.17,
      quantity: 20
    },
    {
      name: 'John Green Book Cover',
      category: categories[2]._id,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/18cc0724766217.56339b55aa9ea.jpg',
      price: 240.99,
      quantity: 41
    },
    {
      name: "Shoes Sport for Men's",
      category: categories[3]._id,
      description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'https://m.media-amazon.com/images/I/81i057rz8gS._UL1500_.jpg',
      price: 99.99,
      quantity: 1000
    },
    {
      name: "Nike's Casual Shoes",
      category: categories[3]._id,
      description: 'Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/f55bf732-7fa9-4b38-8464-3332d97f879a/nike%E2%80%99s-best-casual-shoes-for-everyday-wear.jpg',
      price: 78.99,
      quantity: 100
    },
    {
      name: 'Sneakers',
      category: categories[3]._id,
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://i.insider.com/5ebf0f752618b91d132c2c40?width=1200&format=jpeg',
      price: 100.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Hilary',
    lastName: 'Vazconez',
    email: 'pamela@mail.com',
    password: 'password',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'TestUser',
    lastName: 'Last',
    email: 'test@mail.com',
    password: 'password'
  });

  console.log('users seeded');

  process.exit();
});
