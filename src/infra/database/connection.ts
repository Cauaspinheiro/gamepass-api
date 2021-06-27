import { Db, MongoClient, MongoClientOptions } from 'mongodb'

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

let cachedDb: Db

export default async function connectToDatabase(): Promise<Db> {
  if (cachedDb) return cachedDb

  const opts: MongoClientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  const client = await MongoClient.connect(MONGODB_URI as string, opts)

  cachedDb = client.db(MONGODB_DB)

  return cachedDb
}
