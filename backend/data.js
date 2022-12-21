import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'avi',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'avyukth',
      email: 'a@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'baby frock',
      slug: 'baby-frock',
      category: 'frocks',
      image: '/images/img1.jpg', // 679px × 829px
      price: 120,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '2',
      name: 'white floral print frock',
      slug: 'white-floral-print-frock',
      category: 'frocks',
      image: '/images/img2.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '3',
      name: 'full white frock',
      slug: 'full-white-frock',
      category: 'frocks',
      image: '/images/img3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'green jacket',
      slug: 'green-jacket',
      category: 'jackets',
      image: '/images/img5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
