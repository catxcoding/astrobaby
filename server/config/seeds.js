const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

// organizes categories
db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  // gives category names to the products
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

  // products that are put into website and products library
  const products = await Product.insertMany([
    {
      name: 'Baby Ram Onesie',
      description: 'Adorable onesie with a ram design for little Aries babies!',
      image: 'ariesOnesie.jpg',
      category: categories[0]._id,
      price: 12.99,
      quantity: 50
    },
    {
      name: 'Adorable Ram Plush',
      description: 'Adorable ram with its own set of red pajamas for the Aries babies!',
      image: 'ariesPlush.jpg',
      category: categories[0]._id,
      price: 14.99,
      quantity: 40
    },
    {
      name: 'Taurus Plush Toy',
      description: 'Soft and cuddly plush toy perfect for little Taurus babies!',
      image: 'TauresPlush.jpg',
      category: categories[1]._id,
      price: 14.99,
      quantity: 40
    },
    {
      name: 'Taures Night Light',
      description: 'A soft night light for your deeming Taures babies!',
      image: 'tauresLight.jpg',
      category: categories[1]._id,
      price: 19.99,
      quantity: 20
    },
    {
      name: 'Gemini Baby Book',
      description: 'Interactive baby book with dual storytelling for curious Gemini babies!',
      image: 'geminiBabyBook.jpg',
      category: categories[2]._id,
      price: 9.99,
      quantity: 30
    },
    {
      name: 'Gemini Power Ranger',
      description: 'This dual-sided TA at the coding bootcamp embodies the Gemini spirit, Nirav the Gemini Power Ranger!',
      image: 'geminiPR.jpg',
      category: categories[2]._id,
      price: 14.99,
      quantity: 25
    },
    {
      name: 'Cancer Moon Night Light',
      description: 'Gentle night light shaped like a crescent moon for calming Cancer babies!',
      image: 'cancerLight.jpg',
      category: categories[3]._id,
      price: 19.99,
      quantity: 20
    },
    {
      name: 'Cancer Music Player',
      description: 'a music player for calming Cancer babies sleepy nap times!',
      image: 'cancerMusicPlayer.jpg',
      category: categories[3]._id,
      price: 19.99,
      quantity: 30
    },
    {
      name: 'Leo Lion Teether',
      description: 'Colorful lion-shaped Teether to entertain little Leo babies!',
      image: 'leoTeether.jpg',
      category: categories[4]._id,
      price: 8.99,
      quantity: 40
    },
    {
      name: 'Leo Lion Baby Mic',
      description: 'This Golden Baby Mic is perfect for those Loud and Proud Leo Babies!',
      image: 'leoBabyMic.jpg',
      category: categories[4]._id,
      price: 49.99,
      quantity: 25
    },
    {
      name: 'Virgo Baby Blanket',
      description: 'Soft and cozy blanket with a delicate design for sweet Virgo babies!',
      image: 'virgoBlanket.jpg',
      category: categories[5]._id,
      price: 17.99,
      quantity: 25
    },
    {
      name: 'Virgo Baby Blocks',
      description: 'baby blocks for those playful and sweet Virgo babies!',
      image: 'virgoBlocks.jpg',
      category: categories[5]._id,
      price: 12.99,
      quantity: 30
    },
    {
      name: 'Libra Scales Rattle',
      description: 'Safe and soothing Rattle shaped like Libra scales for playful Libra babies!',
      image: 'libraRattle.jpg',
      category: categories[6]._id,
      price: 9.99,
      quantity: 35
    },
    {
      name: 'Libra Paby Piano',
      description: 'a wonderful piano for all those musical Libra babies!',
      image: 'libraPiano.jpg',
      category: categories[6]._id,
      price: 12.99,
      quantity: 35
    },
    {
      name: 'Scorpio Scorpion Mobile',
      description: 'Whimsical mobile featuring scorpion designs for imaginative Scorpio babies!',
      image: 'scorpioMobile.jpg',
      category: categories[7]._id,
      price: 24.99,
      quantity: 15
    },
    {
      name: 'Scorpio Plush',
      description: 'a cute scorpio plush for those imaginative Scorpio babies!',
      image: 'scorpioPlush.jpg',
      category: categories[7]._id,
      price: 8.99,
      quantity: 40
    },
    {
      name: 'Sagittarius Adventure Onesie',
      description: 'Explore-themed onesie for adventurous Sagittarius babies!',
      image: 'sagittariusOnesie.jpg',
      category: categories[8]._id,
      price: 11.99,
      quantity: 45
    },
    {
      name: 'Sagittarius stacking cups',
      description: 'stacking cups for those studious Sagittarius babies!',
      image: 'sagittariusStackCups.jpg',
      category: categories[8]._id,
      price: 7.99,
      quantity: 45
    },
    {
      name: 'Capricorn Mountain Rattle',
      description: 'Mountain-shaped rattle to stimulate little Capricorn babies!',
      image: 'capricornRattle.jpg',
      category: categories[9]._id,
      price: 9.99,
      quantity: 40
    },
    {      
      name: 'Capricorn Power Ranger',
      description: 'The disciplined leader of the coding bootcamp, Capricorn Code Master Michael!',
      image: 'micheal.jpg',
      category: categories[9]._id,
      price: 19.99,
      quantity: 15 
    },
    {
      name: 'Aquarius Sippie Cup',
      description: 'Celestial-themed sippie with stars for dreamy Aquarius babies!',
      image: 'aquariusSippieCup.jpg',
      category: categories[10]._id,
      price: 6.99,
      quantity: 50
    },
    {
      name: 'Aquarius ABCs',
      description: 'Celestial-themed ABCs for those intellectual Aquarius babies!',
      image: 'aquariusABC.jpg',
      category: categories[10]._id,
      price: 10.99,
      quantity: 30
    },
    {
      name: 'Pisces Ocean Play Mat',
      description: 'Interactive play mat with ocean motifs for imaginative Pisces babies!',
      image: 'piscesMat.jpg',
      category: categories[11]._id,
      price: 29.99,
      quantity: 20
    },
    {
      name: 'Pisces Fish Puzzle',
      description: 'Interactive puzzle with fish and plants for those imaginative Pisces babies!',
      image: 'piscesPuzzle.jpg',
      category: categories[11]._id,
      price: 12.99,
      quantity: 20
    }
  ]);

  // test accounts for log in process
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