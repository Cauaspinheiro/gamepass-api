import { connectToDatabase } from '../../database/connection'

export default (req, res) => {
  connectToDatabase()

  return res.json('hello')
}
