import { NextApiRequest, NextApiResponse } from 'next';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a product description.',
    price: 25.99,
    stock: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is another product description.',
    price: 15.99,
    stock: 50,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Yet another product description.',
    price: 5.99,
    stock: 200,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(products);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}