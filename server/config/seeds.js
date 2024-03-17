const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Aries' },
    { name: 'Taurus' },
    { name: 'Gemini' },
    { name: 'Cancer' },
    { name: 'Leo' },
    { name: 'Virgo' },
    { name: 'Libra' },
    { name: 'Scorpio' },
    { name: 'Sagittarius' },
    { name: 'Capricorn' },
    { name: 'Aquarius' },
    { name: 'Pisces' }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Baby Ram Onesie',
      description: 'Adorable onesie with a ram design for little Aries babies!',
      image: 'baby-ram-onesie.jpg',
      category: categories[0]._id,
      price: 12.99,
      quantity: 50
    },
    {
      name: 'Taurus Plush Toy',
      description: 'Soft and cuddly plush toy perfect for little Taurus babies!',
      image: 'taurus-plush-toy.jpg',
      category: categories[1]._id,
      price: 14.99,
      quantity: 40
    },
    {
      name: 'Gemini Baby Book',
      description: 'Interactive baby book with dual storytelling for curious Gemini babies!',
      image: 'gemini-baby-book.jpg',
      category: categories[2]._id,
      price: 9.99,
      quantity: 30
    },
    {
      name: 'Cancer Moon Night Light',
      description: 'Gentle night light shaped like a crescent moon for calming Cancer babies!',
      image: 'cancer-moon-night-light.jpg',
      category: categories[3]._id,
      price: 19.99,
      quantity: 20
    },
    {
      name: 'Leo Lion Rattle',
      description: 'Colorful lion-shaped rattle to entertain little Leo babies!',
      image: 'leo-lion-rattle.jpg',
      category: categories[4]._id,
      price: 8.99,
      quantity: 40
    },
    {
      name: 'Virgo Baby Blanket',
      description: 'Soft and cozy blanket with a delicate design for sweet Virgo babies!',
      image: 'virgo-baby-blanket.jpg',
      category: categories[5]._id,
      price: 17.99,
      quantity: 25
    },
    {
      name: 'Libra Scales Teether',
      description: 'Safe and soothing teether shaped like Libra scales for teething Libra babies!',
      image: 'libra-scales-teether.jpg',
      category: categories[6]._id,
      price: 6.99,
      quantity: 35
    },
    {
      name: 'Scorpio Scorpion Mobile',
      description: 'Whimsical mobile featuring scorpion designs for imaginative Scorpio babies!',
      image: 'scorpio-scorpion-mobile.jpg',
      category: categories[7]._id,
      price: 24.99,
      quantity: 15
    },
    {
      name: 'Sagittarius Adventure Onesie',
      description: 'Explore-themed onesie for adventurous Sagittarius babies!',
      image: 'sagittarius-adventure-onesie.jpg',
      category: categories[8]._id,
      price: 11.99,
      quantity: 45
    },
    {
      name: 'Capricorn Mountain Rattle',
      description: 'Mountain-shaped rattle to stimulate little Capricorn babies!',
      image: 'capricorn-mountain-rattle.jpg',
      category: categories[9]._id,
      price: 9.99,
      quantity: 40
    },
    {
      name: 'Aquarius Star Mobile',
      description: 'Celestial-themed mobile with stars and moons for dreamy Aquarius babies!',
      image: 'aquarius-star-mobile.jpg',
      category: categories[10]._id,
      price: 22.99,
      quantity: 30
    },
    {
      name: 'Pisces Ocean Play Mat',
      description: 'Interactive play mat with ocean motifs for imaginative Pisces babies!',
      image: 'pisces-ocean-play-mat.jpg',
      category: categories[11]._id,
      price: 29.99,
      quantity: 20
    }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});