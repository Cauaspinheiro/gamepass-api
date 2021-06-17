import { MongoClient, MongoClientOptions } from 'mongodb'

const { MONGODB_URI, MONGODB_DB } = process.env

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

let cachedClient: MongoClient

export async function connectToDatabase(): Promise<MongoClient> {
  if (cachedClient) return cachedClient

  const opts: MongoClientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  cachedClient = await MongoClient.connect(MONGODB_URI, opts)

  return cachedClient
}
