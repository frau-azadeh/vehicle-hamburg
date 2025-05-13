import type { NextApiRequest, NextApiResponse } from 'next';
import vehicles from '../../src/data/vehicles.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(vehicles);
}
