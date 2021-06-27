import { ObjectId } from 'mongodb'

export default abstract class BaseModel {
  static toId(id: string): ObjectId {
    return new ObjectId(id)
  }
}
