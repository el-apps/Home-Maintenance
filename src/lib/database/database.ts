import { Asset } from '$lib/types/asset'
import { AssetDetails } from '$lib/types/asset-details'


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
    let list = []
    for (let i = 1; i < 3; ++i) {
      list.push(this.getAsset(i))
    }
    return list
  }

  getAsset(id: any): Asset {
    if (isNaN(Number(id)))
      return new Asset()
    return {
      id: id,
      name: `Vehicle ${id}`,
      description: `This is a fast vehicle ${id}`
    }
  }

  getAssetDetails(id: any): AssetDetails {
    if (isNaN(Number(id)))
      return new AssetDetails()
    return {
      manufacturer: "Fast Company",
      model: "Speedster"
    }
  }
}

export var database = Database.instance()
