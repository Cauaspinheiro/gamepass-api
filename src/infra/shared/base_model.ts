import { ObjectId } from 'mongodb'

export default class BaseModel {
  static toId(id: string): ObjectId {
    return new ObjectId(id)
  }
}
