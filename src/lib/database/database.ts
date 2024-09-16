import { Asset } from '$lib/components/types/asset'


class Database {
  private static _instance: Database

  private constructor() {}

  static instance() {
    if (!this._instance) {
      this._instance = new this()
    }
    return this._instance
  }

  getAssets(): Asset[] {
    return [
      {
        id: 1,
        name: "test1",
        description: "This is a test 1"
      },
      {
        id: 2,
        name: "test2",
        description: "This is a test 2"
      }
    ]
  }
}

export var database = Database.instance()
