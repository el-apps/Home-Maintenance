import { Asset } from "$lib/types/asset";
import { AssetDetails } from "$lib/types/asset-details";
import { AssetPart } from "$lib/types/asset-part";

class Database {
  private static _instance: Database;

  private constructor() {}

  static instance() {
    if (!this._instance) {
      this._instance = new this();
    }
    return this._instance;
  }

  getAssets(): Asset[] {
    let list = [];
    for (let i = 1; i < 3; ++i) {
      list.push(this.getAsset(i));
    }
    return list;
  }

  getAsset(id: any): Asset {
    if (isNaN(Number(id))) return new Asset();
    return {
      id: id,
      name: `Vehicle ${id}`,
      description: `This is a fast vehicle ${id}`,
    };
  }

  getAssetDetails(id: any): AssetDetails {
    if (isNaN(Number(id))) return new AssetDetails();
    return {
      id: id,
      manufacturer: "Fast Company",
      model: "Speedster",
    };
  }

  getParts(assetId: any): AssetPart[] {
    
    let list = [];
    for (let i = 1; i < 3; ++i) {
      list.push({
        id: i,
        name: `Part ${i}`,
        description: `Part ${i} is an asset to this asset`
      });
    }
    return list;
  }

  getPart(assetId: any): AssetPart[] {
    
    let list = [];
    for (let i = 1; i < 3; ++i) {
      list.push(this.getAsset(i));
    }
    return list;
  }
}

export var database = Database.instance();
