import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const orders = [
    { id: 1, product: 'Product 1', quantity: 2, total: 59.98 },
    { id: 2, product: 'Product 2', quantity: 1, total: 19.99 }
  ];
  res.status(200).json(orders);
}