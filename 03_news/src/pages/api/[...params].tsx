import { NextApiRequest, NextApiResponse } from "next";

export default function qualquernome(request: NextApiRequest, response: NextApiResponse) {
  const users = [
    {id: 1, name: 'Eduardo'},
    {id: 2, name: 'Gouvea'},
    {id: 3, name:  'Lopes'},
  ]

  return response.json(users);
}