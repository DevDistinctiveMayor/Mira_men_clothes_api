const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

// Use CORS to allow cross-origin requests
app.use(cors());

// Serve static files from the "images" directory
app.use('/Men_images', express.static(path.join(__dirname, 'Men_images')));

// Serve the index.html file for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Sample data for men's clothing


const menClothing = [
  {
    id: 1,
    title: "Faded Blue Jeans",
    description: "Made of high quality. Perfect fashion jeans",
    price: '20.000',
    image: '/Men_images/1.png',
    rating: "5 (19)",
    Quantity: 12
  },
  {
    id: 2,
    title: 'Black Denim',
    description: 'Black Jeans Streetwear. A stylish denim for casual wear.',
    price: '17.000',
    image: '/Men_images/2.png',
    rating: "5 (17)",
    Quantity: 8
  },
  {
    id: 3,
    title: 'Design Shirt',
    description: 'Fit Fashion shirt. A light shirt for warm weather.',
    price: '16.000',
    image: '/Men_images/3.png',
    rating: "4 (11)",
    Quantity: 18
  },
  {
    id: 4,
    title: 'Short & Top',
    description: 'Fit Fashion. Fit for a casual.',
    price: '19.000',
    image: '/Men_images/4.png',
    rating: "5 (18)",
    Quantity: 11,
  },
  {
    id: 5,
    title: 'Short',
    description: 'Men short. Perfect for summer.',
    price: '10.000',
    image: '/Men_images/5.png',
    rating: "4 (23)",
    Quantity: 6
  },
  {
    id: 6,
    title: 'Blue Jean',
    description: 'Fit Fashion. Fit for a casua.',
    price: '18.000',
    image: '/Men_images/6.png',
    rating: "5 (18)",
    Quantity: 16,
  },
  {
    id: 7,
    title: 'Round Neck ',
    description: 'High Quality roundneck for Casual Dress.',
    price: '15.000',
    image: '/Men_images/7.png',
    rating: "4 (18)",
    Quantity: 11
  },
  {
    id: 8,
    title: 'Jean',
    description: 'Elegant Long jean.',
    price: '19.000',
    image: '/Men_images/8.png',
    rating: "5 (15)",
    Quantity: 6
  },
  {
    id: 9,
    title: 'Trend High Trouser & Shirt',
    description: 'Trend High Suits. A beautiful Dress perfect for night out.',
    price: '29.000',
    image: '/Men_images/9.png',
    rating: "5 (30)",
    Quantity: 9
  },
  {
    id: 10,
    title: 'Trend High Trouser & Shirt',
    description: 'A nice and airy for every weather.',
    price: '17.500',
    image: '/Men_images/10.png',
    rating: "5 (13)",
    Quantity: 11
  },
  {
    id: 11,
    title: 'Black Round-Neck',
    description: 'A Black Roundneck Outfits Streetwear.',
    price: '20.000',
    image: '/Men_images/11.png',
    rating: "5 (18)",
    Quantity: 8
  },
  {
    id: 12,
    title: 'High Quality Pant',
    description: 'High Quality designer pant for a night out.',
    price: '20.000',
    image: '/Men_images/12.png',
    rating: "5 (10)",
    Quantity: 9
  },
  {
    id: 13,
    title: 'Designer Singlet',
    description: 'Designer singlet for warm weather.',
    price:'12.000',
    image: '/Men_images/13.png',
    rating: "5 (15)",
    Quantity: 11
  },
  {
    id: 14,
    title: 'Plain Roundneck',
    description: 'Solid Shirt Casual Cotton Roundneck. A airy top for casual wear.',
    price: '15.600',
    image: '/Men_images/14.png',
    rating: "5 (10)",
    Quantity: 10
  },
  {
    id: 15,
    title: 'Casual trouser',
    description: 'Solid Casual Trouser. A Top Fashion for casual wear.',
    price: '16.600',
    image: '/Men_images/15.png',
    rating: "5 (15)",
    Quantity: 10
  },
  {
    id: 16,
    title: 'Faded color Jeans',
    description: "High Quality design faded jeans for outing.",
    price: '18.000',
    image: '/Men_images/17.png',
    rating: "4 (13)",
    Quantity: 11
  },
  {
    id: 17,
    title: 'Up and Down short',
    description: 'A nice fashion perfect for summer.',
    price: '19.000',
    image: '/Men_images/19.png',
    rating: "4 (23)",
    Quantity: 6
  },
  {
    id: 18,
    title: 'Jacket with Roundneck',
    description: "Pockets Streetwear Loose Fashion. A stylish denim jacket for casual wear.",
    price: '25.000',
    image: '/Men_images/20.png',
    rating: "5 (13)",
    Quantity: 9
  },

];



// Endpoint to get women's clothing
app.get('/api/men-clothing', (req, res) => {
  res.json(menClothing);
});




// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
